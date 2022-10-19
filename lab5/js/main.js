(function() {
    const header = document.querySelector('.header');
    window.onscroll = () =>{
        if(window.pageYOffset > 50){
            header.classList.add('header__active')
        } else {
            header.classList.remove('header__active')
        }
    };
}());

/* Burger heandel*/

(function(){
    const burgerItem = document.querySelector('.burger__line_menu')
    const menu = document.querySelector('.header__nav ')
    var count = 1;
    burgerItem.addEventListener('click', () => {
        if((count % 2) != 0) {
            menu.classList.add('header__nav_active')
            count++;
        } else {
            menu.classList.remove('header__nav_active')
            count--;
        }       
    });
}());

