jQuery(document).ready(function(){
    // On scroll fixed header

    // Calculate headerheight
    var headerHeight = $('.c-nav').outerHeight();

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 300) {
            $('.c-nav-links').addClass('fixed-top');
            //Add headerheight to the div with class headerHeight that's in the header.php file
            $('.headerHeight').css('height', headerHeight);
        }
        else {
            $('.c-nav-links').removeClass('fixed-top');
            //Remove headerheight to the div with class headerHeight that's in the header.php file
            $('.headerHeight').css('height', '0');
        }
    });
});