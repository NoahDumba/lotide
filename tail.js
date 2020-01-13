const assertEqual = require('./assertEqual');

const tail = function(manta) {
  let manta2 = manta.slice(1);
  return (manta2);
};

module.exports = tail;