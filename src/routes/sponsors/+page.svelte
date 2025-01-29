
<script>
import { onMount, onDestroy } from "svelte";
import { fade, slide } from "svelte/transition";
import gsap from "gsap";

// Customizable props with default values
export let autoplaySpeed = 5000;
export let pauseOnHover = true;
export let showProgress = true;
export let showArrows = true;
export let showThumbnails = true;

// State management
let sponsors = Array.from({ length: 13 }, (_, i) => ({
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

  @media (max-width: 768px) {
    .carousel-container {
      height: 70vh;
      margin: 1rem;
    }

    .control-button {
      @apply w-12 h-12;
    }

    .image-container {
      padding: 1rem;
    }
  }
  /* Preview images for previous and next */
.preview-image {
  @apply absolute top-1/2 transform -translate-y-1/2 w-[15%] h-auto opacity-50 transition-all;
  filter: blur(2px);
}
.preview-image:hover {
  @apply opacity-80;
  transform: scale(1.05) translateY(-50%);
}

.preview-image.prev {
  left: 5%;
}

.preview-image.next {
  right: 5%;
}

</style>

<div class="page-wrapper">
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

  <div class="carousel-wrapper">
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