var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var orange = document.body.style.backgroundColor = prompt('background color?', '#fac663');
var white = document.body.style.backgroundColor = prompt('background color?', '#ffffff');

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

// navToggle.addEventListener('click', function() {
//   if (navMain.classList.contains('main-nav--closed')) {
//     this.style.backgroundColor = "$color-one");
//   } else {this.style.backgroundColor = "$color-seven");
//  }
// });
