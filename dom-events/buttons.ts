const $click = document.querySelector('.click-button');
if (!$click) {
  throw new Error('Something is wrong!!!');
}

function handleClick(event: Event): void {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

$click.addEventListener('click', handleClick);

const $hover = document.querySelector('.hover-button');
if (!$hover) {
  throw new Error('Something is wrong');
}

function handleMouseover(event: Event): void {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
$hover.addEventListener('hover', handleMouseover);

const $double = document.querySelector('.double-click-button');
if (!$double) throw new Error('Something is wrong');

function handleDoubleClick(event: Event): void {
  console.log('hover hovered');
  console.log(event);
  console.log(event.target);
}
$hover.addEventListener('Double-Click', handleDoubleClick);
