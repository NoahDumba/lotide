const assertEqual = function(actual, expected) {
  if (actual === expected)
    return (console.log(`✅✅✅  ${actual} === ${expected}`));
  if (actual !== expected)
    return (console.log(`❌❌❌ ${actual} !== ${expected}`));
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Foo", "Foo");
assertEqual(1, 1.1);