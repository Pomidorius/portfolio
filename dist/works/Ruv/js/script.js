const menuOppener = document.querySelector('.nav__hamburger'),
    menu = document.querySelector('.nav-menu_mobile'),
    menuCloser = document.querySelector('.nav-menu__hamburger'),
    linkMenu = document.getElementsByClassName('nav-menu__link'),
    linkMenuBtn = document.querySelector('.nav-menu__btn a'),
    promoArrowLeft = document.querySelector('.promo-swiper__arrow_left'),
    promoArrowRight = document.querySelector('.promo-swiper__arrow_right'),
    specialArrowLeft = document.querySelector('.special-carousel__arrow_left'),
    specialArrowRight = document.querySelector('.special-carousel__arrow_right');

// Menu openning
menuOppener.addEventListener('click', () => {
    menu.classList.add('visible')
});

// Menu closing
menuCloser.addEventListener('click', () => {
    menu.classList.remove('visible')
});

// Closing of mobile menu, when click to link|btn link
for (i = 0; i < linkMenu.length; i++) {
    linkMenu[i].onclick = function() {
        menu.classList.remove('visible');
    };
};
linkMenuBtn.onclick = function() {
    menu.classList.remove('visible');
};

// Функция для определения, какая секция находится в видимой области
function getActiveSection() {
    const sections = document.querySelectorAll('section');
    for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            return section.id;
        }
    }
    return null;
}

// Функция для обновления активной ссылки
function updateActiveLink() {
    const activeSectionId = getActiveSection();
    const links = document.querySelectorAll('.nav__link');
    for (const link of links) {
        link.classList.remove('active');
        if (link.getAttribute('data-target') === activeSectionId) {
            link.classList.add('active');
        }
    }
}

// Обновляем активную ссылку при загрузке страницы и при прокрутке
document.addEventListener('DOMContentLoaded', updateActiveLink);
window.addEventListener('scroll', updateActiveLink);

// Функция для плавной прокрутки к якорной ссылке
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Продолжительность анимации в миллисекундах
        let startTimestamp = null;

        function step(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
        }

        // Функция для расчета прогресса анимации с эффектом easeInOutCubic
        function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
        }

        window.requestAnimationFrame(step);
    }
}

// Обработка клика по якорным ссылкам
document.addEventListener('click', function (event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
        event.preventDefault(); // Отменяем стандартное поведение ссылки
        const target = event.target.getAttribute('href');
        smoothScroll(target);
    }
});

// Need optimizaion, chanching of nav while scrolling up to 775px
window.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector(".nav"),
        navLogo = document.querySelector(".nav__logo"),
        navLink = document.querySelector(".nav__link1"),
        navLink1 = document.querySelector(".nav__link2"),
        navLink2 = document.querySelector(".nav__link3"),
        navLink3 = document.querySelector(".nav__link4"),
        navLink4 = document.querySelector(".nav__link5"),
        navImg = document.querySelector(".nav-call__img"),
        navNumber= document.querySelector(".nav-call__number"),
        navBtn = document.querySelector(".nav__btn"),
        navHamburger = document.querySelector(".nav__hamburger");

    if (nav) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset || document.documentElement.scrollTop;

            if (scrolled >= 775) {
                nav.classList.add('nav_negative');
                navLogo.classList.add('nav__logo_negative');
                navLink.classList.add('negative');
                navLink1.classList.add('negative');
                navLink2.classList.add('negative');
                navLink3.classList.add('negative');
                navLink4.classList.add('negative');
                navBtn.classList.add('negative');
                navImg.classList.add('nav-call__img_negative');
                navNumber.classList.add('nav-call__number_negative');
                navHamburger.classList.add('nav__hamburger_negative');
            } else {
                nav.classList.remove('nav_negative');
                navLogo.classList.remove('nav__logo_negative');
                navLink.classList.remove('negative');
                navLink1.classList.remove('negative');
                navLink2.classList.remove('negative');
                navLink3.classList.remove('negative');
                navLink4.classList.remove('negative');
                navBtn.classList.remove('negative');
                navImg.classList.remove('nav-call__img_negative');
                navNumber.classList.remove('nav-call__number_negative');
                navHamburger.classList.remove('nav__hamburger_negative');
            }
        });
    }
});

