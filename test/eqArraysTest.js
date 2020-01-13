const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it(`returns true for [1, 2, 3] === [1, 2, 3]`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it(`returns true for [] === []`, () => {
    assert.strictEqual(eqArrays([], []), true);
  });
  it(`returns false for [1, 2, 3] === [3, 2, 1]`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it(`returns false for [1, 2, 3] === [1, 2, 3, 4]`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });
  it(`returns true for [[2, 3], [4]] === [[2, 3], [4]]`, () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it(`returns false for [[2, 3], [4]] === [[2, 3], [4, 5]]`, () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it(`returns false for [[2, 3], [4]] === [[2, 3], 4]`, () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});


//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
//assertEqual(eqArrays([], []), true);
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);

//assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
//assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
//assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false