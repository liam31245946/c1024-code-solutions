function getFirstElement(array: any[]): any {
  return array[0];
}
getFirstElement(['foo', 'bar', 'baz']);
getFirstElement([9, 10, 19, 20]);
getFirstElement([false, true]);

console.log(getFirstElement([9, 10, 19, 20]));
