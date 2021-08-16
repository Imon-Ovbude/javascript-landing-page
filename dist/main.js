const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show Active Menu When Scrolling
const highlightMenu = () => {
  const highLight = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');

  let scrollPos = window.scrollY;
  console.log(scrollPos);

  // Adds highlight class to menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1450) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    aboutMenu.classList.remove('highlight');
    servicesMenu.classList.add('highlight');
    return;
  }

  if ((highLight && window.innerWidth < 960 && scrollPos < 600) || highLight) {
    highLight.classList.remove('highLight');
  }
};

// Close mobile Menu When Item Is Clicked
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');

  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

// Call Functions
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
