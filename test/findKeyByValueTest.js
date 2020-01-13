const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#letterPositions", () => {
  it("returns 'The Wire' for 'drama'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it("returns undefined for 'That '70s Show'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'That \'70s Show'), undefined); 
  });
});

//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);