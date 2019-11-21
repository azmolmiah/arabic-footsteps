import React, { useState, useEffect } from "react";
import useForm from "react-hook-form";
import TopPageHeader from "../layout/TopPageHeader";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    width: "100%"
  },
  txtField: {
    width: "100%"
  }
}));

const ContactPage = () => {
  const classes = useStyles();
  const { register, handleSubmit, setValue, errors } = useForm();
  const [errMsg, setErrMsg] = useState("");

  const onSubmit = data => {
    console.log(data);
  };

  const onChange = e => {
    setValue([e.target.name], e.target.value);
    setValue("message", e.target.value);
  };

  useEffect(() => {
    register({
      name: "name",
      required: true,
      pattern: /^[A-Za-z]+$/i,
      minLength: 2
    });
    register({
      name: "email",
      required: true,
      pattern: /(.+)@(.+){2,}\.(.+){2,}/
    });
    register({ name: "message", required: true });
  }, [register]);

  return (
    <div>
      <TopPageHeader text="Contact Us" />
      <Container maxWidth="md">
        <Box py={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              name="name"
              label="Name"
              className={classes.txtField}
              helpertext={errMsg}
              onChange={onChange}
            />
            {errors.name &&
              errors.name.type === "minLength" &&
              setErrMsg("This field is required")}
            <TextField
              name="email"
              label="Email"
              className={classes.txtField}
              helpertext={errMsg}
              onChange={onChange}
            />
            {errors.email && setErrMsg("This field is required")}
            <Box mt={2} mb={1} mr={1}>
              <TextareaAutosize
                type="text"
                aria-label="empty textarea"
                placeholder="Message"
                name="message"
                rows={3}
                style={{ width: "100%" }}
                helpertext={errMsg}
                onChange={onChange}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              className={classes.button}
            >
              Send
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default ContactPage;
