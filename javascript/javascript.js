/*slider-1*/

document.addEventListener('DOMContentLoaded', function () {
    const swiperContainers = document.querySelectorAll('.swiper-container-1');

    swiperContainers.forEach(function (swiperContainer) {
        const swiper = new Swiper(swiperContainer, {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 5000, 
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
        });
    });
});

/*slider-2*/

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container-2', {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        freeMode: true,
    });
});

/*slider-3*/

document.addEventListener('DOMContentLoaded', function () {
    function initializeSwiper(containerSelector) {
        const container = document.querySelector(containerSelector);

        const swiper = new Swiper(container, {
            slidesPerView: 4,
            spaceBetween: 29,
            loop: true,
            autoplay: {
                delay: 100,
                disableOnInteraction: false,
            },
            speed: 15000,
        });

        return swiper;
    }

    const swiper1 = initializeSwiper('.swiper-container-3');
    const swiper2 = initializeSwiper('.swiper-container-4');
});

/*
document.addEventListener('DOMContentLoaded', function () {
    function initializeSwiper(containerSelector, numberOfSlides, imgSrc1, imgSrc2) {
        const container = document.querySelector(containerSelector);
        const slides = [];
        for (let i = 0; i < numberOfSlides; i++) {
            slides.push(`<div class="swiper-slide"><img class="img-fluid" src="${imgSrc1}" alt="Slide"></div>`);
            slides.push(`<div class="swiper-slide"><img class="img-fluid" src="${imgSrc2}" alt="Slide"></div>`);
        }
        const swiper = new Swiper(container, {
            slidesPerView: 4, 
            spaceBetween: 29,
            loop: true, 
            autoplay: {
                delay: 5000, 
                disableOnInteraction: false,
            },
            virtual: {
                slides: slides,
                renderSlide: function (slide, index) {
                    return slide;
                },
            },
        });
        return swiper;
    }
    const swiper1 = initializeSwiper('.swiper-container-3', 7, './img/avada-media.png', './img/spacelablogospecial.png');
    const swiper2 = initializeSwiper('.swiper-container-4', 7, './img/spacelablogospecial.png', './img/avada-media.png');
});
*/