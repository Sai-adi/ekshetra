<script>
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import Nav from "../nav/+page.svelte";
  import gsap from "gsap";

  const events = [
    { 
      flyer: "/flyers/1.png",
      rules: [
        "Paper Presentation Proceedings 20th Afternoon Post Lunch Central seminar hall,BITS VIZAG",
        "Maximum team size: 2 members",
        "Time limit: 5 minutes presentation + 2 minutes Q&A",
        "Topic: Must be related to computer science & its verticals.",
        "Registration: Click the Register button and complete the payment for confirmation.",
        "BITS Vizag Participants: Preliminary round on February 15th; shortlisted candidates' round on February 21st.",
        "Other Colleges: Both rounds scheduled for February 21st.",
        "Note: Event timings may change based on the program schedule."
      ],
      coordinators: [
        { name: "Pavithra", phone: "6304605203" },
        { name: "Madhu Kumar", phone: "9912636840" }
      ],
      prize: "₹7,500"
    },
    { 
      flyer: "/flyers/2.png",
      rules: [
        "Poster Presentation Proceedings 21st Morning Central seminar hall,BITS VIZAG",
        "Maximum team size: 2 members",
        "Topic: Must be related to computer science & its verticals.",
        "Dress Code: Formal attire is mandatory.",
        "A preliminary round will be conducted in the same week for the students of BITS-VIZAG. Shortlisted teams will present in the final round, scheduled for February 20th or 21st.",
        "Registration: Click the Register button and complete the payment for confirmation."
      ],
      coordinators: [
        { name: "Manasa", phone: "8143260433" },
        { name: "Sravani", phone: "7989230095" }
      ],
      prize: "₹7,500"
    },
    { 
      flyer: "/flyers/4.png",
      rules: [
        "Blind Coding Proceedings 21st Afternoon Post Lunch Central seminar hall,BITS VIZAG",
        "Individual participation only",
        "Topic: Must be related to C programming or Python.",
        "Time Limit: 30 mins",
        "Dress Code: Formal attire is mandatory.",
        "A preliminary round will be conducted in the same week. Shortlisted teams will present in the final round, scheduled for February 20th or 21st.",
        "Registration: Click the Register button and complete the payment for confirmation.",
        "Note: Event timings may change based on the program schedule."
      ],
      coordinators: [
        { name: "Girish Prasad", phone: "9951941294" },
        { name: "Pradeep", phone: "8639500480" }
      ],
      prize: "₹7,500"
    },
    { 
      flyer: "/flyers/3.png",
      rules: [
        "Quiz Proceedings 22nd Morning Central seminar hall,BITS VIZAG",
        "Team size: 2 members",
        "Topic: Will be related to Computer Science.",
        "Screen online exam and finals.",
        "No electronic devices allowed.",
        "Registration: Scan the QR code & complete payment for confirmation.",
        "Dress Code: Formal attire is mandatory.",
        "Note: Event timings may change based on the program schedule."
      ],
      coordinators: [
        { name: "Karthik", phone: "7997578230" },
        { name: "Sumedha", phone: "9441478393" }
      ],
      prize: "₹7,500"
    },
    { 
      flyer: "/flyers/5.png",
      rules: [
        "14th February 2025, 10:00 AM - 4:00 PM Central Seminar Hall at BITS Vizag",
        "Registration closes at 13/02/2025 11:59 PM",
        "No Gloo Wall Break",
        "No Chips Upgrade",
        "No Heights/Rooftops",
        "No Hacks",
        "No PC Allowed",
        "No Character Skills",
        "No Gun Attributes",
        "Connection Issues = Your Responsibility",
        "Match Objective: Win 6 Rounds to Victory!",
        "Allowed Weapons: Desert Eagle, UMP, MP40, M1014, M1887, AK47, Woodpecker",
        "Follow the rules, battle smart & claim glory!"
      ],
      coordinators: [
        { name: "K.Aditya", phone: "8317511173" },
        { name: "P.Praveen", phone: "9866696178" }
      ],
      prize: "₹7,500"
    }
];


  let selectedEvent = null;
  let isDialogOpen = false;

  function openDialog(event) {
    selectedEvent = event;
    isDialogOpen = true;
    gsap.from(".dialog-content", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.out"
    });
  }

  function closeDialog() {
    gsap.to(".dialog-content", {
      opacity: 0,
      y: 20,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        isDialogOpen = false;
        selectedEvent = null;
      }
    });
  }

  function handleKeydown(event) {
    if (event.key === 'Escape' && isDialogOpen) {
      closeDialog();
    }
  }

  onMount(() => {
    AOS.init({
      duration: 1000,
      easing: 'cubic-bezier(0.5, 0, 0.75, 1)',
      once: false,
      mirror: true
    });

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

    gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero-tagline", { opacity: 0, y: 20, duration: 1, delay: 0.5 });
    gsap.from(".hero-date", { opacity: 0, y: 20, duration: 1, delay: 1 });
    gsap.from("#countdown", { opacity: 0, scale: 0.5, duration: 1, delay: 1.5 });
    gsap.from(".cta-button", { opacity: 0, scale: 0.5, duration: 1, stagger: 0.2, delay: 1.5 });

    gsap.from(".contact-section", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });
  });
