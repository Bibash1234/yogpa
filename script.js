// Toggle menu

$(function ()

    {

        $('.hamburger-menu').on('click', function () {

            $('.toggle').toggleClass('open');
            $('.nav-list').toggleClass('open');
        });
    });



// testimonial slider

$(function () {


    $("#customers-testimonial").owlCarousel({

        items: 1,

        autoplay: true,

        smartSpeed: 700,

        loop: true,

        autoPlayHoverPause: true




    });
});