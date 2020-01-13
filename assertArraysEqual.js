const eqArrays = require('./eqArrays')

const assertArraysEqual = function(manta, manta2) {
  if(!eqArrays(manta, manta2)) {
    console.log(`❌❌❌ ${manta} !== ${manta2}`)
    return;
  }
  if(eqArrays(manta, manta2))
  console.log(`✅✅✅  ${manta} === ${manta2}`);
};

module.exports = assertArraysEqual;