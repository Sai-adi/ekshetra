<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import AOS from 'aos';
  import 'aos/dist/aos.css'; // Import AOS styles
  import Nav from './nav/+page.svelte'; // Ensure this is the correct import
  import Load from './loading_page/+page.svelte'

  let isMenuOpen = false;
  let countdownText = '';

  // Countdown Timer Logic
  const eventDate = new Date("February 20, 2025 00:00:00").getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const newCountdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Check if we are in the browser before accessing the document
    if (typeof document !== 'undefined') {
      const countdownElement = document.getElementById('countdown');

      // Only animate if the text is changing
      if (countdownText !== newCountdownText) {
        countdownText = newCountdownText;

        // Smooth fade and scale animation
        gsap.to(countdownElement, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          onComplete: () => {
            countdownElement.innerText = countdownText; // Update the text
            gsap.to(countdownElement, {
              opacity: 1,
              scale: 1,
              duration: 0.3,
            });
          },
        });
      }
    }

    if (distance < 0) {
      countdownText = "Event Started!";
      clearInterval(countdownInterval);
    }
  };

  // Start the countdown timer
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Clean up the interval on component destroy
  onMount(() => {
    return () => clearInterval(countdownInterval);
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
  });
</script>

<Nav />

<section class="hero bg-gradient-to-r from-orange-400 to-pink-500 text-white text-center py-28 relative overflow-hidden">
  <div class="absolute inset-0 pointer-events-none">
    <div class="bg-shape1 absolute w-48 h-48 bg-white opacity-20 rounded-full top-10 left-20 animate-pulse"></div>
    <div class="bg-shape2 absolute w-64 h-64 bg-white opacity-10 rounded-full bottom-20 right-32 animate-ping"></div>
    <div class="bg-shape3 absolute w-40 h-40 bg-orange-300 opacity-30 rounded-full bottom-10 left-10 animate-spin"></div>
    <div class="bg-shape4 absolute w-32 h-32 bg-pink-300 opacity-30 rounded-full top-20 right-10 animate-bounce"></div>
  </div>
 
  <div class="flex justify-center items-center mt-10">
    <img src="n.png" alt="" class="max-w-full max-h-36 object-cover" loading="lazy"> 
  </div>
  
  <p class="hero-tagline text-xl mt-4 font-audiowide text-lg">Igniting Innovation, Celebrating Excellence!</p>
  <p class="hero-date text-lg mt-2 fontaudiowide text-lg">Feb 20-22, 2025</p>
  
  <!-- Countdown Timer -->
  <div id="countdown" class="text-3xl font-bold mt-4 countdown">{countdownText}</div>

  <div class="button-container mt-6 space-x-4">
    <button class="cta-button font-audiowide bg-white text-orange-600 px-6 py-2 rounded-full shadow-lg">Register Now</button>
    <button class="cta-button font-audiowide bg-transparent border-2 border-white px-6 py-2 rounded-full">Explore Events</button>
</div>
</section>

