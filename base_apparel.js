let email = document.getElementById('email');
let errorIcon = document.getElementById('error-icon');
let errorMessage = document.getElementById('error-message');
let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    if (email.validity.typeMismatch) {
        e.preventDefault();
        errorIcon.style.opacity = 1;
        errorMessage.style.opacity = 1;
    } else {
        errorIcon.style.opacity = 0;
        errorMessage.style.opacity = 0;
    }
})