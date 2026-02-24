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


// remove hanging words for p and h2 tags
function preventWidows(el) {
  el.innerHTML = el.innerHTML
    .split(/(<br\s*\/?>)/gi)
    .map(seg => /^<br/i.test(seg) ? seg : seg.replace(/\s+(\S+)\s*$/, '\u00A0$1'))
    .join('');
}

document.querySelectorAll('p, h2').forEach(preventWidows);

// Hamburger menu
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});