import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Styles from "../Landing/LandingPage.module.css";
import Button from "../../Button/Button";

const LandingPage = () => {
  return (
    <div className={Styles.landingMainDiv}>
      <div className={Styles.landingImage}>
        <img
          style={{ width: "100%", height: "100vh" }}
          src={require("../../../assets/images/landingImage.jpg")}
          alt="ViziPlaning"
        ></img>
        <span className={Styles.logo}>ViziPlan</span>
      </div>
      <div className={Styles.introDiv}>
        <div className={Styles.landingNavbar}>
          <NavLink to="/appdemo/">
            <Button className={Styles.transBtn}>Watch Demo</Button>
          </NavLink>
          <NavLink to="/about/">
            <Button className={Styles.transBtn}>FAQ</Button>
          </NavLink>
          <NavLink to="/login/">
            <Button className={Styles.loginBtn}>login</Button>
          </NavLink>
        </div>
        <div className={Styles.welcomeText}>
          <h1>Your Vision.</h1>
          <h1>Your Goals.</h1>
          <h1>You make it happen.</h1>
          <NavLink to="/signup">
            <Button className={Styles.tryNowBtn}>Try now</Button>
          </NavLink>
        </div>
        <div className={Styles.footerDiv}>
          <a href="https://github.com/atiftariq786">
            <FontAwesomeIcon
              className={Styles.github}
              icon={faGithub}
              size="2x"
            />
          </a>
          <a href="https://www.linkedin.com/in/atif-tariq-5b00b089/">
            <FontAwesomeIcon
              className={Styles.linkedin}
              icon={faLinkedin}
              size="2x"
            />
          </a>

          <p style={{ marginTop: "10px" }}>@Copyright 2022 By Atif Tariq</p>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
