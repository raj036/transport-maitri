import axios from "axios";

export default axios.create({
  baseURL: "https://8e48-2405-201-37-21d9-202f-9c77-fc15-51b4.ngrok-free.app/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": true,
  },
});
