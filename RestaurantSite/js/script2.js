new WOW().init();

$(document).ready(function () {
    $('.your-class').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 300,
        centerPadding: '40px',
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
                    },
            {
                breakpoint: 600,
                settings: {
                    centerPadding: '30px',
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                    },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '20px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
    });
    
    
    
    
    $('.team-slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
    
    
    
    
    
});




