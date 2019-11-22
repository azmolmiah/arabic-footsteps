import React, { useState } from "react";

// Material UI resources
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
  button: {
    width: "100%"
  },
  root: {
    padding: "5%"
  },
  textField: {
    width: "100%"
  },
  submitBtn: {
    width: "100%"
  },
  btnsContainer: {
    margin: "1rem 0"
  }
}));

const Bookings = () => {
  const classes = useStyles();
  // State
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [specifiedTimes, setSpecifiedTimes] = useState({});

  // functions
  const onBtnClick = e => {
    setTime(e.target.innerText);
  };

  let quarterHours = ["00", "15", "30", "45"];
  let times = [];
  for (let i = 17; i < 23; i++) {
    for (let j = 0; j < 4; j++) {
      let time = i + ":" + quarterHours[j];
      if (i < 10) {
        time = "0" + time;
      }
      times.push(time);
    }
  }

  return (
    <Container className={classes.root} maxWidth="md">
      <form>
        <TextField
          type="text"
          name="name"
          label="Name"
          className={classes.textField}
        />

        <TextField
          type="email"
          name="email"
          label="Email"
          className={classes.textField}
        />

        <Divider />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.btnsContainer}
        >
          {times.map((individualTime, index) => {
            return (
              <Grid item lg={4} xs={4} key={index}>
                <Button
                  variant="outlined"
                  color="default"
                  className={classes.button}
                  onClick={onBtnClick}
                >
                  {individualTime}
                </Button>
              </Grid>
            );
          })}
        </Grid>

        <Button type="submit" variant="contained" className={classes.submitBtn}>
          Book
        </Button>
      </form>
    </Container>
  );
};

export default Bookings;
