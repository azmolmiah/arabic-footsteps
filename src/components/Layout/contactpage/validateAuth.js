const validateAuth = values => {
  const errors = {};
  //Email errors
  if (!values.email) {
    errors.email = "Required Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  //Name errors
  if (!values.name) {
    errors.name = "Required Name";
  } else if (values.name.length < 2) {
    errors.name = "Name must be more than 2 characters";
  }
  //   Message errors
  if (!values.message) {
    errors.message = "Required Message";
  }
  return errors;
};

export default validateAuth;
