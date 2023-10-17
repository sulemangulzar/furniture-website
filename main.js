const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcn = document.querySelector('.mvan__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
    if (mobileNav.classList.contains(navClosedClass)) {
        mobileNav.classList.toggle(navOpenedClass);
    }

    closeBtnIcn.classList.toggle(arrowLeftClass);
    closeBtnIcn.classList.toggle(arrowRightClass);
}
);

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: 3000,
    delay: 600,
    // reset: true rest animation
});

sr.reveal('.hero-text', { origin: 'top' });


sr.reveal('.services-item', {
    delay: 600,
    distance: 1000,
    interval: 100,
    origin: 'top',
});


document.addEventListener("DOMContentLoaded", function () {
    const swiperWrapper = document.getElementById("swiper-wrapper");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;

    const updateButtonsVisibility = () => {
        prevButton.style.display = currentIndex > 0 ? "block" : "none";
        nextButton.style.display = currentIndex < swiperWrapper.children.length - 1 ? "block" : "none";
    };

    const moveToSlide = (index) => {
        if (index >= 0 && index < swiperWrapper.children.length) {
            currentIndex = index;
            const offset = -(currentIndex * (swiperWrapper.children[0].offsetWidth + 4)); // 4 is the margin
            swiperWrapper.style.transform = `translateX(${offset}px)`;
            updateButtonsVisibility();
        }
    };

    prevButton.addEventListener("click", () => {
        moveToSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        moveToSlide(currentIndex + 1);
    });

    updateButtonsVisibility();
});