'use strict';

function Airport() {
  this.planes = [];
  const CAPACITY = 1;

  this.land = function(plane) {
    if (this.isFull()) {
      throw new Error("Airport is full!"); 
    }
  
    this.planes.push(plane);
  };

  this.isFull = function() {
    return this.planes.length === CAPACITY;
  }
}

Airport.prototype.takeOff = function(plane) {
  if (!this.planes.includes(plane)) {
    throw new Error("Plane is not at airport!")
  }
  
  this.planes.pop();
};

Airport.prototype.isPlanePresent = function(plane) {
  return false;
};