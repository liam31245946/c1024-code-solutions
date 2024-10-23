function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
convertMinutesToSeconds(5);
convertMinutesToSeconds(10);

function greet(name: string): string {
  return `Hey ${name}`;
}
greet('Beavis');
greet('SpongeBob');

const getArea = (width: number, height: number): number => {
  return width * height;
};
getArea(17, 42);
getArea(22, 38);

interface Person {
  firstName: string;
  lastName: string;
}
const getFirstName = (person: Person): string => {
  return person.firstName;
};
getFirstName({ firstName: 'lelouche', lastName: 'lamperouge' });
getFirstName({ firstName: 'John', lastName: 'Henry' });

const getLastElement = (array: any[]): any => {
  return array[array.length - 1];
};

getLastElement(['propane', 'and', 'propane', 'accessories']);
getLastElement([true, true, false, true]);

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}
callOtherFunction(convertMinutesToSeconds, 10);
callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']);
