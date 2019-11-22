import { useState, useEffect } from "react";

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log(
          `Authenticated: ${values.name}, ${values.email}, ${values.message}`
        );
        setSuccess(true);
        setOpen(true);
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors, isSubmitting, values.email, values.message, values.name]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const onBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const onSubmit = e => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  };

  return {
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

export default useFormValidation;
