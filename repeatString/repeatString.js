const repeatString = function (word, times) {
    if (times < 0) {
        return 'ERROR';
    }
    let heyString = '';
    for (let i = 0; i < times; i++) {
        heyString += word;
    }
    return heyString;
}

module.exports = repeatString