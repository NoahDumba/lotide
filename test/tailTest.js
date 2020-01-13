const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns 2 for ['Yo Yo', 'Lighthouse', 'Labs'].length", () => {
    assert.strictEqual(tail(words).length, 2);
  });
  it("returns 'Lighthouse' for ['Yo Yo', 'Lighthouse', 'Labs'] at [0]", () => {
    assert.strictEqual(tail(words)[0], 'Lighthouse');
  });
  it("returns 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs'] at [1]", () => {
    assert.strictEqual(tail(words)[1], 'Labs');
  });
});