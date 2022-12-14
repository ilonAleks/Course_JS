import axios from "axios";
import logger from "./logService";
// import { toast } from "react-toastify";
import config from "../config.json";

axios.defaults.baseURL = config.apiEndpoint;

axios.interceptors.response.use(
  (res) => res,
  function (error) {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (expectedError) {
      logger.log(error);
      // toast.error("Something was wrong");
      // toast("Expected error");
      console.log("Expected error");
    }
    return Promise.reject(error);
  }
);

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
