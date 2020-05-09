const sumAll = function (min, max) {
    let sum = 0;
    if (typeof min === typeof max) {
        if (min < max) {
            if (min < 0 || max < 0) {
                return 'ERROR';
            } else {
                while (min <= max) {
                    sum += min;
                    min++;
                }
            }
        } else {
            let temp = 0;
            temp = min;
            min = max;
            max = temp;
            while (min <= max) {
                sum += min;
                min++;
            }
        }
        return sum;
    } else {
        return 'ERROR';
    }
}
sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, '90');
sumAll(10, [90, 1]);

module.exports = sumAll