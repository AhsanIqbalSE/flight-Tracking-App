const api = require("../../api");

exports.getAirport = async (req, res) => {
  try {
    const param = {
      id: req.query.airportId,
    };

    console.log(param)
    const response = await api.getAirportInfo(param);

    res.status(200).send(response);
  } catch (e) {
    res.status(400).send(e.message);
  }
};
