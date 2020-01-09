const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;

  if(!eqObjects(object1, object2)) {
    console.log(`❌❌❌ ${inspect(object1)} !== ${inspect(object2)}`)
    //return;
  }
  else if(eqObjects(object1, object2))
  console.log(`✅✅✅  ${inspect(object1)} === ${inspect(object2)}`);
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;
  for (key in object1) {
    if (typeof(object1[key]) === 'object') {
      if (!eqArrays(object1[key], object2[key]))
        return false;
    }
    else if (object1[key] !== object2[key])
      return false;
  }
  return true;
};

const eqArrays = function(manta, manta2) {
  if (manta.length !== manta2.length)
    return false;

  for (let i = 0; i < manta.length; i++) {
    if (manta[i] !== manta2[i])
      return false;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false