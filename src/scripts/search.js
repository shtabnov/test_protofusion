let searchButton = document.querySelector('.header__search-button');
let searchForm =  document.querySelector('.search');

searchButton.addEventListener('click', () => {
    searchForm.classList.toggle('search_active')
})

document.addEventListener('click', (e) => {
    if (!e.target.matches('.search, .search *, .header__search-button')) {
        searchForm.classList.remove('search_active')      
    } 
    e.stopPropagation();
})