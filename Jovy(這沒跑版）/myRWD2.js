/*==========Questions accordion==========*/
// const accordionItems = document.querySelector('.questions_item');

// accordionItems.forEach((item)=>{
//     const accordionHeader = item.querySelector('.questions_header');
//     accordionHeader.addEventlistener('click',() => {
//         toggleItem(item)

//     })
// })
// const toggleItem = (item) =>{
//     const accordionContent = item.querySelector('.questions_content')
//     accordionContent.style.height =accordionContent.scrollHeight + 'px'
//     item.classList.add('accordion-open');
// }

const accordionItems = document.querySelectorAll('.questions_item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions_header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions_content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-Up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 500})
sr.reveal(`.home__social`, {delay: 600})
sr.reveal(`.about__img, .contact__box`,{origin: 'left'})
sr.reveal(`.about__data, .contact__form`,{origin: 'right'})
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`,{interval: 100})




/*=============== Owl-carousel ===============*/


// $('.site-main .about-area .owl-carousel').owlCarousel({
//     loop: true,
//     autoplay: true,
//     dots: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         560: {
//             items: 2
//         }
//     }
// })

/*===============testimonial:failed ===============*/



// let swiperTestimonial = new Swiper(".testimonial_container", {
//   spaceBetween: 24,
//   loop: true,
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     576: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 48,
//     },
//   },
// });


// var swiper = new Swiper(".home-slider", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 7500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     loop:true,
//   });
  
//   var swiper = new Swiper(".review-slider", {
//     spaceBetween: 20,
//     centeredSlides: true,
//     autoplay: {
//       delay: 7500,
//       disableOnInteraction: false,
//     },
//     loop:true,
//     breakpoints: {
//       0: {
//           slidesPerView: 1,
//       },
//       640: {
//         slidesPerView: 2,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//     },
//   });

/*===============swiper.js (reviewPage:revSec)===============*/


var swiper = new Swiper('.swiper-container', {
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },


  breakpoints: {
    620: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  } 
  });