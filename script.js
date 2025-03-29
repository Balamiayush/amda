
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
document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP timeline
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  
  // Text reveal animation
  tl.from(".text-reveal", {
      duration: 1.2,
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      y: 50,
      opacity: 0,
      stagger: 0.2
  });
  
  // Paragraph fade in
  tl.to("p", {
      duration: 0.8,
      opacity: 1,
      y: 0
  }, "-=0.6");
  
  // Buttons fade in
  tl.to(".flex.justify-center", {
      duration: 0.8,
      opacity: 1,
      y: 0
  }, "-=0.4");
  
  // Scroll indicator animation
  tl.to(".absolute.bottom-10", {
      duration: 0.6,
      opacity: 1,
      y: 0
  }, "-=0.4");
  
  // Background video parallax effect on scroll
  if (window.innerWidth > 768) {
      window.addEventListener('scroll', () => {
          const scrollPosition = window.scrollY;
          const video = document.querySelector('video');
          if (video) {
              video.style.transform = `translateY(${scrollPosition * 0.3}px)`;
          }
      });
  }
});
// Array of all image URLs
document.addEventListener('DOMContentLoaded', () => {
  // Image gallery functionality
  const heroImages = [
      "https://www.amda.org.np/files/pics/25th%20Anniversary%20of%20SCWH.jpg",
      "https://amda.org.np/files/pics/65GA_20810724.jpg",
      "https://amda.org.np/files/pics/StragetigPlanning_20810904-5.png",
      "https://amda.org.np/files/pics/AIHS_Damak-923.jpg",
      "https://amda.org.np/files/pics/ReliefMaterialsToEarthquakeVictims_Jajarkor-Rukum%20Paschim_20800723.png",
      "https://www.amda.org.np/files/pics/3.jpg"
  ];
  
  let currentIndex = 0;
  const galleryImage = document.querySelector('.gallery-image');
  const dotsContainer = document.querySelector('.absolute.bottom-8');
  
  // Create dot indicators
  heroImages.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = `dot w-3 h-3 rounded-full bg-white/50 cursor-pointer ${index === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => changeImage(index));
      dotsContainer.appendChild(dot);
  });
  
  const dots = document.querySelectorAll('.dot');
  
  function changeImage(newIndex) {
      // Don't do anything if same image is clicked
      if (newIndex === currentIndex) return;
      
      // GSAP animation for image transition
      const tl = gsap.timeline();
      
      tl.to(galleryImage, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
              galleryImage.src = heroImages[newIndex];
              
              // Update active dot
              dots[currentIndex].classList.remove('active');
              dots[newIndex].classList.add('active');
              currentIndex = newIndex;
          }
      });
      
      tl.to(galleryImage, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut"
      });
  }
  
  // Navigation button event listeners
  document.querySelector('.next').addEventListener('click', () => {
      changeImage((currentIndex + 1) % heroImages.length);
  });
  
  document.querySelector('.prev').addEventListener('click', () => {
      changeImage((currentIndex - 1 + heroImages.length) % heroImages.length);
  });
  
  // Auto-rotate images every 5 seconds
  let interval = setInterval(() => {
      changeImage((currentIndex + 1) % heroImages.length);
  }, 5000);
  
  // Pause auto-rotation on hover
  const gallery = document.querySelector('header');
  gallery.addEventListener('mouseenter', () => clearInterval(interval));
  gallery.addEventListener('mouseleave', () => {
      interval = setInterval(() => {
          changeImage((currentIndex + 1) % heroImages.length);
      }, 5000);
  });
  
  // Initialize GSAP timeline for text animations
  const textTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  
  // Text reveal animation
  textTl.from(".text-reveal", {
      duration: 1.2,
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      y: 50,
      opacity: 0,
      stagger: 0.2
  });
  
  // Paragraph fade in
  textTl.to("p", {
      duration: 0.8,
      opacity: 1,
      y: 0
  }, "-=0.6");
  
  // Buttons fade in
  textTl.to(".flex.justify-center", {
      duration: 0.8,
      opacity: 1,
      y: 0
  }, "-=0.4");
});
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
    let index = 0;
    let galleryImage = document.querySelector(".Gallery");
    
    function changeImage(newIndex) {
        galleryImage.classList.add("fade-out"); // Add fade-out class
        setTimeout(() => {
            index = newIndex;
            galleryImage.src = heroImages[index]; // Change the image source
            galleryImage.classList.remove("fade-out"); // Remove fade-out class after transition
        }, 100); // Match the CSS transition duration (0.5s)
    }
    
    document.querySelector(".next").addEventListener("click", function () {
        changeImage((index + 1) % heroImages.length); // Circular navigation
    });
    
    document.querySelector(".prev").addEventListener("click", function () {
        changeImage((index - 1 + heroImages.length) % heroImages.length); // Circular navigation
    });