'use strict';
/* exported findIndex */
function findIndex(arrays, value) {
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] === value) {
      return i;
    }
  }
  return -1;
}
