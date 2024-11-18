'use strict';
/* exported reverse */
function reverse(array) {
  const index = [];
  for (let i = array.length - 1; i >= 0; i--) {
    index.push(array[i]);
  }
  return index;
}
