interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;

if (!$contactForm) throw new Error('contactForm query failed');

function contactForm(event: Event): void {
  event.preventDefault();
  if (!$contactForm) throw new Error('contactForm(in function) query failed');
  const $formElements = $contactForm.elements as FormElements;
  const name = $formElements.name.value;
  const email = $formElements.email.value;
  const message = $formElements.message.value;
  const data: any = {
    name,
    email,
    message,
  };
  console.log(data);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', contactForm);
