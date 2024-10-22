const colors: string[] = ['red', 'white', 'blue'];
console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);

const America: string = `America is ${colors[0]} ${colors[1]} ${colors[2]}`;
console.log(America);
colors[2] = 'green';

const Mexico: string = `Mexico is ${colors[0]} ${colors[1]} ${colors[2]} `;
console.log(Mexico);
console.log('value of colors: ', colors);
console.log('typeof of colors: ', typeof colors);

const student: string[] = ['Leonardo', 'Donatello', 'raphael', 'Michelangelo'];
const numberOfStudent: number = student.length;
console.log(`There are ${numberOfStudent} students in the class`);

const lastIndex: number = numberOfStudent - 1;
const lastStudent: string = student[lastIndex];
console.log(`The last student in the array is ${lastStudent}`);
console.log('value of student: ', student);
console.log('typeof student: ', typeof student);
