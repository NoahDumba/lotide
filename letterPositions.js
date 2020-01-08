const letterPositions = function(sentence) {
  const results = {};
  for (index in sentence) {
    if (sentence[index] !== ' ') {
      if (results[sentence[index]])
        results[sentence[index]].push(Number(index));
      else
        results[sentence[index]] = [Number(index)];
    }
  }
  return results;
};

const eqArrays = function(manta, manta2) {
  if (manta.length !== manta2.length)
    return false;

  for (let i = 0; i < manta.length; i++) {
    if (manta[i] !== manta2[i])
      return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected))
    return (console.log(`✅✅✅  ${actual} === ${expected}`));
  if (!eqArrays(actual, expected))
    return (console.log(`❌❌❌ ${actual} !== ${expected}`));
};

assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions('hello').o, [4]);