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

  function isFull() {
    return this.planes.length === CAPACITY;
  }
}

Airport.prototype.takeOff = function(plane) {
  this.planes.pop();
};