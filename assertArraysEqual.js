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