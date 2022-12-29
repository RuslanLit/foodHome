$('.our-menu__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 915,
      settings: {
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1
      }
    }
  ]
});

$('.testimonials__inner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false
});


$(document).ready(function () {
  $(".menuToggle").click(function () {
    $(this).toggleClass("active");
    $('.header-nav__list').slideToggle(300, function () {
      if ($(this).css('display') === "none") {
        $(this).removeAttr('style');
      }
    });
  });
});