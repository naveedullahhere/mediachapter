// $(document).ready(function () {
// window.addEventListener('load', function () {
console.log("im script");
window.addEventListener('click', () => {
    console.log("hon");
    if (window.location.href.indexOf("graphic-design") > -1) {
        console.log("entr");
        $('#gallery').mixItUp({
            selectors: {
                target: '.gallery-item',
                filter: '.filter'
            }
        });
        console.log("mixed");
    }
})
if (window.location.href.indexOf("graphic-design") > -1) {
    $('#gallery').mixItUp({
        selectors: {
            target: '.gallery-item',
            filter: '.filter'
        }
    });
}




$('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 3
        }
    }]
});
$('.testimonialsMain').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
});
$('.clients').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



/* Please ❤ this if you like it! */


(function ($) {
    "use strict";

    // $(function () {
    //     var header = $(".start-style");
    //     $(window).scroll(function () {
    //         var scroll = $(window).scrollTop();

    //         if (scroll >= 10) {
    //             header.removeClass('start-style').addClass("scroll-on");
    //         } else {
    //             header.removeClass("scroll-on").addClass('start-style');
    //         }
    //     });
    // });

    //Animation



    $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
            setTimeout(function () {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });


})(jQuery);

    // });