<!-- About the Fest Section -->
<section class="relative bg-gradient-to-br from-gray-800 to-gray-900 py-16 px-4 overflow-hidden">
  <div class="absolute top-0 left-0 w-48 h-48 bg-blue-900 rounded-full opacity-30 transform -translate-x-20 -translate-y-20 animate-bgShape1"></div>
  <div class="absolute bottom-0 right-0 w-64 h-64 bg-blue-800 rounded-full opacity-20 transform translate-x-20 translate-y-20 animate-bgShape2"></div>

  <div class="relative z-10 max-w-5xl mx-auto text-center">
    <h2 class="text-5xl font-extrabold text-blue-400 mb-6 tracking-wide leading-tight animate-textFadeIn font-lora text-2xl" data-aos="fade-up">About the Fest</h2>
    <p class="text-lg font-medium text-gray-300 mb-8 animate-textFadeIn font-audiowide text-lg" data-aos="fade-up" data-aos-delay="100">
      A blend of <span class="text-blue-500 font-bold">innovation</span>, 
      <span class="text-green-500 font-bold">creativity</span>, and 
      <span class="text-pink-500 font-bold">celebration</span>!
    </p>

    <div class="max-w-3xl mx-auto text-gray-400 text-lg">
      <p class="mb-6 leading-relaxed animate-textFadeIn font-audiowide text-lg" data-aos="fade-up" data-aos-delay="200">
        EKSHETRA 3.0 is the ultimate celebration of talent, innovation, and creativity! 
        Join us for a thrilling lineup of events, workshops, competitions, and cultural showcases.
      </p>
      <p class="leading-relaxed animate-textFadeIn fontaudiowide text-lg" data-aos="fade-up" data-aos-delay="300">
        Experience the vibrant energy of students and professionals coming together 
        to explore new horizons in technology and art. Let's make this a fest to remember!
      </p>
    </div>

    <div class="mt-10">
      <div class="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-green-500 to-pink-500"></div>
    </div>

    <div class="mt-12 flex justify-center gap-8">
      <div class="flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-700 p-6 rounded-full" data-aos="fade-up" data-aos-delay="400">
        <div class="w-16 h-16 bg-blue-700 text-blue-500 flex justify-center items-center rounded-full shadow-xl transition-all hover:bg-blue-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 6.75l2.25 2.25L14.25 6.75M9.75 11.25l2.25 2.25L14.25 11.25M9.75 15.75l2.25 2.25L14.25 15.75" />
          </svg>
        </div>
        <p class="text-gray-300 font-semibold mt-2 fontaudiowide text-lg">Workshops</p>
      </div>
      <div class="flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-green-700 p-6 rounded-full" data-aos="fade-up" data-aos-delay="500">
        <div class="w-16 h-16 bg-green-700 text-green-500 flex justify-center items-center rounded-full shadow-xl transition-all hover:bg-green-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.5a2.5 2.5 0 002.5-2.5v-1A2.5 2.5 0 0018.5 4h-13A2.5 2.5 0 003 6.5v11A2.5 2.5 0 005.5 20h11" />
          </svg>
        </div>
        <p class="text-gray-300 font-semibold mt-2 fontaudiowide text-lg">Competitions</p>
      </div>
      <div class="flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-pink-700 p-6 rounded-full" data-aos="fade-up" data-aos-delay="600">
        <div class="w-16 h-16 bg-pink-700 text-pink-500 flex justify-center items-center rounded-full shadow-xl transition-all hover:bg-pink-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w- 8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14l4-4 m0 0l4 4m-4-4v10" />
          </svg>
        </div>
        <p class="text-gray-300 font-semibold mt-2 fontaudiowide text-lg">Cultural Shows</p>
      </div>
    </div>
  </div>
</section>

