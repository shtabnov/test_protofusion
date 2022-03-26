let linksNav = document.querySelectorAll('.header__link');

for (let link of linksNav) {
    link.addEventListener('click', () => {
        let attribute = link.getAttribute('href').substring(1);
        let obj = document.getElementById(attribute);
        if (obj) {
            let position = window.getComputedStyle(obj).display
            position == 'block' ? obj.style.display = 'none' : obj.style.display = 'block';
        }
    })
}

