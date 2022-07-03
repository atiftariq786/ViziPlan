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
    console.log("utils API hit");
    return axios.get(`http://localhost:3001/api/auth/logout`);
  },
};

export default API;
