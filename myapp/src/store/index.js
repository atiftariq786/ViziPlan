import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import goalSlice from "./goals-slice";
import selectedImageSlice from "./selectedImage-slice";

const store = configureStore({
  reducer: {
    selectedImages: selectedImageSlice.reducer,
    authentication: authSlice.reducer,
    goals: goalSlice.reducer,
  },
});

export default store;
