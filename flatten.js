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

module.exports = flatten;