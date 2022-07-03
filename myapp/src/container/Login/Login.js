import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
//import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import API from "../../services/utils/API";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
//import LoginError from "../../Modals/LoginError/loginError";

import Styles from "./Login.module.css";

const Login = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("qq@gmail.com");
  const [password, setPassword] = useState("password");
  const [isValidLoginForm, setIsValidLoginForm] = useState(true);

  console.log(isValidLoginForm);

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = () => {
    if (username && password) {
      const data = {
        email: username,
        password,
      };

      API.userLogin(data)
        .then((response) => {
          let username = response.data.email;
          console.log(response, " get login username");
          if (response.data.success) {
            dispatch(
              authActions.userLogin({
                isSignedin: "true",
                loggedInUsername: username,
              })
            );
            props.history.push("/visionboard");
          }
        })
        .catch((err) => {
          console.log({ err });
        });
    } else {
      console.log("Please fill this form....!");
    }
  };

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
            placeholder="qq@gmail.com"
            value={username}
            onChange={usernameHandler}
          ></input>
          {userErrorIcon}
          {userErr}

          <input
            // className={isValidPassword.join(" ")}
            type="password"
            placeholder="password"
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
          <Link to="/home" className={Styles.backButton}>
            back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
