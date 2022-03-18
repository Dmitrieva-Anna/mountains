'use strict';

var mainMenuTrigger = function mainMenuTrigger() {
  var menuTrigger = document.querySelector('.js-menuTrigger');
  var mobileMenu = document.querySelector('.js-mobileMenu');
  var mobileShadow = document.querySelector('.js-mobileShadow');

  var toggleMenu = function toggleMenu() {
    menuTrigger.classList.toggle('change'); // bodyLock.classList.toggle('lock');

    mobileMenu.classList.toggle('active');
    mobileShadow.classList.toggle('active');
  };

  menuTrigger.addEventListener('click', toggleMenu);
  mobileShadow.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
  /* mobileLinks.forEach(item => {
       item.addEventListener('click', toggleMenu)
   })*/
};

mainMenuTrigger();
var lastScroll = 0;
var defaultOffset = 300;
var header = document.querySelector('.panel-menu');
var parallax = document.querySelector('.js-parallax'); // const mobileMenu = document.querySelector('.header-menu-mobile');
// const mobileMenuOuter = document.querySelector('.js-mobileMenu');

var scrollPosition = function scrollPosition() {
  return parallax.scrollTop;
};

var containHide = function containHide() {
  return header.classList.contains('hide');
}; // const containHideMobile = () => mobileMenu.classList.contains('hide');
// const containsOuterMenu = () => mobileMenuOuter.classList.contains('active');


parallax.addEventListener('scroll', function () {
  // desktop
  var isIsTop = scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset;
  var isIsBottom = scrollPosition() < lastScroll && containHide(); // mobile
  // let isIsTopMobile = scrollPosition() > lastScroll && !containHideMobile() && scrollPosition() > defaultOffset && !containsOuterMenu;
  // let isIsBottomMobile = scrollPosition() < lastScroll && containHideMobile() && !containsOuterMenu;

  if (scrollPosition() <= defaultOffset) {
    header.classList.add('hide');
  } else {
    if (isIsTop) {
      header.classList.add('hide');
    } else if (isIsBottom) {
      header.classList.remove('hide');
    }
  } // if (scrollPosition() <= defaultOffset) {
  //     header.classList.add('hide');
  // } else {
  //     if(isIsTop || isIsTopMobile) {
  //         header.classList.add('hide');
  //         mobileMenu.classList.add('hide');
  //     }
  //     else if (isIsBottom || isIsBottomMobile) {
  //         header.classList.remove('hide');
  //         mobileMenu.classList.remove('hide');
  //     }
  // }


  lastScroll = scrollPosition();
});
//# sourceMappingURL=script.js.map
