import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function CardComp(props) {
  const classes = useStyles();

  const { flightNumber } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
          Recent Searched Flight
        </Typography>
        <Typography variant="h5" component="h2">
          {flightNumber}
        </Typography>
      </CardContent>
        {/* <ButtonComp
          style={{ background: "#36454F", color: "white" }}
          label={"Track"}
          onClick={onClick}
        ></ButtonComp> */}
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
