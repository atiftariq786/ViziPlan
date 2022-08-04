import axios from "axios";
axios.defaults.withCredentials = true;

let herokuURL = "https://vizi-plan-server.herokuapp.com/";
let localHost = "http://localhost:3001/";
let hostURL = herokuURL;

const API = {
  getVisionBoardImages: (type) => {
    return axios.get(`${hostURL}api/images/${type}`);
  },
  addNewImage: (data) => {
    return axios.post(`${hostURL}api/images/add`, data);
  },
  saveSelectedImages: (data) => {
    return axios.post(`${hostURL}api/visionBoard/save`, data);
  },
  getSelectedImages: () => {
    return axios.get(`${hostURL}api/visionBoard/me`);
  },
  deleteSelectedImages: (id) => {
    return axios.delete(`${hostURL}api/visionBoard/${id}`);
  },
  userLogin: (data) => {
    return axios.post(`${hostURL}auth/signin`, data);
  },
  userSignUp: (data) => {
    return axios.post(`${hostURL}auth/signup`, data);
  },
  userLogout: () => {
    return axios.get(`${hostURL}auth/logout`);
  },
  isUserLoggedin: () => {
    return axios.post(`${hostURL}auth/isLoggedIn`);
  },
  userAddGoal: (data) => {
    return axios.post(`${hostURL}api/goals/addGoal`, data);
  },
  //=========================================
  savedGoal: (type) => {
    return axios.get(`${hostURL}api/goals/${type}`);
  },
  completeGoal: (data) => {
    return axios.put(`${hostURL}api/goals/completeGoal/${data.id}`, data);
  },
  getActivities: () => {
    return axios.get(`${hostURL}api/activities`);
  },
  //==========================================
  deleteGoal: (id) => {
    return axios.delete(`${hostURL}api/goals/${id}`);
  },
  editUserGoal: (data) => {
    return axios.put(`${hostURL}api/goals/updateGoal/${data.id}`, data);
  },
  allGoalsCreatedAnalytics: () => {
    return axios.get(`${hostURL}api/usersGoalsData`);
  },
};

export default API;
