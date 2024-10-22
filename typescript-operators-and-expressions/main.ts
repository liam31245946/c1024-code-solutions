const width: number = 5;
const len: number = 10;
const area: number = width * len;
console.log('value of area: ', area);
console.log('type of area: ', typeof area);

const bill: number = 200;
const payment: number = 1000;
const change: number = payment - bill;
console.log('value of change: ', change);
console.log('type of change: ', typeof change);

const quizzes: number = 90;
const midterm: number = 100;
const final: number = 40;
const grade: number = (quizzes + midterm + final) / 3;
console.log('value of grade: ', grade);
console.log('type of grade: ', typeof grade);

const firstName: string = 'Liam';
const lastName: string = 'Nguyen';
const fullName: string = firstName + lastName;
console.log('value of fullName: ', fullName);
console.log('type of fullName: ', typeof fullName);

const pH: number = 8;
const isAcidic: boolean = pH < 7;
console.log('value of isAcidic', isAcidic);
console.log('type of isAcidic ', typeof isAcidic);

const headcount: number = 100;
const isSparta: boolean = headcount === 300;
console.log('value of isSparta', isSparta);
console.log('type of is Sparta', typeof isSparta);

let motto: string = fullName;
motto += 'is the GOAT';

console.log('value of motto ', motto);
console.log('type of motto ', typeof motto);
