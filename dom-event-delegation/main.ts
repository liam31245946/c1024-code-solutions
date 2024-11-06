const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('Error');
$taskList?.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  console.log(eventTarget);
  console.log('eventTarget.tagName', eventTarget.tagName);

  if (eventTarget.tagName === 'BUTTON') {
    const i = eventTarget.closest('.task-list-item');
    i?.remove();
  }
});
