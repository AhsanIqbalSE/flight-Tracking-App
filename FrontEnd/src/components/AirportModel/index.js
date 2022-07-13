import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

import OutlinedInput from "../OutlinedInput";

export default function AirportModelComp(props) {
  const classes = useStyles();
  const { isOpen, onClick, title, departure, arrival } = props;

  return (
    <div>
      <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <div className={classes.inputContainer}>
          <OutlinedInput value={arrival} label={"Arrival Airport"} />
        </div>
        <div className={classes.inputContainer}>
          <OutlinedInput value={departure} label={"Departure Airport"} />
        </div>
        <DialogActions>
          <Button onClick={onClick} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles({
  inputContainer: {
    padding: 20,
  },
});
