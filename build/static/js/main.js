$(document).ready(() => {
$('.testimonials__slider').slick({
  infinite: true,
  dots: true,
  speed: 1000,
  prevArrow: null,
  nextArrow: null,
  cssEase: 'ease-in-out',
  autoplay: true,
  autoplaySpeed: 10000,
  draggable: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
});

$('.clients__slider').slick({
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: null,
    cssEase: 'ease-in-out',
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});

$('.projects__slider').slick({
  speed: 1000,
  cssEase: 'ease-in-out',
  draggable: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});


$(".work__load__link").on("click", () => {
  $(".work__extra-container").slideToggle();
});

$('.work__load__link').toggle(function() {
  $(this).text('Hide Extra Work');
}, function() {
  $(this).text('Load More Work');
});


$('.works').hover(
  function() {
    $(this).append( $("<div class='works--hover'><i class='fas fa-eye'></i></div>") );
    $(this).addClass('works--hovered')
  }, function() {
    $(this).find( ".works--hover" ).remove();
  }
);


// $(".works").on("click", () => {
//   $( ".works" ).add( "<div class='works__increase'><div class='works__increase__works'><a class='works__increase__close'><i class='fas fa-times'></i></a><div class='works__span'><div class='works__image'></div></div></div></div>" ).appendTo($( ".work__works" ) )
// });


// $( "body" ).click(function() {
//   $( ".works__increase").remove();
// });



$(".works").on("click", () => {
  $(".works__container").show();
});

$(".works__increase__close").on("click", () => {
  $(".works__container").hide();
});


$(".order-form__button").on("click", () => {
  $(".order__some-container").show();
});

$(".order__close").on("click", () => {
  $(".order__some-container").hide();
});


$(".dropdown__open").on("click", () => {
  $(".header__mobile__container").show();
  $(".dropdown__close").show();
  $(".dropdown__open").hide();
  $(".header__container").css({'position':'fixed', 'background-color':'white'});
});

$(".dropdown__close, .header__menu__item").on("click", () => {
  $(".header__mobile__container").hide();
  $(".dropdown__close").hide();
  $(".dropdown__open").show();
  $(".header__container").css({'position':'static', 'background-color':'transparent'});
});


$(window).scroll(function () {
  if ($(this).scrollTop() > 660) {
      $('.scroll-up__container').show();
  } else {
      $('.scroll-up__container').hide();
  }
});

});