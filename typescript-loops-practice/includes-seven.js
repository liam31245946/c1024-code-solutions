'use strict';
/* exported includesSeven */
function includesSeven(values) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] === 7) {
      return true;
    }
  }
  return false;
}
