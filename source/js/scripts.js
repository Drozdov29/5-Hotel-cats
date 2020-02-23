// Меню-бутерброд (открытие - закрытие)
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Фон с белого на желтый
let page = document.querySelector('.page-header');
let themeButton = document.querySelector('.main-nav__toggle');

themeButton.onclick = function () {
  console.log('Кнопка нажата!');
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};


// navToggle.onclick = function() {
//   navMain.classList.toggle('main-nav--closed');
//   navMain.classList.toggle('main-nav--opened');
// };

// navToggle.addEventListener('click', function() {
//   if (navMain.classList.contains('main-nav--closed')) {
//     this.style.backgroundColor = "$color-one");
//   } else {this.style.backgroundColor = "$color-seven");
//  }
// });
