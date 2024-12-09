'use strict';
function getFullNameOfPerson(person1) {
  return `${person1.firstName} ${person1.lastName}`;
}
getFullNameOfPerson({ firstName: 'Ada', lastName: 'Lovelace' });
getFullNameOfPerson({ firstName: 'Barbara', lastName: 'Liskov' });
getFullNameOfPerson({ firstName: 'Grace', lastName: 'Hopper' });
