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
});