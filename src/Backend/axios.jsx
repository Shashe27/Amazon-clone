import axios from "axios";

const instance = axios.create({
  // The API (cloud function) URL
  baseURL: "http://127.0.0.1:5001/clone3-a8371/us-central1/api",
});

export default instance;
