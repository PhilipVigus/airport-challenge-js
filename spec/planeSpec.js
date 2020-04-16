'use strict';

describe('Plane', () => {
  let plane;

  beforeEach(() => {
    plane = new Plane();
  });

  describe('#isFlying', () => {
    it('returns true when you first create a plane', () => {
      expect(plane.isFlying()).toEqual(true);
    });
  });

  describe('#land', () => {
    it('makes isFlying return false', () => {
      plane.land();
      expect(plane.isFlying()).toEqual(false);
    });
  });

  describe('#takeOff', () => {
    it('makes isFlying return true', () => {
      plane.land();
      plane.takeOff();
      expect(plane.isFlying()).toEqual(true);
    });
  });
});