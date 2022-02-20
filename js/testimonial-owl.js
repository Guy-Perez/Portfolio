$(document).ready(function () {
    $("#testimonial-carousal").owlCarousel({
        loop: true,
        margin: 120,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });
});
