import axios from "axios";
import { contants } from "../environments/constants";

export const api = axios.create({
  baseURL: contants.API_URL,
});
