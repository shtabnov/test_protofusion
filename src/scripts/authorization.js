const logInBtn = document.querySelector('.header__button');
const closeBtn = document.querySelector('.registration__close');
const regForm = document.querySelector('.registration');

logInBtn.onclick = () => {
    regForm.style.display = 'block';
}

closeBtn.onclick = () => {
    regForm.style.display = 'none';
}
