import { createSlice } from "@reduxjs/toolkit";

const selectedImageSlice = createSlice({
  name: "selectedImages",
  initialState: {
    selectedImageArray: [],
    isContinueBtnClicked: false,
  },
  reducers: {
    selectedImageData(state, action) {
      const selectedImageData = action.payload;

      const addImage = state.selectedImageArray.find(
        (image) => image.id === selectedImageData.id
      );
      if (addImage === undefined) {
        state.selectedImageArray.push({
          src: selectedImageData.src,
          alt: selectedImageData.alt,
          id: selectedImageData.id,
        });
      }
    },
    removeImage(state, action) {
      const currentImagedata = action.payload;
      const existingImage = state.selectedImageArray.filter(
        (prevImage) => prevImage.id !== currentImagedata.id
      );
      state.selectedImageArray = existingImage;
    },
    continueSelImagesBtn(state, actions) {
      state.isContinueBtnClicked = actions.payload;
      console.log(state.isContinueBtnClicked, "Redux continue btn status");
    },
  },
});
export const selectedImageActions = selectedImageSlice.actions;
export default selectedImageSlice;
