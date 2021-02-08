
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

//Navbar visibility on mousemove

// if (window.innerWidth >= 1024) {
//   const body = document.querySelector('body');
//   body.addEventListener('mousemove', () => {
//     navbar.classList.add('change');
//     setTimeout(() => {
//       navbar.classList.remove('change');
//     }, 3000);
//   });
// }

// Scrolling on the page with smooth scroll

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 600
});