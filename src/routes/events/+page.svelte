<script>
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css"; // Import AOS styles
  import Nav from "../nav/+page.svelte";
  import { gsap } from "gsap"; // Ensure GSAP is imported

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

  let mapRef;

  onMount(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false,
      mirror: true,
      offset: 100 // Start animations a bit earlier
    });

    // GSAP animations on mount
    gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero-tagline", { opacity: 0, y: 20, duration: 1, delay: 0.5 });
    gsap.from(".hero-date", { opacity: 0, y: 20, duration: 1, delay: 1 });
    gsap.from("#countdown", { opacity: 0, scale: 0.5, duration: 1, delay: 1.5 });
    gsap.from(".cta-button", { opacity: 0, scale: 0.5, duration: 1, stagger: 0.2, delay: 1.5 });
  });
  // Load animations
    gsap.from(".contact-section", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });

</script>

<Nav />
<div class="bg-gray-900 text-white min-h-screen py-16 px-6">
  <div class="max-w-7xl mx-auto">
    <h1 class="text-5xl font-bold text-center mb-16 mt-12">Our Events</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {#each events as event}
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition relative group" data-aos="fade-up">
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
  <!-- Full-Width Contact Section -->
<div class="mt-8 p-8 bg-opacity-90 bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-800 animate-gradient-xy shadow-2xl rounded-t-lg flex flex-col md:flex-row justify-between items-center contact-section space-y-6 md:space-y-0 md:space-x-8">
  <!-- Contact Details -->
  <div class="mt-3 flex flex-col items-center md:items-start w-full md:w-1/2" data-aos="fade-up" data-aos-delay="400">
    <div class="flex items-center space-x-3 mb-4">
      <!-- Phone Icon GIF -->
      <div class="w-8 h-8 flex justify-center items-center">
        <img src="./image.png" alt="Phone Icon" class="w-8 h-8" />
      </div>
      <span class="text-2xl font-semibold">Contact Us</span>
    </div>
    <p class="text-xl font-medium mb-2">
      <a href="tel:+1234567890" class="hover:underline">+1 (234) 567-890</a>
    </p>
    <p class="text-lg text-gray-400 mb-4">
      <a href="mailto:info@college.edu" class="hover:underline">info@college.edu</a>
    </p>

    <!-- Subheading Above Social Media Links -->
    <h3 class="text-lg font-semibold text-white mb-2">Follow Us on Instagram</h3>

    <!-- Instagram SVG -->
    <div class="flex justify-center mt-4">
      <a href="https://www.instagram.com/ekshetra_3.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="hover:scale-110 transition-transform duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3H16A5 5 0 0121 8V16A5 5 0 0116 21H8A5 5 0 013 16V8A5 5 0 018 3ZM12 15.5A3.5 3.5 0 1012 8.5 3.5 3.5 0 0012 15.5ZM16.5 7.5A1.5 1.5 0 1118 6 1.5 1.5 0 0116.5 7.5Z" />
        </svg>
      </a>
    </div>
  </div>

  <!-- Google Map Embed -->
  <div class="w-full md:w-1/2 mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="400">
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
    ></iframe>
  </div>
</div>


</div>
<footer class="bg-gray-800 text-white py-4">
  <div class="container mx-auto text-center" data-aos="fade-up">
    <p>Made with 🩷 by <a href="https://konkorde.org" class="text-blue-500 hover:underline">KONKORDE</a></p>
  </div>
</footer>


<style>
  body {
    font-family: 'Audiowide', cursive;
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