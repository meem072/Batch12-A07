// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Example JS for counting In-Progress & Resolved tickets
const inProgressTickets = document.querySelectorAll('.status.progress').length;
const resolvedTickets = document.querySelectorAll('.status.resolved').length;

document.getElementById('inProgressCount').textContent = inProgressTickets;
document.getElementById('resolvedCount').textContent = resolvedTickets;
// Footer fade-in effect
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
  const footerPos = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerPos < windowHeight) {
    footer.classList.add('visible');
  }
});

