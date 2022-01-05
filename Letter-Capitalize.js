const assert = require('assert');

const StringChallenge = (string) => string.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');

assert.equal(StringChallenge('hello world'), 'Hello World');
assert.equal(StringChallenge('i ran there'), 'I Ran There');
assert.equal(StringChallenge('a'), 'A');
assert.equal(StringChallenge('i am'), 'I Am');
