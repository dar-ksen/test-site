const menu = document.querySelector('.main-nav');
const toggle = menu.querySelector('.main-nav__toggle');

menu.classList.remove('main-nav--nojs');

toggle.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.toggle('main-nav--closed');
});

const menuDropdown = document.querySelector('.main-nav__item--dropdown');
const menuDropdowntoggle = menuDropdown.querySelector('.main-nav__link');

menuDropdowntoggle.addEventListener('click', () => {
  menuDropdown.classList.toggle('main-nav__item--dropdown-closed');
});
