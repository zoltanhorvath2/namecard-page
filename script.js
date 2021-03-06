
// Basic functionality of navbar hamburger menu 

const menuIcon = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-links');
const menuItems = document.querySelectorAll('.nav-link');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    navbar.classList.remove('change');
  });
});


// smooth scroll on navbar clicks

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 600
});