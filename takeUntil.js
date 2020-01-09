const eqArrays = function(manta, manta2) {
  if(manta.length !== manta2.length)
    return false

  for (let i = 0; i < manta.length; i++) {
    if (manta[i] !== manta2[i])
      return false
  }
  return true
};

const assertArraysEqual = function(manta, manta2) {
  if(!eqArrays(manta, manta2)) {
    console.log(`❌❌❌ ${manta} !== ${manta2}`)
    return;
  }
  if(eqArrays(manta, manta2))
  console.log(`✅✅✅  ${manta} === ${manta2}`);
};


const takeUntil = function(manta, funk) {
  let results = [];

  for(let item of manta) {
    if(!funk(item))
      results.push(item);
    else
      return results;
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood",]);
