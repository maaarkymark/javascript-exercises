const palindromes = function (word) {
    let count = 0;
    let lowerCaseWord = word.toLowerCase().replace(/[^a-z]/g, '').replace(/\s/g, '');
    let wordArray = [];
    let copyWordArray = [];
    let newWordArray = [];
    wordArray = lowerCaseWord.split('');
    count = wordArray.length;

    for (let i = 0; i < count; i++) {
        copyWordArray[i] = wordArray[i];
    }

    for (let i = 0; i < count; i++) {
        newWordArray[i] = copyWordArray.pop();
    }

    console.log(newWordArray);
    for (let i = 0; i < count; i++) {
        if (wordArray[i] != newWordArray[i]) {
            return false;
        }
    }
    return true;
}

module.exports = palindromes