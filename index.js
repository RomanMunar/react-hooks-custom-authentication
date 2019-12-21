import React from "react";
import ReactDOM from "react-dom";
import useFormValidation from "./useFormValidation"
import validateAuth from "./validateAuth"
import "./styles.css";

const initialstate= {
  email:'',
  password:''
}
function Register(props) {
  
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(initialstate, validateAuth);

  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  return (
    <div className="container">
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          onBlur = {handleBlur}
          name="email"
          value={values.email}
          autoComplete="off"
          placeholder="Your email address"
          className = {errors.email && "error-input"}
        />
        {errors.email && <p className="error-text"> {errors.email} </p>}
        <input
          onChange={handleChange}
          onBlur = {handleBlur}
          name="password"
          type="password"
          value={values.password}
          placeholder="Choose a safe password"
          className = {errors.password && "error-input"}
        />
        {errors.password && <p className="error-text"> {errors.password} </p>}
        <div>
          <button disabled={isSubmitting} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Register />, rootElement);
