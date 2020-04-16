'use strict';

function Plane() {
  this._flying = true;
}

Plane.prototype.isFlying = function() {
  return this._flying;
};

Plane.prototype.land = function() {
  this._flying = false;
};