// Promo-swiper
new Swiper('.promo-swiper', {
    navigation: {
        nextEl: '.promo-swiper__arrow_right',
        prevEl: '.promo-swiper__arrow_left'
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
});

// Promo-arrows
promoArrowRight.addEventListener('click', function () {
    promoArrowRight.classList.add('promo-swiper__arrow_active');
    promoArrowLeft.classList.remove('promo-swiper__arrow_active');
    if (promoArrowRight.classList.contains('swiper-button-disabled')) {
        promoArrowLeft.classList.add('promo-swiper__arrow_active');
    }
});
promoArrowLeft.addEventListener('click', function () {
    promoArrowRight.classList.remove('promo-swiper__arrow_active');
    promoArrowLeft.classList.add('promo-swiper__arrow_active');
    if (promoArrowLeft.classList.contains('swiper-button-disabled')) {
        promoArrowRight.classList.add('promo-swiper__arrow_active');
    }
});

// certificate
const certificate = document.querySelector('.certificate'),
    certificateOpenner = document.querySelector('.info-other__sertification'),
    certificateCloser = document.querySelector('.certificate__closer');

certificateOpenner.addEventListener('click', () => {
    certificate.classList.remove('disable')
});
certificateCloser.addEventListener('click', () => {
    certificate.classList.add('disable')
});

// service tabs
const tabs = document.querySelectorAll(".service-nav__link");
const contents = document.querySelectorAll(".service-item");
 
for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", ( event ) => {
 
		let tabsChildren = event.target.parentElement.children;
		for (let t = 0; t < tabsChildren.length; t++) {
			tabsChildren[t].classList.remove("service-nav__link_active");
		}

		tabs[i].classList.add("service-nav__link_active");

		for (let c = 0; c < contents.length; c++) {
			contents[c].classList.remove("service-item_active");
		}
        
		contents[i].classList.add("service-item_active");
	});
};

// Устанавливаем высоту .service-item__wrap равной высоте активного .service-item
function Resize() {
    const container = document.querySelector('.service-item__wrap');
    const activeItem = document.querySelector('.service-item_active');

    if (activeItem) {
        container.style.height = activeItem.offsetHeight + 'px';
    }
}

 // Пересчитываем высоту .service-item__wrap при переключении таба
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        Resize();
    });
});

// Обработчики событий, изменение высоты .service-item__wrap при загрузке и изменении размеров окна
window.addEventListener('load', Resize);
window.addEventListener('resize', Resize);

// Special-swiper
new Swiper('.special .swiper', {
    navigation: {
        nextEl: '.special-carousel__arrow_right',
        prevEl: '.special-carousel__arrow_left'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
        767: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
});

// Special-arrows
specialArrowRight.addEventListener('click', function () {
    specialArrowRight.classList.add('special-carousel__arrow_active');
    specialArrowLeft.classList.remove('special-carousel__arrow_active');
    if (specialArrowRight.classList.contains('swiper-button-disabled')) {
        specialArrowLeft.classList.add('special-carousel__arrow_active');
    }
});
specialArrowLeft.addEventListener('click', function ()  {
    specialArrowRight.classList.remove('special-carousel__arrow_active');
    specialArrowLeft.classList.add('special-carousel__arrow_active');
    if (specialArrowLeft.classList.contains('swiper-button-disabled')) {
        specialArrowRight.classList.add('special-carousel__arrow_active');
    }
});

// Validation Forms
const feedbackForm = document.querySelector('.feedback-form'),
    nameFeedbackInput = feedbackForm.querySelector('.name'),
    telFeedbackInput = feedbackForm.querySelector('.tel'),
    emailFeedbackInput = feedbackForm.querySelector('.email'),
    nameFeedbackFormError = feedbackForm.querySelector('.nameError'),
    telFeedbackFormError = feedbackForm.querySelector('.telError'),
    emailFeedbackFormError = feedbackForm.querySelector('.emailError'),
    EMAIL_REGEXP = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    NAME_REGEXP = /^[a-zA-Zа-яА-ЯёЁ\s]+$/,
    checkboxDivFeedbackForms = feedbackForm.querySelector('.feedback-form__checkbox');

nameFeedbackFormError.addEventListener('click', function () {
    nameFeedbackInput.classList.remove('disable'),
    nameFeedbackFormError.classList.add('disable');
});

telFeedbackFormError.addEventListener('click', function () {
    telFeedbackInput.classList.remove('disable'),
    telFeedbackFormError.classList.add('disable');
});

emailFeedbackFormError.addEventListener('click', function () {
    emailFeedbackInput.classList.remove('disable'),
    emailFeedbackFormError.classList.add('disable');
});

checkboxDivFeedbackForms.addEventListener('click', function () {
    checkboxDivFeedbackForms.classList.toggle('feedback-form__checkbox_active');
});

feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();
// Name checking
    function isNameValid(value) {
        return NAME_REGEXP.test(value);
    }
    if (!nameFeedbackInput.value || isNameValid(nameFeedbackInput.value) === false) {
        nameFeedbackInput.classList.add('disable'),
        nameFeedbackFormError.classList.remove('disable');
    }
// Tel number length checking
    if (telFeedbackInput.value.length < 15 || !telFeedbackInput.value){
        telFeedbackInput.classList.add('disable'),
        telFeedbackFormError.classList.remove('disable');
    }
    // Email validation
    function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }
    if (!emailFeedbackInput.value || isEmailValid(emailFeedbackInput.value) === false) {
        emailFeedbackInput.classList.add('disable'),
        emailFeedbackFormError.classList.remove('disable');
    }
});

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+373-___-___-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

    }); 
});

// Button Upper in footer
const upper = document.querySelector('.footer__btn')
if (upper) upper.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});