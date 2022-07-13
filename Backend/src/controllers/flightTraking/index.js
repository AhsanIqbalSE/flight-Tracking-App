const api = require("../../api");

exports.getflight = async (req, res) => {
  try {
    const param = {
      ident: req.query.ident,
    };
    const response = await api.getFlightInformation(param);

    res.status(200).send(response);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

exports.trackFlight = async (req, res) => {
  try {
    const param = {
      id: req.query.id,
    };
    const response = await api.trackFlight(param);

    res.status(200).send(response);
  } catch (e) {
    res.status(400).send(e.message);
  }
};
