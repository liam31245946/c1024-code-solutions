'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
convertMinutesToSeconds(5);
convertMinutesToSeconds(10);
function greet(name) {
  return `Hey ${name}`;
}
greet('Beavis');
greet('SpongeBob');
const getArea = (width, height) => {
  return width * height;
};
getArea(17, 42);
getArea(22, 38);
const getFirstName = (person) => {
  return person.firstName;
};
getFirstName({ firstName: 'lelouche', lastName: 'lamperouge' });
getFirstName({ firstName: 'John', lastName: 'Henry' });
const getLastElement = (array) => {
  return array[array.length - 1];
};
getLastElement(['propane', 'and', 'propane', 'accessories']);
getLastElement([true, true, false, true]);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
callOtherFunction(convertMinutesToSeconds, 10);
callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']);
