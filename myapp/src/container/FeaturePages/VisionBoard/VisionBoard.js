import React, { useState, useEffect } from "react";
import Styles from "../VisionBoard/VisionBoard.module.css";
import ImagesList from "./ImagesList/ImagesList";
import SelectedImageList from "./SelectedImageList";
import { useSelector } from "react-redux";
import API from "../../../services/utils/API";

const VisionBoard = () => {
  const continueRedBtn = useSelector(
    (state) => state.selectedImages.isContinueBtnClicked
  );
  const [imagesArray, setImages] = useState([]);
  let imagesType = "generic";

  if (continueRedBtn) {
    imagesType = "quotes";
  }
  useEffect(() => {
    API.getVisionBoardImages(imagesType).then((response) => {
      //console.log("Get visionBoard images");
      //console.log(response, "Get reponse successfully");
      //console.log(response.data, "Get array data successfully");
      setImages(response.data);
    });
  }, [imagesType]);

  return (
    <div className={Styles.visionBoardMainDiv}>
      <div className={Styles.imagesList}>
        <ImagesList webImages={imagesArray} imagesType={imagesType} />
      </div>

      <div className={Styles.selectedImagesList}>
        <SelectedImageList />
      </div>
    </div>
  );
};
export default VisionBoard;
