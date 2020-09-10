

$(window).resize(function(){
    $('body').css('padding-top', $('.navigation-wrap').height());
});

$(document).ready(function(){
    $('body').css('padding-top', $('.navigation-wrap').height());
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
        $('header').addClass('bg-shap');
    }
    if (scroll < 5) {
        $('header').removeClass('bg-shap');
    }
});



$('.users .slider').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    items:1,

    autoplay:true,
    autoplayTimeout:3000,
    autoplaySpeed:1000,
    autoplayHoverPause:true,
});

$('.logo_slider .slider').owlCarousel({
    loop:true,
    nav:false,
    margin: 20,
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplaySpeed:1000,
    autoplayHoverPause:true,
    //navText : ["<img src='../img/nav2.png'>","<img src='../img/nav1.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});