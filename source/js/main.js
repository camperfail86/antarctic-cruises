import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
// import IMask from 'imask';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// const element = document.querySelector('.form__input--telephone');
// let maskOptions = {
//   mask: '+{7}(000)000-00-00',
// };
// const mask = new IMask(element, maskOptions);

const burger = document.querySelector('.header__menu');
const menu = document.querySelector('.header__navigation--mobile');
const modal = document.querySelector('.header__overlay');
const x = document.querySelector('.header__menu--close-button');
const image = document.querySelector('.header__image');
const body = document.querySelector('body');
const items = document.querySelectorAll('.header__item--mobile');
const list = document.querySelector('.header__list--mobile');
const overlay = document.querySelector('.header__overlay');

burger.addEventListener('click', () => {
  if (menu.classList.contains('disp') === true) {
    modal.style.background = 'rgba(0, 43, 102, 0.5)';
    menu.classList.remove('disp');
    image.classList.add('disp');
    burger.classList.add('disp');
    body.style.overflow = 'hidden';
  }
});

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', () => {
    modal.style.background = 'rgba(0, 43, 102, 0)';
    menu.classList.add('disp');
    image.classList.remove('disp');
    burger.classList.remove('disp');
    body.style.overflow = 'visible';
  });
}

x.addEventListener('click', () => {
  modal.style.background = 'rgba(0, 43, 102, 0)';
  menu.classList.add('disp');
  image.classList.remove('disp');
  burger.classList.remove('disp');
  body.style.overflow = 'visible';
});

if (window.matchMedia('(min-height: 290px) and (max-width: 767px')) {
  list.style.overflow = 'auto';
  list.style.maxHeight = 'auto';
}

overlay.addEventListener('click', () => {
  modal.style.background = 'rgba(0, 43, 102, 0)';
  menu.classList.add('disp');
  image.classList.remove('disp');
  burger.classList.remove('disp');
  body.style.overflow = 'visible';
});

// const buttons = document.querySelectorAll('.cruises__button');
// const cruises = document.querySelectorAll('.cruises__item');
// for (let j = 0; j < cruises.length; j++) {
//   if (buttons[j].contains('focus-visible')) {
//     cruises.style.backgroundImage = 'none';
//   }
// }

// const mapOptions = {
//   center: [17.385044, 78.486671],
//   zoom: 10,
// };

// const map = new L.map('contacts__map', mapOptions);

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
