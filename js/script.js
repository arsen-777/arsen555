$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 500,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        smartSpeed: 500,
        margin: 20,
        // dots: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            250: {
                items: 1,
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 3
            },
            1140: {
                items: 4
                
            },
            1280: {
                items: 4
                
            },
            1400: {
                items: 4
                
            },
        }
    });



    try {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 15,
            loop: true,
            autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pagination:true,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                520: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                980: {
                    slidesPerView: 1,
                },
                1140: {
                  slidesPerView: 1,
                }
              }
        });
    
        const swiperSlide = document.querySelectorAll('.swiper-slide');
    
        swiperSlide.forEach(slide => {
            slide.addEventListener('mouseover', () => {
                swiper.autoplay.stop()
            });
    
            slide.addEventListener('mouseleave', () => {
                swiper.autoplay.start()
            });
        })
    } catch {
        console.log('error swiper');
    }



});