'use strict';
/* exported countdown */
function countdown(number) {
  const num = [];
  for (let i = number; i >= 0; i--) {
    num.push(i);
  }
  return num;
}
