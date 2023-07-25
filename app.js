const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')
const body = document.querySelector('body')
// Display Mobile Menu

const mobileMenu = () => {
  menu.classList.toggle('is-active')
  menulinks.classList.toggle('active')
  body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu); 