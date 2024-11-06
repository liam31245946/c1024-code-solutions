const $circle = document.querySelector('.circle');
const $body = document.querySelector('body');
if (!$circle) throw new Error('The query for .circle class failed');
if (!$body) throw new Error('The query for body class failed');
let click = 0;
function button(): void {
  click++;
  if (!$circle || !$body) throw new Error('The query for .circle class failed');
  if (click) {
    $circle.classList.toggle('dark');
    $body.classList.toggle('dark-body');
  }
}
$circle.addEventListener('click', button);
