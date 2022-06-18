import React, { useState } from "react";
import AddImageModal from "../../../../components/Modal/AddImage/AddImageModal";
import Styles from "../ImagesList/ImagesList.module.css";
//import TempModel from "../../../../components/Model/AddImage/temp";

const ImagesList = () => {
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
      src: "https://cdn.wallpapersafari.com/82/6/Jb792j.jpg",
      alt: "WebIamge",
      id: 27,
    },
    {
      Title: "Traveling",
      src: "https://beyondwords.life/wp-content/uploads/2016/12/shutterstock_531460864.jpg",
      alt: "WebIamge",
      id: 28,
    },
    {
      Title: "Traveling",
      src: "https://s3.amazonaws.com/chryslermedia.iconicweb.com/mediasite/libraryImages/JP021_008WRd8g6mbusl8ck51lh99k0pd7img__mid.jpg",
      alt: "WebIamge",
      id: 29,
    },
    {
      Title: "Traveling",
      src: "https://c1.wallpaperflare.com/preview/233/750/444/nature-landscape-mountain-mountains.jpg",
      alt: "WebIamge",
      id: 30,
    },
  ];
  const imageSubmitHandler = () => {
    const data = {
      Title: "New Image Added",
      src: { imageUrl },
      alt: "WebImage",
      id: Math.random().toString(),
    };
    webImages.push(data);

    console.log(data, "Submit handler information");
  };

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
  //id: Math.random().toString()
  return (
    <div className={Styles.container}>
      <AddImageModal
        showAddImageModal={showModal}
        showModalHandler={addImageModalHandler}
        inputUrlHandler={inputUrlEventHandler}
        imageLink={imageUrl}
        AddImageSubmitHandler={imageSubmitHandler}
      />
      <div className={Styles.gridImages}>
        {generatedImage}

        <button className={Styles.addImageBtn} onClick={addImageModalHandler}>
          +
        </button>
      </div>
    </div>
  );
};
export default ImagesList;
