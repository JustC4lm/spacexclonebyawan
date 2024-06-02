document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const popup = document.getElementById('popup');
    const body = document.body;

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        mobileMenu.classList.toggle('show-menu');
        popup.classList.toggle('popup-show');
        body.classList.toggle('no-scroll');
    });

    let lastScrollTop = 0;
    const navbar = document.querySelector('.main-header');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll Down
            navbar.style.top = '-100px';
        } else {
            // Scroll Up
            navbar.style.top = '0';
            if (scrollTop > document.querySelector('.section-1').clientHeight) {
                navbar.style.backgroundColor = 'black';
            } else {
                navbar.style.backgroundColor = 'transparent';
            }
        }
        lastScrollTop = scrollTop;
    });
});
