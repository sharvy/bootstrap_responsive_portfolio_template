// Lazy Load
$(function() {
    $("img.lazy").lazyload({
        event : "sporty"
    });
});
$(window).bind("load", function() {
    var timeout = setTimeout(function() { $("img.lazy").trigger("sporty") }, 2000);
});
// ---

$(window).load(function () {

    $('.page-overlay').fadeOut();


    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.page-scroll a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });



    new WOW().init();

    // Portfolio =============================
    var $container = $('.portfolio-container');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolio-filter a').click(function () {
        $('.portfolio-filter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });


    // Make Navigationbar Sticky =============================
    $("#navigation").sticky({topSpacing: 0, className: 'sticky-navigation'});


    // Reveal Animation ===============================
    window.scrollReveal = new scrollReveal();


    // Smooth Scroll ==================================
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    // Bx-slider init ====================================
    $('.bxslider').bxSlider({
        mode: 'fade',
        controls: false,
        auto: true,
        pause: 3000,
        autoHover: true,
        autoStart: true
    });


    // Contact Us Form ==========================================
    $(function () {
        $('input, textarea').each(function () {
            $(this).on('focus', function () {
                $(this).parent('.input').addClass('active');
            });

            $(this).on('blur', function () {
                if ($(this).val().length == 0) {
                    $(this).parent('.input').removeClass('active');
                }
            });
            if ($(this).val() != '') $(this).parent('.input').addClass('active');
        });
    });


    // Stellar Js for parallax scrolling
    $(window).stellar();


    // Count Up along with Animate.css
    var options = {
        useEasing: true,
        duration: 5
    };
    var pizza_ordered = new countUp("pizza_ordered", 0, 680, 0, 4);
    var projects_completed = new countUp("projects_completed", 0, 120, 0, 4);
    var happy_clients = new countUp("happy_clients", 0, 118, 0, 4);
    var cups_consumed = new countUp("cups_consumed", 0, 8589, 0, 4);

    $('.interesting-facts-wrapper')
        .bind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            pizza_ordered.start();
            projects_completed.start();
            happy_clients.start();
            cups_consumed.start();
        });


    // Performance Stats ====================
    $('#web-design-circle').circliful();
    $('#brand-identity-circle').circliful();
    $('#user-experience-circle').circliful();
    $('#photography-circle').circliful();

});