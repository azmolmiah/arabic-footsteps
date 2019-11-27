import React, { Fragment } from "react";

// Material UI resources
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

// Custom hooks
import useFormValidation from "./useFormValidation";
import validateAuth from "./validateAuth";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  },
  success: {
    backgroundColor: "#43a047"
  },
  button: {
    width: "100%"
  },
  textField: {
    width: "100%"
  }
}));

const initialState = {
  name: "",
  email: "",
  message: ""
};

const ContactForm = () => {
  const classes = useStyles();

  const {
    onSubmit,
    handleChange,
    values,
    onBlur,
    errors,
    isSubmitting,
    success,
    open,
    handleClose
  } = useFormValidation(initialState, validateAuth);

  return (
    <Fragment>
      <Container maxWidth="md">
        <Box py={4}>
          {success && open && (
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message={<span id="message-id">Message Sent</span>}
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
          <p>Please submit below if further information required.</p>
          <form onSubmit={onSubmit} name="contact" action='/' data-netlify='true'>
            <TextField
              type="text"
              name="name"
              label="Name"
              className={classes.textField}
              onChange={handleChange}
              value={values.name}
              onBlur={onBlur}
              helperText={errors.name && errors.name}
            />

            <TextField
              type="email"
              name="email"
              label="Email"
              className={classes.textField}
              onChange={handleChange}
              value={values.email}
              onBlur={onBlur}
              helperText={errors.email && errors.email}
            />

            <Box mt={2} mb={1} mr={1}>
              <TextareaAutosize
                type="text"
                placeholder="Message"
                name="message"
                rows={3}
                style={{ width: "100%" }}
                onChange={handleChange}
                value={values.message}
                onBlur={onBlur}
              />
            </Box>

            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              className={classes.button}
            >
              Send
            </Button>
          </form>
        </Box>
      </Container>
    </Fragment>
  );
};

export default ContactForm;
