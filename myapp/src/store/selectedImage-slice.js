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
          url: selectedImageData.url,
          alt: selectedImageData.alt,
          id: selectedImageData.id,
          key: selectedImageData.id,
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
    },
  },
});
export const selectedImageActions = selectedImageSlice.actions;
export default selectedImageSlice;
