import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice({
  name: "goals",
  initialState: {
    savedGoalArray: [],
  },
  reducers: {
    goalList(state, actions) {
      let saveGoals = actions.payload;

      state.savedGoalArray.push({
        id: saveGoals.id,
        heading: saveGoals.heading,
        url: saveGoals.url,
        category: saveGoals.category,
        description: saveGoals.description,
        isPrivate: saveGoals.isPrivate,
        createdAt: saveGoals.createdAt,
      });
      console.log(state.savedGoalArray, "redux goal status");
    },
    // userLogin(state, actions) {
    //   let userLoginStatus = actions.payload;
    //   state.isLoggedin = userLoginStatus.isSignedin;

    //   if (userLoginStatus.isSignedin) {
    //     state.currentUser = userLoginStatus.loggedInUsername;
    //   }
    // },
    // isLoggedInUser(state, actions) {
    //   let response = actions.payload;
    //   state.isLoggedin = response.isSignedin;

    //   if (response.isSignedin) {
    //     state.currentUser = response.loggedInUsername;
    //   }
    // },
  },
});
export const goalActions = goalSlice.actions;
export default goalSlice;
