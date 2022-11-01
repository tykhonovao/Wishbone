$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [ '', ' ' ],
    autoplay: false,
    autoplayTimeout:2000,
    responsive:{
        320:{
            items:1
        },
        428:{
            items:1
        },
        768:{
            items:2
        },

        884:{
            items:3
        }
    }
});

$( function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            opacity: 0,
            duration: 1000
        }
    });

    $( "#opener" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
} );

