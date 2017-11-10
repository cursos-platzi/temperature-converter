let expect = require('chai').expect;
let axios = require('axios');

describe('Temperature Conversor API', function () {

  describe('Celsius to Fahrenheit consversion', function () {

    it('returns status 200', function (done) {

      axios
        .get('http://localhost:3000/toFahrenheit?temperature=100')
        .then(function(res) {
          expect(res.status).to.equal(200);
          done();
        })

    })

    it('returns 100C in Fahrenheit', function (done) {

      axios
        .get('http://localhost:3000/toFahrenheit?temperature=100')
        .then(function(res) {
          expect(res.data).to.equal(212);
          done();
        })

    })

  })

  describe('Fahrenheit to Celsius consversion', function () {

    it('returns status 200', function (done) {

      axios
        .get('http://localhost:3000/toCelsius?temperature=212')
        .then(function(res) {
          expect(res.status).to.equal(200);
          done();
        })

    })

    it('returns 100C in Fahrenheit', function (done) {

      axios
        .get('http://localhost:3000/toCelsius?temperature=212')
        .then(function(res) {
          expect(res.data).to.equal(100);
          done();
        })

    })

  })

})