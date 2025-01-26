<script>
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css"; // Import AOS styles
  import Nav from "../nav/+page.svelte";
  import gsap from "gsap";

  const events = [
    { 
      name: "Paper Presentation", 
      description: "Showcase your innovative ideas and research in a professional setting.", 
      flyer: "/flyers/paper-presentation.jpg" 
    },
    { 
      name: "Poster Presentation", 
      description: "Display your creativity and technical prowess through visually engaging posters.", 
      flyer: "/flyers/poster-presentation.jpg" 
    },
    { 
      name: "Blind Coding", 
      description: "Test your coding skills without seeing what you type. A real challenge!", 
      flyer: "/flyers/blind-coding.jpg" 
    },
    { 
      name: "E-Sports", 
      description: "Compete in an adrenaline-pumping gaming competition.", 
      flyer: "/flyers/e-sports.jpg" 
    },
    { 
      name: "Technical Quiz", 
      description: "Prove your knowledge in technical domains with a thrilling quiz.", 
      flyer: "/flyers/technical-quiz.jpg" 
    },
  ];

  onMount(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false,
      mirror: true,
      offset: 100 // Start animations a bit earlier
    });

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to('.background-layer', {
          scale: 1.1, // Scale up the background
          duration: 0.5,
          ease: "power1.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to('.background-layer', {
          scale: 1, // Scale back to original
          duration: 0.5,
          ease: "power1.out"
        });
      });
    });
  });
</script>

<Nav />
<div class="background-layer"></div>
<div class="bg-gray-900 text-white min-h-screen py-16 px-6 relative">
  <div class="max-w-7xl mx-auto">
    <h1 class="text-5xl font-bold text-center mb-16 mt-12">Our Events</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {#each events as event}
        <div class="card bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition relative group" data-aos="fade-up">
          <!-- Flyer Image -->
          <img src={event.flyer} alt={event.name} class="w-full h-[400px] object-cover" />
          <!-- Event Details - Hidden by default, revealed on hover -->
          <div class="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <h2 class="text-xl font-semibold">{event.name}</h2>
            <p class="text-sm text-gray-300">{event.description}</p>
            <button class="mt-4 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-400 hover:to-teal-300 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              Know More
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  body {
    font-family: 'Audiowide', cursive;
  }

  /* Background Layer */
  .background-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('path/to/your/background.jpg'); /* Replace with your background image */
    background-size: cover;
    z-index: -1; /* Ensure it stays behind the cards */
    filter: blur(5px); /* Optional: add a blur effect */
    transition: transform 0.5s ease; /* Smooth transition for scaling */
  }

  /* Headings */
  h1, h2, h3 {
    font-family: 'Audiowide', cursive;
  }

  /* Paragraphs */
  p {
    font-family: 'Audiowide', cursive;
  }
</style>