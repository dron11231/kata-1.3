let menuListItems = document.querySelectorAll('.menu__list-item');

let activityChecker = function() {
    for(let i = 0; i < menuListItems.length; i++) {
        if(menuListItems[i].classList.contains('menu__list-item--active')) {
            menuListItems[i].classList.remove('menu__list-item--active')
        }
    }
}

for(let i = 0; i < menuListItems.length; i++) {
    menuListItems[i].addEventListener('click', () => {
        activityChecker();
        menuListItems[i].classList.add('menu__list-item--active')
    })
}