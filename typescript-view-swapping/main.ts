const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

if (!$tabContainer) throw new Error('$tabContainer query failed');
if (!$tab) throw new Error('$tab query failed');
if (!$view) throw new Error('$view query failed');

function click(event: Event): void {
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.matches('.tab')) {
    console.log('.tab is match');

    for (let i = 0; i < $tab.length; i++) {
      const tab = $tab[i] as HTMLElement;
      if (tab === $eventTarget) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    }
  } else {
    console.log('.tab does not match');
  }

  const $data = $eventTarget.getAttribute('data-view');
  if (!$data) throw new Error('$data query failed, gud luck fixing that');

  for (let x = 0; x < $view.length; x++) {
    const view = $view[x] as HTMLElement;
    const viewData = view.getAttribute('data-view');

    if (viewData === $data) {
      view.classList.remove('hidden');
    } else {
      view.classList.add('hidden');
    }
  }
}

$tabContainer.addEventListener('click', click);
