const assertArraysEqual = function(manta, manta2) {
  if(manta.length !== manta2.length){
    console.log(`❌❌❌ ${actual} !== ${expected}`)
    break;
  }

  for (let i = 0; i < manta.length; i++) {
    if (manta[i] !== manta2[i])
      console.log(`❌❌❌ ${actual} !== ${expected}`)
      break;
  }
  console.log(`✅✅✅  ${actual} === ${expected}`);
};