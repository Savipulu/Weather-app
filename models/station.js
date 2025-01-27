const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const url = process.env.MONGODB_URI; //
("mongodb://Savipulu:TietoKantaSalaSana123@ds125318.mlab.com:25318/observations"); //process.env.MONGODB_URI;

mongoose.connect(url);

const Station = mongoose.model("Station", {
  name: String,
  lat: String,
  lon: String,
  data: []
});

module.exports = Station;
