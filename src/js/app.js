$(function () {
    let menuBurger = $('.nav__button');
    let menu = $('.nav__list');

    menuBurger.on('click', function (e) {
        e.preventDefault();
        menu.toggleClass("open");
    })
})