/* exported getStudentNames */
function getStudentNames(students: any): any {
  const name = [];
  for (const i in students) {
    name.push(students[i].name);
  }
  return name;
}
