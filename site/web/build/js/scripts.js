jQuery(document).ready(function(){
    $('.c-blog-detail').animate({"margin-left": "0px"});
    $('#close').click(function() {
        $('.c-blog-detail').animate({"margin-left": "-1000px"});
    })
});