'use strict'

let express = require('express');
let converter = require('..');

let app = express();

app.get('/toCelsius', function (req, res) {
  let temperature = req.query.temperature;
  res.status(200).send(converter.toCelsius(temperature).toString());
})

app.get('/toFahrenheit', function (req, res) {
  let temperature = req.query.temperature;
  res.status(200).send(converter.toFahrenheit(temperature).toString());
})

app.listen(3000);