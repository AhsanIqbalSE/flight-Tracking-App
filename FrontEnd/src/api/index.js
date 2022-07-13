import axios from "../helpers/axios";

const api = {};

api.getFlightInformation = function (param) {
  const url = `${process.env.REACT_APP_API_BASE_URL}/track/flight`;

  return axios.get(url, param);
};

api.getAirPort = function (param) {
  const url = `${process.env.REACT_APP_API_BASE_URL}/get/airport`;

  return axios.get(url, param);
};

api.trackFlight = function (param) {
  const url = `${process.env.REACT_APP_API_BASE_URL}/track/flight/location`;

  return axios.get(url, param);
};

export default api;
