const eqArrays = function(manta, manta2) {
  if(manta.length !== manta2.length)
    return false

  for (let i = 0; i < manta.length; i++) {
    if (manta[i] !== manta2[i])
      return false
  }
  return true
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected))
    return (console.log(`✅✅✅  ${actual} === ${expected}`));
  if (!eqArrays(actual, expected))
    return (console.log(`❌❌❌ ${actual} !== ${expected}`));
};
