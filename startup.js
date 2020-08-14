const button = document.querySelector('button');

button.addEventListener('click', e => {
    e.preventDefault();
    location.replace('signup.html');
})