import axios from "axios";

export default axios.create({
  baseURL: "https://32bc-2405-201-37-21d9-9d6c-bb63-7abb-d423.ngrok-free.app/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": true,
  },
});
