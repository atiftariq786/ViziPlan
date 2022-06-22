import React, { useState } from "react";
import Styles from "../VisionBoard/VisionBoard.module.css";
import ImagesList from "./ImagesList/ImagesList";
import SelectedImageList from "./SelectedImageList";
import { useSelector } from "react-redux";
//import { selectedImageActions } from "../../../../store/selectedImage-slice";

const VisionBoard = () => {
  const continueRedBtn = useSelector(
    (state) => state.selectedImages.isContinueBtnClicked
  );

  console.log(continueRedBtn, "Visionboard continue btn status");
  let imagesArray = [
    {
      src: "https://wallpapercave.com/wp/eTpPCMk.jpg",
      alt: "WebImage",
      id: Math.random().toString(),
    },
    {
      src: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      alt: "WebImage",
      id: Math.random().toString(),
    },
    {
      src: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F06%2F24%2Fitaly-venice-EUSUMMERTRAVEL0621.jpg",
      alt: "WebIamge",
      id: Math.random().toString(),
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYWdDWq_UCSVYpNBCUDKXnqf0dSZt2dJATg&usqp=CAU",
      alt: "WebImage",
      id: Math.random().toString(),
    },
    {
      src: "https://cdn.lifehack.org/wp-content/uploads/2014/09/traveling-changes-your-life-1024x768.jpeg",
      alt: "WebIamge",
      id: Math.random().toString(),
    },
    {
      src: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3155666.jpg&fm=jpg",
      alt: "WebImage",
      id: Math.random().toString(),
    },
    {
      src: "https://cdn.wallpapersafari.com/82/6/Jb792j.jpg",
      alt: "WebImage",
      id: Math.random().toString(),
    },
    {
      src: "https://beyondwords.life/wp-content/uploads/2016/12/shutterstock_531460864.jpg",
      alt: "WebImage",
      id: Math.random().toString(),
    },
    {
      src: "https://s3.amazonaws.com/chryslermedia.iconicweb.com/mediasite/libraryImages/JP021_008WRd8g6mbusl8ck51lh99k0pd7img__mid.jpg",
      alt: "WebImage",
      id: Math.random().toString(),
    },
    {
      src: "https://c1.wallpaperflare.com/preview/233/750/444/nature-landscape-mountain-mountains.jpg",
      alt: "WebImage",
      id: Math.random().toString(),
    },
  ];
  let quotesImagesArray = [
    {
      src: "https://wallpaperaccess.com/full/650127.jpg",
      alt: "WebImage",
      id: Math.random().toString(),
    },
    {
      src: "https://i0.wp.com/cooldigital.photography/wp-content/uploads/2019/09/Inspirational-quote.jpg?resize=750%2C500&ssl=1",
      alt: "WebImage",
      id: Math.random().toString(),
    },
    {
      src: "https://c0.wallpaperflare.com/preview/76/209/70/message-can-wall-quote.jpg",
      alt: "WebIamge",
      id: Math.random().toString(),
    },
    {
      src: "https://wallpaper.dog/large/897731.jpg",
      alt: "WebImage",
      id: Math.random().toString(),
    },
    {
      src: "https://play-lh.googleusercontent.com/r5gtrTiCOJV3jZpoSc2WZeq30Bgvu0u_uBuZwMNeIv599p8hKQo2piNBLxQlds1HjQ",
      alt: "WebIamge",
      id: Math.random().toString(),
    },
    {
      src: "https://motivationalquoteforme.com/wp-content/uploads/Start-Working-on-the-life-that-you-want-TODAY-4K-HD-Wallpaper-MotivationalQuoteForMedotcom.jpg",
      alt: "WebImage",
      id: Math.random().toString(),
    },
    {
      src: "https://www.teahub.io/photos/full/127-1274591_inspirational-motivational-4k-hd-desktop-wallpaper-motivational.jpg",
      alt: "WebImage",
      id: Math.random().toString(),
    },
    {
      src: "https://i.pinimg.com/originals/1e/71/b7/1e71b7e80b9eece4cfa18f967e07750f.jpg",
      alt: "WebImage",
      id: Math.random().toString(),
    },
    {
      src: "https://i.pinimg.com/originals/79/88/bc/7988bcb17f342500ac9afa9f923b4315.png",
      alt: "WebImage",
      id: Math.random().toString(),
    },
    {
      src: "https://wallpaperaccess.com/full/5259315.jpg",
      alt: "WebImage",
      id: Math.random().toString(),
    },
  ];
  const [tempArray, setTempArray] = useState(imagesArray);
  let outputArray = tempArray;
  if (continueRedBtn) {
    outputArray = quotesImagesArray;
    //setTempArray(quotesImagesArray);
  }
  return (
    <div className={Styles.visionBoardMainDiv}>
      <div className={Styles.imagesList}>
        <ImagesList webImages={outputArray} />
      </div>

      <div className={Styles.selectedImagesList}>
        <SelectedImageList />
      </div>
    </div>
  );
};
export default VisionBoard;
