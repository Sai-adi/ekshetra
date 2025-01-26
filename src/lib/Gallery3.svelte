<!-- src/lib/Gallery3.svelte -->
<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import Lightbox from './Lightbox.svelte'; // Importing Lightbox component

    let images = [
        '../gallery/IMG-20250109-WA0010.jpg',
        '../gallery/IMG-20250109-WA0011.jpg',
        '../gallery/IMG-20250109-WA0012.jpg',
        '../gallery/IMG-20250109-WA0013.jpg',
        '../gallery/IMG-20250109-WA0014.jpg',
        '../gallery/IMG-20250109-WA0015.jpg'
    ];

    let currentImage = null;

    onMount(() => {
        // Animate gallery items
        gsap.from(".gallery-item", {
            duration: 0.5,
            opacity: 0,
            y: 20,
            stagger: 0.2,
            ease: "bounce.out"
        });

        // Shining effect for the heading
        gsap.to(".heading", {
            duration: 1,
            textShadow: "0 0 20px rgba(255, 255, 255, 1)",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    });

    function openLightbox(image) {
        currentImage = image;
    }

    function closeLightbox() {
        currentImage = null;
    }
</script>

<style>
    .container {
        position: relative;
        padding-bottom: 50px; /* Space for bottom image */
        background-color: black; /* Set background color to black */
        min-height: 100vh; /* Ensure full height */
        overflow-y: auto; /* Enable vertical scrolling */
        color: white; /* Text color */
    }

    /* Custom Scrollbar Styles */
    .container::-webkit-scrollbar {
        width: 12px; /* Width of the scrollbar */
        opacity: 0; /* Initially hidden */
        transition: opacity 0.3s ease; /* Smooth transition for visibility */
    }

    .container.scrolling::-webkit-scrollbar {
        opacity: 1; /* Show scrollbar when scrolling */
    }

    .container::-webkit-scrollbar-track {
        background: linear-gradient(180deg, rgba(255, 0, 0, 0.3), rgba(7, 0, 211, 0.3)); /* Gradient background for track */
        border-radius: 10px; /* Rounded corners for track */
    }

    .container::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, rgba(255, 255, 0, 0.8), rgba(255, 165, 0, 0.8)); /* Gradient color for the scrollbar thumb */
        border-radius: 10px; /* Rounded corners for thumb */
    }

    .container::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(255, 165, 0, 1)); /* Color when hovering over thumb */
    }

    .home-icon {
        position: absolute;
        top: 20px; /* Distance from top */
        left: 20px; /* Distance from left */
        width: 40px; /* Size of the icon */
        height: auto; /* Maintain aspect ratio */
    }
</style>

<div class="container flex flex-col items-center justify-center">
   <!-- Home Icon as a Link -->
   <a href="/">
       <svg class="home-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
           <path d="M15 18H9" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
       </svg>
   </a>

   <h1 class="heading text-4xl font-bold text-white mb-8">Ekshetra 3.0 Gallery</h1>
    
   <div class="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
       {#each images as image}
           <div class="gallery-item cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105" on:click={() => openLightbox(image)}>
               <img src={image} alt="Gallery Image" class="w-full h-full object-cover rounded-lg shadow-lg" />
           </div>
       {/each}
   </div>

   {#if currentImage}
       <Lightbox src={currentImage} onClose={closeLightbox} />
   {/if}
</div>
