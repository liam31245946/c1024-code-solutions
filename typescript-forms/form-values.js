'use strict';
const $contactForm = document.querySelector('#contact-form');
if (!$contactForm) throw new Error('contactForm query failed');
function contactForm(event) {
  event.preventDefault();
  if (!$contactForm) throw new Error('contactForm(in function) query failed');
  const $formElements = $contactForm.elements;
  const name = $formElements.name.value;
  const email = $formElements.email.value;
  const message = $formElements.message.value;
  const data = {
    name,
    email,
    message,
  };
  console.log(data);
  $contactForm.reset();
}
$contactForm.addEventListener('submit', contactForm);
