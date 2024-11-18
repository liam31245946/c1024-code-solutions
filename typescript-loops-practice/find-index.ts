/* exported findIndex */
function findIndex(arrays: any[], value: any): any {
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] === value) {
      return i;
    }
  }
  return -1;
}
