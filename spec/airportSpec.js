'use strict';

describe('Airport', () => {
  let airport;

  beforeEach(() => {
    airport = new Airport();
  });

  describe('#land', () => {
    it('stores a plane when landed', () => {
      let plane = {};
      airport.land(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('prevents landing when airport is full', () => {
      let plane = {};
      let plane2 = {};
      airport.land(plane);
      expect(function() { airport.land(plane2); } ).toThrowError('Airport is full!');
    })
  });  


  describe('#takeOff', () => {
    it('instructs a plane to take off', () => {
      let plane = {};
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  
    it('throws an error if you take off a plane that is not at the airport', () => {
      let plane = {};
      expect(function() { airport.takeOff(plane); }).toThrowError('Plane is not at airport!');
    });
  });
});