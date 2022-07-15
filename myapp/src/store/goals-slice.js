import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice({
  name: "goals",
  initialState: {
    goalEdit: null,
  },
  reducers: {
    editGoal(state, actions) {
      let updateGoal = actions.payload;
      state.goalEdit = updateGoal;

      // state.goalArray.push({
      //   id: updateGoal.id,
      //   heading: updateGoal.heading,
      //   url: updateGoal.url,
      //   category: updateGoal.category,
      //   description: updateGoal.description,
      //   isPrivate: updateGoal.isPrivate,
      //   createdAt: updateGoal.createdAt,
      // });
      console.log(updateGoal, "redux editgoal data received");
      console.log(state.goalEdit, "Goal array save data in redux ");
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
