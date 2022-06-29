import React, { useState, useEffect } from "react";
import AddImageModal from "../../../../components/Modal/AddImage/AddImageModal";
import { useDispatch, useSelector } from "react-redux";
import { selectedImageActions } from "../../../../store/selectedImage-slice";
import Styles from "../ImagesList/ImagesList.module.css";

const ImagesList = (props) => {
  const dispatch = useDispatch();

  let selectedImagesArray = useSelector(
    (state) => state.selectedImages.selectedImageArray
  );

  const [arrData, setarrData] = useState(props.webImages);

  useEffect(() => {
    setarrData(props.webImages);
  }, [props.webImages]);

  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    "https://wallpaperaccess.com/full/1096653.jpg"
  );

  const inputUrlEventHandler = (event) => {
    event.preventDefault();
    setImageUrl(event.target.value);
  };

  const addImageModalHandler = () => {
    setShowModal(!showModal);
  };

  const imageSubmitHandler = () => {
    const data = {
      url: imageUrl,
      alt: "WebImage",
      id: Math.random().toString(),
    };
    arrData.unshift(data);
    setarrData(arrData);
    setShowModal(false);
  };

  const genDuplicateImageHandler = (data) => {
    dispatch(selectedImageActions.selectedImageData(data));
  };
  //============================================================================
  let customStyle = [Styles.visionImages];
  let generatedImage = arrData.map((data) => {
    let foundImage = selectedImagesArray.find((image) => image.id === data.id);
    customStyle = [Styles.visionImages];

    if (foundImage) {
      customStyle = [Styles.selectedVisionImages];
    }
    return (
      <div key={data.id}>
        <img
          className={customStyle}
          key={data.id}
          id={data.id}
          src={data.url}
          alt={data.alt}
          onClick={() => genDuplicateImageHandler(data)}
        ></img>
      </div>
    );
  });
  //====================================================================================

  return (
    <div className={Styles.container}>
      <div className={Styles.gridImages}>
        <button className={Styles.addImageBtn} onClick={addImageModalHandler}>
          +
        </button>
        {generatedImage}
      </div>
      <AddImageModal
        showAddImageModal={showModal}
        showModalHandler={addImageModalHandler}
        inputUrlHandler={inputUrlEventHandler}
        imageLink={imageUrl}
        AddImageSubmitHandler={imageSubmitHandler}
      />
    </div>
  );
};
export default ImagesList;
