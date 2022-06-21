import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    reduxArray: [],
  },
  reducers: {
    selectedImageData(state, action) {
      const clickedImageData = action.payload;

      state.reduxArray.push({
        src: clickedImageData.src,
        alt: clickedImageData.alt,
        id: clickedImageData.id,
      });
    },
  },
});
export const selectedImageActions = uiSlice.actions;
export default uiSlice;
