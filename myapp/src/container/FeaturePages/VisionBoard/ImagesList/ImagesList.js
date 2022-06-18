import React, { useState } from "react";
import AddImageModel from "../../../../components/Model/AddImage/AddImage";
import Styles from "../ImagesList/ImagesList.module.css";
//import TempModel from "../../../../components/Model/AddImage/temp";

const ImagesList = () => {
  const [showModal, setShowModal] = useState(false);

  const addImageModalHandler = () => {
    setShowModal(!showModal);
  };

  let webImages = [
    {
      Title: "Hiking",
      src: "https://wallpapercave.com/wp/eTpPCMk.jpg",
      alt: "WebIamge",
      id: 21,
    },
    {
      Title: "Sports",
      src: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      alt: "WebIamge",
      id: 22,
    },
    {
      Title: "Traveling",
      src: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F06%2F24%2Fitaly-venice-EUSUMMERTRAVEL0621.jpg",
      alt: "WebIamge",
      id: 23,
    },
    {
      Title: "Traveling",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYWdDWq_UCSVYpNBCUDKXnqf0dSZt2dJATg&usqp=CAU",
      alt: "WebIamge",
      id: 24,
    },
    {
      Title: "Traveling",
      src: "https://cdn.lifehack.org/wp-content/uploads/2014/09/traveling-changes-your-life-1024x768.jpeg",
      alt: "WebIamge",
      id: 25,
    },
    {
      Title: "Traveling",
      src: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3155666.jpg&fm=jpg",
      alt: "WebIamge",
      id: 26,
    },
    {
      Title: "Traveling",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlPV78oDliBqT3lBJ3OyP5ENC9ixCZYa6cA&usqp=CAU",
      alt: "WebIamge",
      id: 27,
    },
    {
      Title: "Traveling",
      src: "https://beyondwords.life/wp-content/uploads/2016/12/shutterstock_531460864.jpg",
      alt: "WebIamge",
      id: 27,
    },
    {
      Title: "Traveling",
      src: "https://i.pinimg.com/564x/4c/3a/15/4c3a15e2e1dab17f909b18a53bdb9eb4.jpg",
      alt: "WebIamge",
      id: 27,
    },
    {
      Title: "Traveling",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Z0_z1cR_EtXolHpgtFSFmeA5ZRQENhuXvg&usqp=CAU",
      alt: "WebIamge",
      id: 27,
    },
  ];

  let generatedImage = webImages.map((data) => {
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
      <AddImageModel
        showAddImageModal={showModal}
        showModalHandler={addImageModalHandler}
      />
      <div className={Styles.gridImages}>
        {generatedImage}

        {/* <p className={Styles.plusSign}>+</p> */}
        <button className={Styles.addImageBtn} onClick={addImageModalHandler}>
          +
        </button>
      </div>
    </div>
  );
};
export default ImagesList;

// {
//   /* <div className={Styles.addImage}>
//  <p className={Styles.plusSign}>+</p>
// <Button className={Styles.addImageBtn}>+</Button>
// </div> */
// }
