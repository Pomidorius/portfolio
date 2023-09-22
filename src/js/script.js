// click interactive
const   hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'), 
        closeElem = document.querySelector('.menu__close'),
        sidepanel = document.querySelector('.sidepanel'),
        close = document.querySelector('.sidepanel__closer'),
        openning = document.querySelector('.sidepanel__opennig'),
        key = document.querySelector('.skills__key'),
        learnning = document.querySelector('.skills__learnning'),
        object = document.querySelector('.skills__object'),
        closer = document.querySelector('.skills__closer'),
        link_menu = document.getElementsByClassName('menu__link_active');

for (i = 0; i < link_menu.length; i++) {
    link_menu[i].onclick = function() {
        menu.classList.remove("active");
    };
};
hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});
close.addEventListener('click', () => {
    sidepanel.classList.add('disactive')
});
close.addEventListener('click', () => {
    openning.classList.add('active_openning')
});
openning.addEventListener('click', () => {
    sidepanel.classList.remove('disactive')
});
openning.addEventListener('click', () => {
    openning.classList.remove('active_openning')
});
key.addEventListener('click', () => {
    learnning.classList.add('skills_hidden')
});
key.addEventListener('click', () => {
    object.classList.remove('skills_hidden')
});
closer.addEventListener('click', () => {
    learnning.classList.remove('skills_hidden')
});
closer.addEventListener('click', () => {
    object.classList.add('skills_hidden')
});
//  recalculation of percents
// const percents = document.querySelectorAll('.skills-state__percents'),
//     lines = document.querySelectorAll('skills-state__scale span');
// percents.forEach((eachEle, index, array) => {
//     lines.style.width = element.innerHTML;
// });
//pageup
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

document.querySelectorAll('.portfolio-cursor').forEach(node => {
    document.addEventListener('mousemove', e => {
        node.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
    })
})