import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HeaderComponent from "../../components/Header";
import OutlinedInput from "../../components/OutlinedInput";
import Button from "../../components/Button";
import ProgressLoader from "../../components/ProgressLoader";
import api from "../../api";
import searchAction from "../../redux/searches/action";
import flightDetailsAction from "../../redux/flightDetails/action";
import CardComp from "../../components/RecentCard";

const Home = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const { setSearches } = searchAction;
  const { setFlightDetails } = flightDetailsAction;
  const searches = useSelector((state) => state.searches);

  const getFlightinfo = async () => {
    try {
      setLoading(true);

      if (!data.flightId) {
        throw new Error("Please enter required field");
      }

      const param = {
        ident: data.flightId,
      };
      const response = await api.getFlightInformation(param);

      dispatch(setSearches(data.flightId));
      dispatch(setFlightDetails(response));

      setLoading(false);
      navigate("flightDetails");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
      setLoading(false);
    }
  };

  const handleInputChange = (e, label) => {
    setData({
      [label]: e.target.value,
    });
  };

  return (
    <div className={classes.main}>
      <h1>Home page</h1>
      <HeaderComponent />
      <div className={classes.headingCont}>
        <h2 className={classes.heading}>
          Enter flight number or id to track it.
        </h2>
      </div>
      <div className={classes.inputContainer}>
        <OutlinedInput
          onChange={(e) => handleInputChange(e, "flightId")}
          className={classes.input}
          label={"Please enter here"}
        />
      </div>
      <div className={classes.btnContainer}>
        <Button
          style={{ background: "#36454F", color: "white" }}
          onClick={getFlightinfo}
          label={"Search flight"}
        ></Button>
      </div>
      {loading && (
        <div className={classes.progressLoader}>
          <ProgressLoader />
        </div>
      )}
      <div className={classes.cardCont}>
        {searches &&
          searches.searches &&
          searches.searches.map((item) => (
            <div className={classes.comp}>
              <CardComp flightNumber={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  },
  inputContainer: {
    marginTop: 20,
    width: "60%",
  },
  btnContainer: {
    marginTop: 30,
  },
  progressLoader: {
    marginTop: 30,
  },
  btn: {
    background: "red",
  },
  cardCont: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  comp: {
    marginLeft: 20,
    marginTop: 20,
  },
}));
