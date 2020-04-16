'use strict';

function Airport(capacity = 1) {
  let _planes = [];
  let _capacity = capacity;

  this.land = function(plane) {
    if (_isFull()) {
      throw new Error("Airport is full!"); 
    }
    _planes.push(plane);
  };

  this.takeOff = function(plane) {
    if (!_planes.includes(plane)) {
      throw new Error("Plane is not at airport!")
    }
    
    _planes.pop();
  }

  this.isPlanePresent = function(plane) {
    return _planes.includes(plane);
  };

  let _isFull = function() {
    return _planes.length === _capacity;
  };
}