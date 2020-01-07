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