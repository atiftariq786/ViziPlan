import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedImageActions } from "../../../../store/selectedImage-slice";
import { NavLink } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import Styles from "./style.module.css";

const SelectedImageList = () => {
  const dispatch = useDispatch();
  let getSelectedImageData = useSelector((state) => state.ui.reduxArray);

  const deleteIamgeHandler = (data) => {
    console.log(data, " Clicked Image ID");
    dispatch(selectedImageActions.removeImage(data));
  };
  let showText = (
    <div className={Styles.textDiv}>
      <p className={Styles.textOne}>
        Select Images <br /> that match the life
      </p>
      <p className={Styles.textTwo}>
        <br /> you want to live..........! <br />
      </p>
    </div>
  );
  if (getSelectedImageData.length > 0) {
    showText = "";
  }
  let newGeneratedImage = getSelectedImageData.map((data) => {
    return (
      <img
        className={Styles.visionImages}
        key={data.id}
        id={data.id}
        src={data.src}
        alt={data.alt}
        onClick={() => deleteIamgeHandler(data)}
      ></img>
    );
  });
  return (
    <div className={Styles.container}>
      {newGeneratedImage}
      {showText}
      <div>
        <NavLink to="">
          <Button className={Styles.continueBtn}>Contune >></Button>
        </NavLink>
      </div>
    </div>
  );
};
export default SelectedImageList;
