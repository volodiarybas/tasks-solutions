const assert = require('assert');

const StringChallenge = (string) => string.split(/[a-z]|[0-9]/g).every(letterSurroundings => letterSurroundings.startsWith('+') 
    && letterSurroundings.endsWith('+') 
    || letterSurroundings.length === 0
);

assert.equal(StringChallenge('++d+===+c++==a'), false);
assert.equal(StringChallenge('+a+'), true);
assert.equal(StringChallenge('a+'), true);
assert.equal(StringChallenge('+d+=3=+s+'), false);
assert.equal(StringChallenge('f++d+'), true);
