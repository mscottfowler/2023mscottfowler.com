const allImages = Array.from(document.querySelectorAll('[ref="lightbox"]'));
const lightbox = document.getElementById('custom-lightbox');
const currentImage = document.getElementById('current-image');

let index = 0;
let isOpen = false;

const openLightbox = () => {
    lightbox.classList.add('active');
    currentImage.src = allImages[index];
    isOpen = true;
}

const closeLightbox = () => {
    lightbox.classList.remove('active');
    isOpen = false;
}

const nextImage = () => {
    index = index === allImages.length - 1 ? 0 : index + 1;
    currentImage.src = allImages[index];
}

const prevImage = () => {
    index = index === 0 ? allImages.length - 1 : index - 1;
    currentImage.src = allImages[index];
}

const findImageIndex = (item) => {
    return allImages.indexOf(item);
}

allImages.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        index = findImageIndex(item);
        openLightbox();
    });
});

window.addEventListener('keydown', event => {
    if (!isOpen) {
        return;
    } else if (event.keyCode === 27) {
        closeLightbox();
    } else if (event.keyCode === 37) {
        prevImage();
    } else if (event.keyCode === 39) {
        nextImage();
    }
});