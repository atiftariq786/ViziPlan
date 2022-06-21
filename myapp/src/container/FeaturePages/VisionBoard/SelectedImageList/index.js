import React from "react";
import { useSelector } from "react-redux";
import Styles from "./style.module.css";

const SelectedImageList = () => {
  let getSelectedImageData = useSelector((state) => state.ui.reduxArray);

  console.log(getSelectedImageData, "Final Result");

  let newGeneratedImage = getSelectedImageData.map((data) => {
    return (
      <img
        className={Styles.visionImages}
        src={data.src}
        alt={data.alt}
        key={data.id}
      ></img>
    );
  });

  return (
    <div className={Styles.container}>
      {newGeneratedImage}
      <div>
        <h1>Welcome</h1>
      </div>
    </div>
  );
};
export default SelectedImageList;
