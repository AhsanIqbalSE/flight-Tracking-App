const config = require("../configs");
const axiosObject = require("../helpers/axios");

exports.getFlightInformation = async (param) => {
  const url = `${config.FLIGHT_AWARE_BASE_URL}/flights/${param.ident}`;
  const response = await axiosObject.get(
    url,
    null,
    "x-apikey",
    config.FLIGHT_AWARE_CREDENTIALS
  );

  return response;
};

exports.trackFlight = async (param) => {
  const url = `${config.FLIGHT_AWARE_BASE_URL}/flights/${param.id}/track`;
  const response = await axiosObject.get(
    url,
    null,
    "x-apikey",
    config.FLIGHT_AWARE_CREDENTIALS
  );

  return response;
};

exports.getAirportInfo = async (param) => {
  const url = `${config.FLIGHT_AWARE_BASE_URL}/airports/${param.id}`;
  const response = await axiosObject.get(
    url,
    null,
    "x-apikey",
    config.FLIGHT_AWARE_CREDENTIALS
  );

  return response;
};
