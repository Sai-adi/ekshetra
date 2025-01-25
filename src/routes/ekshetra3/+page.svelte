<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import AOS from 'aos';
  import 'aos/dist/aos.css'; // Import AOS styles

  // Array of images for the slider
  const ekshetra2Images = [
    { src: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg', alt: 'Photo 1' },
    { src: '/gallery/IMG-20250109-WA0011.jpg', alt: 'Photo 2' },
    { src: 'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg', alt: 'Photo 3' },
    { src: 'https://images7.alphacoders.com/878/878663.jpg', alt: 'Photo 4' },
  ];

  let currentIndex = 0;
  let headingVisible = true; // State to control heading visibility
  let imagesVisible = false; // State to control images visibility

  // Function to go to the next image
  const nextImage = () => {
    currentIndex = (currentIndex + 1) % ekshetra2Images.length;
    animateSlider();
  };

  // Function to go to the previous image
  const prevImage = () => {
    currentIndex = (currentIndex - 1 + ekshetra2Images.length) % ekshetra2Images.length;
    animateSlider();
  };

  // Function to animate the slider
  const animateSlider = () => {
    gsap.to('.slider', {
      x: -currentIndex * 100 + '%',
      duration: 1,
      ease: 'power2.inOut',
    });
  };

  // Initialize AOS and GSAP on mount
  onMount(() => {
    AOS.init();
    
    // Fade in the heading and then fade it out
    gsap.fromTo('.heading', { opacity: 1 }, {
      opacity: 0,
      duration: 2,
      delay: 1, // Delay before starting the fade-out
      onComplete: () => {
        headingVisible = false; // Hide the heading after the animation
        imagesVisible = true; // Show the images after the heading fades out
      }
    });
  });
</script>

<!-- Home SVG Icon -->
<a href="/" class="absolute top-4 left-4 z-20">
  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7v12a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
  </svg>
</a>

<!-- Image Slider with Centered Images -->
<section class="relative min-h-screen bg-black text-white flex items-center justify-center"> <!-- Set background color to black -->
  {#if headingVisible}
    <div class="absolute inset-0 flex flex-col items-center justify-center z-10 heading">
      <h1 class="text-5xl font-extrabold text-center tracking-wide">
        Ekshetra <span class="text-blue-500">3.0 Gallery</span>
      </h1>
    </div>
  {/if}
  
  {#if imagesVisible}
    <div class="relative overflow-hidden flex items-center justify-center w-full h-full">
      <div class="slider flex transition-transform duration-700">
        {#each ekshetra2Images as image}
          <div class="flex-shrink-0 w-full h-screen flex items-center justify-center" style="padding: 15px; box-sizing: border-box;">
            <div class="image-container" style="width: 400px; height: 200px; display: flex; align-items: center; justify-content: center; background-color: black; border-radius: 8px; overflow: hidden;"> <!-- Set background color to black -->
              <img src="{image.src}" alt="{image.alt}" style="max-width: 100%; max-height: 100%; object-fit: cover;" />
            </div>
          </div>
        {/each}
      </div>
      
      <!-- SVG Arrow for Previous -->
      <button class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 p-2 rounded-full" on:click={prevImage}>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- SVG Arrow for Next -->
      <button class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 p-2 rounded-full" on:click={nextImage}>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  {/if}
</section>

<style>
  /* Custom styles for the section */
  section {
    perspective: 1000px;
  }

  .slider {
    transform-style: preserve-3d;
  }

  .slider > div {
    transform: translateZ(-1px) scale(1.1); /* Parallax effect */
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black; /* Set background color to black */
    border-radius: 8px; /* Rounded corners */
    overflow: hidden; /* Prevent overflow */
  }

  img {
    max-width: 100%; /* Prevent stretching */
    max-height: 100%; /* Prevent stretching */
    object-fit: cover; /* Maintain aspect ratio and cover the container */
  }
</style>