const assert = require('assert');

const MathChallenge = (num1, num2) =>{
    if (num1 === num2) return -1;
    return  num2 > num1 ? true : false;
};

assert.equal(MathChallenge(1, 2), true);
assert.equal(MathChallenge(5, 5), -1);
assert.equal(MathChallenge(20, 10), false);
assert.equal(MathChallenge(-1, 5), true);
assert.equal(MathChallenge(0, -3), false);
assert.equal(MathChallenge(0.25, 0.2552), true);
