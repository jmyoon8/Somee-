import axios from "axios";

export const ApiInstance = axios.create({
   baseURL: "https://mock-api.ssomee.com/",
   timeout: 2500,
});
