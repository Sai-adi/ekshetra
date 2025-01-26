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
  <section class="relative bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white py-20 px-0 w-full overflow-hidden pt-[120px]">
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

    <div class="relative z-10 max-w-7xl mx-auto px-4">
      <!-- About Section Heading -->
      <h1 class="section-heading text-4xl font-bold mb-8 text-center" data-aos="fade-up" data-aos-duration="1000">
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
            Baba Institute of Technology & Sciences (BITS) was founded in 2008. The college was founded by a group of well-known academicians. They are pioneering educators, having unmatched experience in the field of education with a belief that the continuous search for knowledge is the sole path to success. The primary focus of the institution is to expose the young minds to the world of technology and business, instilling in them confidence and fortitude to face new challenges that enable them to excel in their chosen fields.
          </p>
        </div>
      </div>

      <!-- About Ekshetra 2.0 -->
      <div class="content bg-gray-800 p-8 rounded-xl shadow-lg mb-8 flex flex-col md:flex-row items-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
        <img src="ekshetra2.0.jpg" alt="Ekshetra 2.0 image" class="w-96 h-auto rounded-lg border-2 border-gray-600 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl mb-4 md:mb-0 md:mr-4" />
        <div class="flex-1">
          <h2 class="text-2xl font-semibold mb-4 text-purple-300 text-center md:text-left">
            Ekshetra 2.0 - A Remarkable Journey
          </h2>
          <p class="text-lg leading-relaxed text-center md:text-right">
            Baba Institute of Technology & Sciences (BITS) was founded in 2008. The college was founded by a group of well-known academicians. They are pioneering educators, having unmatched experience in the field of education with a belief that the continuous search for knowledge is the sole path to success. The primary focus of the institution is to expose the young minds to the world of technology and business, instilling in them confidence and fortitude to face new challenges that enable them to excel in their chosen fields.
          </p>
        </div>
      </div>

      <!-- About Ekshetra 3.0 -->
      <div class="content bg-gray-800 p-8 rounded-xl shadow-lg mb-8 flex flex-col md:flex-row items-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
        <img src="jo.jpg" alt="Ekshetra 3.0 image" class="w-96 h-auto rounded-lg border-2 border-gray-600 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl mb-4 md:mb-0 md:mr-4" />
        <div class="flex-1">
          <h2 class="text-2xl font-semibold mb-4 text-purple-300 text-center md:text-left">
            Ekshetra 3.0 - A Remarkable Journey
          </h2>
          <p class="text-lg leading-relaxed text-justify md:text-right">
            Baba Institute of Technology & Sciences (BITS) was founded in 2008. The college was founded by a group of well-known academicians. They are pioneering educators, having unmatched experience in the field of education with a belief that the continuous search for knowledge is the sole path to success. The primary focus of the institution is to expose the young minds to the world of technology and business, instilling in them confidence and fortitude to face new challenges that enable them to excel in their chosen fields.
          </p>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="mt-8 relative bottom-0 left-0 right-0 p-8 bg-opacity-90 bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-800 animate-gradient-xy shadow-2xl rounded-t-lg flex flex-col md:flex-row justify-between items-center contact-section space-y-6 md:space-y-0 md:space-x-8">
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
    </div>
  </section>
  <footer class="bg-gray-800 text-white py-4">
  <div class="container mx-auto text-center" data-aos="fade-up">
    <p>Made with 🩷 by <a href="https://konkorde.org" class="text-blue-500 hover:underline">KONKORDE</a></p>
  </div>
</footer>

  <style>
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