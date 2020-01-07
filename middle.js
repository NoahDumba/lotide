const middle = function(manta) {
  let newManta = [];
  let midIndex = Math.floor(manta.length / 2);

  if (manta.length === 1 || manta.length === 2)
    return newManta;

  if (manta.length % 2 === 0) {
    newManta.push(manta[midIndex - 1]);
    newManta.push(manta[midIndex]);
  }
  else {
    newManta.push(manta[midIndex]);
  }
  return newManta;
};

const assertArraysEqual = function(manta, manta2) {
  let success = `✅✅✅  [${manta}] === [${manta2}]`;
  let failure = `❌❌❌ [${manta}] !== [${manta2}]`;

  if(manta.length !== manta2.length)
    return console.log(failure);

  for (let i = 0; i < manta.length; i++) {
    if (manta[i] !== manta2[i])
      return console.log(failure);
  }
  return console.log(success)
};


assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]); //should be true
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]); //should be true