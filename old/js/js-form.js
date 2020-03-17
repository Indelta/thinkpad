$(document).ready(function () {

    $("form").submit(function(e) {
        var ref = $(this).find("required");
        $(ref).each(function(){
            if ( $(this).val() == '' )
            {
                alert("Поле не должно быть пустое!");
                $(this).focus();
                e.preventDefault();
                return false;
            }
        });  return true;
    });

    $('.slidersall .header .button').click(function () {
        $('#callForm').removeClass().addClass('slider');
    });

    $('.calculator .lastScreen nav .next').click(function () {
        $('#callForm').removeClass().addClass('calculator');
    });

     /*
     форма Заказ звонка
     */
    $('#callForm').submit(function () {
        var but = $(this).find('input[type="submit"]');
        but.prop( 'disabled', true ).val('Отправка...');
        var form = $(this);
        var form_data = form.serialize();
        var email = form.find('input[name="email"]');

        // if (phone.val().length < 7) {
        //     phone
        //         .animate({backgroundColor: "#ff0000", opacity: 0.8}, 300)
        //         .animate({backgroundColor: "#fff", opacity: 1}, 300);
        //     but.prop( 'disabled', false ).val('Получить консультацию');
        // }
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (email.val().length === "") {
            email
                .animate({backgroundColor: "#ff0000", opacity: 0.8}, 300)
                .animate({backgroundColor: "#fff", opacity: 1}, 300);
            but.prop( 'disabled', false ).val('Получить консультацию');
        } else {
            $.ajax({
                type: "POST",
                url: "send/send.php",
                data: form_data,
                cache: false,
                success: function () {
                    if (form.hasClass('slider')){
                        yaCounter45860163.reachGoal('X1CarbonGetConsultation');
                        gtag('event', 'send', {'event_category': 'Btn', 'event_action': 'Click', 'event_label': 'X1CarbonGetConsultation' });
                    } else if (form.hasClass('calculator')){
                        yaCounter45860163.reachGoal('X1CarbonCalculatorConsultation');
                        ga('send', 'event', 'Btn', 'Click', 'X1CarbonCalculatorConsultation');
                    }
                    fbq('track','Lead');
                    form.fadeOut(300, function () {
                        form.trigger('reset');
                        $(this).after("<div class='thankYou'>Спасибо за Ваш запрос. Менеджер свяжется с Вами в ближайшее время</div>");
                        $('.fancybox-inner').css("height","auto");
                        $('.fancybox-inner').css("width","auto");
                    });
                    setTimeout(function () {
                        form.fadeIn(300).siblings('.thankYou').remove();
                        but.prop( 'disabled', false ).val('Получить консультацию');
                    }, 10000);

                }

            });
        }
        return false;
    });

    /*
    форма Связаться с поставщиком
    */
    $('.contactForm').submit(function (e) {
        e.preventDefault();
        var but = $(this).find('input[type="submit"]');
        but.prop( 'disabled', true ).val('Отправка...');
        var form = $(this);
        var form_data = form.serialize();
        var phone = form.find('input[name="phone"]');
        // var email = form.find('input[name="email"]');
        // var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        // if (email.val().length === "") {
        //     email
        //         .animate({backgroundColor: "#ff0000", opacity: 0.8}, 300)
        //         .animate({backgroundColor: "#fff", opacity: 1}, 300);
        //     but.prop( 'disabled', false ).val('Получить консультацию');
        if(phone.val().length < 9) {
            phone
                .animate({backgroundColor: "#ff0000", opacity: 0.8}, 300)
                .animate({backgroundColor: "#fff", opacity: 1}, 300);
            but.prop( 'disabled', false ).val('Купить');
        } else {
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
                        but.prop( 'disabled', false ).val('Купить');
                    }, 10000);

                }

            });
        }
        return false;
    });

});