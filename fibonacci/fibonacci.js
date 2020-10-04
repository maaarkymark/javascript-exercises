const fibonacci = function (count) {

    let a = 0;
    let b = 1;
    let numberArray = [];

    if (count < 0) {
        return 'OOPS';
    }

    if (count == 0) {
        numberArray = [a];
        return numberArray[0];
    }

    if (count == 1) {
        numberArray = [b];
        return numberArray[0];
    }

    for (let i = 0; i < count; i++) {
        const temp = b;
        //console.log("a here is: " + a);
        //console.log("b here is: " + b);
        numberArray.push(b);
        b = a + b;
        //console.log("Sum of b here is: " + b);
        a = temp;
    }
    return numberArray[count - 1];
};

fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(-25);
fibonacci('1');
fibonacci('2');
fibonacci('8');

module.exports = fibonacci