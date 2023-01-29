const swiper = new Swiper('.swiper', {
    grabCursor: true,
    centeredSlides: true,
    freeMode: false,
    slidesPerView: 'auto',
    effect: 'cards',
    loop: true,
    loopedSlides: 5,
    cardsEffect: {
        slideShadows: true,
        rotate: true,
        transformEl: null,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});