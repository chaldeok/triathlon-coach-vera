const menuBody = document.querySelector('.main-menu__body');
const button = document.querySelector('.burger-menu__button');
const links = document.querySelectorAll('.main-menu__link');

function burgerMenu() {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu()
  })

  links.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMenu();
    })
  })
}

function toggleMenu() {
  menuBody.classList.toggle('burger-menu--active');
  button.classList.toggle('burger-menu__button--active');
}

burgerMenu();
