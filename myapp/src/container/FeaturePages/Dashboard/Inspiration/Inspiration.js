import React from "react";
import Styles from "./Inspiration.module.css";

const Inspiration = () => {
  return (
    <div className={Styles.inspirationDiv}>
      <img
        style={{ width: "330px", height: "330px" }}
        src={require("../../../../assets/images/vision.jpg")}
        alt="image_icon"
      ></img>
      <p>Inspiration</p>
    </div>
  );
};
export default Inspiration;
