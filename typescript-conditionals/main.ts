/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number: number): string {
  if (number < 5) {
    return 'True';
  } else {
    return 'False';
  }
}
console.log('4', isUnderFive(4));
console.log('10', isUnderFive(10));
console.log('5', isUnderFive(5));

function isEven(number: number): string {
  if (number % 2 === 0) {
    return 'True';
  } else {
    return 'False';
  }
}
console.log('4', isEven(4));
console.log('10', isEven(10));
console.log('5', isEven(5));

function startsWithJ(string: any): any {
  if (string[0] === 'J' || string[0] === 'j') {
    return 'True';
  } else {
    return 'False';
  }
}

console.log('Javascript', startsWithJ('JavaScript'));
console.log('PHP', startsWithJ('PHP'));
console.log('HTML', startsWithJ('HTML'));
console.log('Java ', startsWithJ('Java'));
console.log('kotlin', startsWithJ('Kotlin'));
console.log('C#', startsWithJ('C#'));

interface Person {
  name: string;
  age: number;
}
const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};
function isOldEnoughToDrink(person: Person): string {
  if (person.age < 21) {
    return 'False';
  } else {
    return 'True ';
  }
}
console.log('isOldEnoughToDrink', isOldEnoughToDrink(bart));

const homer = {
  name: 'Homer Jay Simpson',
  age: 39,
};

function isOldEnoughToDrive(person: Person): string {
  if (person.age > 16) {
    return 'True';
  } else {
    return 'False';
  }
}
console.log('isOldEnoughToDrive', isOldEnoughToDrive(homer));

function categorizeAcidity(ph: number): string {
  if (ph === 7) {
    return 'Neutral';
  } else if (ph < 7) {
    return 'Acid';
  } else {
    return 'invalid pH level';
  }
}
console.log('-1', categorizeAcidity(-1));
console.log('14.0000001', categorizeAcidity(14.0000001));
console.log('7', categorizeAcidity(7));
console.log('2', categorizeAcidity(2));
console.log('9', categorizeAcidity(9));

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return "We're the warner brother";
    case 'wakko':
      return "We're the warner brother";
    case 'dot':
      return "I'm cute ~";
    default:
      return 'Goodnight everybody!';
  }
}

console.log('yakko', introduceWarnerBro('yakko'));
// "We're the warner brothers!"
console.log('wakko', introduceWarnerBro('wakko'));
// "We're the warner brothers!"
console.log('dot', introduceWarnerBro('dot'));
// "I'm cute~"
console.log('cody', introduceWarnerBro('cody'));
// "Goodnight everybody!"
console.log('minverva', introduceWarnerBro('minerva'));
// "Goodnight everybody!"

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Die hard';
    case 'comedy':
      return 'The big Lebowski';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
console.log('action', recommendMovie('action'));
// "Die Hard"
console.log('comedy', recommendMovie('comedy'));
// "The Big Lebowski"
console.log('random', recommendMovie('random'));
// "Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi"
