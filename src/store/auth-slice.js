import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isLoggedin: false,
    currentUser: "",
  },
  reducers: {
    userLogout(state, actions) {
      let userLogoutStatus = actions.payload;
      state.isLoggedin = userLogoutStatus;

      if (!userLogoutStatus) {
        state.currentUser = "";
      }
    },
    userLogin(state, actions) {
      let userLoginStatus = actions.payload;
      state.isLoggedin = userLoginStatus.isSignedin;

      if (userLoginStatus.isSignedin) {
        state.currentUser = userLoginStatus.loggedInUsername;
      }
    },
    isLoggedInUser(state, actions) {
      let response = actions.payload;
      state.isLoggedin = response.isSignedin;

      if (response.isSignedin) {
        state.currentUser = response.loggedInUsername;
      }
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
