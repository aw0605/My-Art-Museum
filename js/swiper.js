// 지난 전시회 swiper-slide
var swiper = new Swiper(".pastSwiper", {
    autoplay: {
        delay: 3000,
    },
    loop: false,
    speed: 1500,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable : true
    }
});

// 공지사항 swiper-slide
var swiper = new Swiper(".noticeSwiper", {
    slidesPerView: 1,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    breakpoints: { 
        1280: {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        slidesPerView: 3,
        }
    }
});