<script>
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import Nav from "../nav/+page.svelte";
  import gsap from "gsap"; // Ensure GSAP is imported

  const events = [
    { 
      name: "Paper Presentation", 
      description: "Showcase your innovative ideas and research in a professional setting.", 
      flyer: ""
    },
    { 
      name: "Poster Presentation", 
      description: "Display your creativity and technical prowess through visually engaging posters.", 
      flyer: "/path/to/poster-presentation-image.jpg"
    },
    { 
      name: "Blind Coding", 
      description: "Test your coding skills without seeing what you type. A real challenge!", 
      flyer: "/path/to/blind-coding-image.jpg"
    },
    { 
      name: "E-Sports", 
      description: "Compete in an adrenaline-pumping gaming competition.", 
      flyer: "/path/to/e-sports-image.jpg"
    },
    { 
      name: "Technical Quiz", 
      description: "Prove your knowledge in technical domains with a thrilling quiz.", 
      flyer: "/path/to/technical-quiz-image.jpg"
    },
  ];

  onMount(() => {
    AOS.init({
      duration: 1000,
      easing: 'cubic-bezier(0.5, 0, 0.75, 1)',
      once: false,
      mirror: true
    });

    // Animated background shapes
    const shapes = document.querySelectorAll('.bg-shape');
    shapes.forEach(shape => {
      gsap.to(shape, {
        x: shape.dataset.moveX,
        y: shape.dataset.moveY,
        rotation: shape.dataset.rotate,
        duration: parseFloat(shape.dataset.duration),
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      });
    });

    // GSAP animations on mount
    gsap.from(".hero-title", { 
      opacity: 0, 
      y: -100, 
      scale: 0.5,
      duration: 1.5,
      textShadow: '0 0 50px rgba(173,216,230,0.7)'
    });

    const cards = document.querySelectorAll('.royal-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
          rotation: 2,
          duration: 0.2
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: 'none',
          rotation: 0,
          duration: 0.2
        });
      });
    });

    // Additional GSAP animations
    gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero-tagline", { opacity: 0, y: 20, duration: 1, delay: 0.5 });
    gsap.from(".hero-date", { opacity: 0, y: 20, duration: 1, delay: 1 });
    gsap.from("#countdown", { opacity: 0, scale: 0.5, duration: 1, delay: 1.5 });
    gsap.from(".cta-button", { opacity: 0, scale: 0.5, duration: 1, stagger: 0.2, delay: 1.5 });

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

<Nav />

<div class="royal-background min-h-screen bg-gradient-to-br from-[#1A2980] via-[#26D0CE] to-[#0F2027] text-white py-16 px-8 relative overflow-hidden">
  <!-- Animated Background Shapes -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div 
      class="bg-shape absolute bg-purple-500/40 rounded-full blur-2xl"
      data-move-x="200" 
      data-move-y="150" 
      data-rotate="45" 
      data-duration="5"
      style="width: 500px; height: 500px; top: 10%; left: -10%;"
    ></div>
    <div 
      class="bg-shape absolute bg-blue-500/40 rounded-full blur-2xl"
      data-move-x="-200" 
      data-move-y="-150" 
      data-rotate="-45" 
      data-duration="6"
      style="width: 400px; height: 400px; bottom: 20%; right: -10%;"
    ></div>
    <div 
      class="bg-shape absolute bg-green-500/40 rounded-full blur-2xl"
      data-move-x="150" 
      data-move-y="100" 
      data-rotate="30" 
      data-duration="4"
      style="width: 300px; height: 300px; top: 50%; left: 10%;"
    ></div>
    <div 
      class="bg-shape absolute bg-red-500/40 rounded-full blur-2xl"
      data-move-x="-150" 
      data-move-y="-100" 
      data-rotate="-30" 
      data-duration="7"
      style="width: 250px; height: 250px; bottom: 10%; right: 20%;"
    ></div>
  </div>
  
  <div class="max-w-6xl mt-14 mx-auto relative z-10">
    <h3 class="royal-title text-4xl font-extrabold text-center mb-20 tracking-wide text-[#f8f9fa] drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]">
      Our Events
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:px-16">
      {#each events as event, index}
        <div 
          class="royal-card bg-gradient-to-br from-[#6a5acd] to-[#483d8b] transform transition-all duration-200 rounded-3xl overflow-hidden shadow-2xl hover:shadow-royal perspective-1000 relative"
          data-aos="zoom-in-up"
        >
          <div class="relative">
            <img 
              src={event.flyer || '/path/to/default-image.jpg'} 
              alt={event.name} 
              class="w-full h-[500px] object-cover filter brightness-75 hover:brightness-100 transition-all duration-200"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
          </div>
          
          <div class="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h2 class="text-3xl font-bold mb-4 text-[#f8f9fa]">{event.name}</h2>
            <p class="text-xl text-gray-300 mb-6">{event.description}</p>
            <button class="royal-button px-8 py-4 bg-gradient-to-r from-[#6a5acd] to-[#483d8b] text-white rounded-full font-bold uppercase tracking-wider transform hover:scale-105 transition-all duration-200 shadow-royal-button">
              Know More
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- Contact Section -->
<div class="mt-auto relative bottom-0 left-0 right-0 p-8 bg-opacity-90 bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-800 animate-gradient-xy shadow-2xl rounded-t-lg flex flex-col md:flex-row justify-between items-center contact-section space-y-6 md:space-y-0 md:space-x-8">
  <div class="mt-3 flex flex-col items-center md:items-start w-full md:w-1/2" data-aos="fade-up" data-aos-delay="400">
    <div class="flex items-center space-x-3 mb-4">
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
    <h3 class="text-lg font-semibold text-white mb-2">Follow Us on Instagram</h3>
    <div class="flex justify-center mt-4">
      <a href="https://www.instagram.com/ekshetra_3.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition-transform duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3H16A5 5 0 0121 8V16A5 5 0 0116 21H8A5 5 0 013 16V8A5 5 0 018 3ZM12 15.5A3.5 3.5 0 1012 8.5 3.5 3.5 0 0012 15.5ZM16.5 7.5A1.5 1.5 0 1118 6 1.5 1.5 0 0116.5 7.5Z" />
        </svg>
      </a>
    </div>
  </div>

  <!-- Google Map Embed -->
  <div class="w-full md:w-1/2 mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="400">
    <iframe
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

<footer class="bg-gray-800 text-white py-4 mt-">
  <div class="container mx-auto text-center" >
    <p>Made with 🩷 by <a href="https://konkorde.org" class="text-blue-500 hover:underline">KONKORDE</a></p>
  </div>
</footer>
<style lang="postcss">
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap');

  body {
    font-family: 'Cinzel', serif;
  }

  .royal-background {
    background: linear-gradient(135deg, #1A2980, #26D0CE, #0F2027);
    position: relative;
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
  }

  @keyframes gradientBG {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  }

  .royal-card {
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    will-change: transform, box-shadow;
  }

  @font-face {
    font-family: 'Audiowide';
    src: url('./assets/fonts/Audiowide-Regular.ttf') format('truetype');
    font-weight: 400; /* Regular */
    font-style: normal;
  }

  /* Default body font */
  body {
    font-family: 'Audiowide';
  }

  /* Headings */
  h1, h2, h3 {
    font-family: 'Audiowide';
  }

  /* Paragraphs */
  p {
    font-family: 'Audiowide';
  }
  footer {
    background-color: #1f2937;
    color: #ffffff;
    padding: 1rem 0;
    text-align: center;
  }

  footer a {
    color: #3b82f6;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  footer a:hover {
    text-decoration: underline;
    color: #60a5fa;
  }
</style>