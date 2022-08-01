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
      console.log(selectedImageData, " redux array");

      state.selectedImageArray.push({
        createdAt: selectedImageData.createdAt,
        createdBy: selectedImageData.createdBy,
        id: selectedImageData.id,
        type: selectedImageData.type,
        updateAt: selectedImageData.updateAt,
        url: selectedImageData.url,
      });
    },
    removeImage(state, action) {
      const currentImageId = action.payload;
      const existingImage = state.selectedImageArray.filter(
        (prevImage) => prevImage.id !== currentImageId
      );
      state.selectedImageArray = existingImage;
    },
    continueSelImagesBtn(state, actions) {
      state.isContinueBtnClicked = actions.payload;
    },
    savedImages(state, actions) {
      const savedSelectedImages = actions.payload;
      state.selectedImageArray = savedSelectedImages;
    },
  },
});
export const selectedImageActions = selectedImageSlice.actions;
export default selectedImageSlice;
