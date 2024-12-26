$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    // nav: true,
    // autoplay: true,
    responsive: {
        0:{
            items: 1,
        },
        576:{
            items: 2,
        },
        992:{
            items: 3,
        },
        1400:{
            items: 4,
            loop: false,
        }
    },
});
