/* eslint-disable func-names */
import axios from 'axios';
import httpStatus from './httpStatus';
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const config = {
  baseURL: process.env.REACT_APP_API_URL || '',
  validateStatus(status: number) {
    return (
      (status >= httpStatus.StatusOK &&
        status < httpStatus.StatusMultipleChoices) ||
      status === httpStatus.StatusBadRequest ||
      status === httpStatus.StatusNotFound ||
      status === httpStatus.StatusMethodNotAllowed ||
      status === httpStatus.StatusConflict ||
      status === httpStatus.StatusTooManyRequests ||
      status === httpStatus.StatusInternalServerError
    ); // default
  }
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};
const _axios = axios.create(config);

_axios.interceptors.request.use(
  // eslint-disable-next-line no-shadow
  function (config) {
    if (window.localStorage.access_token) {
      config.headers = {};

      config.headers['x-access-token'] = window.localStorage.access_token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    if (
      error.response &&
      (error.response.status === httpStatus.StatusGatewayTimeout ||
        error.response.status === httpStatus.StatusForbidden ||
        error.response.status === httpStatus.StatusUnauthorized)
    ) {
      // Do something with response
    } else {
      // store.dispatch("common/setStateErrorRequest");
    }
    return Promise.reject(error);
  }
);
export default _axios;
