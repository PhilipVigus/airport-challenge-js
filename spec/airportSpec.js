'use strict';

describe('Airport', function() {
  let airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('.land', function() {
    it('prevents landing when airport is full', function() {
      let plane = {};
      let plane2 = {};
      airport.land(plane);
      expect(function() { airport.land(plane2); } ).toThrowError("Airport is full!");
    });

    it('lands a plane', function() {
      let plane = {};
      expect(function() { airport.land(plane); }).not.toThrow();
    });
  });

  describe('.takeOff', function() {
    it('instructs a plane to take off', function() {
      let plane = {};
      airport.land(plane);
      expect(function() { airport.takeOff(plane); }).not.toThrow();
    });

    it('prevents taking off a plane that is not at the airport', function() {
      let plane = {};
      expect(function() { airport.takeOff(plane); }).toThrowError('Plane is not at airport!');
    });
  });

  describe('.isPlanePresent', function() {
    it('confirms that a plane is no longer at the airport', function() {
      let plane = {};
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.isPlanePresent(plane)).toEqual(false);
    });
  
    it('confirms that a landed plane is at the airport', function() {
      let plane = {};
      airport.land(plane);
      expect(airport.isPlanePresent(plane)).toEqual(true);
    });
  });
});