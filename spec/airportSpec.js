describe('Airport', function() {
  let airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it('lands a plane', function() {
    expect(airport.land).toBeDefined();
  });

  'use strict';
  
  it('airport stores plane when landed', function() {
    let plane = {};
    airport.land(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it('instructs a plane to take off', function() {
    let plane = {};
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes).toEqual([]);
  });

  it('prevents landing when airport is full', function() {
    let plane = {};
    let plane2 = {};
    airport.land(plane);
    expect(function() { airport.land(plane2); } ).toThrowError("Airport is full!");
  })
});

//expect(function() { parser.parse(raw); } ).toThrow("Parsing is not possible");
