$(document).ready(function () {

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


    if ($(".filter-list").length) {

    }

    window.addEventListener('click', () => {
        if (window.location.href.indexOf("graphic-design") > -1 || window.location.href.indexOf("Portfolio") > -1) {
            if ($(".filter-list").length) {
                $(".filter-list").mixItUp({});
            }
        }
    })
})


window.addEventListener('load', function () {
    document.addEventListener('click', () => {


        $('.customer-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4500,
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
            autoplaySpeed: 4500,
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
    })

    // const inputs = document.querySelectorAll(".input");
    
    // function focusFunc() {
    //     let parent = this.parentNode;
    //     parent.classList.add("focus");
    // }
    
    // function blurFunc() {
    //     let parent = this.parentNode;
    //     if (this.value == "") {
    //         parent.classList.remove("focus");
    //     }
    // }
    
    // inputs.forEach((input) => {
    //     input.addEventListener("focus", focusFunc);
    //     input.addEventListener("blur", blurFunc);
    // });
});

