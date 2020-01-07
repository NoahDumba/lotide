const without = function(manta, removeManta) {
  let newManta = [];

  for (let i = 0; i < manta.length; i++) {
    let toBeRemoved = false;

    for (let y = 0; y < removeManta.length; y++) {
      if (manta[i] === removeManta[y])
        toBeRemoved = true;
    }
    if (!toBeRemoved) {
      newManta.push(manta[i]);
    }
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

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']);

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);