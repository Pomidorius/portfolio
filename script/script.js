window.addEventListener('DOMContentLoaded', function() {
    let warning = document.querySelector(".warning");
    function handleFirstScroll() {
        warning.classList.add("warning_top")
        window.removeEventListener('scroll', handleFirstScroll);
    }
    window.addEventListener('scroll', handleFirstScroll);

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
        mousewheel: true
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

    const navLinks = document.querySelectorAll('.nav__link');
    const videoAbout = document.querySelector('.about-bg__video');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            document.querySelectorAll('section').forEach(function(section) {
                if (section !== targetSection) {
                    section.classList.add('d-n');
                };
            });
            if (`#${videoAbout.id}` == `${targetId}-video`) {
                videoAbout.classList.remove('d-n');
            } else {
                videoAbout.classList.add('d-n');
            }

            console.log(`#${videoAbout.id}`);
            console.log(`${targetId}-video`);
            targetSection.classList.remove('d-n');
        });
    });

    const swiperAbout = new Swiper('.about__slider', {
        speed: 1600,
        mousewheel: {},
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        }
    })

    let animationFrameId;

    swiperAbout.on('slideChange', function() {
        gsap.to(videoAbout, 1.6, {
            currentTime: (videoAbout.duration / (this.slides.length - 1)) * this.realIndex,
            ease: Power2.easeOut
        })
        // const duration = videoAbout.duration;
        // const currentIndex = this.realIndex;
        // const targetTime = (duration / (this.slides.length - 1)) * currentIndex;
        // cancelAnimationFrame(animationFrameId);
        // animateVideo(targetTime);
    })

    // function animateVideo(targetTime) {
    //     const currentTime = videoAbout.currentTime;
    //     const timeDiff = targetTime - currentTime;
    //     videoAbout.currentTime += timeDiff * 0.1;
    //     animationFrameId = requestAnimationFrame(() => animateVideo(targetTime));
    // }

    swiperAbout.on('slideChangeTransitionStart', function() {
        videoAbout.classList.add('change')
    }).on('slideChangeTransitionEnd', function() {
        videoAbout.classList.remove('change')
    })
});