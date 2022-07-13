const express = require("express");
const router = new express.Router();
const airportTraking = require("../../controllers/airportTraking");

router.get("/get/airport", airportTraking.getAirport);

module.exports = router;
