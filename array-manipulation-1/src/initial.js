'use strict';
/* exported initial */
function initial(array) {
  const index = [];
  for (let i = 0; i < array.length - 1; i++) {
    index.push(array[i]);
  }
  return index;
}
