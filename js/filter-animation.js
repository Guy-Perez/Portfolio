$(document).ready(function() {
    /**
     * @description Gestion des animation filter grid img portfolio
     */
    $(window).on("load", function () {
        var $container = $('.portfolio');
        $container.isotope({
            filter: '*',
            animationOptions: {
                queue: true
            }
        });

        $('.portfolio-nav li').click(function () {
            $('.portfolio-nav .current').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    queue: true
                }
            });
            return false;
        });

    });

    // $('#portfolio-item').mixItUp();
    
});