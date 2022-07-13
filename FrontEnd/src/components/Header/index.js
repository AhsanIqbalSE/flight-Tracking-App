import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const classes = useStyles();
  const navigation = useNavigate();

  const backHome = () => {
    navigation('/')
  };
  return (
    <div className={classes.root}>
      <AppBar style={{ background: "#36454F" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Flight Tracking Application
          </Typography>
          <Button onClick={backHome} color="inherit">
            Search Flight
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
