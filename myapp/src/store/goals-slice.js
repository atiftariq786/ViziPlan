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
    },
    completedGoals(state, actions) {
      let completedGoal = actions.payload;
      state.completedGoalsArray = completedGoal;
    },
  },
});
export const goalActions = goalSlice.actions;
export default goalSlice;
