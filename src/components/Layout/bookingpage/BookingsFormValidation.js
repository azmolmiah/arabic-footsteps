import { useState, useEffect } from "react";

const Bookings = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [ranges, setRanges] = useState([
    {
      date: "2019/11/22"
    },
    {
      date: "2020/03/24"
    },

    {
      date: "2020/06/20"
    },
    {
      date: "2019/11/22"
    },
    {
      date: "2020/03/24"
    },
    {
      date: "2020/06/20"
    }
  ]);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log(
          `Authenticated: ${values.name}, ${values.email}, ${values.date}`
        );
        setSuccess(true);
        setOpen(true);
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors, isSubmitting, values.email, values.date, values.name]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const onBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const onSubmit = e => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "bookings", ...values })
    // })
    //   .then(() => console.log("Success!"))
    //   .catch(error => console.log(error));
  };

  const newDate = date => {
    return new Date(
      new Date(date).setDate(new Date().getDate() + 12 * 7)
    ).toLocaleDateString();
  };

  return {
    ranges,
    newDate,
    onSubmit,
    handleChange,
    values,
    onBlur,
    errors,
    isSubmitting,
    success,
    open,
    handleClose
  };
};

export default Bookings;
