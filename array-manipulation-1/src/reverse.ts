/* exported reverse */
function reverse(array: any): any[] {
  const index: any[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    index.push(array[i]);
  }
  return index;
}
