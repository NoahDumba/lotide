const assertArraysEqual = function(manta, manta2) {
  if(manta.length !== manta2.length){
    console.log(`❌❌❌ ${manta} !== ${manta2}`)
    break;
  }

  for (let i = 0; i < manta.length; i++) {
    if (manta[i] !== manta2[i])
      console.log(`❌❌❌ ${manta} !== ${manta2}`)
      break;
  }
  console.log(`✅✅✅  ${manta} === ${manta2}`);
};