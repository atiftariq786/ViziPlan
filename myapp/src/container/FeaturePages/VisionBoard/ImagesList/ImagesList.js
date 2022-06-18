import React, { useState } from "react";
import AddImageModel from "../../../../components/Model/AddImage/AddImage";
import Styles from "../ImagesList/ImagesList.module.css";
//import TempModel from "../../../../components/Model/AddImage/temp";

const ImagesList = () => {
  const [AddImageState, setAddImageState] = useState(false);

  const addImageHandler = () => {
    setAddImageState(true);
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
      src: "https://wallpapercave.com/wp/wp1903459.jpg",
      alt: "WebIamge",
      id: 23,
    },
    {
      Title: "Traveling",
      src: "https://wallpapercave.com/wp/wp1903459.jpg",
      alt: "WebIamge",
      id: 24,
    },
    {
      Title: "Traveling",
      src: "https://wallpapercave.com/wp/wp1903459.jpg",
      alt: "WebIamge",
      id: 25,
    },
    {
      Title: "Traveling",
      src: "https://wallpapercave.com/wp/wp1903459.jpg",
      alt: "WebIamge",
      id: 26,
    },
    {
      Title: "Traveling",
      src: "https://wallpapercave.com/wp/wp1903459.jpg",
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

  let showModel = "";
  let dark = [Styles.gridImages];

  if (AddImageState) {
    showModel = <AddImageModel addImageModelShow={AddImageState} />;
    dark.push(Styles.backDrop);
  } else {
    dark.push(Styles.gridImages);
  }

  return (
    <div className={Styles.container}>
      <div className={dark}>
        {generatedImage}

        {/* <p className={Styles.plusSign}>+</p> */}
        <button className={Styles.addImageBtn} onClick={addImageHandler}>
          +
        </button>
        {showModel}
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
