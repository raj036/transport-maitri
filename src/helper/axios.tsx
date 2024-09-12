import axios from "axios";

export default axios.create({
  baseURL: "https://eefa-2405-201-37-21d9-f98c-53bc-8336-235f.ngrok-free.app/",
  // baseURL: "http://192.46.213.94:8009/", //fgfg
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": true,
  },
});
