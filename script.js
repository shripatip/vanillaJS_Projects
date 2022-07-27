const sliderContainer = document.querySelector('.slider-container');
const leftSlider = document.querySelector('.left-slide');
const rightSlider = document.querySelector('.right-slide');

const downButton = document.querySelector('.down-button');

const upButton = document.querySelector('.up-button');

const sliderLength = rightSlider.querySelectorAll('div').length;
console.log(sliderLength);
let activeindex = 0
leftSlider.style.top = `${-(sliderLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderheight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeindex++;
        if (activeindex > sliderLength - 1) {
            activeindex = 0;
        }

    } else if (direction === 'down') {
        activeindex--;
        if (activeindex < 0) {
            activeindex = 0;
        }
    }
    rightSlider.style.transform = `translateY(-${activeindex*sliderheight}px)`;
    leftSlider.style.transform = `translateY(${activeindex*sliderheight}px)`;

}