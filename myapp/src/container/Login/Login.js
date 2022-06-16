import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
//import ButtonToolbar from "react-bootstrap/ButtonToolbar";
//import API from "../../../utils/API";
//import LoginError from "../../Modals/LoginError/loginError";

import Styles from "./Login.module.css";

const Login = () => {
  const [userName, setUserame] = useState("alex777");
  const [password, setPassword] = useState("Asialink777");
  const [isValidLoginForm, setIsValidLoginForm] = useState(true);

  console.log(isValidLoginForm);

  const usernameHandler = (event) => {
    setUserame(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = () => {
    if (userName === "alex777") {
      setIsValidLoginForm(true);
    }
    if (password === "Asialink777") {
      this.setState({
        isValidLoginForm: true,
      });
    }
  };

  // if (username && password) {

  //  // this.props.history.push("/create-story/");
  //   //this.props.updateSignedInState("true", this.username);
  // }

  let userErr = "";
  let passwordErr = "";

  let userErrorIcon = "";
  let passwordErrorIcon = "";

  let loginErrorMessage = "";

  let loginButton = (
    <Button
      className={Styles.loginButton}
      variant="success"
      type="button"
      onClick={loginHandler}
      size="sm"
    >
      Login
    </Button>
  );

  // if (loginError) {
  //   loginErrorMessage = <ButtonToolbar></ButtonToolbar>;
  // }

  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.loginImage}>
        <img
          style={{ width: "100%", height: "100vh" }}
          src={require("../../assets/images/loginPage.jpg")}
          alt="Login Page"
        ></img>
      </div>

      <div className={Styles.loginFormMainDiv}>
        <h2 className={Styles.loginTitle}>Login</h2>
        {loginErrorMessage}
        <form className={Styles.formDiv}>
          <input
            // className={isValidUsername.join(" ")}
            type="text"
            placeholder="Username"
            value={userName}
            onChange={usernameHandler}
          ></input>
          {userErrorIcon}
          {userErr}

          <input
            // className={isValidPassword.join(" ")}
            type="password"
            placeholder="Password"
            value={password}
            onChange={passwordHandler}
          ></input>
          {passwordErrorIcon}
          {passwordErr}

          {loginButton}
          <p className={Styles.signupText}>
            Don't have an account?{" "}
            {
              <Link to="/signUp/" className={Styles.signupButton}>
                Sign Up
              </Link>
            }
          </p>
          <Link to="/" className={Styles.backButton}>
            back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
