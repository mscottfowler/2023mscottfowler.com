const articleContainer = document.querySelector('.wrapper');
const footerContainer = document.querySelector('.site-footer');
const readingTimeProgress = document.querySelector('.reading-progress-bar');

const updateScrollProgressBar = () => {
    const articleTop = articleContainer.offsetTop;
    const articleHeight = articleContainer.offsetHeight;
    const footerHeight = footerContainer.offsetHeight;

    const windowScroll = document.documentElement.scrollTop - articleTop;
    const documentVisibleHeight = document.documentElement.clientHeight;

    if (windowScroll >= 0) {
        const scrollPercentage = (windowScroll / (articleHeight - documentVisibleHeight + footerHeight)) * 100;
        readingTimeProgress.style.width = scrollPercentage + "%";
    }
    else {
        readingTimeProgress.style.width = 0 + "%";
    }
}

updateScrollProgressBar();

document.addEventListener('scroll', updateScrollProgressBar);
document.addEventListener('load', updateScrollProgressBar);