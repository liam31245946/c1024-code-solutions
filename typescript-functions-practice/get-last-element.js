'use strict';
function getLastElement(array) {
  return array[array.length - 1];
}
getFirstElement(['foo', 'bar', 'baz']);
getFirstElement([9, 10, 19, 20]);
getFirstElement([false, true]);
getLastElement([9, 10, 19, 20]);
