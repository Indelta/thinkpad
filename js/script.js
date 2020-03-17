$(document).ready(function() {
    $('#slides').owlCarousel({
        items: 1,
        loop: true,
        center: true,
        startPosition: 1,
        nav: true,
        navText: ["&#10092;", "&#10093;"],
    });
    $('#about-slides').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        loop: true,
        autoplayTimeout: 10000,
        autoplaySpeed: 1000
    });

    $('#contact-form').submit(function (e) {
        e.preventDefault();
        var but = $(this).find('button[type="submit"]');
        but.prop( 'disabled', true ).text('Отправка...');
        var form = $(this);
        var form_data = form.serialize();
        var phone = form.find('input[name="phone"]');
        var comment = form.find('textarea[name="comment"]');
        if(phone.val().length < 9) {
            phone.css({backgroundColor: "#ff0000", opacity: 0.8});
            setTimeout(function() {
                phone.css({backgroundColor: 'transparent', opacity: 1});
            }, 500);
                
            but.prop( 'disabled', false ).text('Купить');
        }
        else if (!comment.val().length) {
            comment.css({backgroundColor: "#ff0000", opacity: 0.8});
            setTimeout(function() {
                comment.css({backgroundColor: 'transparent', opacity: 1});
            }, 500);
            but.prop( 'disabled', false ).text('Купить');
        } 
        else {
            $.ajax({
                type: "POST",
                url: "send/send.php",
                data: form_data,
                cache: false,
                success: function () {
                    yaCounter45860163.reachGoal('Buy');
                    gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'Buy' });
                    fbq('track','Lead');
                    form.fadeOut(300, function () {
                        form.trigger('reset');
                        $(this).after("<div class='thankYou'>Спасибо за Ваш запрос. Менеджер свяжется с Вами в ближайшее время</div>");
                    });
                    setTimeout(function () {
                        form.fadeIn(300).siblings('.thankYou').remove();
                        but.prop( 'disabled', false ).text('Купить');
                    }, 10000);

                }

            });
        }
        return false;
    });

    $('.now-year').text(new Date().getFullYear());
});