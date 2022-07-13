const express = require("express");
const router = new express.Router();
const flightTracking = require("../../controllers/flightTraking");

router.get("/track/flight", flightTracking.getflight);
router.get("/track/flight/location", flightTracking.trackFlight);

module.exports = router;
