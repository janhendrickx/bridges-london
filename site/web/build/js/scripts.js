jQuery(document).ready(function(){
    $('.c-blog-detail').animate({"margin-left": "0px"});
    $('#close').click(function() {
        $('.c-blog-detail').animate({"margin-left": "-1000px"});
    })

    // $('.c-bridges-list-item').click(function() {
    //     $('.accordion-icon').toggleClass('open');
    //     // $('.accordion-icon').toggleClass('open');

    //     // $accordion_content = $(this).next('.accordion-content');
    //     // $('.accordion-content').not($accordion_content).slideUp();
    //     // $('.accordion-content').not($accordion_content).prev('.accordion-title').removeClass('open');
    //     // $accordion_content.stop(true, true).slideToggle(400)

    //     // Remove this handle
    //     //$('.accordion-title i').toggleClass('rotate');
    // });

  
});