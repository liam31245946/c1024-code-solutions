'use strict';
/* exported getWords */
function getWords(str) {
  if (str === '') {
    return [];
  }
  return str.split(' ');
}
