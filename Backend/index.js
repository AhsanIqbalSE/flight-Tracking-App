const express = require("express");
const cors = require("cors");

const flightTracking = require("./src/routers/flightTracking");
const airportTracking = require("./src/routers/airportTracking");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(flightTracking);
app.use(airportTracking);

app.listen(port, () => {
  console.log("Server Is Listening On Port: " + port);
});
