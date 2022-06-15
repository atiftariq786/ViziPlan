import React from "react";
import Styles from "./LandingPage.module.css";
import Button from "../Button/Button";

const LandingPage = () => {
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.landingImage}>
        <img
          //   style={{ width: "100%", height: "100vh" }}
          src={require("../../assets/images/landingImage.jpg")}
          alt="ViziPlaning"
        ></img>
        <h1 className={Styles.logo}>ViziPlaning</h1>
      </div>
      <div className={Styles.introDiv}>
        <div className={Styles.landingNavbar}>
          <Button className={Styles.transBtn}>Watch Demo</Button>
          <Button className={Styles.transBtn}>FAQ</Button>
          <Button className={Styles.login}>login</Button>
        </div>
        <div className={Styles.quotes}>
          <h1>Your Vision</h1>
          <h1>Your Goals</h1>
          <h1>You make it happen</h1>
          <Button className={Styles.trynowBtn}>Try now</Button>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
