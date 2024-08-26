import axios from "axios";

export default axios.create({
  baseURL: "https://380e-2405-201-37-21d9-9c9d-765b-70f5-e47f.ngrok-free.app/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": true,
  },
});