<!-- Event Highlights Section -->
<section class="event-highlights py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
  <div class="absolute top-0 right-0 w-72 h-72 bg-blue-900 rounded-full opacity-30 blur-3xl transform translate-x-20 -translate-y-20"></div>
  <div class="absolute bottom-0 left-0 w-96 h-96 bg-pink-800 rounded-full opacity-20 blur-3xl transform -translate-x-20 translate-y-20"></div>
  
  <div class="absolute inset-0">
    <div class="absolute top-20 left-1/4 w-12 h-12 bg-yellow-500 opacity-40 rounded-full animate-ping" data-aos="fade-up"></div>
    <div class="absolute bottom-24 right-1/3 w-16 h-16 bg-green-400 opacity-40 rounded-full animate-bounce" data-aos="fade-up" data-aos-delay="100"></div>
    <div class="absolute bottom-0 left-1/2 w-24 h-24 bg-purple-600 opacity-30 rounded-full animate-spin" data-aos="fade-up" data-aos-delay="200"></div>
  </div>

  <div class="container mx-auto text-center relative z-10">
    <h2 class="text-5xl font-extrabold text-orange-400 leading-tight animate__animated animate__fadeInUp font-lora text-2xl" data-aos="fade-up">Event Highlights</h2>
    <p class="mt-4 text-xl text-gray-300 leading-relaxed opacity-80 font-audiowide text-lg" data-aos="fade-up" data-aos-delay="300">Discover the most exciting events of EKSHETRA 3.0! From technical workshops to cultural performances, experience innovation and creativity like never before.</p>

    <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-8">
      <div class="event-card bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg p-6 rounded-lg transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l from-gray-700 to-gray-800 transition-all duration-500" data-aos="fade-up" data-aos-delay="400">
        <div class="text-3xl font-semibold text-indigo-400">Technical Workshops</div>
        <p class="mt-3 text-sm text-gray-400 fontaudiowide text-lg">Interactive workshops with industry experts and hands-on learning sessions.</p>
        <div class="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
      </div>

      <div class="event-card bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg p-6 rounded-lg transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l from-pink-600 to-pink-800 transition-all duration-500" data-aos="fade-up" data-aos-delay="500">
        <div class="text-3xl font-semibold text-pink-400">Cultural Performances</div>
        <p class="mt-3 text-sm text-gray-400 fontaudiowide text-lg">Catch the best of talent, dance, music, and drama from students across the country.</p>
        <div class="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
      </div>

      <div class="event-card bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg p-6 rounded-lg transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l from-teal-600 to-teal-800 transition-all duration-500" data-aos="fade-up" data-aos-delay="600">
        <div class="text-3xl font-semibold text-teal-400">Sports Competitions</div>
        <p class="mt-3 text-sm text-gray-400 fontaudiowide text-lg">Get ready to show off your skills in thrilling sports competitions.</p>
        <div class="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
      </div>

      <div class="event-card bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg p-6 rounded-lg transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l from-purple-600 to-purple-800 transition-all duration-500" data-aos="fade-up" data-aos-delay="700">
        <div class="text-3xl font-semibold text-purple-400">Guest Lectures</div>
        <p class="mt-3 text-sm text-gray-400 fontaudiowide text-lg">Engage with thought leaders and learn from their inspiring journeys.</p>
        <div class="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
      </div>
    </div>

    <div class="mt-8" data-aos="fade-up" data-aos-delay="400">
      <a href="#know-more" class="px-6 py-3 bg-orange-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300" data-aos="fade-up" data-aos-delay="800">Know More</a>
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
    <h2 class="text-4xl font-extrabold text-orange-500 mb-6 font-lora text-2xl" data-aos="fade-up">Our Esteemed Partners</h2>
    <p class="text-lg text-gray-400 leading-relaxed mb-8 fontaudiowide text-lg" data-aos="fade-up" data-aos-delay="100">We are proudly supported by some of the most prestigious tech companies and educational institutions, whose collaboration elevates our mission.</p>

    <div class="overflow-hidden relative">
      <div class="animate-marquee flex items-center gap-12 sponsor-marquee">
        <div class="partner-item flex items-center bg-gray-100 shadow-md p-4 rounded-lg" >
          <img src="https://via.placeholder.com/150" alt="Tech Innovators Inc. Logo" class="w-24 h-24 mr-4">
          <p class="font-semibold text-gray-700">Tech Innovators Inc.</p>
        </div>
        <div class="partner-item flex items-center bg-gray-100 shadow-md p-4 rounded-lg" >
          <img src="https://via.placeholder.com/150" alt="NextGen Solutions Logo" class="w-24 h-24 mr-4">
          <p class="font-semibold text-gray-700">NextGen Solutions</p>
        </div>
        <div class="partner-item flex items-center bg-gray-100 shadow-md p-4 rounded-lg" >
          <img src="https://via.placeholder.com/150" alt="GlobalTech Corporation Logo" class="w-24 h-24 mr-4">
          <p class="font-semibold text-gray-700">GlobalTech Corporation</p>
        </div>
      </div>
    </div>
    <div class="mt-8" data-aos="fade-up" data-aos-delay="400">
      <a href="#know-more" class="px-6 py-3 bg-orange-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300" data-aos="fade-up" data-aos-delay="500">Know More</a>
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
    background-color: rgba(255,  255, 255, 0.05);
  }

  a:hover {
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

  @font-face {
    font-family: 'Audiowide';
    src: url('./assets/fonts/Audiowide-Regular.ttf') format('truetype');
    font-weight: 400; /* Regular */
    font-style: normal;
  }

  /* Default body font */
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
  .button-container {
    display: flex; /* Use flexbox for layout */
    justify-content: center; /* Center the buttons */
    flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
}

.cta-button {
    margin: 0.5rem; /* Add some margin for spacing */
}

/* Media query for mobile responsiveness */
@media (max-width: 768px) {
    .button-container {
        flex-direction: column; /* Stack buttons vertically */
        align-items: center; /* Center buttons */
    }

    .cta-button {
        width: 100%; /* Make buttons full width */
        max-width: 200px; /* Optional: Set a max width for buttons */
    }
}
</style>