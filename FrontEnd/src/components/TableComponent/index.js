import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ButtonComp from "../Button";
import AirportModelComp from "../AirportModel";
import api from "../../api";
import MapModelComp from "../MapModel";

export default function TableComponent(props) {
  const classes = useStyles();
  const { data, columnName } = props;
  const [isModelOpen, setModelOpen] = useState(false);
  const [isMapModelOpen, setMapModel] = useState(false);
  const [airport, setAirport] = useState({});
  const [map, setMap] = useState({});

  const findIsUpcomming = (dateParam) => {
    const date = new Date().toISOString();

    if (date > dateParam) {
      return false;
    }
    if (date < dateParam) {
      return true;
    }
  };

  const handleAirPortBtn = async (item) => {
    try {
      const responseArrival = await api.getAirPort({
        airportId: item.origin.code,
      });
      const responseDepart = await api.getAirPort({
        airportId: item.destination.code,
      });

      airport.arrival = responseArrival.name;
      airport.depart = responseDepart.name;

      setModelOpen(true);
    } catch (e) {
      console.log(e);

      airport.arrival = "-";
      airport.depart = "-";

      setModelOpen(true);
    }
  };

  const handleTrackBtn = async (item) => {
    try {
      const response = await api.trackFlight({ id: item.fa_flight_id });
      console.log(response);
      const lastIndex = response.positions.length - 1;

      map.longitude = response.positions[lastIndex].longitude;
      map.lattitude = response.positions[lastIndex].latitude;

      setMapModel(true);
    } catch (e) {
      console.log(e);

      map.longitude = "-";
      map.lattitude = "-";

      setMapModel(true);
    }
  };

  const handleBookBtn = (item) => {
    const date = item.scheduled_off;
    const splittedDateFromT = date.split("T");
    const splittedDateFromDash = splittedDateFromT[0].split("-");
    const splittedTimeFromColon = splittedDateFromT[1].split(":");
    const url =
      "https://flightaware.com/live/flight/" +
      item.ident +
      "/history/" +
      splittedDateFromDash[0] +
      splittedDateFromDash[1] +
      splittedDateFromDash[2] +
      "/" +
      splittedTimeFromColon[0] +
      splittedTimeFromColon[1] +
      "/" +
      item.origin.code +
      "/" +
      item.destination.code;

    window.location = url;
  };

  const handleModelClose = () => {
    setModelOpen(false);
  };

  const handleMapModelClose = () => {
    setMapModel(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columnName &&
              columnName.map((item) => (
                <StyledTableCell>{item}</StyledTableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.ident}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.scheduled_out}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.scheduled_in}
                </StyledTableCell>
                <StyledTableCell align="left">{row.status}</StyledTableCell>
                <StyledTableCell align="left">
                  {findIsUpcomming(row.scheduled_out)
                    ? "Upcomming Flight"
                    : "Past Flight"}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.progress_percent}
                </StyledTableCell>

                {!findIsUpcomming(row.scheduled_out) && (
                  <StyledTableCell align="left">
                    <ButtonComp
                      style={{ background: "#36454F", color: "white" }}
                      onClick={(e) => handleTrackBtn(row)}
                      label={"Track"}
                    />
                  </StyledTableCell>
                )}
                {findIsUpcomming(row.scheduled_out) && (
                  <StyledTableCell align="left">
                    <ButtonComp
                      style={{ background: "#36454F", color: "white" }}
                      onClick={(e) => handleBookBtn(row)}
                      label={"Book"}
                    />
                  </StyledTableCell>
                )}
                <StyledTableCell align="left">
                  <ButtonComp
                    style={{ background: "#36454F", color: "white" }}
                    label={"Airport"}
                    onClick={(e) => handleAirPortBtn(row)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>

      <AirportModelComp
        arrival={airport.arrival}
        departure={airport.depart}
        onClick={handleModelClose}
        isOpen={isModelOpen}
      />

      <MapModelComp
        lattitude={map.lattitude}
        longitude={map.longitude}
        onClick={handleMapModelClose}
        isOpen={isMapModelOpen}
      />
    </TableContainer>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "black",
    color: theme.palette.common.white,
    textAlign: "start",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
