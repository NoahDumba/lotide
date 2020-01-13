const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [2, 3] for ('hello').l", () => {
    assert.deepEqual(letterPositions('hello').l, [2, 3]);
  });
  it("returns [4] for ('hello').o", () => {
    assert.deepEqual(letterPositions('hello').o, [4]); 
  });
});