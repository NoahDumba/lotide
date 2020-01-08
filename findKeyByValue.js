const findKeyByValue = function (object, value) {
  for (key in object) {
    if (object[key] === value)
      return key;
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected)
    return (console.log(`✅✅✅  ${actual} === ${expected}`));
  if (actual !== expected)
    return (console.log(`❌❌❌ ${actual} !== ${expected}`));
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);