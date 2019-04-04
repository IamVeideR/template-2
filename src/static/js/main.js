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