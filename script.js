// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Contact form — AJAX submission with inline success message
const contactForm = document.querySelector('form[name="contact"]');
const formSuccess = document.querySelector('.form-success');
const formReset = document.querySelector('.form-success-reset');

if (contactForm && formSuccess) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(contactForm)).toString(),
    })
      .then(() => {
        contactForm.hidden = true;
        formSuccess.hidden = false;
      })
      .catch(() => {
        // Fall back to native submission on network error
        contactForm.submit();
      });
  });

  formReset.addEventListener('click', () => {
    contactForm.reset();
    contactForm.hidden = false;
    formSuccess.hidden = true;
  });
}
