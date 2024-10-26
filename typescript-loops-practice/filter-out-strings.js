'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const value = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      value.push(values[i]);
    }
  }
  return value;
}
