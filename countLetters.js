const countLetters = function(letters) {
  let results = {};
  const manta = letters.split('')

  for (const letter of manta) {
    if (letter !== ' ') {
      if (results[letter])
        results[letter] += 1;
      else
        results[letter] = 1;
    }
  }
  return results;
};

const assertEqual = function(actual, expected) {
  if (actual === expected)
    return (console.log(`✅✅✅  ${actual} === ${expected}`));
  if (actual !== expected)
    return (console.log(`❌❌❌ ${actual} !== ${expected}`));
};

const countBook = countLetters("lighthouse in the house");

assertEqual(countBook["h"], 4);
assertEqual(countBook["z"], undefined);
assertEqual(countBook["n"], 1);