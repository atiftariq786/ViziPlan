import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import API from "../../services/utils/API";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import LoginError from "../../components/Modal/LoginError/LoginError";
import Spinner from "../../components/UI/Spinner/Spinner";
import Styles from "./Login.module.css";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userEmail, seteUserEmail] = useState();
  const [password, setPassword] = useState();
  const [isValidLoginForm, setIsValidLoginForm] = useState(true);
  const [loginError, setLoginError] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //============================================Handler Functions===============================================

  const userEmailHandler = (event) => {
    seteUserEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const hideLoginErrorHandler = () => {
    setModalShow(false);
  };

  const loginHandler = () => {
    if (userEmail === "") {
      setIsValidLoginForm(false);
    }
    if (password === "") {
      setIsValidLoginForm(false);
    }
    const data = {
      email: userEmail,
      password,
    };
    if (userEmail && password) {
      setIsLoading(true);

      API.userLogin(data)
        .then((response) => {
          let userEmailId = response.data.firstname;
          console.log(response, " get login username");
          if (response.data.success) {
            dispatch(
              authActions.userLogin({
                isSignedin: true,
                loggedInUsername: userEmailId,
              })
            );
            history.push("/visionboard");
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log({ err }, "Login testing error");
          if (!err.response.data.success) {
            setLoginError(true);
            setModalShow(true);
            setIsLoading(false);
          }
        });
      seteUserEmail("");
      setPassword("");
    } else {
      console.log("Please fill this form....!");
    }
  };
  //============================================Conditional Style===============================================

  let emailErr = "";
  let passwordErr = "";

  let emailErrorIcon = "";
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

  if (loginError) {
    loginErrorMessage = (
      <LoginError show={modalShow} onHide={hideLoginErrorHandler} />
    );
  }
  if (isLoading) {
    loginButton = <Spinner />;
  }
  //Check Email validation
  let emailPattern = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(
    userEmail
  );
  let isValidEmail = [Styles.inputField];

  if (emailPattern) {
    isValidEmail.push(Styles.validLogin);
    emailErrorIcon = (
      <FontAwesomeIcon
        className={Styles.checkCircle}
        icon={faCheckCircle}
        size="1x"
      />
    );
  }
  if (!emailPattern && userEmail !== "") {
    emailErr = (
      <p className={Styles.usernameEror}>Please write corrrect email address</p>
    );
    emailErrorIcon = (
      <FontAwesomeIcon
        className={Styles.exTrianle}
        icon={faExclamationTriangle}
        size="1x"
      />
    );

    isValidEmail.push(Styles.invalidLogin);
  }
  //Check password validation
  //Minimum eight characters, at least one letter and one number
  let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  let isValidPassword = [Styles.inputField];

  if (passwordPattern) {
    isValidPassword.push(Styles.validLogin);
    passwordErrorIcon = (
      <FontAwesomeIcon
        className={Styles.checkCircle}
        icon={faCheckCircle}
        size="1x"
      />
    );
  }
  if (!passwordPattern && password !== "") {
    passwordErr = (
      <p className={Styles.usernameEror}>
        Please write password minimum eight characters, at least one letter and
        one number
      </p>
    );
    passwordErrorIcon = (
      <FontAwesomeIcon
        className={Styles.exTrianle}
        icon={faExclamationTriangle}
        size="1x"
      />
    );
    isValidPassword.push(Styles.invalidLogin);
  }
  const formValidation = () => {
    if (userEmail === "") {
      emailErr = (
        <p className={Styles.usernameEror}>
          Please write username at least 3 characters
        </p>
      );
      emailErrorIcon = (
        <FontAwesomeIcon
          className={Styles.exTrianle}
          icon={faExclamationTriangle}
          size="1x"
        />
      );
      isValidEmail.push(Styles.invalidLogin);
    }
    if (password === "") {
      passwordErr = (
        <p className={Styles.usernameEror}>
          Please write password minimum eight characters, at least one letter
          and one number
        </p>
      );
      passwordErrorIcon = (
        <FontAwesomeIcon
          className={Styles.exTrianle}
          icon={faExclamationTriangle}
          size="1x"
        />
      );
      isValidPassword.push(Styles.invalidLogin);
    }
  };
  //check form validation and password match
  if (!isValidLoginForm) {
    formValidation();
  }

  return (
    <div>
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
            className={isValidEmail.join(" ")}
            type="email"
            placeholder="example@gmail.com"
            value={userEmail}
            onChange={userEmailHandler}
            onKeyUp={userEmailHandler}
          ></input>
          {emailErrorIcon}
          {emailErr}

          <input
            className={isValidPassword.join(" ")}
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
              <NavLink to="/signUp/" className={Styles.signupButton}>
                Sign Up
              </NavLink>
            }
          </p>
          <NavLink to="/" className={Styles.backButton}>
            back
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
