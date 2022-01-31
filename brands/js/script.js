window.addEventListener('resize', () => {
    document.location.reload(true);
})   

if (screen.width >= 768) {
    document.querySelector('.swiper').classList.remove('swiper');
    document.querySelector('.swiper-wrapper').classList.remove('swiper-wrapper')
}

document.addEventListener("DOMContentLoaded", () => {
    if (screen.width < 768) {

        let swiper = new Swiper('.swiper', {
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
})

function displayHandler(arr, startingPoint, displayCondition) {
    if (displayCondition === 'none') {
        for (let i = startingPoint; i < arr.length; i++) {
            arr[i].style.display = 'none';
        }
    };
    if (displayCondition === 'block') {
        for (let i = startingPoint; i < arr.length; i++) {
            arr[i].style.display = 'block';
        } 
    };
}

const showBtn = document.querySelector('.show-btn');

function visibilityHandler() {
    const slider = document.querySelector('.brands__slider');
    const slides = document.querySelectorAll('.swiper-slide')
    const btnText = showBtn.querySelector('.show-btn__text')

    if (slider.classList.contains('brands__slider--show')) {
        slider.classList.remove('brands__slider--show');
        slider.classList.add('brands__slider--hide');

        btnText.innerHTML = 'Показать все'
        showBtn.classList.remove('brands__show-btn--show');
        showBtn.classList.add('brands__show-btn--hide');
        
        if (screen.width < 1120) {
            setTimeout( () => displayHandler(slides, 6, 'none'), 1000)
        } else {
            setTimeout( () => displayHandler(slides, 8, 'none'), 1000)
        }

    } else {
        slider.classList.remove('brands__slider--hide');
        slider.classList.add('brands__slider--show');
 
        btnText.innerHTML = 'Скрыть';
        showBtn.classList.remove('brands__show-btn--hide');
        showBtn.classList.add('brands__show-btn--show');

        if (screen.width < 1120) {
            displayHandler(slides, 6, 'block');
        } else {
            displayHandler(slides, 8, 'block');
        }
    }
}

showBtn.addEventListener('click', visibilityHandler);