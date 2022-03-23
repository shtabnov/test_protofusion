let searchButton = document.querySelector('.header__search-button');
let searchForm =  document.querySelector('.header__search');

searchButton.addEventListener('click', () => {
    searchForm.classList.toggle('header__search_active')
})

// window.addEventListener('click', (event) => {
//     if (event.target != searchForm ||
//         event.target != searchButton) {
//         searchForm.classList.remove('header__search_active')
//     }
// })