const assert = require('assert');

const StringChallenge = (string) => string.split('').reverse().join('');

assert.equal(StringChallenge('Hello'), 'olleH');
assert.equal(StringChallenge('a'), 'a');
assert.equal(StringChallenge('az'), 'za');
assert.equal(StringChallenge('test'), 'tset');
assert.equal(StringChallenge('coderbyte'), 'etybredoc');
assert.equal(StringChallenge('I Love Code'), 'edoC evoL I');
