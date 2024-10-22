'use strict';
const student = {
  firstName: 'Liam',
  lastName: 'Nguyen',
  age: 23,
  livesInIrvine: true,
  previousOccupation: 'Moisture Farmer',
};
const fullName = `${student.firstName} ${student.lastName}`;
console.log('value of fullName: ', fullName);
console.log('value of student.livesInIrvine ', student.livesInIrvine);
console.log(
  'value of student.perviousOccupation: ',
  student.previousOccupation
);
console.log('value of student: ', student);
const vehicle = {
  make: 'Honda',
  model: 'CRV',
  year: '2009',
};
vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]: ', vehicle['color']);
console.log(['value of vehicle["isConvertible"]: ', vehicle['isConvertible']]);
console.log('value of vehicle: ', vehicle);
console.log('typeof vehicle: ', typeof vehicle);
const pet = {
  name: 'lily',
  kind: 'German Sheperd',
};
delete pet.name;
delete pet.kind;
console.log('value of pet: ', pet);
console.log('typeof pet: ', pet);
