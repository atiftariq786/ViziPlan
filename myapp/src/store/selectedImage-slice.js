import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    reduxArray: [],
  },
  reducers: {
    selectedImageData(state, action) {
      const clickedImageData = action.payload;

      const addImage = state.reduxArray.filter(
        (image) => image.id !== clickedImageData.id
      );
      state.reduxArray = addImage;
      state.reduxArray.push({
        src: clickedImageData.src,
        alt: clickedImageData.alt,
        id: clickedImageData.id,
      });

      console.log(addImage, "Redux add image");

      console.log(clickedImageData, "Redux click image");
    },
    removeImage(state, action) {
      const data = action.payload;
      const existingImage = state.reduxArray.filter(
        (prevImage) => prevImage.id !== data.id
      );
      state.reduxArray = existingImage;
    },
  },
});
export const selectedImageActions = uiSlice.actions;
export default uiSlice;
