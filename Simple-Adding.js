const assert = require('assert');

const MathChallenge = num => {
  if (num === 1) return num;
  return num + MathChallenge(num - 1);
};

assert.equal(MathChallenge(1), 1);
assert.equal(MathChallenge(4), 10);
assert.equal(MathChallenge(12), 78);
assert.equal(MathChallenge(140), 9870);
