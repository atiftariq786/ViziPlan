import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isLoggedin: "false",
    currentUser: "",
  },
  reducers: {
    userLogout(state, actions) {
      let userLogoutStatus = actions.payload;
      state.isLoggedin = userLogoutStatus;
      console.log(userLogoutStatus, "redux Auth userLogout");
      if (userLogoutStatus === "false") {
        state.currentUser = "";
      }
    },
    userLogin(state, actions) {
      let userLoginStatus = actions.payload;
      state.isLoggedin = userLoginStatus.isSignedin;

      console.log(userLoginStatus, "redux Auth userlogin");
      if (userLoginStatus.isSignedin === "true") {
        state.currentUser = userLoginStatus.loggedInUsername;
      }
      console.log(state.currentUser, "current user update in redux auth");
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
