'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const number = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      number.push('even');
    } else {
      number.push('odd');
    }
  }
  return number;
}
