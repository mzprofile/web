let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

document.getElementById('menu-toggle').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

function redirectToFacebook() {
    window.open('https://www.facebook.com/retired.rrk', '_blank');
}
function redirectToInstagram() {
    window.open('https://www.instagram.com/retired_rrk', '_blank');
}
function redirectToLinkedin() {
    window.open('https://www.linkedin.com/retiredrrk', '_blank');
}
function redirectToTwitter() {
    window.open('https://www.x.com/retired_rrk', '_blank');
}
function redirectToPinterest() {
    window.open('https://www.pinterest.com/retired_rrk', '_blank');
}
function redirectToTiktok() {
    window.open('https://www.tiktok.com/retired_rrk', '_blank');
}
