const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;