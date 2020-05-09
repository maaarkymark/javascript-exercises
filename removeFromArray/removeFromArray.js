const removeFromArray = function (...args) {
  const array = args[0];
  const newArray = [];
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  //console.log(newArray);
  return newArray;
};
/*
let i = 0;
let par1, par2, par3, par4, termToRemove1, termToRemove2, termToRemove3, termToRemove4;
let newArray = [];
arrayToAdd = [par1, par2, par3, par4];

const removeFromArray = function (arrayToAdd, termToRemove1, termToRemove2, termToRemove3, termToRemove4) {
  while (i < arrayToAdd.length) {
    if (arrayToAdd[i] == termToRemove1 || arrayToAdd[i] == termToRemove2 || arrayToAdd[i] == termToRemove3 ||
      arrayToAdd[i] == termToRemove4) {
      // Do nothing... don't save termToRemove1/2/3/4 in newArray
    } else {
      newArray.push(arrayToAdd[i]);
      console.log('line ' + i + ': ' + newArray);
    }
    i++;
  }
  console.log(newArray);
  return newArray;
}

const emptyArray = function () {
  newArray = [];
}
*/

removeFromArray([1, 2, 3, 4], 3);
//emptyArray();
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 3, 4], 7, 'tacos');
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(['hey', 2, 3, 'ho'], 'hey', 3);

module.exports = removeFromArray