import axios from 'axios';

const BASE_URL = '';

const getBASEURL = () => {
  return BASE_URL;
};

const api = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 20000,
  headers: {
    'content-type': 'Application/json'
  }
});

api.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  // eslint-disable-next-line consistent-return
  function (response) {
    if (response.status < 300) {
      return response;
    }
  },
  function (error) {
    console.log(error);
    alert(error.message);
    return Promise.reject(error);
  }
);

export { api };
