var swiper = new Swiper(".smallSwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    followFinger : false,
});

var swiper2 = new Swiper(".bigSwiper", {
    spaceBetween: 10,
    followFinger : false,
    mousewheel: true,
    // cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});