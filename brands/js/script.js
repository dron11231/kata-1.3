window.onresize = () => {     
    document.location.reload(true); 
    }

if (screen.width >= 768) {
    document.querySelector('.swiper').classList.remove('swiper');
    document.querySelector('.swiper-wrapper').classList.remove('swiper-wrapper')
}


if (screen.width < 768) {

new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    slidesPerView: 1,

    spaceBetween: -50,

    breakpoints: {
        480: {
            slidesPerView: 2,
    
            spaceBetween: 100,
        },

        600: {
            slidesPerView: 2,

            spaceBetween: -50,
        },

        700: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    }
});
}

let showBtn = document.querySelector('.show-btn');

let visibilityHandler = function() {
    let slider = document.querySelector('.brands__slider');
    let btnText = showBtn.querySelector('.show-btn__text')

    if (slider.classList.contains('brands__slider--show')) {
        slider.classList.remove('brands__slider--show');
        slider.classList.add('brands__slider--hide');

        btnText.innerHTML = 'Показать все'
        showBtn.classList.remove('brands__show-btn--show');
        showBtn.classList.add('brands__show-btn--hide');

        return;
    } 
    slider.classList.remove('brands__slider--hide');
    slider.classList.add('brands__slider--show');
 
    btnText.innerHTML = 'Скрыть';
    showBtn.classList.remove('brands__show-btn--hide');
    showBtn.classList.add('brands__show-btn--show');
}

showBtn.addEventListener('click', visibilityHandler);