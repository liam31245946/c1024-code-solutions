/* exported getLastNameOfPerson */
interface Person2 {
  firstName: string;
  lastName: string;
}
function getLastNameOfPerson(person2: Person2): string {
  return person2.lastName;
}
getLastNameOfPerson({ firstName: 'Ada', lastName: 'Lovelace' });
