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

module.exports = middle;