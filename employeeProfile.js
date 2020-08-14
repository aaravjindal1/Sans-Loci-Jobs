const update = document.getElementById('register');
const back = document.getElementById('back');
const upload = document.getElementById('intro');

update.addEventListener('click', e => {
    e.preventDefault();
  location.replace('EmployeHome.html');
});

back.addEventListener('click', e => {
    e.preventDefault();
  location.replace('EmployeHome.html');
});

upload.addEventListener('click', e => {
  e.preventDefault();
  alert('This feature is still being added, Sorry for the inconvenience!')
});