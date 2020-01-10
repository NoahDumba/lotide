const eqArrays = function(manta, manta2) {
  if(manta.length !== manta2.length)
    return false

  for (let i = 0; i < manta.length; i++) {
    if (Array.isArray(manta[i]) && Array.isArray(manta2[i])) {
      if(!eqArrays(manta[i], manta2[i])){
        return false;
      }
    }
    else if (manta[i] !== manta2[i])
      return false
  }
  return true
};

const assertEqual = function(actual, expected) {
  if (actual === expected)
    return (console.log(`✅✅✅  ${actual} === ${expected}`));
  if (actual !== expected)
    return (console.log(`❌❌❌ ${actual} !== ${expected}`));
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false