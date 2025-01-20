<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  let isMenuOpen = false;
  let isModalOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const toggleModal = () => {
    isModalOpen = !isModalOpen;
  };

  onMount(() => {
    gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero-tagline", { opacity: 0, y: 20, duration: 1, delay: 0.5 });
    gsap.from(".hero-date", { opacity: 0, y: 20, duration: 1, delay: 1 });
    gsap.from(".cta-button", { opacity: 0, scale: 0.5, duration: 1, stagger: 0.2, delay: 1.5 });
  });

  // Countdown Timer Logic
  const eventDate = new Date("February 20, 2025 00:00:00").getTime();
  let countdownText = '';

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      countdownText = "Event Started!";
      clearInterval(countdownInterval);
    }
  };

  const countdownInterval = setInterval(updateCountdown, 1000);
</script>

<header class="bg-gradient-to-r from-orange-400 to-pink-500 sticky top-0 z-50">
  <nav class="container mx-auto flex justify-between items-center py-4 px-6">
    <a href="" class="text-white text-3xl font-extrabold tracking-wide hover:scale-110 transition-transform duration-500" aria-label="EKSHETRA 3.0">
      EKSHETRA 3.0
    </a>

    <ul class="hidden md:flex space-x-8 text-white text-lg font-semibold">
      <li>
        <a href="/sponsors" class="relative group" aria-label="Sponsors">
          <span class="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-10 rounded-lg transition-all duration-300 group-hover:opacity-30"></span>
          <span class="relative hover:text-yellow-300 transition-colors duration-300">Sponsors</span>
        </a>
      </li>
      <li>
        <a href="/about" class="relative group" aria-label="About">
          <span class="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-10 rounded-lg transition-all duration-300 group-hover:opacity-30"></span>
          <span class="relative hover:text-teal-300 transition-colors duration-300">About</span>
        </a>
      </li>
      <li>
        <a href="/gallery" class="relative group" aria-label="Gallery">
          <span class="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-10 rounded-lg transition-all duration-300 group-hover:opacity-30"></span>
          <span class="relative hover:text-purple-300 transition-colors duration-300">Gallery</span>
        </a>
      </li>
      <li>
        <a href="/contact" class="relative group" aria-label="Contact">
          <span class="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-10 rounded-lg transition-all duration-300 group-hover:opacity-30"></span>
          <span class="relative hover:text-pink-300 transition-colors duration-300">Contact</span>
        </a>
      </li>
    </ul>

    <button class="md:hidden text-white hover:text-gray-200 transition-transform duration-300 transform hover:scale-110" on:click={toggleMenu} aria-label="Toggle mobile menu">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  </nav>

  {#if isMenuOpen}
    <div class="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white flex flex-col items-center space-y-4 py-6 md:hidden animate-fade-in">
      <a href="/sponsors" class="hover:text-yellow-300 transition-colors duration-300">Sponsors</a>
      <a href="/about" class="hover:text-teal-300 transition-colors duration-300">About</a>
      <a href="/gallery" class="hover:text-purple-300 transition-colors duration-300">Gallery</a>
      <a href="/contact" class="hover:text-pink-300 transition-colors duration-300">Contact</a>
    </div>
  {/if}
</header>

<section class="hero bg-gradient-to-r from-orange-400 to-pink-500 text-white text-center py-32 relative overflow-hidden">
  <div class="absolute inset-0 pointer-events-none">
    <div class="bg-shape1 absolute w-48 h-48 bg-white opacity-20 rounded-full top-10 left-20 animate-pulse"></div>
    <div class="bg-shape2 absolute w-64 h-64 bg-white opacity-10 rounded-full bottom-20 right-32 animate-ping"></div>
    <div class="bg-shape3 absolute w-40 h-40 bg-orange-300 opacity-30 rounded-full bottom-10 left-10 animate-spin"></div>
    <div class="bg-shape4 absolute w-32 h-32 bg-pink-300 opacity-30 rounded-full top-20 right-10 animate-bounce"></div>
  </div>

  <h1 class="hero-title text-4xl font-bold">EKSHETRA 3.0</h1>
  <p class="hero-tagline text-xl mt-4">Igniting Innovation, Celebrating Excellence!</p>
  <p class="hero-date text-lg mt-2">Feb 20-22, 2025</p>
  
  <!-- Countdown Timer -->
  <div id="countdown" class="text-3xl font-bold mt-4">{countdownText}</div>

  <div class="mt-6 space-x-4">
    <button class="cta-button bg-white text-orange-600 px-6 py-2 rounded-full shadow-lg">Register Now</button>
    <button class="cta-button bg-transparent border-2 border-white px-6 py-2 rounded-full">Explore Events</button>
  </div>
</section>

<!-- About the Fest Section -->
<section class="relative bg-gradient-to-br from-gray-800 to-gray-900 py-16 px-4 overflow-hidden">
  <div class="absolute top-0 left-0 w-48 h-48 bg-blue-900 rounded-full opacity-30 transform -translate-x-20 -translate-y-20 animate-bgShape1"></div>
  <div class="absolute bottom-0 right-0 w-64 h-64 bg-blue-800 rounded-full opacity-20 transform translate-x-20 translate-y-20 animate-bgShape2"></div>

  <div class="relative z-10 max-w-5xl mx-auto text-center">
    <h2 class="text-5xl font-extrabold text-blue-400 mb-6 tracking-wide leading-tight animate-textFadeIn">About the Fest</h2>
    <p class="text-lg font-medium text-gray-300 mb-8 animate-textFadeIn">
      A blend of <span class="text-blue-500 font-bold">innovation</span>, 
      <span class="text-green-500 font-bold">creativity</span>, and 
      <span class="text-pink-500 font-bold">celebration</span>!
    </p>

    <div class="max-w-3xl mx-auto text-gray-400 text-lg">
      <p class="mb-6 leading-relaxed animate-textFadeIn">
        EKSHETRA 3.0 is the ultimate celebration of talent, innovation, and creativity! 
        Join us for a thrilling lineup of events, workshops, competitions, and cultural showcases.
      </p>
      <p class="leading-relaxed animate-textFadeIn">
        Experience the vibrant energy of students and professionals coming together 
        to explore new horizons in technology and art. Let's make this a fest to remember!
      </p>
    </div>

    <div class="mt-10">
      <div class="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-green-500 to-pink-500"></div>
    </div>

    <div class="mt-12 flex justify-center gap-8">
      <div class="flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-700 p-6 rounded-full">
        <div class="w-16 h-16 bg-blue-700 text-blue-500 flex justify-center items-center rounded-full shadow-xl transition-all hover:bg-blue-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 6.75l2.25 2.25L14.25 6.75M9.75 11.25l2.25 2.25L14.25 11.25M9.75 15.75l2.25 2.25L14.25 15.75" />
          </svg>
        </div>
        <p class="text-gray-300 font-semibold mt-2">Workshops</p>
      </div>
      <div class="flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-green-700 p-6 rounded-full">
        <div class="w-16 h-16 bg-green-700 text-green-500 flex justify-center items-center rounded-full shadow-xl transition-all hover:bg-green-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.5a2.5 2.5 0 002.5-2.5v-1A2.5 2.5 0 0018.5 4h-13A2.5 2.5 0 003 6.5v11A2.5 2.5 0 005.5 20h11" />
          </svg>
        </div>
        <p class="text-gray-300 font-semibold mt-2">Competitions</p>
      </div>
      <div class="flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-pink-700 p-6 rounded-full">
        <div class="w-16 h-16 bg-pink-700 text-pink-500 flex justify-center items-center rounded-full shadow-xl transition-all hover:bg-pink-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14l4-4m0 0l4 4m-4-4v10" />
          </svg>
        </div>
        <p class="text-gray-300 font-semibold mt-2">Cultural Shows</p>
      </div>
    </div>
  </div>
</section>

<!-- Event Highlights Section -->
<section class="event-highlights py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
  <div class="absolute top-0 right-0 w-72 h-72 bg-blue-900 rounded-full opacity-30 blur-3xl transform translate-x-20 -translate-y-20"></div>
  <div class="absolute bottom-0 left-0 w-96 h-96 bg-pink-800 rounded-full opacity-20 blur-3xl transform -translate-x-20 translate-y-20"></div>
  
  <div class="absolute inset-0">
    <div class="absolute top-20 left-1/4 w-12 h-12 bg-yellow-500 opacity-40 rounded-full animate-ping"></div>
    <div class="absolute bottom-24 right-1/3 w-16 h-16 bg-green-400 opacity-40 rounded-full animate-bounce"></div>
    <div class="absolute bottom-0 left-1/2 w-24 h-24 bg-purple-600 opacity-30 rounded-full animate-spin"></div>
  </div>

  <div class="container mx-auto text-center relative z-10">
    <h2 class="text-5xl font-extrabold text-orange-400 leading-tight animate__animated animate__fadeInUp">Event Highlights</h2>
    <p class="mt-4 text-xl text-gray-300 leading-relaxed opacity-80">Discover the most exciting events of EKSHETRA 3.0! From technical workshops to cultural performances, experience innovation and creativity like never before.</p>

    <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-8">
      <div class="event-card bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg p-6 rounded-lg transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l from-gray-700 to-gray-800 transition-all duration-500">
        <div class="text-3xl font-semibold text-indigo-400">Technical Workshops</div>
        <p class="mt-3 text-sm text-gray-400">Interactive workshops with industry experts and hands-on learning sessions.</p>
        <div class="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
      </div>

      <div class="event-card bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg p-6 rounded-lg transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l from-pink-600 to-pink-800 transition-all duration-500">
        <div class="text-3xl font-semibold text-pink-400">Cultural Performances</div>
        <p class="mt-3 text-sm text-gray-400">Catch the best of talent, dance, music, and drama from students across the country.</p>
        <div class="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
      </div>

      <div class="event-card bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg p-6 rounded-lg transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l from-teal-600 to-teal-800 transition-all duration-500">
        <div class="text-3xl font-semibold text-teal-400">Sports Competitions</div>
        <p class="mt-3 text-sm text-gray-400">Get ready to show off your skills in thrilling sports competitions.</p>
        <div class="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
      </div>

      <div class="event-card bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg p-6 rounded-lg transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l from-purple-600 to-purple-800 transition-all duration-500">
        <div class="text-3xl font-semibold text-purple-400">Guest Lectures</div>
        <p class="mt-3 text-sm text-gray-400">Engage with thought leaders and learn from their inspiring journeys.</p>
        <div class="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
      </div>
    </div>

    <div class="mt-8">
      <a href="#know-more" class="px-6 py-3 bg-orange-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300">Know More</a>
    </div>
  </div>
</section>

<section class="py-16 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
  <div class="absolute top-0 left-0 w-48 h-48 bg-gradient-to-r from-indigo-700 to-blue-800 rounded-full opacity-30 transform -translate-x-16 -translate-y-16 animate-float"></div>
  <div class="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-full opacity-25 transform translate-x-16 translate-y-16 animate-float"></div>
  <div class="absolute top-1/3 left-1/4 w-56 h-56 bg-gradient-to-l from-purple-700 to-indigo-900 rounded-full opacity-50 animate-rotate"></div>
  <div class="absolute bottom-1/4 left-1/2 w-36 h-36 bg-gradient-to-r from-teal-600 to-green-700 rounded-full opacity-20 animate-pulse"></div>

  <div class="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-80 z-0"></div>

  <div class="container mx-auto text-center relative z-10">
    <h2 class="text-4xl font-extrabold text-orange-500 mb-6">Our Esteemed Partners</h2>
    <p class="text-lg text-gray-400 leading-relaxed mb-8">We are proudly supported by some of the most prestigious tech companies and educational institutions, whose collaboration elevates our mission.</p>

    <div class="overflow-hidden relative">
      <div class="animate-marquee flex items-center gap-12 sponsor-marquee">
        <div class="partner-item flex items-center bg-gray-100 shadow-md p-4 rounded-lg">
          <img src="https://via.placeholder.com/150" alt="Tech Innovators Inc. Logo" class="w-24 h-24 mr-4">
          <p class="font-semibold text-gray-700">Tech Innovators Inc.</p>
        </div>
        <div class="partner-item flex items-center bg-gray-100 shadow-md p-4 rounded-lg">
          <img src="https://via.placeholder.com/150" alt="NextGen Solutions Logo" class="w-24 h-24 mr-4">
          <p class="font-semibold text-gray-700">NextGen Solutions</p>
        </div>
        <div class="partner-item flex items-center bg-gray-100 shadow-md p-4 rounded-lg">
          <img src="https://via.placeholder.com/150" alt="GlobalTech Corporation Logo" class="w-24 h-24 mr-4">
          <p class="font-semibold text-gray-700">GlobalTech Corporation</p>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <a href="#know-more" class="px-6 py-3 bg-orange-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300">Know More</a>
    </div>
  </div>
</section>

<!-- Schedule Section -->
<section class="bg-gradient-to-r from-indigo-900 via-purple-900 to-black py-16 px-4 text-white">
  <h2 class="text-4xl font-extrabold text-center mb-8 text-yellow-400">Event Schedule</h2>
  <div class="max-w-6xl mx-auto bg-gradient-to-r from-gray-800 to-gray-900 shadow-2xl rounded-xl p-8">
    <table class="w-full border-collapse text-gray-200">
      <thead>
        <tr class="bg-gradient-to-r from-indigo-800 to-purple-700 text-white">
          <th class="p-4 text-left rounded-tl-lg">Time</th>
          <th class="p-4 text-left">Event</th>
          <th class="p-4 text-left rounded-tr-lg">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-gray-700 transition duration-300">
          <td class="p-4 border-t border-gray-600">10:00 AM</td>
          <td class="p-4 border-t border-gray-600">Inauguration</td>
          <td class="p-4 border-t border-gray-600">Main Hall</td>
        </tr>
        <tr class="hover:bg-gray-700 transition duration-300">
          <td class="p-4 border-t border-gray-600">11:30 AM</td>
          <td class="p-4 border-t border-gray-600">AI Workshop</td>
          <td class="p-4 border-t border-gray-600">Lab 1</td>
        </tr>
        <tr class="hover:bg-gray-700 transition duration-300">
          <td class="p-4 border-t border-gray-600">2:00 PM</td>
          <td class="p-4 border-t border-gray-600">Hackathon</td>
          <td class="p-4 border-t border-gray-600">Tech Room</td>
        </tr>
      </tbody>
    </table>
    <div class="mt-8 text-center">
      <a href="#" class="bg-yellow-600 text-white py-3 px-6 rounded-lg hover:bg-yellow-700 transition duration-300 transform hover:scale-105">Download Schedule</a>
    </div>
  </div>
</section>

<style>
  @keyframes marquee {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
  .animate-marquee {
    display: flex;
    gap: 2rem;
    white-space: nowrap;
    animation: marquee 15s linear infinite;
  }

  .sponsor-marquee:hover {
    animation-play-state: paused;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }

  .bg-shape1, .bg-shape2 {
    animation: float 6s infinite ease-in-out;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  table {
    border-spacing: 0;
  }

  th {
    font-size: 1.1rem;
    font-weight: 600;
  }

  td {
    font-size: 1rem;
  }

  tr:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  a:hover {
    background-color: #fbbf24;
    transform: translateY(-2px);
  }

  .hover\:bg-gray-700:hover {
    background-color: #2d3748;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  .hover\:scale-105:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }

  .table-container {
    border-radius: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  .animate-pulse {
    animation: pulse 3s infinite;
  }

  @keyframes textFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-textFadeIn {
    animation: textFadeIn 1s ease-out forwards;
  }

  @keyframes bgShape1 {
    0% {
      transform: translateX(-20%) translateY(-20%);
    }
    50% {
      transform: translateX(10%) translateY(10%);
    }
    100% {
      transform: translateX(-20%) translateY(-20%);
    }
  }

  @keyframes bgShape2 {
    0% {
      transform: translateX(20%) translateY(20%);
    }
    50% {
      transform: translateX(-10%) translateY(-10%);
    }
    100% {
      transform: translateX(20%) translateY(20%);
    }
  }

  .animate-bgShape1 {
    animation: bgShape1 8s ease-in-out infinite;
  }

  .animate-bgShape2 {
    animation: bgShape2 8s ease-in-out infinite;
  }

  .hover\:shadow-2xl:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
  }

  .hover\:bg-blue-800:hover {
    background-color: #2b6cb0;
    transition: all 0.3s ease;
  }

  .hover\:bg-green-800:hover {
    background-color: #2f855a;
    transition: all 0.3s ease;
  }

  .hover\:bg-pink-800:hover {
    background-color: #9b2c2c;
    transition: all 0.3s ease;
  }
</style>