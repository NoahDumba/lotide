const flatten = function(manta) {
  let newManta = [];
  for (let i = 0; i < manta.length; i++) {
    if (Array.isArray(manta[i])) {
      for (let x = 0; x < manta[i].length; x++)
        newManta.push(manta[i][x]);
    }
    else
      newManta.push(manta[i]);
  }
  return newManta;
};

const assertArraysEqual = function(manta, manta2) {
  let success = `✅✅✅  [${manta}] === [${manta2}]`;
  let failure = `❌❌❌ [${manta}] !== [${manta2}]`;

  if (manta.length !== manta2.length)
    return console.log(failure);

  for (let i = 0; i < manta.length; i++) {
    if (manta[i] !== manta2[i])
      return console.log(failure);
  }
  return console.log(success);
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2, 3, 4, 5], [6], 7]), [1, 2, 3, 4, 5, 6, 7]);