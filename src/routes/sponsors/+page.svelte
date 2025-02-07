
<script>
import { onMount, onDestroy } from "svelte";
import { fade, slide } from "svelte/transition";
import gsap from "gsap";
import Navbar from "../nav/+page.svelte"

// Customizable props with default values
export let autoplaySpeed = 5000;
export let pauseOnHover = true;
export let showProgress = true;
export let showArrows = true;
export let showThumbnails = true;

// State management
let sponsors = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  image: `/sponsors/${i + 1}.png`,
  name: `Sponsor ${i + 1}`
}));

let currentIndex = 0;
let isPlaying = true;
let progressValue = 0;
let carouselContainer;
let autoplayTimer;
let progressTimer;
let isAnimating = false;
let isMobile = false;
let showThumbnailDrawer = false;

// Touch handling
let touchStartX = 0;
let touchEndX = 0;

function initializeAnimations() {
  // Animate floating shapes
  gsap.to(".floating-shape", {
    y: "random(-20, 20)",
    x: "random(-20, 20)",
    rotate: "random(-15, 15)",
    scale: "random(0.95, 1.05)",
    duration: "random(3, 5)",
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: {
      amount: 4,
      from: "random"
    }
  });

  // Animate gradient background
  gsap.to(".gradient-bg", {
    backgroundPosition: "200% 200%",
    duration: 15,
    repeat: -1,
    ease: "none"
  });
}

function checkResponsive() {
  isMobile = window.innerWidth < 768;
  if (isMobile) {
    showThumbnails = false;
  }
}

function startAutoplay() {
  if (!autoplaySpeed) return;
  
  clearAllTimers();
  
  if (isPlaying) {
    autoplayTimer = setInterval(nextSlide, autoplaySpeed);
    if (showProgress) {
      progressTimer = setInterval(() => {
        progressValue = ((Date.now() % autoplaySpeed) / autoplaySpeed) * 100;
      }, 16);
    }
  }
}

function clearAllTimers() {
  clearInterval(autoplayTimer);
  clearInterval(progressTimer);
}

async function changeSlide(direction) {
  if (isAnimating) return;
  isAnimating = true;

  const container = carouselContainer;
  const currentSlide = container.querySelector('.active-slide');
  const nextIndex = (currentIndex + direction + sponsors.length) % sponsors.length;

  // Fancy exit animation
  await gsap.to(currentSlide, {
    opacity: 0,
    scale: direction > 0 ? 0.8 : 1.2,
    rotate: direction > 0 ? -5 : 5,
    duration: 0.6,
    ease: "power2.inOut"
  });

  currentIndex = nextIndex;

  // Fancy entrance animation
  const newSlide = container.querySelector('.active-slide');
  gsap.fromTo(newSlide,
    { 
      opacity: 0, 
      scale: direction > 0 ? 1.2 : 0.8,
      rotate: direction > 0 ? 5 : -5
    },
    { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      duration: 0.6,
      ease: "power2.out"
    }
  );

  isAnimating = false;
  startAutoplay();
}

function nextSlide() {
  changeSlide(1);
}

function prevSlide() {
  changeSlide(-1);
}

function goToSlide(index) {
  if (index === currentIndex) return;
  changeSlide(index - currentIndex);
}

function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
}

function handleTouchMove(e) {
  touchEndX = e.touches[0].clientX;
}

