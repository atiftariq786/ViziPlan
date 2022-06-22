import { configureStore } from "@reduxjs/toolkit";
import selectedImageSlice from "./selectedImage-slice";

const store = configureStore({
  reducer: { selectedImages: selectedImageSlice.reducer },
});

export default store;
