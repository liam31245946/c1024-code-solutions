/* exported getValues */
function getValues(object: any): any {
  const values: any[] = [];
  for (const value in object) {
    values.push(object[value]);
  }
  return values;
}
