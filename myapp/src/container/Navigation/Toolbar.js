import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
//import Nav from "react-bootstrap/Nav";
import Styles from "./Toolbar.module.css";

const Toolbar = () => {
  return (
    <Navbar className={Styles.Navbar} expand="lg" bg="dark" variant="dark">
      <NavLink to="/home">
        <Navbar.Brand className={Styles.appTitle}>ViziPlan</Navbar.Brand>
      </NavLink>

      <Navbar.Collapse>
        <NavLink to="/visionboard">
          <Navbar.Brand className={Styles.appContent}>
            Vision Board
          </Navbar.Brand>
        </NavLink>
        <NavLink to="/goals">
          <Navbar.Brand className={Styles.appContent}>Goals</Navbar.Brand>
        </NavLink>
        <NavLink to="/dashboard">
          <Navbar.Brand className={Styles.appContent}>Dashboard</Navbar.Brand>
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Toolbar;
