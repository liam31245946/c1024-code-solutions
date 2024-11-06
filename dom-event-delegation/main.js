'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('Error');
$taskList?.addEventListener('click', (event) => {
  const eventTarget = event.target;
  console.log(eventTarget);
  console.log('eventTarget.tagName', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const i = eventTarget.closest('.task-list-item');
    i?.remove();
  }
});
