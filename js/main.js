// Initialize Lucide icons
lucide.createIcons();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav toggle with overlay
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function openNav() {
  navLinks.classList.add('open');
  navToggle.classList.add('active');
  navOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  navLinks.classList.remove('open');
  navToggle.classList.remove('active');
  navOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeNav() : openNav();
});

navOverlay.addEventListener('click', closeNav);

navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', closeNav)
);

// Phone number auto-format
const phoneInput = document.getElementById('qPhone');
phoneInput.addEventListener('input', function(e) {
  let digits = this.value.replace(/\D/g, '').slice(0, 10);
  let formatted = '';
  if (digits.length > 0) formatted += '(' + digits.slice(0, 3);
  if (digits.length >= 3) formatted += ') ';
  if (digits.length > 3) formatted += digits.slice(3, 6);
  if (digits.length >= 6) formatted += '-';
  if (digits.length > 6) formatted += digits.slice(6, 10);
  this.value = formatted;
});

// Quick Quote Form
const quoteForm = document.getElementById('quoteForm');
const quoteHeader = document.getElementById('quoteHeader');
const quoteLoading = document.getElementById('quoteLoading');
const quoteSuccess = document.getElementById('quoteSuccess');

quoteForm.addEventListener('submit', function(e) {
  e.preventDefault();

  quoteForm.style.display = 'none';
  quoteHeader.style.display = 'none';
  quoteLoading.style.display = 'block';

  setTimeout(() => {
    quoteLoading.style.display = 'none';
    quoteSuccess.style.display = 'block';
    lucide.createIcons();
  }, 2000);
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.service-grid-card, .process-step, .quote-card, .additional-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

document.head.insertAdjacentHTML('beforeend', `<style>.revealed { opacity: 1 !important; transform: translateY(0) !important; }</style>`);
