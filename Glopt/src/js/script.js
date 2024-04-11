const hamburger = document.querySelector(".nav__hamburger"),
overlay = document.querySelector(".nav__overlay"),
menu = document.querySelector(".nav__menu-hidden"),
link_menu = document.getElementsByClassName("nav__link-active");

for (i = 0; i < link_menu.length; i++) {
    link_menu[i].onclick = function() {
        overlay.classList.remove("nav__overlay-active"),
        menu.classList.remove("nav__menu-active"),
        hamburger.classList.remove("nav__hamburger-disactive");
    };
};
hamburger.addEventListener('click', () => {
    menu.classList.add("nav__menu-active"),
    overlay.classList.add("nav__overlay-active"),
    hamburger.classList.add("nav__hamburger-disactive");
});

const closer = document.querySelector(".nav__closer");
closer.addEventListener('click', () => {
    overlay.classList.remove("nav__overlay-active"),
    menu.classList.remove("nav__menu-active"),
    hamburger.classList.remove("nav__hamburger-disactive");
});
const mapOpenner = document.querySelector(".map__btn"),
    map = document.querySelector(".map"),
    mapCloser = document.querySelector(".map__closer");
mapOpenner.addEventListener('click', () => {
    map.classList.remove("map_hidden"),
    mapCloser.classList.remove("map_hidden"),
    mapOpenner.classList.add("map_hidden");
});
mapCloser.addEventListener('click',  () => {
    map.classList.add("map_hidden"),
    mapCloser.classList.add("map_hidden"),
    mapOpenner.classList.remove("map_hidden");
});
window.addEventListener('DOMContentLoaded', function() {
    const upper = document.querySelector(".pageup");

    if (upper) {
        upper.addEventListener('click', function name() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });

        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset || document.documentElement.scrollTop;

            if (scrolled >= 800) {
                upper.classList.add('visible');
            } else {
                upper.classList.remove('visible');
            }
        });
    }
});