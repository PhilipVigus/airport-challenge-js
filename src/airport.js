'use strict';

function Airport() {
  let _planes = [];
  const _CAPACITY = 1;
  let _isFull = function() {
    return _planes.length === _CAPACITY;
  };

  this.land = function(plane) {
    if (_isFull()) {
      throw new Error('Airport is full!');
    }

    _planes.push(plane);
  };

  this.planes = function() {
    return _planes;
  };

  this.takeOff = function(plane) {
    if (!_planes.includes(plane)) {
      throw new Error('Plane is not at airport!');
    }

    _planes.pop(plane);
  };
}