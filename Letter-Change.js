const assert = require('assert');
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const vowelsLetters = ['a', 'e', 'i', 'o', 'u'];

const StringChallenge = (str) => {
    const transformedString = str.toLowerCase().split('').map(letter => transformLetter(letter));

    return transformedString.join('');
};

const transformLetter = (letter) => {
    const indexInAlphabet = alphabet.indexOf(letter);
    if (indexInAlphabet === -1) return letter;
    let tranformed = letter === 'z' ?
        alphabet[0]:
        alphabet[indexInAlphabet + 1];

    if (vowelsLetters.includes(tranformed)) { 
        tranformed = tranformed.toUpperCase()
    }
    return tranformed;
};

assert.equal(StringChallenge('a'), 'b');
assert.equal(StringChallenge('b'), 'c');
assert.equal(StringChallenge('z'), 'A');
assert.equal(StringChallenge('A'), 'b');
assert.equal(StringChallenge('hello*3'), 'Ifmmp*3');
assert.equal(StringChallenge('fun times!'), 'gvO Ujnft!');


