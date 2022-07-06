import React from "react";
import { NavLink } from "react-router-dom";
//import Nav from "react-bootstrap/Nav";
//import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGithub } from "@fortawesome/free-brands-svg-icons";
//import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import Styles from "./Nav.module.css";

const VerticleNavbar = () => {
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.mainContainer}>
        <div>
          <p className={Styles.logo}>ViziPlan</p>
        </div>
        <div className={Styles.visionBoard}>
          <NavLink to="/dashboard">
            <FontAwesomeIcon icon={faChartLine} size="2x" />
          </NavLink>
        </div>
        <div className={Styles.visionBoard}>
          <NavLink to="/visionboard">
            <FontAwesomeIcon icon={faPersonChalkboard} size="2x" />
          </NavLink>
        </div>
        <div className={Styles.visionBoard}>
          <NavLink to="/goals">
            <FontAwesomeIcon icon={faBullseye} size="2x" />
          </NavLink>
        </div>
        <div className={Styles.visionBoard}>
          <NavLink to="/about">
            <FontAwesomeIcon icon={faCircleInfo} size="2x" />
          </NavLink>
        </div>
        <div>
          {/* <FontAwesomeIcon icon="fa-regular fa-gauge-circle-minus" /> 
        "fa-regular fa-square-list"
        */}
        </div>
      </div>

      <div className={Styles.goals}>
        {/* <div className={Styles.visionBoard}>
          <a href="https://www.linkedin.com/in/atif-tariq-5b00b089/">
            <FontAwesomeIcon
              className={Styles.linkedin}
              icon={faLinkedin}
              size="2x"
            />
          </a>
        </div>
        <div className={Styles.visionBoard}>
          <a href="https://github.com/atiftariq786">
            <FontAwesomeIcon
              className={Styles.github}
              icon={faGithub}
              size="2x"
            />
          </a>
        </div> */}

        <div className={Styles.visionBoard}>
          <NavLink to="/goals">
            <FontAwesomeIcon icon={faPowerOff} size="2x" />
          </NavLink>
        </div>
        <div className={Styles.visionBoard}>
          <FontAwesomeIcon icon={faUser} size="2x" />
          <p>Hi Alex!</p>
        </div>
      </div>
    </div>
  );
};
export default VerticleNavbar;

// {/* <Nav defaultActiveKey="/" className="flex-column">
//     <Nav.Link href="/" className={Styles.goals}>
//       Active
//     </Nav.Link>
//     <Nav.Link eventKey="link-1">Link</Nav.Link>
//     <Nav.Link eventKey="link-2">Link</Nav.Link>
//     <Nav.Link href="/about/">About</Nav.Link>
//   </Nav> */}
