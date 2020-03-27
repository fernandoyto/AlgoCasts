// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let string;
    if (n < 0) {
        string = '-' + Math.abs(n).toString().split('').reverse().join('');
    } else {
        string = n.toString().split('').reverse().join('');
    }
    return parseInt(string);
}

module.exports = reverseInt;
