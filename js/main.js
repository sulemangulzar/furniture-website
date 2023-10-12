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
    distance: '60px',
    duration: 3000,
    delay: 600,
    // reset: true rest animation
});

sr.reveal('.hero-text', { origin: 'top' });

sr.reveal(',item');