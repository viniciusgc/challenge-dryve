import axios from "axios";
import { API } from "../constants";

const client = axios.create({
  baseURL: API.BASE,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

export default client;
