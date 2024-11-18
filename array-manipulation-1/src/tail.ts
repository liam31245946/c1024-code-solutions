/* exported tail */
function tail(array: any[]): any[] {
  const index: any[] = [];
  for (let i = 1; i < array.length; i++) {
    index.push(array[i]);
  }
  return index;
}
