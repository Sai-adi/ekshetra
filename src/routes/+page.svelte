<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import AOS from 'aos';
  import 'aos/dist/aos.css'; // Import AOS styles
  import Nav from './nav/+page.svelte'; // Ensure this is the correct import
  import LoadingPage from './loadingpage/+page.svelte';
  import Marquee from 'svelte-fast-marquee';
  let isMenuOpen = false;
  let countdownText = '';
  let mapRef;
let sponsors = [
    "/logos/1.png",
    "/logos/2.png",
    "/logos/3.png",
    "/logos/4.png",
    "/logos/5.png",
    "/logos/6.png",
    "/logos/7.png",
    "/logos/8.png",
    "/logos/9.png",
    "/logos/10.png",
    "/logos/11.png",
    "/logos/12.png",
    "/logos/13.png"

  ];
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

    if (typeof document !== 'undefined') {
      const countdownElement = document.getElementById('countdown');

      if (countdownText !== newCountdownText) {
        countdownText = newCountdownText;

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

  const countdownInterval = setInterval(updateCountdown, 1000);

  onMount(() => {
    return () => clearInterval(countdownInterval);
  });

  // GSAP animations on mount
  onMount(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100
    });

    gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".cta-button", { opacity: 0, scale: 0.5, duration: 1, stagger: 0.2, delay: 1.5 });

    gsap.set(mapRef, { scale: 1 });

    mapRef.addEventListener("mouseenter", () => {
      gsap.to(mapRef , { scale: 1.1, duration: 0.3, ease: "power2.out" });
    });

    mapRef.addEventListener("mouseleave", () => {
      gsap.to(mapRef, { scale: 1, duration: 0.3, ease: "power2.out" });
    });

    gsap.from(".contact-section", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });
  });
const typingEffect = (element, text, delay = 250) => {
  let index = 0;

  const type = () => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index) === "_" ? "&nbsp;" : text.charAt(index);
      index++;
      setTimeout(type, delay);
    }
  };

  // Clear the element before starting the typing effect
  element.innerHTML = "";

  // Start typing
  type();
};

onMount(() => {
  const dateElement = document.querySelector(".hero-date");
  typingEffect(dateElement, "February_20,_21_&_22_2025"); // Spaces fixed

  const taglineElement = document.querySelector(".hero-tagline");
  typingEffect(taglineElement, "Igniting_Innovation,_Celebrating_Excellence"); // Spaces fixed

  const collageElement = document.querySelector('.hero-collage');
  scrambleText(collageElement, "BITS VIZAG (A)");
});

</script>

<Nav />
<!-- <LoadingPage /> -->
<svelte:head>
    <link rel="icon" href="main.png" type="image/png" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<section class="hero bg-gradient-to-r from-orange-400 to-pink-500 text-white text-center py-28 relative overflow-hidden">
  <div class="absolute inset-0 pointer-events-none">
    <div class="bg-shape1 absolute w-48 h-48 bg-white opacity-20 rounded-full top-10 left-20 animate-pulse"></div>
    <div class="bg-shape2 absolute w-64 h-64 bg-white opacity-10 rounded-full bottom-20 right-32 animate-ping"></div>
    <div class="bg-shape3 absolute w-40 h-40 bg-orange-300 opacity-30 rounded-full bottom-10 left-10 animate-spin"></div>
    <div class="bg-shape4 absolute w-32 h-32 bg-pink-300 opacity-30 rounded-full top-20 right-10 animate-bounce"></div>
  </div>
  
  <div class="flex justify-center items-center mt-10">
    <img src="both1.png" alt="Event Image" class="max-w-full h-72 md:h-80 object-cover rounded-lg" loading="lazy"> 
</div>
    
    <p class="hero-tagline text-xl mt-4 font-audiowide text-lg">Igniting Innovation, Celebrating Excellence!</p>
  <p class="hero-date normal-font text-lg mt-2">February 20, 21 & 22;2025</p>
  <p class="hero-collage normal-font text-lg font-bold mt-2">BITS-VIZAG (A)</p>
  
  <!-- Countdown Timer -->
  <div id="countdown" class="text-3xl font-bold mt-4 countdown">{countdownText}</div>

  <div class="button-container mt-4 space-4">
    <a href="https://forms.gle/x4VrCgBDKruueZ8W8">
    <button class="cta-button font-audiowide bg-white text-orange-600 px-6 py-2 rounded-full shadow-lg">Register Now</button>
    </a>
    <a href="events">
      <button class="cta-button font-audiowide bg-transparent border-2 border-white px-6 py-2 rounded-full mr-12">Explore Events</button>
    </a>
  </div>
  <!-- Heading for Premium Partners -->
