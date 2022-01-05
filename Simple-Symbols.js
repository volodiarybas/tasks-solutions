const assert = require('assert');

const StringChallenge = (string) => string.split(/[a-z]/g).every(letterSurroundings => letterSurroundings.startsWith('+') 
    && letterSurroundings.endsWith('+') 
);

assert.equal(StringChallenge('++d+===+c++==a'), false);
assert.equal(StringChallenge('+a+'), true);
assert.equal(StringChallenge('a+'), false);
assert.equal(StringChallenge('+d+=3=+s+'), true);
assert.equal(StringChallenge('f++d+'), false);
