// Toggle hamburger menu
const hamburger = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

hamburger.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
});
