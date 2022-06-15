import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Styles from "./Toolbar.module.css";

const Toolbar = () => {
  return (
    <Navbar className={Styles.Navbar} expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className={Styles.appTitle}>ViziPlan</Navbar.Brand>

      <Navbar.Collapse>
        <Nav className="me-auto">
          <NavLink to="/vision-board/">
            <Navbar.Brand className={Styles.appContent}>
              Vision Board
            </Navbar.Brand>
          </NavLink>
          <NavLink to="/goals/">
            <Navbar.Brand className={Styles.appContent}>Goals</Navbar.Brand>
          </NavLink>
          <NavLink to="/dashboard/">
            <Navbar.Brand className={Styles.appContent}>Dashboard</Navbar.Brand>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Toolbar;
