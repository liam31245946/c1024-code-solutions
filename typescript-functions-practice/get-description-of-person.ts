/* exported getDescriptionOfPerson */
interface Person {
  name: string;
  occupation: string;
  birthplace: string;
}

function getDescriptionOfPerson(person: Person): string {
  return `${person.name} is ${person.occupation} from ${person.birthplace}.`;
}
