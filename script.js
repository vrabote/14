(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        }
            else {
                header.classList.remove('header_active');
            }

        
    } 
} ());

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    burgerItem.addEventListener('click', () => {
            menu.classlist.add('header__nav-active');
        });
    menuCloseItem.addEventListenerAll('click',() =>{
        for (let i=0; i < menuCloseItem.lenght; i += 1){
            menu.classlist.remove('header__nav-active');
        }
    })    

}());
