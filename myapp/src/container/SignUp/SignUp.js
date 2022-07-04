import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import API from "../../services/utils/API";

import Styles from "./Signup.module.css";
import Button from "react-bootstrap/Button";

const Signup = (props) => {
  const [firstname, setFirstName] = useState("alex");
  const [lastname, setLastName] = useState("james");
  const [username, setUsername] = useState("test123");
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("password");

  //const [isValidLoginForm, setIsValidLoginForm] = useState(true);
  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
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
    if (username && password && email) {
      if (password === confirmPassword) {
        const data = {
          firstname,
          lastname,
          username,
          email,
          password,
        };

        API.userSignUp(data).then((response) => {
          console.log("User SignUp Data Saved");
          console.log(response, "SignUp response");

          //let username = response.data.message;
          if (response.data.success) {
            //props.updateSignedInState("true", username);

            props.history.push("/visionboard");
          }
        });
      } else {
        console.log("Make sure your password match");
      }
    } else {
      console.log("Please fill all the field");
    }
  };

  //   let userErr = "";
  //   let emailErr = "";
  //   let passwordErr = "";
  //   let confirmPasswordErr = "";

  //   let userErrorIcon = "";
  //   let emailErrorIcon = "";
  //   let passwordErrorIcon = "";
  //   let confirmPasswordErrorIcon = "";

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
  //signUp-Page.jpg
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
            // className={isValidUsername.join(" ")}
            type="text"
            placeholder="firstname"
            value={firstname}
            onChange={firstNameHandler}
          ></input>
          <input
            // className={isValidUsername.join(" ")}
            type="text"
            placeholder="lastname"
            value={lastname}
            onChange={lastNameHandler}
          ></input>
          <input
            // className={isValidUsername.join(" ")}
            type="text"
            placeholder="username"
            value={username}
            onChange={usernameHandler}
          ></input>
          {/* {userErrorIcon}
          {userErr} */}

          <input
            // className={isValidEmail.join(" ")}
            type="email"
            placeholder="test@gmail.com"
            value={email}
            onChange={emailHandler}
            onKeyUp={emailHandler}
          ></input>
          {/* {emailErrorIcon}
          {emailErr} */}

          <input
            // className={isValidPassword.join(" ")}
            type="password"
            placeholder="password"
            value={password}
            onChange={passwordHandler}
          ></input>
          {/* {passwordErrorIcon}
          {passwordErr} */}

          <input
            // className={isValidConfirmPassword.join(" ")}
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={confirmPasswordHandler}
          ></input>
          {/* {confirmPasswordErrorIcon}
          {confirmPasswordErr}

          {signUpButton} */}
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
            back
          </NavLink>
        </form>
      </div>
    </div>
  );
};
export default Signup;
