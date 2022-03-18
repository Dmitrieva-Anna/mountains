'use strict';
const mainMenuTrigger = () => {
    const menuTrigger = document.querySelector('.js-menuTrigger');
    const mobileMenu = document.querySelector('.js-mobileMenu');
    const mobileShadow = document.querySelector('.js-mobileShadow');
    const toggleMenu = () => {
        menuTrigger.classList.toggle('change');
        // bodyLock.classList.toggle('lock');
        mobileMenu.classList.toggle('active');
        mobileShadow.classList.toggle('active');
    }
    menuTrigger.addEventListener('click', toggleMenu);
    mobileShadow.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);

   /* mobileLinks.forEach(item => {
        item.addEventListener('click', toggleMenu)
    })*/

}
mainMenuTrigger();


let lastScroll = 0;
const defaultOffset = 300;
const header = document.querySelector('.panel-menu');
const parallax = document.querySelector('.js-parallax');

// const mobileMenu = document.querySelector('.header-menu-mobile');

// const mobileMenuOuter = document.querySelector('.js-mobileMenu');

const scrollPosition = () => parallax.scrollTop;

const containHide = () => header.classList.contains('hide');

// const containHideMobile = () => mobileMenu.classList.contains('hide');

// const containsOuterMenu = () => mobileMenuOuter.classList.contains('active');


parallax.addEventListener('scroll', () => {

    // desktop
    let isIsTop = scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset;
    let isIsBottom = scrollPosition() < lastScroll && containHide();

    // mobile
    // let isIsTopMobile = scrollPosition() > lastScroll && !containHideMobile() && scrollPosition() > defaultOffset && !containsOuterMenu;
    // let isIsBottomMobile = scrollPosition() < lastScroll && containHideMobile() && !containsOuterMenu;

    if (scrollPosition() <= defaultOffset) {
        header.classList.add('hide');
    } else {
        if(isIsTop) {
            header.classList.add('hide');
        }
        else if (isIsBottom){
            header.classList.remove('hide');
        }
    }

    // if (scrollPosition() <= defaultOffset) {
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
})