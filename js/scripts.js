$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [ '', ' ' ],
    autoplay: false,
    autoplayTimeout:2000,
    responsive:{
        375:{
            items:1
        },
        428:{
            items:1
        },
        768:{
            items:2
        },

        1000:{
            items:3
        }
    }
});