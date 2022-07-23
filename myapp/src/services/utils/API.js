import axios from "axios";
axios.defaults.withCredentials = true;

const API = {
  getVisionBoardImages: (type) => {
    return axios.get(`http://localhost:3001/api/images/${type}`);
  },
  addNewImage: (data) => {
    return axios.post(`http://localhost:3001/api/images/add`, data);
  },
  saveSelectedImages: (data) => {
    return axios.post(`http://localhost:3001/api/visionBoard/save`, data);
  },
  getSelectedImages: () => {
    return axios.get(`http://localhost:3001/api/visionBoard/me`);
  },
  deleteSelectedImages: (id) => {
    return axios.delete(`http://localhost:3001/api/visionBoard/${id}`);
  },
  userLogin: (data) => {
    return axios.post(`http://localhost:3001/auth/signin`, data);
  },
  userSignUp: (data) => {
    return axios.post(`http://localhost:3001/auth/signup`, data);
  },
  userLogout: () => {
    return axios.get(`http://localhost:3001/auth/logout`);
  },
  isUserLoggedin: () => {
    return axios.post(`http://localhost:3001/auth/isLoggedIn`);
  },
  userAddGoal: (data) => {
    return axios.post(`http://localhost:3001/api/goals/addGoal`, data);
  },
  //=========================================
  savedGoal: (type) => {
    return axios.get(`http://localhost:3001/api/goals/${type}`);
  },
  completeGoal: (data) => {
    return axios.put(
      `http://localhost:3001/api/goals/completeGoal/${data.id}`,
      data
    );
  },
  getActivities: () => {
    return axios.get(`http://localhost:3001/api/activities`);
  },
  //==========================================
  deleteGoal: (id) => {
    return axios.delete(`http://localhost:3001/api/goals/${id}`);
  },
  editUserGoal: (data) => {
    return axios.put(
      `http://localhost:3001/api/goals/updateGoal/${data.id}`,
      data
    );
  },
  allGoalsCreatedAnalytics: () => {
    return axios.get(`http://localhost:3001/api/analytics/allGoalsCreated`);
  },
};

export default API;