function handleTouchEnd() {
  const swipeDistance = touchEndX - touchStartX;
  if (Math.abs(swipeDistance) > 50) {
    if (swipeDistance > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
  }
}

onMount(() => {
  checkResponsive();
  window.addEventListener('resize', checkResponsive);
  startAutoplay();
  initializeAnimations();
  return () => {
    window.removeEventListener('resize', checkResponsive);
    clearAllTimers();
  };
});
 let mapRef;

  onMount(() => {
    gsap.set(mapRef, { scale: 1 });

    // Map hover animations
    mapRef.addEventListener("mouseenter", () => {
      gsap.to(mapRef, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    });

    mapRef.addEventListener("mouseleave", () => {
      gsap.to(mapRef, { scale: 1, duration: 0.3, ease: "power2.out" });
    });

    // Load animations
    gsap.from(".contact-section", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });
  });
</script>
<style>
  /* Main container */
  .page-wrapper {
    @apply min-h-screen w-full overflow-hidden relative;
    background: #0f172a;
  }

  .gradient-bg {
    @apply absolute inset-0 opacity-40;
    background: linear-gradient(
      315deg,
      #0ea5e9,
      #6366f1,
      #8b5cf6,
      #ec4899,
      #0ea5e9
    );
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .floating-shape {
    @apply absolute blur-3xl opacity-30;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
  }

  .carousel-wrapper {
    @apply relative w-full h-screen flex items-center justify-center z-10;
    perspective: 1000px;
  }

  .carousel-container {
    @apply relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl;
    height: 80vh;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }

  .carousel-slide {
    @apply absolute inset-0 flex items-center justify-center transition-opacity duration-500;
  }

  .image-container {
    @apply relative w-full h-full flex items-center justify-center p-8;
  }

  .sponsor-image {
    @apply max-w-full max-h-full object-contain rounded-xl;
    filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.1));
    transition: transform 0.5s ease-out;
  }

  .sponsor-image:hover {
    transform: scale(1.02);
  }

  .control-button {
    @apply absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full
           text-white transition-all duration-300 z-20;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .control-button:hover {
    @apply scale-110;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  }

  .progress-bar {
    @apply absolute bottom-0 left-0 h-1 w-full;
    background: rgba(255, 255, 255, 0.1);
  }

  .progress-fill {
    @apply h-full;
    background: linear-gradient(90deg, #0ea5e9, #8b5cf6);
    transition: width 0.1s linear;
  }

  .thumbnail-nav {
    @apply absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 px-6 py-3 rounded-full z-20;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
  }

  .nav-dot {
    @apply w-3 h-3 rounded-full transition-all duration-300;
    background: rgba(255, 255, 255, 0.3);
  }

  .nav-dot.active {
    @apply scale-125;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  /* Mobile-specific styles */
  @media (max-width: 768px) {
    .carousel-container {
      height: 60vh; /* Reduced height for mobile */
      margin: 1rem;
    }

    .control-button {
      @apply w-10 h-10; /* Smaller buttons for mobile */
    }

    .image-container {
      padding: 1rem;
    }

    .sponsor-image {
      @apply max-w-[90%] max-h-[90%]; /* Adjusted image size for mobile */
    }

    .thumbnail-nav {
      @apply bottom-4 gap-2 px-4 py-2; /* Adjusted thumbnail navigation for mobile */
    }

    .nav-dot {
      @apply w-2 h-2; /* Smaller dots for mobile */
    }

    .preview-image {
      display: none; /* Hide preview images on mobile */
    }
  }
  /* Mobile-specific styles */
  @media (max-width: 768px) {
    .carousel-container {
      height: 60vh; /* Reduced height for mobile */
      margin: 1rem;
    }

    .control-button {
      @apply w-8 h-8; /* Smaller buttons for mobile */
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .control-button.left-6 {
      left: 0.5rem; /* Position closer to the left edge */
    }

    .control-button.right-6 {
      right: 0.5rem; /* Position closer to the right edge */
    }

    .control-button svg {
      @apply h-6 w-6; /* Smaller icon size for mobile */
    }

    .image-container {
      padding: 1rem;
    }

    .sponsor-image {
      @apply max-w-[90%] max-h-[90%]; /* Adjusted image size for mobile */
    }

    .thumbnail-nav {
      @apply bottom-4 gap-2 px-4 py-2; /* Adjusted thumbnail navigation for mobile */
    }

    .nav-dot {
      @apply w-2 h-2; /* Smaller dots for mobile */
    }

    .preview-image {
      display: none; /* Hide preview images on mobile */
    }
  }
  /* Animated Gradient Background */
  @keyframes gradient-xy {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  .animate-gradient-xy {
    background-size: 200% 200%;
    animation: gradient-xy 6s ease infinite;
  }
  /* Royal Heading Styles */
  .royal-heading {
    @apply absolute top-12 left-1/2 -translate-x-1/2 text-center z-20;
    font-family: 'Playfair Display', serif;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #f3e8d2;
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
    animation: glow 3s infinite alternate;
  }

  .royal-heading h1 {
    @apply text-5xl md:text-6xl font-bold mb-2;
    background: linear-gradient(45deg, #f3e8d2, #d4af37);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .royal-heading h2 {
    @apply text-lg md:text-xl font-light;
    color: rgba(243, 232, 210, 0.8);
  }

  @keyframes glow {
    0% {
      text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
    }
    100% {
      text-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
    }
  }
   /* Apply Poppins to the entire site */
body {
    font-family: 'Poppins', sans-serif;
}

/* Set bold for headings */
h1, h2, h3, h4, h5, h6 {
    font-weight: 700; /* Bold */
}

/* Set normal weight for paragraphs */
p {
    font-weight: 400; /* Normal */
}

</style>

<Navbar />
<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>
  <!-- Royal Heading -->
  <div class=" mt-16 royal-heading">
    <h1>Our Sponsors</h1>
  </div>

<div class=" pt-20 page-wrapper">
  <!-- Animated gradient background -->
  <div class="gradient-bg"></div>
  
  <!-- Floating shapes -->
  {#each Array(6) as _, i}
    <div
      class="floating-shape"
      style="
        width: {200 + i * 100}px;
        height: {200 + i * 100}px;
        left: {Math.random() * 100}%;
        top: {Math.random() * 100}%;
      "
    ></div>
  {/each}
 
  <div class="carousel-wrapper mt-12">
    <div 
      class="carousel-container"
      on:touchstart={handleTouchStart}
      on:touchmove={handleTouchMove}
      on:touchend={handleTouchEnd}
      on:mouseenter={() => isPlaying = !pauseOnHover}
      on:mouseleave={() => {
        isPlaying = true;
        startAutoplay();
      }}
    >
      <!-- Main Carousel -->
      <div bind:this={carouselContainer} class="relative w-full h-full">
        {#each sponsors as sponsor, i}
          {#if i === currentIndex}
            <div class="carousel-slide active-slide" transition:fade={{ duration: 500 }}>
              <div class="image-container">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  class="sponsor-image"
                  loading="lazy"
                />
              </div>
            </div>
          {/if}
        {/each}
      </div>
      <!-- Previous and Next Previews -->
    <img
      src={sponsors[(currentIndex - 1 + sponsors.length) % sponsors.length].image}
      alt="Previous Sponsor"
      class="preview-image prev"
    />
    <img
      src={sponsors[(currentIndex + 1) % sponsors.length].image}
      alt="Next Sponsor"
      class="preview-image next"
    />
      <!-- Navigation Controls -->
      {#if showArrows}
        <button
          class="control-button left-6"
          on:click={prevSlide}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          class="control-button right-6"
          on:click={nextSlide}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      {/if}

      <!-- Progress Bar -->
      {#if showProgress && isPlaying}
        <div class="progress-bar">
          <div class="progress-fill" style="width: {progressValue}%"></div>
        </div>
      {/if}

      <!-- Navigation Dots -->
      <div class="thumbnail-nav">
        {#each sponsors as _, i}
          <button
            class="nav-dot"
            class:active={i === currentIndex}
            on:click={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        {/each}
      </div>
    </div>
  </div>
</div>
<div>
  <a
      href="/"
      class="fixed bottom-6 right-6 z-50 p-2 lg:p-4 bg-white hover:bg-opacity-50 rounded-full"
  >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
      >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
      </svg>
  </a>
</div>
<div class="relative bottom-0 left-0 right-0 p-8 bg-opacity-90 bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-800 animate-gradient-xy shadow-2xl rounded-t-lg flex flex-col md:flex-row justify-between items-center contact-section space-y-6 md:space-y-0 md:space-x-8">
  <!-- Contact Details -->
  <div class="flex flex-col items-center md:items-start w-full md:w-1/2">
    <div class="flex items-center space-x-3 mb-4">
      <img src="./image.png" alt="Phone Icon" class="w-8 h-8" />
      <span class="text-2xl font-semibold">Contact Us</span>
    </div><p class="text-xl font-medium mb-2">
        <a href="tel:9490459963" class="hover:underline">9490459963</a>
      </p>
      <p class="text-xl font-medium mb-2">
        <a href="tel:9676677116" class="hover:underline">9676677116</a>
      </p>
      <h3 class="text-lg font-semibold text-white mb-2">Follow Us on Instagram</h3>

      <div class="flex justify-center mt-4">
        <a href="https://www.instagram.com/ekshetra_3.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="hover:scale-110 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class ="w-8 h-8 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3H16A5 5 0 0121 8V16A5 5 0 0116 21H8A5 5 0 013 16V8A5 5 0 018 3ZM12 15.5A3.5 3.5 0 1012 8.5 3.5 3.5 0 0012 15.5ZM16.5 7.5A1.5 1.5 0 1118 6 1.5 1.5 0 0116.5 7.5Z" />
          </svg>
        </a>
        </div>
  </div>

  <!-- Google Map Embed -->
  <div class="w-full md:w-1/2 mt-4 md:mt-0">
    <iframe
      bind:this={mapRef}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5764682633658!2d83.32945747494506!3d17.811591383149768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395befa9dda303%3A0x5781c56a5df412!2sBaba%20Institute%20of%20Technology%20%26%20Sciences!5e0!3m2!1sen!2sin!4v1737482955981!5m2!1sen!2sin"
      width="100%"
      height="250"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="rounded-lg shadow-lg transition-transform duration-300"
      aria-label="Google Map location of Baba Institute of Technology & Sciences"
    ></iframe>
  </div>
</div>

<footer class="bg-gray-800 text-white py-4">
  <div class="container mx-auto text-center">
    <p>Made with 🩷 by <a href="https://konkorde.org" class="text-blue-500 hover:underline">KONKORDE</a></p>
  </div>
</footer>