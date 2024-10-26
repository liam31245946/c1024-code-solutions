'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen', getNumbersToTen());
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumberstotwenty', getEvenNumbersToTwenty());
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('repeatWord', repeatWord('javascript ', 30));
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
logEachCharacter('javascript');
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i <= numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('DoubleAll', doubleAll([5, 7, 9, 11]));
function sumArray(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}
console.log('sumArray', sumArray([1, 2, 3, 4, 5]));
function reverseString(str) {
  let reversed = '';
  for (const character of str) {
    reversed = character + reversed;
  }
  return reversed;
}
console.log('reversedString ', reverseString('hello'));
function getKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
console.log(
  'getKeyes',
  getKeys({ isbn: '978', title: 'SpeakingJs', author: 'Dr.Axel Rauschmayer' })
);
function getValues(obj) {
  const values = [];
  for (const value in obj) {
    values.push(obj[value]);
  }
  return values;
}
console.log(
  'getValues',
  getValues({ isbn: '978', title: 'SpeakingJs', author: 'Dr.Axel Rauschmayer' })
);
