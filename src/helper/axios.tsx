import axios from "axios";

export default axios.create({
  baseURL: "https://aac7-2405-201-37-21d9-105a-dfa7-39d8-64fc.ngrok-free.app/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": true,
  },
});
