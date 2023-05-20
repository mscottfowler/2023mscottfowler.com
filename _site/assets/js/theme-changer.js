const toggleSwitch = document.querySelector('.changeTheme');
const currentTheme = localStorage.getItem('jekyll-henry-theme') ? localStorage.getItem('jekyll-henry-theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

const switchTheme = () => {
    const currentMode = document.documentElement.getAttribute('data-theme');
    if (currentMode === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('jekyll-henry-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('jekyll-henry-theme', 'light');
    }    
}
toggleSwitch.addEventListener('click', switchTheme, false);