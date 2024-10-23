function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(5));
console.log(convertMinutesToSeconds(10));

function greet(name: string): string {
  return `Hey ${name}`;
}
greet('Beavis');
greet('SpongeBob');

const getArea = (width: number, height: number): number => {
  return width * height;
};
console.log(getArea(17, 42));
console.log(getArea(22, 38));

interface Person {
  firstName: string;
  lastName: string;
}
const getFirstName = (person: Person): string => {
  return person.firstName;
};
console.log(getFirstName({ firstName: 'lelouche', lastName: 'lamperouge' }));
console.log(getFirstName({ firstName: 'John', lastName: 'Henry' }));

const getLastElement = (array: any[]): any => {
  return array[array.length - 1];
};

console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
console.log(getLastElement([true, true, false, true]));

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}
console.log(callOtherFunction(convertMinutesToSeconds, 10));
console.log(callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']));
