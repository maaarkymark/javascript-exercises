function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum([...args]) {
	let sum = 0;
	for (let i = 0; i < args.length; i++) {
		sum += args[i];
	}
	return sum;
}

function multiply([...args]) {
	let normalArray = args;
	let firstArg = normalArray.shift();
	for (let i = 0; i < args.length; i++) {
		firstArg *= args[i];
	}
	return firstArg;
}

function power(a, b) {
	return a ** b;
}

function factorial(a) {
    let result = a;
    if ((a === 0) || (a === 1)) {
      result = 1;
    } else {
      while (a > 1) {
        a--;
        result *= a;
      }
    }
    return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}