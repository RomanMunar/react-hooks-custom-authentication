import React from "react";

function useFormValidation(initialstate, validate) {
  const [values, setValues] = React.useState(initialstate);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  React.useEffect( () => {
    if(isSubmitting){
      const noErrors = Object.keys(errors).length ===0;
      if (noErrors) {
        console.log("authenticated!", values.email, values.password);
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  },[errors]);

  function handleChange(e){
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsSubmitting(true);
  }

  function handleBlur(e){
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  }
}

export default useFormValidation;
