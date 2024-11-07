'use strict';
function handleFocus(event) {
  console.log('focus event was fired');
  const $eventTarget = event.target;
  console.log($eventTarget.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  const $eventTarget = event.target;
  console.log($eventTarget.name);
}
function handleInput(event) {
  const $eventTarget = event.target;
  console.log($eventTarget.name);
  console.log($eventTarget.value);
}
const $part1 = document.querySelector('#user-name');
const $part2 = document.querySelector('#user-email');
const $part3 = document.querySelector('#user-message');
if (!$part1) throw new Error('part 1 of the form failed');
if (!$part2) throw new Error('part 1 of the form failed');
if (!$part3) throw new Error('part 3 of the form failed');
$part1.addEventListener('focus', handleFocus);
$part1.addEventListener('blur', handleBlur);
$part1.addEventListener('input', handleInput);
$part2.addEventListener('focus', handleFocus);
$part2.addEventListener('blur', handleBlur);
$part2.addEventListener('input', handleInput);
$part3.addEventListener('focus', handleFocus);
$part3.addEventListener('blur', handleBlur);
$part3.addEventListener('input', handleInput);
