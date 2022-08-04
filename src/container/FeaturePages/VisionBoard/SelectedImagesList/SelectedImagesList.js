import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedImageActions } from "../../../../store/selectedImage-slice";
import API from "../../../../services/utils/API";
import Styles from "./SelectedImagesList.module.css";

const SelectedImagesList = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const switchButton = useSelector(
    (state) => state.selectedImages.isContinueBtnClicked
  );

  const getSelectedImageData = useSelector(
    (state) => state.selectedImages.selectedImageArray
  );
  //==================================Handler Functions====================================================

  const deleteIamgeHandler = (data) => {
    console.log(data.id, " Clicked Image ID");

    API.deleteSelectedImages(data.id).then((response) => {
      console.log(response, "Image deleted successfully....!");
      dispatch(selectedImageActions.removeImage(data.id));
    });
  };
  const selectedImagesHandler = (data) => {
    dispatch(selectedImageActions.continueSelImagesBtn(data));
  };
  const finishBtnHandler = () => {
    let isClickedBtnDeactive = false;
    dispatch(selectedImageActions.continueSelImagesBtn(isClickedBtnDeactive));
    history.push("/dashboard");
  };
  //==================================Conditional Logic=====================================================

  let displayImagesText = (
    <div className={Styles.textDiv}>
      <p className={Styles.textPartOne}>Select images and quotes</p>
      <p className={Styles.textPartTwo}>that match the life</p>
      <p className={Styles.textPartThree}>you want to live.</p>
    </div>
  );
  let displayQuotesText = (
    <div className={Styles.textDiv}>
      <p className={Styles.textPartOne}>Select the best quotes</p>
      <p className={Styles.textPartTwo}>that match the life</p>
      <p className={Styles.textPartThree}>you want to create.</p>
    </div>
  );
  if (getSelectedImageData.length > 0) {
    displayImagesText = "";
    displayQuotesText = "";
  }
  let displayBtn = "";
  let backBtn = "";
  if (!switchButton && getSelectedImageData.length > 0) {
    displayBtn = (
      <div
        className={Styles.continueBtn}
        onClick={() => selectedImagesHandler(true)}
      >
        Continue to Quotes
      </div>
    );
  }
  if (switchButton) {
    displayImagesText = displayQuotesText;
    displayBtn = (
      <div className={Styles.continueBtn} onClick={finishBtnHandler}>
        Finish
      </div>
    );
  }

  if (switchButton && getSelectedImageData.length > 0) {
    backBtn = (
      <div
        className={Styles.backBtn}
        onClick={() => selectedImagesHandler(false)}
      >
        Back to Images
      </div>
    );
  }
  let newGeneratedImage = getSelectedImageData.map((data) => {
    return (
      <div className={Styles.imageWrapper} key={data.id}>
        <img
          className={Styles.visionImages}
          key={data.id}
          id={data.id}
          src={data.url}
          alt={data.alt}
          onError={(e) => {
            e.currentTarget.src = require("../../../../assets/images/notFound.jpg");
            e.target.onError = null;
          }}
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
      {displayBtn}
      {backBtn}
    </div>
  );
};
export default SelectedImagesList;
