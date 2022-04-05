let searchButton = document.querySelector('.control__search-button');
let searchForm =  document.querySelector('.search');


if (searchForm) {
    searchButton.addEventListener('click', () => {
        searchForm.classList.toggle('search_active')
    })
    document.addEventListener('click', (e) => {
        if (!e.target.matches('.search, .search *, .control__search-button')) {
            searchForm.classList.remove('search_active')      
        } 
        e.stopPropagation();
    })
}