const axios = require("axios");

const axiosObject = {};

axiosObject.post = async function (url, body, authLabel, authValue) {
  try {
    axios.defaults.headers.common = {
      [authLabel]: authValue,
    };

    const response = await axios.post(url, body, { withCredentials: false });
    return response.data;
  } catch (e) {
    const message = e.message;
    throw new Error(message);
  }
};

axiosObject.patch = async function (url, body, authLabel, authValue) {
  try {
    axios.defaults.headers.common = {
      [authLabel]: authValue,
    };

    const response = await axios.patch(url, body);
    return response.data;
  } catch (e) {
    const message = e.message;
    throw new Error(message);
  }
};

axiosObject.delete = async function (url, body, authLabel, authValue) {
  try {
    axios.defaults.headers.common = {
      [authLabel]: authValue,
    };

    const response = await axios.delete(url, { data: body });
    return response.data;
  } catch (e) {
    const message = e.message;
    throw new Error(message);
  }
};

axiosObject.get = async function (url, params, authLabel, authValue) {
  try {
    axios.defaults.headers.common = {
      [authLabel]: authValue,
    };

    const response = await axios.get(url, {
      params,
    });

    return response.data;
  } catch (e) {
    const message = e.message;
    throw new Error(message);
  }
};

module.exports = axiosObject;
