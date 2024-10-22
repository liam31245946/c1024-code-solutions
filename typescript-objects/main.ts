interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Liam',
  lastName: 'Nguyen',
  age: 23,
};
student.livesInIrvine = true;
student.previousOccupation = 'Moisture Farmer';

const fullName: string = `${student.firstName} ${student.lastName}`;
console.log('value of fullName: ', fullName);
console.log('value of student.livesInIrvine ', student.livesInIrvine);
console.log(
  'value of student.perviousOccupation: ',
  student.previousOccupation
);
console.log('value of student: ', student);

interface Vehicle {
  make: string;
  model: string;
  year: string;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
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

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: 'lily',
  kind: 'German Sheperd',
};
delete pet.name;
delete pet.kind;

console.log('value of pet: ', pet);
console.log('typeof pet: ', pet);
