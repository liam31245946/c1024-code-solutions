'use strict';
const heroes = ['thor', 'loki', 'odin', 'hulk'];
let randomNumber = Math.random();
const heroesNumber = heroes.length;
randomNumber = randomNumber * heroesNumber;
const randomIndex = Math.floor(randomNumber);
console.log(randomIndex);
console.log(heroes[randomIndex]);
const library = [
  {
    title: 'The Great Gatsby',
    author: ' F. Scott Fitzgerald',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    title: '1984',
    author: 'George Orwell',
  },
];
const lastBook = library.pop();
console.log('Last book: ', lastBook);
const firstBook = library.shift();
console.log('First book: ', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.push(css);
library.splice(0, 1);
console.log('library', library);
const fullName = 'Liam Nguyen ';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
const employee = {
  name: 'James',
  age: 32,
  position: 'VP',
};
const employeeKeys = Object.keys(employee);
console.log('employeeKeys ', employeeKeys);
const employeeValues = Object.values(employee);
console.log('EmployeeValues ', employeeValues);
const employeesPairs = Object.entries(employee);
console.log('EmployeePairs ', employeesPairs);
