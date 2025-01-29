<!-- src/lib/Gallery.svelte -->
<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import Lightbox from './Lightbox.svelte'; // Importing Lightbox component

    // Use the correct paths to your images in the gallery folder
    let images = [
        '../gallery/IMG-20250109-WA0010.jpg',
        '../gallery/IMG-20250109-WA0011.jpg',
        '../gallery/IMG-20250109-WA0012.jpg',
        '../gallery/IMG-20250109-WA0013.jpg',
        '../gallery/IMG-20250109-WA0014.jpg',
        '../gallery/IMG-20250109-WA0015.jpg',
        '../gallery/IMG-20250109-WA0014.jpg'
    ];

    let currentImage = null;
    let isScrolling;

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

        // Bounce effect for the PNG image every 10 seconds
        const bounceImage = document.querySelector('.bounce-image');
        setInterval(() => {
            gsap.to(bounceImage, {
                y: -10,
                duration: 0.5,
                yoyo: true,
                repeat: 1,
                ease: "bounce.out"
            });
        }, 10000);
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
        min-height: 100dvh; /* Ensure full height */
        overflow-y: auto; /* Enable vertical scrolling */
    
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

    .bounce-image {
        position: fixed; /* Fixed position at bottom right of viewport */
        bottom: 20px; /* Distance from bottom */
        right: 20px; /* Distance from right */
        width: 80px; /* Size of the image */
        height: auto; /* Maintain aspect ratio */
        cursor: pointer; /* Change cursor to pointer on hover */
    }

    .hover-text {
        position: fixed;
        bottom: 110px; /* Position above the image */
        right: 30px; /* Align with image */
        color: white;
        font-size: 14px;
        opacity: 0; /* Initially hidden */
        transition: opacity 0.3s ease;
    }

    .bounce-image:hover + .hover-text {
        opacity: 1; /* Show text on hover */
    }
</style>

<div class="container flex flex-col items-center justify-center">
    <h1 class="heading text-4xl font-bold text-white mb-8 ml-6">Ekshetra 2.0 Memories</h1>
    
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

   <!-- Link to another page with PNG Image -->
   <a href="../gallery1">
       <img class="bounce-image" src="/path/to/your/image.png" alt="3.0 Gallery" />
       <span class="hover-text">3.0</span>
   </a>
</div>
