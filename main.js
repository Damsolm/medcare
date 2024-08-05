const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');


openNavBtn.addEventListener('click', () => {
 navItems.style.display = 'flex';
 openNavBtn.style.display = 'none';
 closeNavBtn.style.display = 'inline-block';
})


const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';  
}


closeNavBtn.addEventListener('click', closeNav);





// close nav menu when a menu item is clicked

if(window.innerWidth < 1024) {
  document.querySelectorAll('#nav__items li a').forEach(navItem => {
    navItem.addEventListener('click', () => {
      closeNav();
    })
  })
}


// change navbar styles on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// TESTIMONIALS SECTION (swiper js)
    // const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: false,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
        // Responsive BreakPoint
    breakpoints: {
        // when window is >= 600px
        600: {
            slidesPerView: 2,
        },

      // when window is >= 600px
      1024: {
        slidesPerView: 3,
      }

    },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });