'use strict';

function Plane() {
  let _flying = true;

  this.isFlying = function() {
    return _flying;
  };

  this.land = function() {
    _flying = false;
  };

  this.takeOff = function() {
    _flying = true;
  };
}