 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const infos = document.querySelectorAll('.info');
let currentIndex = 0;

function toggleInfo() {
  infos.forEach((info, index) => {
    if (index === currentIndex) {
      info.classList.add('show');
    } else {
      info.classList.remove('show');
    }
  });

  currentIndex = (currentIndex + 1) % infos.length;
}

setInterval(toggleInfo, 3000);
toggleInfo(); 