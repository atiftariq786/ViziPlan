import axios from "axios";
//axios.defaults.withCredentials = true;

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
    // console.log("API.js get images");
    return axios.get(`http://localhost:3001/api/visionBoard/me`);
  },
  deleteSelectedImages: (id) => {
    // console.log("API.js get images");
    return axios.delete(`http://localhost:3001/api/visionBoard/${id}`);
  },
};

export default API;
