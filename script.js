
// Basic functionality of navbar hamburger menu 

const menuIcon = document.querySelector('.burger');
const navbar = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});

// Scrolling on the page

const body = document.querySelector('window');
const scrollEvent = document.addEventListener('scroll',  (event) => {
  const scrolled = window.scrollY;
  
});