
// Basic functionality of navbar hamburger menu 

const menuIcon = document.querySelector('.burger');
const navbar = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});

// Scrolling on the page with smooth scroll

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 600
});