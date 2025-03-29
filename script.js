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
const heroImages  = [
{
id: 1,
src: 'https://amda.org.np/files/pics/65GA_20810724.jpg',
title: 'Image 1',
description: 'Description for Image 1'
},
{
id: 2,
src: 'https://amda.org.np/files/pics/StragetigPlanning_20810904-5.png',
title: 'Image 2',
description: 'Description for Image 2'
},
{
id: 3,
src: 'https://amda.org.np/files/pics/AMDA%20Mechi%20Hospital_Dhulabari-Jhapa2.png',
title: 'Image 3',
description: 'Description for Image 3'
},
{
id: 4,
src: 'https://amda.org.np/files/pics/ReliefMaterialsToEarthquakeVictims_Jajarkor-Rukum%20Paschim_20800723.png',
title: 'Image 4',
description: 'Description for Image 4'
},
{
id: 5,
src: 'https://amda.org.np/files/pics/AIHS_Damak-923.jpg',
title: 'Image 5',
description: 'Description for Image 5'
}
];

// Get the hero container
// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
const sliderContainer = document.querySelector('.hero-slider');
const captionElement = document.querySelector('.absolute.bottom-4.left-4');
const dotsContainer = document.querySelector('.absolute.bottom-8.right-8');
let currentIndex = 0;

// Preload all images
heroImages.forEach(img => {
    const imgLoader = new Image();
    imgLoader.src = img.src;
});

// Create navigation dots
heroImages.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `w-3 h-3 rounded-full ${index === 0 ? 'bg-white' : 'bg-white bg-opacity-50'}`;
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
        resetTimer();
    });
    dotsContainer.appendChild(dot);
});

// Clone first image for smooth looping
const firstImage = sliderContainer.querySelector('.hero-image');
const images = [firstImage];

// Function to update the slider
function updateSlider() {
    // Fade out current image
    images[currentIndex].style.opacity = 0;
    
    // Update index
    currentIndex = (currentIndex + 1) % heroImages.length;
    
    // Create new image if needed
    if (!images[currentIndex]) {
        const newImg = document.createElement('img');
        newImg.className = 'hero-image w-full h-full object-cover absolute inset-0 opacity-0';
        newImg.src = heroImages[currentIndex].src;
        newImg.alt = heroImages[currentIndex].alt;
        sliderContainer.appendChild(newImg);
        images.push(newImg);
    }
    
    // Update caption
    captionElement.textContent = heroImages[currentIndex].caption;
    
    // Update dots
    dotsContainer.querySelectorAll('button').forEach((dot, i) => {
        dot.className = `w-3 h-3 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`;
    });
    
    // Fade in new image
    setTimeout(() => {
        images[currentIndex].style.opacity = 1;
    }, 50);
}

// Auto-rotate every 2 seconds
let slideInterval = setInterval(updateSlider, 5000);

// Reset timer on interaction
function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(updateSlider, 5000);
}

// Pause on hover
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
    resetTimer();
});
});
// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });