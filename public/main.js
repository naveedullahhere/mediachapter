$(document).ready(function () {

    if (window.location.href.indexOf("graphic-design") > -1) {
        $('#gallery').mixItUp({
            selectors: {
                target: '.gallery-item',
                filter: '.filter'
            }
        });
    }
    window.addEventListener('click', () => {
        if (window.location.href.indexOf("graphic-design") > -1) {
            $('#gallery').mixItUp({
                selectors: {
                    target: '.gallery-item',
                    filter: '.filter'
                }
            });
        }
    })




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
});