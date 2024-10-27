/* exported initial */
function initial(array: any[]): any {
  const index: any[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    index.push(array[i]);
  }
  return index;
}
