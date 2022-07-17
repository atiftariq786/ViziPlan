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

      //console.log(updateGoal, "redux editgoal data received");
      //console.log(state.goalEdit, "Goal array save data in redux ");
    },
  },
});
export const goalActions = goalSlice.actions;
export default goalSlice;
