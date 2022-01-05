const assert = require('assert');

const StringChallenge = (sen) => {
    const arrayFromSentence = sen.match(/\w+(?:'\w+)*/g);

    let largestWord = arrayFromSentence[0];
    for (let index = 0; index < arrayFromSentence.length; index ++) {
        if (arrayFromSentence[index].length > largestWord.length) {
            largestWord = arrayFromSentence[index];
        }
    }

    return largestWord;
}

assert.equal(StringChallenge('I love dogs'), 'love');
assert.equal(StringChallenge('fun&!! time'), 'time');
assert.equal(StringChallenge('&!!!!!!!!!  a )()**&'), 'a');
assert.equal(StringChallenge('asd aul!!!! final'), 'final');



