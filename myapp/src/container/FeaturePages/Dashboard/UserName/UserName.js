import React from "react";
import Styles from "./UserName.module.css";

const UserName = () => {
  return (
    <div className={Styles.userPicDiv}>
      <div className={Styles.leftSide}>
        <div className={Styles.userName}>Hello Tommy!</div>
        <div className={Styles.welcomeText}>
          Welcome to your goals dashboard
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
