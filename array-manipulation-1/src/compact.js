'use strict';
/* exported compact */
function compact(array) {
  const index = [];
  for (const i of array) {
    if (i) {
      index.push(i);
    }
  }
  return index;
}