</script>

<svelte:window on:keydown={handleKeydown}/>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

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
              src={event.flyer} 
              alt={event.name} 
              class="w-full h-[500px] filter brightness-75 hover:brightness-100 transition-all duration-200"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
          </div>
          
          <div class="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h2 class="text-3xl font-bold mb-4 text-[#f8f9fa]">{event.name}</h2>
            <p class="text-xl text-gray-300 mb-6">{event.description}</p>
            <button 
              class="royal-button px-8 py-4 bg-gradient-to-r from-[#6a5acd] to-[#483d8b] text-white rounded-full font-bold uppercase tracking-wider transform hover:scale-105 transition-all duration-200 shadow-royal-button"
              on:click={() => openDialog(event)}
            >
              Know More
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- Dialog Component -->
{#if isDialogOpen}
  <div class=" mt-28 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div 
      class="dialog-content bg-gradient-to-br from-[#1A2980] to-[#26D0CE] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
      on:click|stopPropagation
    >
      <button 
        class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        on:click={closeDialog}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="p-8">
        <h2 class="text-4xl font-bold text-white mb-6">{selectedEvent.name}</h2>
        
        <div class="mb-8 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <h3 class="text-2xl font-bold text-white mb-2">Prize Pool</h3>
          <p class="text-3xl font-bold text-yellow-300">{selectedEvent.prize}</p>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-bold text-white mb-4">Rules & Guidelines</h3>
          <ul class="space-y-3">
            {#each selectedEvent.rules as rule}
              <li class="flex items-start space-x-2 text-white/90">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 min-w-6 mt-0.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                </svg>
                <span>{rule}</span>
              </li>
            {/each}
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-white mb-4">Event Coordinators</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {#each selectedEvent.coordinators as coordinator}
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <p class="text-lg font-semibold text-white">{coordinator.name}</p>
                <a 
                  href="tel:{coordinator.phone}" 
                  class="text-blue-300 hover:text-blue-400 transition-colors flex items-center space-x-2 mt-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{coordinator.phone}</span>
                </a>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

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
        <a href="tel:9490459963" class="hover:underline">9490459963</a>
      </p>
      <p class="text-xl font-medium mb-2">
        <a href="tel:+9676677116" class="hover:underline">9676677116</a>
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

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  :global(body) {
    font-family: 'Poppins', sans-serif;
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

  .dialog-content {
    transform: translateY(0);
    transition: transform 0.3s ease-out;
  }

  .dialog-content::-webkit-scrollbar {
    width: 8px;
  }

  .dialog-content::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  .dialog-content::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  .dialog-content::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  .royal-button {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .royal-button:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  .shadow-royal {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  /* Additional animations */
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

  .animate-gradient-xy {
    background-size: 400% 400%;
    animation: gradient-xy 15s ease infinite;
  }

  @keyframes gradient-xy {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
</style>