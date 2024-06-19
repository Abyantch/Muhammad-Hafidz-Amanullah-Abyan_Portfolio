//Navbar
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const nav = document.querySelector('nav');


    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        nav.classList.add('shadow-lg');


    } else {
        header.classList.remove('navbar-fixed');
        nav.classList.remove('shadow-lg');

    }
}