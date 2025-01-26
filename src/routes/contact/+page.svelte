<script>
  import { onMount } from "svelte";
  import AOS from "aos"; // Import AOS
  import "aos/dist/aos.css"; // Import AOS styles
  import Nav from "../nav/+page.svelte";

  const committees = [
    {
      name: "Technical Committee",
      heads: [
        { name: "John Doe", phone: "9876543210" },
        { name: "Jane Smith", phone: "8765432109" },
      ],
    },
    {
      name: "Cultural Committee",
      heads: [
        { name: "Alice Brown", phone: "9988776655" },
        { name: "Bob Johnson", phone: "8877665544" },
      ],
    },
    {
      name: "Marketing Committee",
      heads: [
        { name: "Charlie White", phone: "9123456789" },
        { name: "Diana Green", phone: "7890123456" },
      ],
    },
    {
      name: "Logistics Committee",
      heads: [
        { name: "Ethan Black", phone: "9001122334" },
        { name: "Fiona Gray", phone: "8002233445" },
      ],
    },
    {
      name: "Hospitality Committee",
      heads: [
        { name: "George Blue", phone: "7654321098" },
        { name: "Hannah Red", phone: "6543210987" },
      ],
    },
    {
      name: "Sponsorship Committee",
      heads: [
        { name: "Ivy Violet", phone: "7890987654" },
        { name: "Jack Orange", phone: "6789098765" },
      ],
    },
  ];

  onMount(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Easing function
      once: false,
      mirror: true,
      offset: 100, // Start animations a bit earlier
    });
  });
</script>

<Nav />
<div class="relative bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 min-h-screen text-white py-10 overflow-hidden">
  <!-- Decorative Shapes -->
  <div class="absolute top-0 left-0 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
  <div class="absolute top-1/3 right-0 w-72 h-72 bg-purple-500 opacity-25 rounded-full blur-2xl animate-pulse"></div>
  <div class="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>

  <!-- Main Content -->
  <div class="relative z-20 container mx-auto px-4 mt-20">
    <h1 class="text-5xl font-extrabold text-center text-blue-400 mb-12 tracking-wider hero-title" data-aos="fade-up">
      Contact Us
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each committees as committee}
        <div
          class="bg-gray-800 rounded-xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300 p-6 relative group committee-card"
          data-aos="fade-up" 
        >
          <div
            class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none"
          ></div>
          <h2 class="text-2xl font-semibold mb-4 text-center text-blue-300 group-hover:text-white transition-colors duration-300">
            {committee.name}
          </h2>
          <ul>
            {#each committee.heads as head}
              <li class="flex items-center justify-between py-3 px-4 bg-gray-700 rounded-lg mb-3 shadow-md hover:bg-gray-600 transition-colors duration-300">
                <span class="text-lg font-medium">{head.name}</span>
                <a
                  href="tel:{head.phone}"
                  class="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200"
                >
                  {head.phone}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>

  <!-- Contact Section -->
  <div class="mt-8 relative bottom-0 left-0 right-0 p-8 bg-opacity-90 bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-800 animate-gradient-xy shadow-2xl rounded-t-lg flex flex-col md:flex-row justify-between items-center contact-section space-y-6 md:space-y-0 md:space-x-8">
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
