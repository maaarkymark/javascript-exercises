const reverseString = function (word) {
    let wordArray = Array.from(word);
    let reverseArray = [];
    let reverseStr = '';
    for (let i = 0; i < wordArray.length; i++) {
        reverseArray[i] = wordArray[(wordArray.length - i) - 1];
        reverseStr += reverseArray[i];
    }
    return reverseStr;
}
reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');

module.exports = reverseString