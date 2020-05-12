const menuBtn = document.querySelectorAll(".openMobileMenu"),
    mobileMenu = document.querySelector('.navigation--mob'),
    main = document.getElementById('main');


for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener('click', () => {
        if (menuBtn[i].classList.contains('active')) {
            main.classList.remove("active");
            menuBtn[i].classList.remove("active");
            mobileMenu.style.left = '-100%';
        } else {
            menuBtn[i].classList.add('active');
            main.classList.add('active');
            mobileMenu.style.left = '0';
            main.classList.add('active');
        }
    });
}


const mobileMenuItems = mobileMenu.children;

for (let i = 0; i < mobileMenuItems.length; i++) {
    mobileMenuItems[i].addEventListener('click', () => {
        menuBtn[0].classList.remove("active");
        menuBtn[1].classList.remove("active");
        main.classList.remove("active");
        mobileMenu.style.left = '-100%';
    });
}

