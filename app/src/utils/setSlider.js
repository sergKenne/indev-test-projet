import 'slick-carousel'
const $ = require('jquery');
window.$ = $;
const setSlider = () => {
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 400,
        wipeToSlide: true,
        responsive: [
            {
                breakpoint: 1060,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    
    $('.slider').on('afterChange', function(slick, currentSlide){
        $('.ind').text(currentSlide.currentSlide + 1);
    });
}

export default setSlider;