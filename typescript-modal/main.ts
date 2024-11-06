const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');

if (!$openModal) throw new Error('Error1');
if (!$dismissModal) throw new Error('Error2');
if (!$dialog) throw new Error('Error3');

$openModal.addEventListener('click', (event: Event) => {
  $dialog.showModal();
  console.log(event.target);
});

$dismissModal.addEventListener('click', (event: Event) => {
  $dialog.close();
  console.log(event.target);
});
