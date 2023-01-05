//Navbar
const menu = document.querySelector('.menu');
const line1 = document.querySelector('.line-1');
const line3 = document.querySelector('.line-3');
const navbar = document.querySelector('.navbar');
const nav = document.querySelector('.nav')
menu.addEventListener('click', () => {
    nav.classList.toggle('change');
    navbar.classList.toggle('change');
    line1.classList.toggle('change');
    line3.classList.toggle('change');
})
//Navbar




// section-2 video player
const video = document.querySelector('.video');
const btn = document.querySelector('.controllers button i');

function playPause() {
    if (video.paused) {
        video.play();
        video.style.opacity='1';
        btn.className='fa-regular fa-circle-pause';
    }
    else {
        video.pause();
        video.style.opacity='0.3';
        btn.className='fa-regular fa-circle-play';
    }
}
btn.addEventListener('click' , () => {
    playPause();
})

const barWrapper = document.querySelector('.bar-wrapper');
const bar = document.querySelector('.bar');
let perc = (video.currentTime / video.duration) * 100  ;
video.addEventListener('timeupdate' , () => {
    perc = (video.currentTime / video.duration) * 100  ;
    bar.style.width = `${perc}%`;
})
// section-2 video player


// section-3 swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

// section-3 swiper
