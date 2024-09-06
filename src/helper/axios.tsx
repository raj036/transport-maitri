import axios from "axios";

export default axios.create({
  // baseURL: "https://795c-2405-201-37-21d9-c180-3d73-7560-2d07.ngrok-free.app/",
  baseURL: "http://192.46.213.94:8009/", //fgfg
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": true,
  },
});
