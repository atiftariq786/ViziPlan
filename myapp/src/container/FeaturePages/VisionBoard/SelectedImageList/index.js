import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedImageActions } from "../../../../store/selectedImage-slice";
//import { NavLink } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import Styles from "./style.module.css";

const SelectedImageList = (props) => {
  const dispatch = useDispatch();

  const switchButton = useSelector(
    (state) => state.selectedImages.isContinueBtnClicked
  );

  const getSelectedImageData = useSelector(
    (state) => state.selectedImages.selectedImageArray
  );
  //==================================Handler Functions====================================================
  const deleteIamgeHandler = (data) => {
    console.log(data, " Clicked Image ID");
    dispatch(selectedImageActions.removeImage(data));
  };
  const selectedImagesHandler = (data) => {
    dispatch(selectedImageActions.continueSelImagesBtn(data));
  };
  const finishBtnHandler = () => {
    let isClickedBtnDeactive = false;
    dispatch(selectedImageActions.continueSelImagesBtn(isClickedBtnDeactive));
  };
  //==================================Conditional Logic=====================================================
  let displayImagesText = (
    <div className={Styles.textDiv}>
      <p className={Styles.textOne}>
        Select images <br /> that match the life
      </p>
      <p className={Styles.textTwo}>
        <br /> you want to live..........! <br />
      </p>
    </div>
  );
  let displayQoutesText = (
    <div className={Styles.textDiv}>
      <p className={Styles.textOne}>
        Select
        <br /> the best quotes <br /> that match the life
      </p>
      <p className={Styles.textTwo}>
        <br /> you want to live..........! <br />
      </p>
    </div>
  );
  if (getSelectedImageData.length > 0) {
    displayImagesText = "";
    displayQoutesText = "";
  }
  let displayBtn = "";
  if (!switchButton) {
    displayBtn = (
      <Button
        className={Styles.continueBtn}
        onClick={() => selectedImagesHandler(true)}
      >
        Continue{">>"}
      </Button>
    );
  }
  if (switchButton) {
    displayImagesText = displayQoutesText;
    displayBtn = (
      <Button className={Styles.continueBtn} onClick={finishBtnHandler}>
        Finish
      </Button>
    );
  }
  //console.log(getSelectedImageData.id, "Selected image before map");
  let newGeneratedImage = getSelectedImageData.map((data) => {
    console.log(data.id, "inside map");
    return (
      <div className={Styles.imageWrapper}>
        <img
          className={Styles.visionImages}
          key={data.id}
          id={data.id}
          src={data.url}
          alt={data.alt}
        ></img>
        <button
          className={Styles.deleteBtn}
          onClick={() => deleteIamgeHandler(data)}
        >
          X
        </button>
      </div>
    );
  });
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>The Vision</h1>
      <div className={Styles.imageContainer}>
        {newGeneratedImage}
        {displayImagesText}
      </div>

      <div>{displayBtn}</div>
    </div>
  );
};
export default SelectedImageList;
