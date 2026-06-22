const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

menuToggle.addEventListener('click', () => {
  siteNav.classList.toggle('closed');
});

contactForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formResponse.textContent = 'Please fill out all fields before sending.';
    return;
  }

  formResponse.textContent = `Thanks, ${name}! Your message is ready to send.`;
  contactForm.reset();
});
