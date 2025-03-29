
// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    // console.log(e);
  });
  

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Mobile Mega Menu Toggle
const mobileMegaMenuButton = document.getElementById('mobile-mega-menu-button');
const mobileMegaMenu = document.getElementById('mobile-mega-menu');
const mobileMegaMenuIcon = mobileMegaMenuButton.querySelector('svg');

mobileMegaMenuButton.addEventListener('click', () => {
    mobileMegaMenu.classList.toggle('max-h-0');
    mobileMegaMenu.classList.toggle('max-h-screen');
    mobileMegaMenuIcon.classList.toggle('rotate-180');
});

// Desktop Mega Menu Hover Effect
const megaMenu = document.querySelector('.group');
const megaMenuDropdown = document.querySelector('.mega-menu');

megaMenu.addEventListener('mouseenter', () => {
    megaMenuDropdown.classList.add('active');
});

megaMenu.addEventListener('mouseleave', () => {
    megaMenuDropdown.classList.remove('active');
});
// const heroImages  = [
// {
// id: 1,
// src: 'https://amda.org.np/files/pics/65GA_20810724.jpg',
// title: 'Image 1',
// description: 'Description for Image 1'
// },
// {
// id: 2,
// src: 'https://amda.org.np/files/pics/StragetigPlanning_20810904-5.png',
// title: 'Image 2',
// description: 'Description for Image 2'
// },
// {
// id: 3,
// src: 'https://amda.org.np/files/pics/AMDA%20Mechi%20Hospital_Dhulabari-Jhapa2.png',
// title: 'Image 3',
// description: 'Description for Image 3'
// },
// {
// id: 4,
// src: 'https://amda.org.np/files/pics/ReliefMaterialsToEarthquakeVictims_Jajarkor-Rukum%20Paschim_20800723.png',
// title: 'Image 4',
// description: 'Description for Image 4'
// },
// {
// id: 5,
// src: 'https://amda.org.np/files/pics/AIHS_Damak-923.jpg',
// title: 'Image 5',
// description: 'Description for Image 5'
// }
// ];
var swiper = new Swiper(".hero-slider", {
    loop: true, // Infinite loop
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Clickable dots
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade", // Smooth fade transition
    fadeEffect: {
      crossFade: true,
    },
  });

  document.querySelector(".swiper-button-next").addEventListener("click", function() {
      console.log("hel");
    });

    const heroImages = [
        "https://www.amda.org.np/files/pics/61General%20Assembly_AMDA%20Nepal_%2020790719%20(img%202)-189.jpg",
        "https://www.amda.org.np/files/pics/CO_Weekly%20News47_2081_img1.jpeg",
        "https://www.amda.org.np/files/pics/ReliefMaterialsToEarthquakeVictims_Jajarkor-Rukum%20Paschim_20800723_img2.JPG",
        "https://www.amda.org.np/files/pics/ReliefMaterialsToEarthquakeVictims_Jajarkor-Rukum%20Paschim_20800723_img1.JPG",
        "https://www.amda.org.np/files/pics/Opening%20of%20Academic%20Program_AIHS%20Butwal-287.jpg",
        "https://www.amda.org.np/files/pics/Laparoscopy%20service_SCWH_20230204%20_img%202-235.jpg",
        "https://www.amda.org.np/files/pics/Completion%20of%20rural%20video%20x-ray%20training_AMDA%20Hospital_20791127.jpg",
        "https://www.amda.org.np/files/pics/Grand%20Presentastion%20GM%203rd%20year_Dhulabari%20PHC_20790812.jpg",
        "https://www.amda.org.np/files/pics/3.jpg"
    ];
    let Gallery = document.querySelector(".Gallery");
    let index = 0;
    document.querySelector(".next").addEventListener("click", function() {
        index++;
        if (index > heroImages.length - 1) {
            index = 0;
        }
        Gallery.src = heroImages[index];
        });
        document.querySelector(".prev").addEventListener("click", function() {
            console.log("hello");
            
            index--;
            if (index < 0) {
                index = heroImages.length - 1;
                }
                Gallery.src = heroImages[index];
                });