<h3 class="premium-heading">Our Premium Partners</h3>

<div class="marquee-container">
  <!-- Left Fade -->
  <div class="fade-overlay fade-left"></div>

  <div class="marquee-content">
    <!-- Dynamically display sponsors with seamless effect -->
    {#each [...sponsors, ...sponsors] as sponsor} <!-- Duplicate for seamless effect -->
      <img src={sponsor} alt="Sponsor Logo" class="sponsor-img" />
    {/each}
  </div>

  <!-- Right Fade -->
  <div class="fade-overlay fade-right"></div>
</div>
</section>

<!-- About the Fest Section -->
<section class="relative bg-gradient-to-br from-gray-800 to-gray-900 py-16 px-4 overflow-hidden">
  <div class="absolute top-0 left-0 w-48 h-48 bg-blue-900 rounded-full opacity-30 transform -translate-x-20 -translate-y-20 animate-bgShape1"></div>
  <div class="absolute bottom-0 right-0 w-64 h-64 bg-blue-800 rounded-full opacity-20 transform translate-x-20 translate-y-20 animate-bgShape2"></div>

  <div class="relative z-10 max-w-5xl mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
    <h2 class="text-5xl font-extrabold text-blue-400 mb-6 tracking-wide leading-tight animate-textFadeIn font-lora text-2xl" data-aos="fade-up" data-aos-delay="100">About the Fest</h2>
    <p class="text-lg font-medium text-gray-200 mb-8 animate-textFadeIn font-audiowide text-lg" data-aos="fade-up" data-aos-delay="100">
      A blend of <span class="text-blue-500 font-bold">Innovation</span>, 
      <span class="text-green-500 font-bold">Creativity</span>, and 
      <span class="text-pink-500 font-bold">Celebration</span> !!!
    </p>

    <div class="max-w-3xl mx-auto text-gray-200 text-lg">
      <p class="mb-6 leading-relaxed animate-textFadeIn font-audiowide text-lg" data-aos="fade-up" data-aos-delay="200">
        Join us for a thrilling lineup of Technical Events, Niche Technologies, Spot Events, Games, Ekshetra Street Fair - Food & Fun.(And the ultimate cultural night)</p>
      <p class="leading-relaxed animate-textFadeIn font-audiowide text-lg" data-aos="fade-up" data-aos-delay="300">
        Technology and Innovation <br> <b>Lets make EKSHETRA-3.0 a memory to remember</b>
      </p>
    </div>

    <div class="mt-10">
      <div class="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-green-500 to-pink-500"></div>
    </div>

    <div class="mt-12 flex justify-center gap-4 px-4 sm:px-8">
    <div class="flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-700 p-6 rounded-full" data-aos="fade-up" data-aos-delay="400">
        <div class="w-16 h-16 bg-blue-700 text-blue-500 flex justify-center items-center rounded-full shadow-xl transition-all hover:bg-blue-800">
            <a href="about">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v12m6-6H6" />
                </svg>
            </a>
        </div>
        <a href="about"><p class="text-gray-200 font-semibold mt-2 font-audiowide text-lg">Workshops</p></a>
    </div>
    
    <div class="flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-green-700 p-6 rounded-full" data-aos="fade-up" data-aos-delay="500">
        <div class="w-16 h-16 bg-green-700 text-green-500 flex justify-center items-center rounded-full shadow-xl transition-all hover:bg-green-800">
            <a href="about">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.5a2.5 2.5 0 002.5-2.5v-1A2.5 2.5 0 0018.5 4h-13A2.5 2.5 0 003 6.5v11A2.5 2.5 0 005.5 20h11" />
                </svg>
            </a>
        </div>
        <a href="about"><p class="text-gray-200 font-semibold mt-2 font-audiowide text-lg">Competitions</p></a>
    </div>
    
    <a href="about">
        <div class="flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-pink-700 p-6 rounded-full" data-aos="fade-up" data-aos-delay="600">
            <div class="w-16 h-16 bg-pink-700 text-pink-500 flex justify-center items-center rounded-full shadow-lg transition-all hover:bg-pink-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14l4-4 m0 0l4 4m-4-4v10" />
                </svg>
            </div>
            <p class="text-gray-200 font-semibold mt-2 font-audiowide text-lg">Cultural Shows</p>
        </div>
    </a>
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
    <p class="mt-4 text-xl text-gray-200 leading-relaxed opacity-80 font-audiowide text-lg px-4 sm:px-8" data-aos="fade-up" data-aos-delay="100">
      Discover the most exciting happenings of EKSHETRA 3.0! <br> From technical events, Niche Technologies to cultural nights.
    </p>
    <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-8">
      <div class="event-card bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-lg p-6 rounded-lg transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l from-blue-700 to-blue-800 transition-all duration-500" data-aos="fade-up" data-aos-delay="400">
        <div class="text-3xl font-semibold text-white-400">Technical Workshops</div>
        <p class="mt-3 text-sm text-gray-100 font-audiowide text-lg">Interactive workshops with industry experts and hands-on learning sessions.</p>
        <div class="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
      </div>

      <div class="event-card bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg p-6 rounded-lg transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l from-pink-600 to-pink-800 transition-all duration-500" data-aos="fade-up" data-aos-delay="500">
        <div class="text-3xl font-semibold text-white-400">Cultural Events</div>
        <p class="mt-3 text-sm text-gray-100 font-audiowide text-lg">Catch the best of talent, dance, music, and drama from students across the country.</p>
        <div class="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
      </div>

      <div class="event-card bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg p-6 rounded-lg transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l from-teal-600 to-teal-800 transition-all duration-500" data-aos="fade-up" data-aos-delay="600">
        <div class="text-3xl font-semibold text-white-400">Sports Competitions</div>
        <p class="mt-3 text-sm text-gray-100 font-audiowide text-lg">Get ready to show off your skills in thrilling sports competitions.</p>
        <div class="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
      </div>

      <div class="event-card bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg p-6 rounded-lg transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l from-orange-600 to-orange-800 transition-all duration-500" data-aos="fade-up" data-aos-delay="700">
        <div class="text-3xl font-semibold text-white-400">Guest Lectures</div>
        <p class="mt-3 text-sm text-gray-100 font-audiowide text-lg">Engage with thought leaders and learn from their inspiring journeys.</p>
        <div class="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
      </div>
    </div>

    <div class="mt-10" data-aos="fade-up" data-aos-delay="400">
      <a href="events" class=" mt-7 px-6 py-3 bg-orange-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300" data-aos="fade-up" data-aos-delay="800">Know More</a>
    </div>
  </div>
</section>

<section class="py-15 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
  <div class="absolute top-0 left-0 w-48 h-48 bg-gradient-to-r from-indigo-700 to-blue-800 rounded-full opacity-30 transform -translate-x-16 -translate-y-16 animate-float"></div>
  <div class="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-full opacity-25 transform translate-x-16 translate-y-16 animate-float"></div>
  <div class="absolute top-1/3 left-1/4 w-56 h-56 bg-gradient-to-l from-purple-700 to-indigo-900 rounded-full opacity-50 animate-rotate"></div>
  <div class="absolute bottom-1/4 left-1/2 w-36 h-36 bg-gradient-to-r from-teal-600 to-green-700 rounded-full opacity-20 animate-pulse"></div>

  <div class="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-80 z-0"></div>

  <div class="container mx-auto text-center relative z-10">
    <h2 class="text-4xl mt-7 font-extrabold text-orange-500 mb-6 font-lora text-2xl" data-aos="fade-up">Our Esteemed Partners</h2>
    <p class="text-lg text-gray-200 leading-relaxed mb-8 font-audiowide text-lg" data-aos="fade-up" data-aos-delay="100">We are proudly supported by some of the most prestigious tech companies and educational institutions, whose collaboration elevates our mission.</p>

    <div class="overflow-hidden relative">
      <div class="animate-marquee flex items-center gap-12 sponsor-marquee">
        <div class="partner-item flex items-center bg-gray-100 shadow-md p-4 rounded-lg">
          <img src="./logos/1.png" alt="Tech Innovators Inc. Logo" class="w-24 h-24 mr-4">
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
    <div class="mt-10" data-aos="fade-up" data-aos-delay="400">
      <a href="sponsors" class="px-6 py-3 bg-orange-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300" data-aos="fade-up" data-aos-delay="500">Know More</a>
    </div>
  </div>
  
  <!-- Contact Section -->
  <div class="mt-8 relative bottom-0 left-0 right-0 p-8 bg-opacity-90 bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-800 animate-gradient-xy shadow-2xl rounded-t-lg flex flex-col md:flex-row justify-between items-center contact-section space-y-6 md:space-y-0 md:space-x-8">
    <!-- Contact Details -->
    <div class="mt-3 flex flex-col items-center md:items-start w-full md:w-1/2" data-aos="fade-up" data-aos-delay="400">
      <div class="flex items-center space-x-3 mb-4">
        <div class="w-8 h-8 flex justify-center items-center">
          <img src="./image.png" alt="Phone Icon" class="w-8 h-8" />
        </div>
        <span class="text-2xl font-semibold">Contact Us</span>
      </div>
      <p class="text-xl font-medium mb-2">
        <a href="tel:+1234567890" class="hover:underline">9490459963</a>
      </p>
      <p class="text-xl font-medium mb-2">
        <a href="tel:+1234567890" class="hover:underline">9676677116</a>
      </p>

      <h3 class="text-lg font-semibold text-white mb-2">Follow Us on Instagram</h3>

      <div class="flex justify-center mt-4">
        <a href="https://www.instagram.com/ekshetra_3.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="hover:scale-110 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class ="w-8 h-8 text-white">
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
</section>
<div class="max-h-[100vh]">
  <a href="/gallery">
    <div
      class="fixed bottom-6 z-50 bg-white hover:bg-opacity-50 p-2 lg:p-4 text-center rounded-full flex justify-center right-6"
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
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  </a>
</div>


<footer class="bg-gray-800 text-white py-4">
  <div class="container mx-auto text-center">
    <p>Made with 🩷 by <a href="https://konkorde.org" class="text-blue-500 hover:underline">KONKORDE</a></p>
  </div>
</footer>

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



  .button-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-button {
    margin: 0.5rem;
  }

  @media (max-width: 768px) {
    .button-container {
      flex-direction: column;
      align-items: center;
    }

    .cta-button {
      width: 100%;
      max-width: 200px;
    }
  }

  @keyframes gradient-xy {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .animate-gradient-xy {
    background-size: 200% 200%;
    animation: gradient-xy 6s ease infinite;
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
 .premium-heading {
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-top: 1rem;
    color: #333; /* Customize color if needed */
  }

  .marquee-container {
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    background-color: white; /* White background */
    padding: 1rem 0;
  }

  /* Full width on small screens, centered half-width on large screens */
  @media (min-width: 1024px) {
    .marquee-container {
      width: 50vw; /* Half of screen width */
      margin: 0 auto; /* Centering */
    }
  }

  .marquee-content {
    display: flex;
    gap: 2rem;
    width: max-content; /* Ensures smooth repeat */
    animation: marquee 30s linear infinite; /* Slowed down speed from 10s to 30s */
  }

  @keyframes marquee {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }

  /* Pause animation on hover */
  .marquee-container:hover .marquee-content {
    animation-play-state: paused;
  }

  /* Sponsor images styling */
  .sponsor-img {
    height: 3.5rem;
    width: auto;
    transition: opacity 0.5s ease-in-out;
  }

  @media (min-width: 640px) {
    .sponsor-img {
      height: 5rem;
    }
  }

  @media (min-width: 1024px) {
    .sponsor-img {
      height: 7rem;
    }
  }

  /* Fade effect at the edges of the container */
  .fade-overlay {
    position: absolute;
    top: 0;
    height: 100%;
    width: 15%;
    pointer-events: none;
  }

  .fade-left {
    left: 0;
    background: linear-gradient(to right, rgba(247, 129, 80, 0.8), transparent);
  }

  .fade-right {
    right: 0;
    background: linear-gradient(to left, rgba(240, 92, 127, 0.8), transparent);
  }
</style>