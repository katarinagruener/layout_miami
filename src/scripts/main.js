'use strict';

window.addEventListener('hashchange', function() {
  if (this.window.location.hash === '#menu') {
    this.document.body.classList.add('page__body--with-menu');
  } else {
    this.document.body.classList.remove('page__body--with-menu');
  }
});

/*
function myFunc() {} // function declaration; myFunc()
const myFunc1 = function() {}; // function expression; myFunc1()
const arrowFunction = () => {}; */

/*
(function(x) {
    console.log(x);
})(5) */
/* ((x) => {
    console.log(x);
})(5) */
