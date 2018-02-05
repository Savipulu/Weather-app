const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Station = require("./models/station");

app.use(cors());
app.use(bodyParser.json());

const formatStation = station => {
  return {
    id: station._id,
    name: station.name,
    lat: station.lat,
    lon: station.lon,
    data: station.data
  };
};

app.get("/", (req, res) => {
  Station.find({}).then(stations => {
    res.json(stations.map(formatStation));
  });
});

app.get("/stations", (req, res) => {
  Station.find({}).then(stations => {
    res.json(stations.map(formatStation));
  });
});

app.get("/stations/:id", (req, res) => {
  Station.findById(req.params.id)
    .then(station => {
      res.json(formatStation(station));
    })
    .catch(error => {
      console.log(error);
      res.status(404).end();
    });
});

app.put("/stations/:id", (req, res) => {
  const body = req.body;

  console.log("HALOOOO " + body);

  const station = {
    name: body.name,
    lat: body.lat,
    lon: body.lon,
    data: body.data
  };

  Station.findByIdAndUpdate(req.params.id, station, { new: true })
    .then(updatedStation => {
      res.json(formatStation(updatedStation));
    })
    .catch(error => {
      console.log(error);
      response.status(400).end();
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
