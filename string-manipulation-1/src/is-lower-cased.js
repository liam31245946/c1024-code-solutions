'use strict';
/* exported isLowerCased */
function isLowerCased(str) {
  if (str === str.toLocaleLowerCase()) {
    return true;
  }
  return false;
}
