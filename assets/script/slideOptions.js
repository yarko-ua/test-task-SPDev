$(".slider").slick({
    dots: true,
    dotsClass: 'dots-container',
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: 1,
    appendArrows: $('.slider'),
    appendDots: $('.slider'),
    prevArrow: `<div class="slick-prev"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z" fill="#65636A"/>
    </svg></div>`,
    nextArrow: `<div class="slick-next"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z" fill="#65636A"/>
    </svg></div>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                centerMode: false,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
            }
        },
    ]
});