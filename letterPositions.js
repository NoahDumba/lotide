const letterPositions = function(sentence) {
  const results = {};
  for (index in sentence) {
    if (sentence[index] !== ' ') {
      if (results[sentence[index]])
        results[sentence[index]].push(Number(index));
      else
        results[sentence[index]] = [Number(index)];
    }
  }
  return results;
};

module.exports = letterPositions;