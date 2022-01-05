const assert = require('assert');

const StringChallenge = (num) => `${Math.floor(num / 60)}:${num % 60}`;

assert.equal(StringChallenge(63), '1:3');
assert.equal(StringChallenge(126), '2:6');
assert.equal(StringChallenge(45), '0:45');

