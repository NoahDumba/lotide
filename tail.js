const assertEqual = function(actual, expected) {
  if (actual === expected)
    return (console.log(`✅✅✅  ${actual} === ${expected}`));
  if (actual !== expected)
    return (console.log(`❌❌❌ ${actual} !== ${expected}`));
};

const tail = function(manta) {
  let manta2 = manta.slice(1);
  return (manta2);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs");