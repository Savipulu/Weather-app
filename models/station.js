const mongoose = require("mongoose");

const url = "local"; //process.env.MONGODB_URI;

mongoose.connect(url);

const Station = mongoose.model("Station", {
  name: String,
  lat: String,
  lon: String,
  data: []
});

module.exports = Station;
