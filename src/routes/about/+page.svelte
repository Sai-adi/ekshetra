<script>
    import { onMount } from "svelte";
    import AOS from "aos";
    import "aos/dist/aos.css"; // Import AOS styles
    import Nav from "../nav/+page.svelte";

    let mapRef;

    onMount(() => {
      AOS.init({
        duration: 800, // Animation duration
        easing: 'ease-in-out', // Easing function
        once: false,
        mirror: true,
        offset: 100 // Start animations a bit earlier
      });
    });
    // GSAP animations on mount
  onMount(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false,
      mirror: true,
      offset: 100 // Start animations a bit earlier
    });

    gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero-tagline", { opacity: 0, y: 20, duration: 1, delay: 0.5 });
    gsap.from(".hero-date", { opacity: 0, y: 20, duration: 1, delay: 1 });
    gsap.from("#countdown", { opacity: 0, scale: 0.5, duration: 1, delay: 1.5 });
    gsap.from(".cta-button", { opacity: 0, scale: 0.5, duration: 1, stagger: 0.2, delay: 1.5 });

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

  <Nav />
  <section class=" pt-24 relative bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white py-18 px-0 w-full overflow-hidden ">
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

    <div class="relative z-10 max-w-7xl mx-auto px-4 py-4">
      <!-- About Section Heading -->
      <h1 class="section-heading text-4xl font-bold mb-8 pt-5  text-center" data-aos="fade-up" data-aos-duration="1000">
        About <span class="text-purple-400">Ekshetra 3.0</span>
      </h1>

      <!-- About College -->
      <div class="content bg-gray-800 p-8 rounded-xl shadow-lg mb-8 flex flex-col md:flex-row items-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
        <img src="collage.jpg" alt="collage image" class="w-96 h-auto rounded-lg border-2 border-gray-600 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl mb-4 md:mb-0 md:mr-4" />
        <div class="flex-1">
          <h2 class="text-2xl font-semibold mb-4 text-purple-300 text-center md:text-left">
            About Our College
          </h2>
          <p class="text-lg leading-relaxed text-center md:text-right">
            The Department of Computer Science and Engineering at BITS Vizag, established in 2008, 
            offers advanced IT infrastructure, industry collaborations, and a research-driven learning environment.
             The experienced faculty trains students to become skilled engineers, leading to global recruitment by top companies.
          </p>
        </div>
      </div>

      <!-- About Ekshetra 2.0 -->
      <div class="content bg-gray-800 p-8 rounded-xl shadow-lg mb-8 flex flex-col md:flex-row items-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
        <img src="VALIANT WIZADRS w.png" alt="Ekshetra 2.0 image" class="w-96 h-auto rounded-lg border-2 border-gray-600 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl mb-4 md:mb-0 md:mr-4" />
        <div class="flex-1">
          <h2 class="text-2xl font-semibold mb-4 text-purple-300 text-center md:text-left">
            Department of CSE
          </h2>
          <p class="text-lg leading-relaxed text-center md:text-right">
            The Department of Computer Science and Engineering at BITS Vizag, established in 2008, offers advanced IT infrastructure,
             industry collaborations, and a research-driven learning environment. 
            The experienced faculty trains students to become skilled engineers, leading to global recruitment by top companies.
          </p>
        </div>
      </div>

      <!-- About Ekshetra 2.0 -->
      <div class="content bg-gray-800 p-8 rounded-xl shadow-lg mb-8 flex flex-col md:flex-row items-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
        <img src="ekshetra2.0.jpg" alt="Ekshetra 3.0 image" class="w-96 h-auto rounded-lg border-2 border-gray-600 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl mb-4 md:mb-0 md:mr-4" />
        <div class="flex-1">
          <h2 class="text-2xl font-semibold mb-4 text-purple-300 text-center md:text-left">
            Ekshetra 2.0 - A Remarkable Journey
          </h2>
          <p class="text-lg leading-relaxed text-center md:text-right">
            Ekshetra 2.0, a college fest organized by CSE department students, has been held twice, with the inaugural event at Radisson. 
            The fest features a variety of events and cultural nights,
             creating an exciting and vibrant atmosphere for students to showcase their talents and creativity.
          </p>
        </div>
      </div>
      <div class="content bg-gray-800 p-8 rounded-xl shadow-lg mb-8 flex flex-col md:flex-row items-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
  <img src="square.jpg" alt="Ekshetra 3.0 image" class="w-96 h-auto rounded-lg border-2 border-gray-600 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl mb-4 md:mb-0 md:mr-4" />
  <div class="flex-1">
    <h2 class="text-2xl font-semibold mb-4 text-purple-300 text-center md:text-left">
      Ekshetra 3.0 - Unleashing New Horizons
    </h2>
    <p class="text-lg leading-relaxed text-center md:text-right">
      Ekshetra 3.0 is back, bigger and better! Organized by the dynamic CSE department, this edition promises cutting-edge technical events, 
      engaging workshops, and unforgettable cultural nights. Join us as we celebrate innovation, creativity, and limitless possibilities.
    </p>
  </div>
</div>

      
    </div>
  </section>
  <!-- Contact Section -->
      <div class="mt-auto relative bottom-0 left-0 right-0 p-8 bg-opacity-90 bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-800 animate-gradient-xy shadow-2xl rounded-t-lg flex flex-col md:flex-row justify-between items-center contact-section space-y-6 md:space-y-0 md:space-x-8">
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
        <a href="tel:9490459963" class="hover:underline">9490459963</a>
      </p>
      <p class="text-xl font-medium mb-2">
        <a href="tel:9676677116" class="hover:underline">9676677116</a>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5764682633658!2d83.32945747494506!3d17.811591383149768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395befa9dda303%3A0x5781c56a5df412 !2sBaba%20Institute%20of%20Technology%20%26%20Sciences!5e0!3m2!1sen!2sin!4v1737482955981!5m2!1sen!2sin"
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
  <footer class="bg-gray-800 text-white py-4">
  <div class="container mx-auto text-center">
    <p>Made with 🩷 by <a href="https://konkorde.org" class="text-blue-500 hover:underline">KONKORDE</a></p>
  </div>
</footer>
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



  <style>
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