<script>
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css"; // Import AOS styles
  import Nav from "../nav/+page.svelte";
  import Footer from "../footer/+page.svelte";

  onMount(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false,
      mirror: true,
      offset: 100 // Start animations a bit earlier
    });
  });
</script>

<Nav />
<Footer />
<section class="relative bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white py-20 px-8 overflow-hidden pt-[120px]">
  <!-- Background Shapes -->
  <div class="absolute inset-0 pointer-events-none">
    <!-- Triangle Shapes -->
    <div id="triangle1" class="shape triangle absolute bg-purple-600 w-24 h-24 opacity-20 blur-lg rotate-animation" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%); top: 10%; left: 20%;" data-aos="fade-up" data-aos-duration="1500"></div>
    <div id="triangle2" class="shape triangle absolute bg-pink-600 w-16 h-16 opacity-25 blur-lg rotate-animation" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%); top: 40%; left: 60%;" data-aos="fade-down" data-aos-duration="1500"></div>
    
    <!-- New Shapes with Unique Animations -->
    <div id="star1" class="shape star absolute bg-yellow-500 w-20 h-20 opacity-30 blur-lg" style="clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); top: 20%; right: 10%;" data-aos="zoom-in" data-aos-duration="1500"></div>
    <div id="pentagon1" class="shape pentagon absolute bg-orange-400 w-24 h-24 opacity-25 blur-lg" style="clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%); bottom: 10%; left: 30%;" data-aos="fade-left" data-aos-duration="1500"></div>
    <div id="diamond1" class="shape diamond absolute bg-blue-500 w-20 h-20 opacity-30 blur-lg" style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); top: 70%; left: 10%;" data-aos="fade-right" data-aos-duration="1500"></div>
    
    <!-- Circle and Hexagon Shapes -->
    <div id="circle1" class="shape circle absolute bg-red-600 w-32 h-32 opacity-20 blur-lg rounded-full" style="top: 5%; right: 10%;" data-aos="flip-left" data-aos-duration="1500"></div>
    <div id="hexagon1" class="shape hexagon absolute bg-teal-500 w-24 h-24 opacity-25 blur-lg" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); top: 50%; left: 30%;" data-aos="fade-up" data-aos-duration="1500"></div>
    
    <!-- Additional Shapes -->
    <div class="shape triangle absolute bg-indigo-400 w-20 h-20 opacity-30 blur-lg" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%); bottom: 20%; right: 20%;" data-aos="fade-up" data-aos-duration="1500"></div>
    <div class="shape circle absolute bg-orange-300 w-16 h-16 opacity-15 blur-lg rounded-full" style="top: 30%; left: 5%;" data-aos="zoom-out" data-aos-duration="1500"></div>
    <div class="shape hexagon absolute bg-lime-500 w-12 h-12 opacity-10 blur-lg" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); bottom: 10%; left: 50%;" data-aos="fade-right" data-aos-duration="1500"></div>

    <!-- More Unique Shapes -->
    <div class="shape triangle absolute bg-cyan-400 w-30 h-30 opacity-20 blur-lg" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%); top: 15%; left: 40%;" data-aos="fade-left" data-aos-duration="1500"></div>
    <div class="shape circle absolute bg-purple-700 w-40 h-40 opacity-25 blur-lg rounded-full" style="top: 60%; right: 5%;" data-aos="zoom-in" data-aos-duration="1500"></div>
    <div class="shape hexagon absolute bg-orange-500 w-24 h-24 opacity-30 blur-lg" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); bottom: 25%; left: 20%;" data-aos="flip-right" data-aos-duration="1500"></div>
    <div class="shape triangle absolute bg-teal-600 w-18 h-18 opacity-15 blur-lg" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%); top: 80%; left: 70%;" data-aos="fade-up" data-aos-duration="1500"></div>
    <div class="shape circle absolute bg-pink-700 w-22 h-22 opacity-10 blur-lg rounded-full" style="top: 25%; right: 15%;" data-aos="zoom-out" data-aos-duration="1500"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto text-center">
    <!-- About Section Heading -->
    <h1 class="section-heading text-4xl font-bold mb-8" data-aos="fade-up" data-aos-duration="1000">
      About <span class="text-purple-400">Ekshetra 3.0</span>
    </h1>

    <!-- About College -->
    <div class="content bg-gray-800 p-8 rounded-xl shadow-lg mb-8" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
      <h2 class="text-2xl font-semibold mb-4 text-purple-300">
        About Our College
      </h2>
      <p class="text-lg leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim atque tenetur laborum quis itaque corporis, facilis dolor placeat nulla et nam eos quae sit nostrum eveniet! Odit, eum dolores.
      </p>
    </div>

    <!-- About Ekshetra 2.0 -->
    <div class="content bg-gray-800 p-8 rounded-xl shadow-lg mb-8" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
      <h2 class="text-2xl font-semibold mb-4 text-purple-300">
        Ekshetra 2.0 - A Remarkable Journey
      </h2>
      <p class="text-lg leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid inventore itaque ab, quaerat ea cumque, minima maxime iste perspiciatis harum deleniti voluptate ullam dicta, consequatur architecto unde obcaecati accusantium quibusdam.
      </p>
    </div>

    <!-- About Ekshetra 3.0 -->
    <div class="content bg-gray-800 p-8 rounded-xl shadow-lg" data-aos="fade-right" data-aos-delay="300" data-aos-duration="800">
      <h2 class="text-2xl font-semibold mb-4 text-purple-300">
        Ekshetra 3.0 - Present & Happening
      </h2>
      <p class="text-lg leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ab itaque asperiores voluptatum deleniti in dignissimos ea tempore nisi est culpa, aliquam maiores iste delectus neque iure explicabo quam reiciendis!
      </p>
    </div>
  </div>

  <style>
    @media (max-width: 768px) {
      .shape {
        filter: blur(10px);
      }
      .triangle {
        width: 15vw; /* Responsive width */
        height: 15vw; /* Responsive height */
      }
      .circle {
        width: 20vw; /* Responsive width */
        height: 20vw; /* Responsive height */
      }
      .hexagon {
        width: 15vw; /* Responsive width */
        height: 15vw; /* Responsive height */
      }
      .star, .pentagon, .diamond {
        width: 15vw; /* Responsive width */
        height: 15vw; /* Responsive height */
      }
    }

    /* Rotation Animation for Triangles */
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .rotate-animation {
      animation: rotate 10s linear infinite; /* Adjust duration as needed */
    }

    @font-face {
      font-family: 'Merriweather';
      src: url('./assets/fonts/Merriweather-Regular.ttf') format('truetype'),
           url('./assets/fonts/Merriweather-Bold.ttf') format('truetype');
      font-weight: 400; /* Regular */
      font-style: normal;
    }

    @font-face {
      font-family: 'Lora';
      src: url('./assets/fonts/Lora-Regular.ttf') format('truetype'),
           url('./assets/fonts/Lora-Bold.ttf') format('truetype');
      font-weight: 400; /* Regular */
      font-style: normal;
    }

    body {
      font-family: 'Merriweather', serif;
    }

    h1, h2, h3 {
      font-family: 'Lora', serif;
    }
  </style>
</section>