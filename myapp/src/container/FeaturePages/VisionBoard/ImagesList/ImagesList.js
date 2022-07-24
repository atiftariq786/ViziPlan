import React, { useState, useEffect } from "react";
import AddImageModal from "../../../../components/Modal/AddImage/AddImageModal";
import { useDispatch, useSelector } from "react-redux";
import { selectedImageActions } from "../../../../store/selectedImage-slice";
import Styles from "../ImagesList/ImagesList.module.css";
import API from "../../../../services/utils/API";

const ImagesList = (props) => {
  const dispatch = useDispatch();
  let selectedImagesArray = useSelector(
    (state) => state.selectedImages.selectedImageArray
  );

  const webImages = props.webImages;

  const [arrData, setarrData] = useState(webImages);

  useEffect(() => {
    setarrData(props.webImages);

    API.getSelectedImages().then((response) => {
      // console.log(response.data, "Get Saved Selected Images from backend");
      dispatch(selectedImageActions.savedImages(response.data));
    });
  }, [webImages]);

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
      id: null,
      url: imageUrl,
      type: props.imagesType,
      createdBy: 0,
    };
    API.addNewImage(data).then((response) => {
      arrData.unshift(data);
      setarrData(arrData);
      setShowModal(false);
    });
  };

  const genDuplicateImageHandler = (data) => {
    //console.log(data, "genDuplicateImageHandler");
    let newData = {
      id: null,
      imageId: data.id,
      userId: 0,
      url: data.url,
    };
    const isValidImage = selectedImagesArray.find(
      (image) => image.id === data.id
    );
    // console.log(isValidImage, "isValid");
    if (isValidImage === undefined) {
      API.saveSelectedImages(newData).then((response) => {
        dispatch(selectedImageActions.selectedImageData(data));
      });
    }
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
      <div className={Styles.imagesWrapper}>
        <img
          className={customStyle}
          key={data.id}
          id={data.id}
          src={data.url}
          alt={data.alt}
          onClick={() => genDuplicateImageHandler(data)}
          onError={(event) => {
            event.currentTarget.src = require("../../../../assets/images/notFound.jpg");
          }}
        ></img>
      </div>
    );
  });
  //====================================================================================

  return (
    <div className={Styles.container}>
      {/* <h1 className={Styles.imagestitle}>Images Gallery</h1> */}
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
