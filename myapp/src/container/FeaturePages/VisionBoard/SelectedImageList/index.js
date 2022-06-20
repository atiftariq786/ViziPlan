import React from "react";
import Styles from "./style.module.css";

const SelectedImageList = () => {
  const selectedImageArray = [
    {
      Title: "Hiking",
      src: "https://wallpapercave.com/wp/eTpPCMk.jpg",
      alt: "WebIamge",
      id: Math.random().toString(),
    },
  ];

  let newGeneratedImage = selectedImageArray.map((data) => {
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
