const assertArraysEqual = function(manta, manta2) {
  if(!eqArrays(manta, manta2)) {
    console.log(`❌❌❌ ${manta} !== ${manta2}`)
    return;
  }
  if(eqArrays(manta, manta2))
  console.log(`✅✅✅  ${manta} === ${manta2}`);
};

const eqArrays = function(manta, manta2) {
  if(manta.length !== manta2.length)
    return false

  for (let i = 0; i < manta.length; i++) {
    if (manta[i] !== manta2[i])
      return false
  }
  return true
};

const map = function(manta, funk) {
  const results = [];

  for (let item of manta) {
      funk(item) ? results.push(funk(item)) : null;
    }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t']);
assertArraysEqual(map(nums, num => num % 3 === 0 ? num : null), [3, 6, 9]);

