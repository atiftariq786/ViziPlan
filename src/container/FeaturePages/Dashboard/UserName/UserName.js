import React from "react";
import Styles from "./UserName.module.css";
import { useSelector } from "react-redux";

const UserName = () => {
  const currentUsername = useSelector(
    (state) => state.authentication.currentUser
  );

  return (
    <div className={Styles.userPicDiv}>
      <div className={Styles.leftSide}>
        <div className={Styles.userName}>Hello {currentUsername}!</div>
        <div className={Styles.welcomeText}>
          Welcome to your dashboard. You can see your own statistics as well as
          updates from folks who are using <b>ViziPlan</b>.
        </div>
      </div>

      <div className={Styles.image}>
        <img
          style={{ width: "280px", height: "280px" }}
          src={require("../../../../assets/images/panda.png")}
          alt="image_icon"
        ></img>
      </div>
    </div>
  );
};
export default UserName;
