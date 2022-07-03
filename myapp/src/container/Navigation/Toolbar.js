import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import API from "../../services/utils/API";
import { useSelector, useDispatch } from "react-redux";
//import Nav from "react-bootstrap/Nav";
import Styles from "./Toolbar.module.css";
import { authActions } from "../../store/auth-slice";
import { useHistory } from "react-router-dom";

const Toolbar = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const loggedInStatus = useSelector(
    (state) => state.authentication.isLoggedin
  );
  const currentUsername = useSelector(
    (state) => state.authentication.currentUser
  );
  console.log(currentUsername, "toolbar usernmae");
  const logoutHandler = () => {
    console.log("User logout btn clicked");
    //---------------------------------------------------------
    history.push("/home");
    //props.history.push("/home");
    dispatch(authActions.userLogout("false"));

    //------------------------------------------------------------
    API.userLogout().then((response) => {
      console.log("aPI User logout");
      console.log(response);
      dispatch(authActions.userLogout("false"));
      //props.history.push("/home");
    });
  };

  let logOutShow = "";
  if (loggedInStatus === "true") {
    logOutShow = (
      <Navbar.Brand className={Styles.logout} onClick={logoutHandler}>
        Logout
      </Navbar.Brand>
    );
  }
  return (
    <Navbar className={Styles.Navbar} expand="lg" bg="dark" variant="dark">
      <NavLink to="/home" className={Styles.appTitle}>
        <Navbar.Brand className={Styles.appTitle}>ViziPlan</Navbar.Brand>
      </NavLink>
      <NavLink to="/visionboard" className={Styles.appContent}>
        <Navbar.Brand className={Styles.appContent}>Vision Board</Navbar.Brand>
      </NavLink>
      <NavLink to="/goals" className={Styles.appContent}>
        <Navbar.Brand className={Styles.appContent}>Goals</Navbar.Brand>
      </NavLink>
      <NavLink to="/dashboard" className={Styles.appContent}>
        <Navbar.Brand className={Styles.appContent}>Dashboard</Navbar.Brand>
      </NavLink>

      {logOutShow}
      {<p className={Styles.username}>Signed in: {currentUsername}</p>}
    </Navbar>
  );
};

export default Toolbar;
