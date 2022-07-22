import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import API from "../../services/utils/API";
import Spinner from "../../components/UI/Spinner/Spinner";

import Styles from "./Signup.module.css";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

const Signup = (props) => {
  const dispatch = useDispatch();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isValidSignUpForm, setIsValidSignUpForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  //============================================Handler Functions===============================================
  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const signUpHandler = () => {
    if (firstname === "") {
      setIsValidSignUpForm(false);
    }
    if (lastname === "") {
      setIsValidSignUpForm(false);
    }
    if (email === "") {
      setIsValidSignUpForm(false);
    }
    if (password === "") {
      setIsValidSignUpForm(false);
    }
    if (confirmPassword === "") {
      setIsValidSignUpForm(false);
    }
    if (email && password && email) {
      if (password === confirmPassword) {
        const data = {
          firstname,
          lastname,
          email,
          password,
        };
        setIsLoading(true);

        API.userSignUp(data).then((response) => {
          console.log(response, "SignUp response");

          if (response.data.success) {
            props.history.push("/visionboard");
            setIsLoading(false);
            dispatch(
              authActions.userLogin({
                isSignedin: true,
                loggedInUsername: email,
              })
            );
          }
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        console.log("Make sure your password match");
        setIsPasswordMatch(false);
      }
    } else {
      console.log("Please fill all the field");
    }
  };
  //============================================Conditional Style===============================================
  let firstNameErr = "";
  let lastNameErr = "";
  let emailErr = "";
  let passwordErr = "";
  let confirmPasswordErr = "";

  let firstNameErrorIcon = "";
  let lastNameErrorIcon = "";
  let emailErrorIcon = "";
  let passwordErrorIcon = "";
  let confirmPasswordErrorIcon = "";

  let signUpButton = (
    <Button
      className={Styles.signupButton}
      variant="success"
      type="button"
      onClick={signUpHandler}
      size="sm"
    >
      Join
    </Button>
  );
  if (isLoading) {
    signUpButton = <Spinner></Spinner>;
  }
  //Check firstname validation
  //Match characters and symbols in the list, a-z, 0-9, underscore, hyphen
  //Length at least 3 characters and maximum length of 15
  let firstNamePattern = /^[A-Za-z]{3,15}$/.test(firstname);
  let isValidFirstName = [Styles.inputDiv];

  if (firstNamePattern) {
    isValidFirstName.push(Styles.validInput);
    firstNameErrorIcon = (
      <FontAwesomeIcon
        className={Styles.checkCircle}
        icon={faCheckCircle}
        size="1x"
      />
    );
  }

  if (!firstNamePattern && firstname !== "") {
    firstNameErr = (
      <p className={Styles.usernameEror}>
        Please write firstname at least 3 characters and not more than 15.
      </p>
    );
    firstNameErrorIcon = (
      <FontAwesomeIcon
        className={Styles.exTrianle}
        icon={faExclamationTriangle}
        size="1x"
      />
    );
    isValidFirstName.push(Styles.invalidInput);
  }
  //Check lastname validation
  //Match characters and symbols in the list, a-z, 0-9, underscore, hyphen
  //Length at least 3 characters and maximum length of 15
  let lastNamePattern = /^[A-Za-z]{3,15}$/.test(lastname);
  let isValidLastName = [Styles.inputDiv];

  if (lastNamePattern) {
    isValidLastName.push(Styles.validInput);
    lastNameErrorIcon = (
      <FontAwesomeIcon
        className={Styles.checkCircle}
        icon={faCheckCircle}
        size="1x"
      />
    );
  }

  if (!lastNamePattern && lastname !== "") {
    lastNameErr = (
      <p className={Styles.usernameEror}>
        Please write lastname at least 3 characters and not more than 15.
      </p>
    );
    lastNameErrorIcon = (
      <FontAwesomeIcon
        className={Styles.exTrianle}
        icon={faExclamationTriangle}
        size="1x"
      />
    );
    isValidLastName.push(Styles.invalidInput);
  }

  //Check Email validation-----------------------------------------------------------------------
  let emailPattern = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(email);
  let isValidEmail = [Styles.inputDiv];

  if (emailPattern) {
    isValidEmail.push(Styles.validInput);
    emailErrorIcon = (
      <FontAwesomeIcon
        className={Styles.checkCircle}
        icon={faCheckCircle}
        size="1x"
      />
    );
  }
  if (!emailPattern && email !== "") {
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
    isValidEmail.push(Styles.invalidInput);
  }
  //Check password validation-----------------------------------------------------------------------
  //Minimum eight characters, at least one letter and one number
  let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  let isValidPassword = [Styles.inputDiv];

  if (passwordPattern) {
    isValidPassword.push(Styles.validInput);
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
    isValidPassword.push(Styles.invalidInput);
  }
  //Minimum eight characters, at least one letter and one number
  //let confirmPasswordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(confirmPassword);
  let isValidConfirmPassword = [Styles.inputDiv];

  if (password === confirmPassword && password !== "") {
    isValidConfirmPassword.push(Styles.validInput);
    confirmPasswordErrorIcon = (
      <FontAwesomeIcon
        className={Styles.checkCircle}
        icon={faCheckCircle}
        size="1x"
      />
    );
  }

  if (password !== confirmPassword && confirmPassword !== "") {
    confirmPasswordErr = (
      <p className={Styles.usernameEror}>Please match correct password </p>
    );
    confirmPasswordErrorIcon = (
      <FontAwesomeIcon
        className={Styles.exTrianle}
        icon={faExclamationTriangle}
        size="1x"
      />
    );
    isValidConfirmPassword.push(Styles.invalidInput);
  }
  //Check form validation on submit
  const formValidation = () => {
    if (firstname === "") {
      firstNameErr = (
        <p className={Styles.usernameEror}>
          Please write username at least 3 characters
        </p>
      );
      firstNameErrorIcon = (
        <FontAwesomeIcon
          className={Styles.exTrianle}
          icon={faExclamationTriangle}
          size="1x"
        />
      );
      isValidFirstName.push(Styles.invalidInput);
    }
    if (lastname === "") {
      lastNameErr = (
        <p className={Styles.usernameEror}>
          Please write username at least 3 characters
        </p>
      );
      lastNameErrorIcon = (
        <FontAwesomeIcon
          className={Styles.exTrianle}
          icon={faExclamationTriangle}
          size="1x"
        />
      );
      isValidLastName.push(Styles.invalidInput);
    }
    if (email === "") {
      emailErr = (
        <p className={Styles.usernameEror}>
          Please write corrrect email address
        </p>
      );
      emailErrorIcon = (
        <FontAwesomeIcon
          className={Styles.exTrianle}
          icon={faExclamationTriangle}
          size="1x"
        />
      );
      isValidEmail.push(Styles.invalidInput);
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
      isValidPassword.push(Styles.invalidInput);
    }
    if (confirmPassword === "" && isPasswordMatch) {
      confirmPasswordErr = (
        <p className={Styles.usernameEror}>Please match correct password </p>
      );
      confirmPasswordErrorIcon = (
        <FontAwesomeIcon
          className={Styles.exTrianle}
          icon={faExclamationTriangle}
          size="1x"
        />
      );
      isValidConfirmPassword.push(Styles.invalidInput);
    }
  };
  //check form validation and password match
  if (!isValidSignUpForm || !isPasswordMatch) {
    formValidation();
  }
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.signUpImage}>
        <img
          style={{ width: "100%", height: "100vh" }}
          src={require("../../assets/images/signUp-Page.jpg")}
          alt="SignUp Page"
        ></img>
      </div>

      <div className={Styles.signUpForm}>
        <h2 className={Styles.signupTitle}> Create a New Account</h2>
        <form className={Styles.formDiv}>
          <input
            className={isValidFirstName.join(" ")}
            type="text"
            placeholder="firstname"
            value={firstname}
            onChange={firstNameHandler}
          ></input>
          {firstNameErrorIcon}
          {firstNameErr}
          <input
            className={isValidLastName.join(" ")}
            type="text"
            placeholder="lastname"
            value={lastname}
            onChange={lastNameHandler}
          ></input>
          {lastNameErrorIcon}
          {lastNameErr}

          <input
            className={isValidEmail.join(" ")}
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={emailHandler}
            onKeyUp={emailHandler}
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

          <input
            className={isValidConfirmPassword.join(" ")}
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={confirmPasswordHandler}
          ></input>
          {confirmPasswordErrorIcon}
          {confirmPasswordErr}

          {signUpButton}
          <p className={Styles.signinText}>
            Already have an account?{" "}
            {
              <NavLink to="/login/" className={Styles.signinButton}>
                Sign In
              </NavLink>
            }
          </p>

          <NavLink to="/" className={Styles.backButton}>
            Back
          </NavLink>
        </form>
      </div>
    </div>
  );
};
export default Signup;
