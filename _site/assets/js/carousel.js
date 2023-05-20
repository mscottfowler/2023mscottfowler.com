const slides = document.querySelector('.slides');

const checkCurrentSlide = (e) => {
    [...e.parentElement.children].forEach(sibling => sibling.classList.remove('active'));
    e.classList.add('active');
}

const moveToSlide = (index, e) => {
    const percentage = index * 100;
    slides.style.transform = `translateX(-${percentage}%)`;
    checkCurrentSlide(e);
}