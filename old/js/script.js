/**
 * Created by Designer on 15.11.2016.
 */

//carousel
function floating() {
    // $('.aboutallCarousel .owl-item.active').next('.owl-item').find('.profil').css('float','left');
    // $('.aboutallCarousel .owl-item.active').prev('.owl-item').find('.profil').css('float','right');
}
$(document).ready(function () {
    $('.aboutallCarousel').owlCarousel({
        items:1,
        startPosition: 1,
        nav: true,
        navText: ["",""],
        smartSpeed: 1000,
        loop: true
    });
    $('.slidersallCarousel').owlCarousel({
        items:1,
        nav: true,
        navText: ["",""],
        autoHeight:true,
        //smartSpeed: 1000,
        loop: true
    });
    $('.x1slider').owlCarousel({
        items: 1,
        startPosition: 1,
        nav: false,
        navText: ["", ""],
        smartSpeed: 1000,
        loop: true
    });
    $('.slider-nav .arrLeft').on('click', function() {
        $('.x1slider').trigger('prev.owl.carousel');
    });
    $('.slider-nav .arrRight').on('click', function() {
        $('.x1slider').trigger('next.owl.carousel');
    });
});

//fancy
$(document).ready(function () {
    $('.fancy, .fancybox').fancybox();
});

//Калькулятор
$(document).ready(function () {
   $('.calculator .srartScreen .begin').click(function () {
       $('.calculator .srartScreen').hide();
       $('.calculator .screen1').show();
   });
   $('.calculator .screen .content .questions li').click(function () {
       if(!$(this).closest('.screen').hasClass('screen2')){
           $('.calculator .screen .content .questions li').removeClass('active');
           $(this).addClass('active');
       } else {
           if($(this).hasClass('active')){
               $(this).removeClass('active');
           } else {
               $(this).addClass('active');
           }
       }

   });
   $('.calculator .screen nav .next').click(function () {
       if($(window).width() <= '600'){
           $('body').animate({
               scrollTop: $('.calculator').offset().top
           }, 500);
       }
       $(this).closest('.screen').hide();
        if($(this).closest('.screen').hasClass('screen4')){
          $('.calculator .lastScreen').show();
          $('.calculator .lastScreen h2, .calculator .lastScreen ul').addClass('fadeInLeft').addClass('animated').show();
          setTimeout(function () {
              $('.calculator .lastScreen .content .note').addClass('zoomIn').addClass('animated').show();
          }, 1000);
        } else {
            $(this).closest('.screen').next().show();
        }
   });
    $('.screen nav .prev').click(function () {
        if($(window).width() <= '600'){
            $('body').animate({
                scrollTop: $('.calculator').offset().top
            }, 500);
        }
        $(this).closest('.screen').hide();
        $(this).closest('.screen').prev().show();
    });
});

//Контакты
$(document).ready(function () {
   $('.contacts .left ul li').click(function () {
        yaCounter45860163.reachGoal('clickContacts');
        gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'clickContacts' });
       $('.contacts').addClass('gradient');
       var id = $(this).attr('id');
       if(!$(this).hasClass('active')){
           if($(window).width() <= '600'){
               $('body').animate({
                   scrollTop: $('.contacts .right').offset().top
               }, 500);
           }
           $('.contacts .left ul li').removeClass('active');
           $(this).addClass('active');
           $('.contacts .right > div').removeClass('active').each(function (i,val) {
               if($(val).hasClass(id)){
                   $(val).addClass('active');
               }
           });
       }
   });
});

//Слайдер выбор другого ноутбука
$(document).ready(function () {
    $('.slidersall .header nav a').click(function () {
       var id = $(this).attr('href');
       if(!$(this).hasClass('active')){
           $('.slidersall .header nav a').removeClass('active');
           $(this).addClass('active');
           $('.slidersall .slidersallCarousel').slideUp();
           $('body').animate({
               scrollTop: $('.slidersall').offset().top
           }, 500);
           if(id==='#carbon'){
               $('.slidersCarbonCarousel').slideDown();
           } else if (id==='#t480'){
               $('.slidersT480Carousel').slideDown();
           } else if (id==='#e480'){
               $('.slidersE480Carousel').slideDown();
           }
       }
    });
});

//Анимация второй экран
$(document).ready(function () {
    $('.aboutall .aboutallCarousel .itemcarbon').mouseenter(function () {

    });
});

//Скролл из первого слайдера на второй
$(document).ready(function () {
   $('.anchor').click(function () {
       var top = $('.anchor').attr('href');
       if($(this).closest('.item').hasClass('itemcarbon')){
           $('.slidersall .header nav a[href="#carbon"]').click();
       } else if ($(this).closest('.item').hasClass('itemT480')){
           $('.slidersall .header nav a[href="#t480"]').click();
       } else if ($(this).closest('.item').hasClass('itemE480')){
           $('.slidersall .header nav a[href="#e480"]').click();
       }
       $('body').animate({
           scrollTop: $(top).offset().top
       }, 1000);
   });
});

/*Scroll*/
$(document).ready(function() {

    $('.compare .more a').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top - 50
        }, 1000);
        fullVersion(el);
    });

    $('.compare .Imganchor').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top - 50
        }, 1000);
    });

    $('.fixedHeader a').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top-80
        }, 1000);
        return false;
    });

    $('.fixedHeader img').click(function () {
        $('body,html').animate({
            scrollTop: $('body,html').offset().top
        }, 1000);
        return false;
    });


    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".fixedHeader").show(100);

        } else {
            $(".fixedHeader").hide(100);
        }
    });
});
