const assert = require('chai').assert;
const flatten = require('../flatten');

//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
//assertArraysEqual(flatten([[1, 2, 3, 4, 5], [6], 7]), [1, 2, 3, 4, 5, 6, 7]);

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns [1, 2, 3, 4, 5, 6, 7] for [[1, 2, 3, 4, 5], [6], 7]", () => {
    assert.deepEqual(flatten([[1, 2, 3, 4, 5], [6], 7]), [1, 2, 3, 4, 5, 6, 7]); 
  });
});