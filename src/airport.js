'use strict';

function Airport() {
  this.planes = [];
}

Airport.prototype.land = function(plane) {
  if (this.planes.length === 1) {
    throw new Error("Airport is full!"); 
  }

  this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  this.planes.pop();
};