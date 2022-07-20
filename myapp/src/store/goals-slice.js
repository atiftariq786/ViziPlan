import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice({
  name: "goals",
  initialState: {
    goalEdit: null,
    totalGoalsArray: [],
    completedGoalsArray: [],
  },
  reducers: {
    editGoal(state, actions) {
      let updateGoal = actions.payload;
      state.goalEdit = updateGoal;
    },
    totalGoals(state, actions) {
      let goals = actions.payload;
      state.totalGoalsArray = goals;

      console.log(state.totalGoalsArray, "Total Goals array in redux ");
      //console.log(goals, "Total Goals in redux ");
    },
    completedGoals(state, actions) {
      let completedGoal = actions.payload;
      state.completedGoalsArray = completedGoal;

      console.log(state.completedGoalsArray, "Completed Goals array in redux ");
      //console.log(completedGoal, "Completed Goals in redux ");
    },
  },
});
export const goalActions = goalSlice.actions;
export default goalSlice;
