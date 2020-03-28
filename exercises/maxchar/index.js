// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {}
    for (let char of str) {
        if (obj[char] === undefined) {
            obj[char] = 1;
        } else {
            obj[char]++;
        }
    }
    return Object.keys(obj).reduce((max, current) => obj[current] > max ? obj[current] : max);
}

maxChar('aabbbcdeee')

module.exports = maxChar;
