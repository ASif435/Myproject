/*============================
...........preloader..........
===============================

*/

/*============================
team
===============================

*/
$(function () {

    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/*============================
            progress bars
===============================

*/
$(function () {

    $("#progess-element").waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);

        });


        this.destroy();

    }, {
        offset: 'bottom-in-view'
    });

});