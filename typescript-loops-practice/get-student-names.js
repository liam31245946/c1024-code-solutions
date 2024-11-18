'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  const name = [];
  for (const i in students) {
    name.push(students[i].name);
  }
  return name;
}
