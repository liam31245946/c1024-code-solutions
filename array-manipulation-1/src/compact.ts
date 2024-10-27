/* exported compact */
function compact(array: any[]): any {
  const index = [];
  for (const i of array) {
    if (i) {
      index.push(i);
    }
  }
  return index;
}
