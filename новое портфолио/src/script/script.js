window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', (e) => {
        var scrollHeight = window.scrollY;
        var elements = document.querySelectorAll('.promo__layer');

        if (scrollHeight >= 5 * window.innerHeight) { 
            elements.forEach(function(element) {
                element.style.position = 'static'; 
            });
        } else {
            elements.forEach(function(element) {
                element.style.position = 'fixed';
            });
        }
    })

    const sliderMain = new Swiper(".portfolio__slider", {
        freeMode: true,
        centeredSlides: true,
        parallax: true,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
            680: {
                slidesPerView: 3.5,
                spaceBetween: 60
            }
        },
        mousewheel: {
            enabled: false
        }
    });

    const sliderBG = new Swiper(".portfolio__slider_bg", {
        centeredSlides: true,
        parallax: true,
        slidesPerView: 3.5,
        spaceBetween: 60,
        
    });

    sliderMain.controller.control = sliderBG

    let desc = document.querySelector('.portfolio__description');

    sliderMain.on('slideChange', e => {
        sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
    })

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    var sectionPortfolio = document.querySelector('.portfolio');
    var sectionPromo = document.querySelector('.promo');
    var layerBtn = sectionPromo.querySelector('.promo-layer__btn a');
    var promoBtn = sectionPortfolio.querySelector('#promoBtn');

    // var windowHeight = window.innerHeight;

    layerBtn.addEventListener('click', function() {
        sectionPortfolio.classList.toggle('d-n');
        sectionPromo.classList.toggle('d-n');
    });

    promoBtn.addEventListener('click', function() {
        sectionPortfolio.classList.toggle('d-n');
        sectionPromo.classList.toggle('d-n');
    });

    // window.addEventListener('scroll', function() {
    //     var sectionTop = sectionPortfolio.getBoundingClientRect().top;
    //     if (sectionTop <= 0) {
    //         sliderMain.mousewheel.enable();
    //     } else {
    //         sliderMain.mousewheel.disable();
    //     }
    // });

    // var section = document.querySelector('.promo');

    // window.addEventListener('scroll', function() {
    //     var sectionBottom = section.getBoundingClientRect().bottom;
    //     if (sectionBottom <= window.innerHeight) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'auto';
    //     }
    // });
});