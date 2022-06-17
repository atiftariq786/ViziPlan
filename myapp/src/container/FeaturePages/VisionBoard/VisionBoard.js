import React from "react";
// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import Styles from "../VisionBoard/VisionBoard.module.css";
//import ".style.css";
import { NavLink } from "react-router-dom";

const VisionBoard = () => {
  return (
    <div>
      {/*=================================Section-2====================================*/}
      <div className={Styles.gridSelectedImages}>
        <h1 className={Styles.title}>
          Select Images <br /> that match the life <br /> you want to
          live..........! <br />
          <NavLink to="/home" className={Styles.backButton}>
            back
          </NavLink>
        </h1>
      </div>
    </div>
  );
};
export default VisionBoard;
