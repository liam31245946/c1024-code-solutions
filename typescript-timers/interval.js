'use strict';
const $countDown = document.querySelector('.countdown-display');
if (!$countDown) throw new Error('countDown query failed');
let count = 4;
const i = setInterval(function () {
  count--;
  $countDown.textContent = count.toString();
  if (count < 1) {
    clearInterval(i);
    $countDown.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
