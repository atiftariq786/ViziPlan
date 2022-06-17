import React from "react";
import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Styles from "./Signup.module.css";
import Button from "react-bootstrap/Button";

const Signup = () => {
  //   const [userName, setUserame] = useState("alex777");
  //   const [password, setPassword] = useState("Asialink777");
  //   const [email, setEmail] = useState();
  //   const [isValidLoginForm, setIsValidLoginForm] = useState(true);

  const usernameHandler = (event) => {
    console.log("username onChange active");
  };
  const emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  const passwordHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  const confirmPasswordHandler = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    });
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
      //   onClick={this.postSignUpHandler}
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
            placeholder="Username"
            // value={this.state.username}
            onChange={usernameHandler}
          ></input>
          {/* {userErrorIcon}
          {userErr} */}

          <input
            // className={isValidEmail.join(" ")}
            type="email"
            placeholder="Email"
            // value={this.state.email}
            onChange={emailHandler}
            onKeyUp={emailHandler}
          ></input>
          {/* {emailErrorIcon}
          {emailErr} */}

          <input
            // className={isValidPassword.join(" ")}
            type="password"
            placeholder="Password"
            // value={this.state.password}
            onChange={passwordHandler}
          ></input>
          {/* {passwordErrorIcon}
          {passwordErr} */}

          <input
            // className={isValidConfirmPassword.join(" ")}
            type="password"
            placeholder="Confirm Password"
            // value={this.state.confirmPassword}
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

          <NavLink to="/home" className={Styles.backButton}>
            back
          </NavLink>
        </form>
      </div>
    </div>
  );
};
export default Signup;
