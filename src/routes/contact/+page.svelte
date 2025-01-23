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
    // Initialize AOS
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
<div class="relative bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 min-h-screen text-white py-10 overflow-hidden"> <!-- Changed gradient colors -->
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
</div>