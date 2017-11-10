'use strict'

let expect = require('chai').expect;
let converter = require('..');

describe('Temperature Conversor', function () {

  describe('Celsius to Fahrenheit conversion', function () {

    it('Converts 100C to Fahrenheit', function () {
      let fh = converter.toFahrenheit(100);
      expect(fh).to.equal(212);
    })

  })

  describe('Fahrenheit to Celsius conversion', function () {

    it('Converts 212F to Celsius', function () {
      let cs = converter.toCelsius(212);
      expect(cs).to.equal(100);
    })

  })

})