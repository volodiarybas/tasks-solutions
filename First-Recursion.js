const assert = require('assert');

const RecursionChallenge = num => {
	if (num === 1) return num;
  return num * RecursionChallenge(num - 1);
};

assert.equal(RecursionChallenge(1), 1);
assert.equal(RecursionChallenge(3), 6);
assert.equal(RecursionChallenge(4), 24);
assert.equal(RecursionChallenge(8), 40320);
