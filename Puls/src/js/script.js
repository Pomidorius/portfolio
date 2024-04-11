$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1500,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/chevron right solid.svg"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false,
                dotsClass: 'slick-dots',
              }
            }
        ]
    });
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      });
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    $('.tab__caption').on('click', function() {
      $('.tab__content, .tab__close').fadeIn('fast');
      $('.tab__caption').fadeOut('fast');
    });
    $('.tab__close').on('click', function() {
      $('.tab__content, .tab__close').fadeOut('fast');
      $('.tab__caption').fadeIn('fast');
    });
    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
      });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
    function valideForms(form) {
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlenght: 2,
          },
          phone: "required",
          email: {
            required: true,
            email: true
          },
        },
        messages: {
          name:
          {
            required: "Пожалуйста, введите свое имя",
            minlenght: jQuery.validator.format("Введите {0} символа")
          },
          phone: "Пожалуйста, запишите свой номер телефона",
          email: {
            required: "Нам нужен ваш действительный емэйл адрес",
            email: "Ваш емэйл должен быть в формате: @mail.ru, @gmail.com и др..."
          }
        }
      });
     }
     valideForms('#consultation-form');
     valideForms('#consultation form');
     valideForms('#order form');
     $('input[name=phone]').mask("+7 (999) 999-99-99");
     new WOW().init();
     $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
     });
     $("a[href^='#up']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
     });
});