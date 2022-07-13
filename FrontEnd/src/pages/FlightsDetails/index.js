import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import HeaderComponent from "../../components/Header";
import TableComponent from "../../components/TableComponent";

const FlightDetails = (props) => {
  const classes = useStyles();
  const flightDetails = useSelector((state) => state.flightDetails);
  const [columnName, setColumnName] = useState([
    "Flight Number",
    "Flight  Departure",
    "Flight  Arrival",
    "Flight Status",
    "Flight Availablity",
    "Flight Progress",
    "Actions",
    "Airport",
  ]);

  return (
    <div className={classes.main}>
      <h2>Upcoming Flights</h2>
      <HeaderComponent />
      <div className={classes.headingCont}>
        <h2 className={classes.heading}>Your Flight Information</h2>
      </div>
      <div className={classes.tblCont}>
        <TableComponent
          columnName={columnName}
          data={flightDetails.flightDetails.flights}
        />
      </div>
    </div>
  );
};

export default FlightDetails;

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    marginBottom: 40,
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
  tblCont: {
    width: "90%",
  },
}));
