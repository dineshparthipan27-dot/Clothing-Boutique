const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const icon = hamburger.querySelector('i');
const navItems = document.querySelectorAll('.nav-links li a');
const sections = document.querySelectorAll('section');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
        document.body.style.overflow = 'hidden';
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
});


navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    });
});


window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;


        if (pageYOffset >= (sectionTop - 80)) {
            current = section.getAttribute('id');
        }
    });


});









const scrollTopBtn = document.getElementById('scroll-top-btn');

window.addEventListener('scroll', () => {

    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});


scrollTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});






document.addEventListener("DOMContentLoaded", function () {
    const lenis = new Lenis({
        duration: 1.2, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });


    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
});






window.addEventListener('load', function () {
    const preloader = document.getElementById('luxe-preloader');

    if (preloader) {

        setTimeout(() => {


            preloader.classList.add('fade-content');


            setTimeout(() => {
                preloader.classList.add('slide-up');


                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 800);

            }, 400); 

        }, 1500); 
    }
});