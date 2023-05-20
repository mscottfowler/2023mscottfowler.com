const cookiesBanner = document.querySelector('.cookie-banner');
const acceptCookiesButton = document.querySelector('#acceptCookiesButton');
const cookiesAccepted = localStorage.getItem('jekyll-henry-cookies') ? localStorage.getItem('jekyll-henry-cookies') : null;

if (!cookiesAccepted) {
    cookiesBanner.classList.add('active');
}

const acceptCookies = () => {
    localStorage.setItem('jekyll-henry-cookies', true);
    cookiesBanner.classList.remove('active');
}

acceptCookiesButton.addEventListener('click', acceptCookies, false);