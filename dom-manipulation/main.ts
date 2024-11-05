let click = 0;

const $hot = document.querySelector('.hot-button');
const $click = document.querySelector('.click-count');

if (!$hot) throw new Error('Failed, double check please');

function button(): void {
  click++;
  if (!$hot || !$click) {
    throw new Error('failed');
  }
  $click.textContent = `Click: ${click}`;

  if (click < 4) {
    $hot.className = 'hot-button cold';
  } else if (click < 7) {
    $hot.className = 'hot-button cool';
  } else if (click < 10) {
    $hot.className = 'hot-button tepid';
  } else if (click < 13) {
    $hot.className = 'hot-button warm';
  } else if (click < 16) {
    $hot.className = 'hot-button hot';
  } else {
    $hot.className = 'hot-button nuclear';
  }
}

$hot.addEventListener('click', button);
