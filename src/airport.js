'use strict';

function Airport() {
  const _planes = [];
  const _CAPACITY = 1;

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
    return _planes.length === _CAPACITY;
  };
}