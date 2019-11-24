import React from "react";

// Material UI resources
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

// Custom hooks
import bookings from "./BookingsFormValidation";
import validateAuth from "./validateAuth";

const useStyles = makeStyles(() => ({
  button: {
    width: "100%"
  },
  root: {
    padding: "5% 0"
  },
  textField: {
    width: "100%"
  },
  submitBtn: {
    width: "100%"
  },
  btnsContainer: {
    marginBottom: "1rem"
  },
  formControl: {
    marginTop: "1rem",
    width: "100%"
  }
}));

const initialState = {
  name: "",
  email: "",
  date: ""
};

const BookingsForm = () => {
  const classes = useStyles();

  const {
    ranges,
    newDate,

    onSubmit,
    handleChange,
    values,

    errors,
    isSubmitting,
    success,
    open,
    handleClose
  } = bookings(initialState, validateAuth);

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        {success && open && (
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={
              <span id="message-id">
                Please wait for an email confirmation with the next steps.
              </span>
            }
            action={[
              <IconButton
                key="close"
                aria-label="close"
                color="inherit"
                className={classes.close}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            ]}
          />
        )}
        <p>Selection based upon a 12 week term.</p>
        <form onSubmit={onSubmit}>
          <TextField
            type="text"
            name="name"
            label="Name"
            className={classes.textField}
            onChange={handleChange}
            value={values.name}
            helperText={errors.name && errors.name}
          />

          <TextField
            type="email"
            name="email"
            label="Email"
            className={classes.textField}
            onChange={handleChange}
            value={values.email}
            helperText={errors.email && errors.email}
          />

          <Divider />
          <FormGroup row>
            {ranges.map((range, index) => {
              const fullRange = `${range.date
                .split("/")
                .reverse()
                .join("/")} - ${newDate(range.date)}`;
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox onChange={handleChange} value={fullRange} />
                  }
                  label={fullRange}
                  name="date"
                />
              );
            })}
          </FormGroup>
          <p className="MuiFormHelperText-root">{errors.date && errors.date}</p>

          <Button
            type="submit"
            variant="contained"
            className={classes.submitBtn}
            disabled={isSubmitting}
          >
            Book
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default BookingsForm;
