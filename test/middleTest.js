const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]); //should be true
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]); //should be true