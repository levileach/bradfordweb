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

// Preferred contact method — toggle required on phone/email
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');

function setPreferredContact(value) {
  phoneInput.required = value === 'phone';
  emailInput.required = value === 'email';
}

document.getElementById('preferred-contact').addEventListener('change', (e) => {
  setPreferredContact(e.target.value);
});

// Set initial state to match the checked default (phone)
setPreferredContact('phone');

document.querySelectorAll('p').forEach(p => {
  p.innerHTML = p.innerHTML.replace(/\s+(\S+)\s*$/, '\u00A0$1');
});