

const logInBtn = document.querySelector('.control__button');
const closeBtn = document.querySelector('.registration__close');
const regForm = document.querySelector('.registration');
if (regForm) {
    logInBtn.onclick = () => {
        regForm.style.display = 'block';
    }

    closeBtn.onclick = () => {
        regForm.style.display = 'none';
    }
}