'use strict';
/* exported tail */
function tail(array) {
  const index = [];
  for (let i = 1; i < array.length; i++) {
    index.push(array[i]);
  }
  return index;
}
