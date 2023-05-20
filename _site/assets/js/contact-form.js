//Modal
const contactButton = document.querySelector('.open-contact');
const closeModal = document.querySelector('.close-modal');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');

const form = document.querySelector('#contact-form');
const button = document.querySelector('#submit-contact-form');
const message = document.querySelector('#contact-form-message');

const addClass = () => {
    button.style = "display: block;";
    modalContainer.classList.remove('fadeOut');
    modal.classList.remove('zoomOut');
    modalContainer.classList.add('fadeIn');
    modal.classList.add('zoomIn');
}
const addOutClass = () => {
    message.style = "display: none;";
    modalContainer.classList.remove("fadeIn");
    modal.classList.remove("zoomIn");
    modalContainer.classList.add("fadeOut");
    modal.classList.add("zoomOut");
}

contactButton.addEventListener('click', addClass, false);
closeModal.addEventListener('click', addOutClass, false);
modal.addEventListener('click', (e) => { e.stopPropagation() }, false);

//Form
window.addEventListener("DOMContentLoaded", function() {
    const success = () => {
        form.reset();
        button.style = "display: none;";
        message.classList.add('success');
        message.innerHTML = "Message successfully submited!";
    }

    const error = () => {
        message.classList.add('error');
        message.innerHTML = "Oops! There was a problem.";
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        message.style = "display: block;";
        const data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

const ajax = (method, url, data, success, error) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) {
            return;
        }
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        }
        else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}