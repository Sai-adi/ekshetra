<script>

    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import AOS from 'aos';
    import 'aos/dist/aos.css'; // Import AOS styles
    import Nav from "../nav/+page.svelte";
    let sponsors = {
      diamond: [
        {
          name: "Diamond Sponsor 1",
          logo: "diamond-sponsor1-logo.png",
          website: "https://diamond-sponsor1.com",
          description: "Diamond Sponsor 1 is a leader in the industry, providing innovative solutions and exceptional service."
        },
        {
          name: "Diamond Sponsor 2",
          logo: "diamond-sponsor2-logo.png",
          website: "https://diamond-sponsor2.com",
          description: "Diamond Sponsor 2 provides top-notch services and has a strong commitment to quality."
        },
        {
          name: "Diamond Sponsor 1",
          logo: "diamond-sponsor1-logo.png",
          website: "https://diamond-sponsor1.com",
          description: "Diamond Sponsor 1 is a leader in the industry, providing innovative solutions and exceptional service."
        },
      ],
      gold: [
        {
          name: "Gold Sponsor 1",
          logo: "gold-sponsor1-logo.png",
          website: "https://gold-sponsor1.com",
          description: "Gold Sponsor 1 is known for its quality and customer satisfaction."
        },
        {
          name: "Gold Sponsor 2",
          logo: "gold-sponsor2-logo.png",
          website: "https://gold-sponsor2.com",
          description: "Gold Sponsor 2 excels in customer satisfaction and offers a wide range of services."
        },
        {
          name: "Gold Sponsor 2",
          logo: "gold-sponsor2-logo.png",
          website: "https://gold-sponsor2.com",
          description: "Gold Sponsor 2 excels in customer satisfaction and offers a wide range of services."
        },
      ],
      silver: [
        {
          name: "Silver Sponsor 1",
          logo: "silver-sponsor1-logo.png",
          website: "https://silver-sponsor1.com",
          description: "Silver Sponsor 1 offers great value and has a reputation for reliability."
        },
        {
          name: "Silver Sponsor 2",
          logo: "silver-sponsor2-logo.png",
          website: "https://silver-sponsor2.com",
          description: "Silver Sponsor 2 is a trusted partner, providing excellent service and support."
        },
        {
          name: "Silver Sponsor 2",
          logo: "silver-sponsor2-logo.png",
          website: "https://silver-sponsor2.com",
          description: "Silver Sponsor 2 is a trusted partner, providing excellent service and support."
        },
      ],
    };
  
    let selectedSponsor = null;
  
    function openModal(sponsor) {
      selectedSponsor = sponsor;
      gsap.fromTo(".modal", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5 });
    }
  
    function closeModal() {
      gsap.fromTo(".modal", { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.8, duration: 0.5, onComplete: () => selectedSponsor = null });
    }
  
    onMount(() => {
      AOS.init(); // Initialize AOS
      animateShapes();
    });
  
    function animateShapes() {
      const shapes = document.querySelectorAll('.shape');
      shapes.forEach((shape) => {
        gsap.to(shape, {
          y: -100,
          duration: Math.random() * 3 + 2, // Random duration between 2 and 5 seconds
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      });
    }

<Nav />

<section class="py-20 relative overflow-hidden bg-gradient-to-r from-teal-400 to-blue-600">
  <div class="container mx-auto text-center mt-12">
    <h2 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 mb-12">
      Our Sponsors
    </h2>

    <!-- Sponsors Section -->
    {#each Object.entries(sponsors) as [tier, sponsorList]}
  <Nav />
  <section class="pt-14 py-18 relative overflow-hidden bg-gradient-to-r from-teal-400 to-blue-600">
    <div class="container mx-auto text-center mt-14">
      <h2 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 mb-12">
        Our Sponsors
      </h2>
  

      <!-- Diamond Sponsors Section -->
      <div class="mb-16">
        <h3 class="text-4xl font-bold text-white mb-8">Diamond Sponsors</h3>
        <div class="flex flex-wrap justify-center gap-10">
          {#each sponsors.diamond as sponsor}
            <div class="sponsor-card diamond" on:click={() => openModal(sponsor)} data-aos="fade-up">
              <img src={sponsor.logo} alt={sponsor.name} class="h-20 mx-auto">
              <p class="mt-4 text-lg font-semibold text-white">{sponsor.name}</p>
            </div>
          {/each}
        </div>
      </div>
  
      <!-- Gold Sponsors Section -->
      <div class="mb-16">
        <h3 class="text-4xl font-bold text-white mb-8">Gold Sponsors</h3>
        <div class="flex flex-wrap justify-center gap-10">
          {#each sponsors.gold as sponsor}
            <div class="sponsor-card gold" on:click={() => openModal(sponsor)} data-aos="fade-up">
              <img src={sponsor.logo} alt={sponsor.name} class="h-20 mx-auto">
              <p class="mt-4 text-lg font-semibold text-white">{sponsor.name}</p>
            </div>
          {/each}
        </div>
      </div>

    {/if}
  </div>
</section>

<style>
  /* Sponsor Card Styling */
  .sponsor-card {
    position: relative;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    cursor: pointer;
    width: 100%;
    height: 300px;
  }

  .diamond {
    background-color: rgba(255, 215, 0, 0.1);
    border: 2px solid #FFD700;
  }

  .gold {
    background-color: rgba(255, 223, 186, 0.1);
    border: 2px solid #FFA500;
  }

  .silver {
    background-color: rgba(192, 192, 192, 0.1);
    border: 2px solid #C0C0C0;
  }

  .modal {
    display: flex;
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;

      <!-- Silver Sponsors Section -->
      <div class="mb-16">
        <h3 class="text-4xl font-bold text-white mb-8">Silver Sponsors</h3>
        <div class="flex flex-wrap justify-center gap-10">
          {#each sponsors.silver as sponsor}
            <div class="sponsor-card silver" on:click={() => openModal(sponsor)} data-aos="fade-up">
              <img src={sponsor.logo} alt={sponsor.name} class="h-20 mx-auto">
              <p class="mt-4 text-lg font-semibold text-white">{sponsor.name}</p>
            </div>
          {/each}
        </div>
      </div>
  
      {#if selectedSponsor}
        <div class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div class="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 class="text-2xl font-bold mb-4">{selectedSponsor.name}</h3>
            <p class="mb-4">{selectedSponsor.description}</p>
            <a href={selectedSponsor.website} target="_blank" class="text-blue-500 underline">Visit Website</a>
            <button on:click={closeModal} class="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
          </div>
        </div>
      {/if}
    </div>
  
    <!-- Background Shapes -->
    <div class="absolute inset-0 z-0">
      <div class="shape" style="position: absolute; left: 5%; top: 10%; width: 80px; height: 80px; border-radius: 50%; background: rgba(255, 255, 255, 0.2);"></div>
      <div class="shape" style="position: absolute; left: 20%; top: 30%; width: 100px; height: 100px; border-radius: 50%; background: rgba(255, 255, 255, 0.2);"></div>
      <div class="shape" style="position: absolute; left: 40%; top: 20%; width: 60px; height: 60px; border-radius: 50%; background: rgba(255, 255, 255, 0.2);"></div>
      <div class="shape" style="position: absolute; left: 60%; top: 50%; width: 90px; height: 90px; border-radius: 50%; background: rgba(255, 255, 255, 0.2);"></div>
      <div class="shape" style="position: absolute; left: 80%; top: 40%; width: 70px; height: 70px; border-radius: 50%; background: rgba(255, 255, 255, 0.2);"></div>
      <div class="shape" style="position: absolute; left: 15%; top: 70%; width: 120px; height: 120px; border-radius: 50%; background: rgba(255, 255, 255, 0.2);"></div>
      <div class="shape" style="position: absolute; left: 75%; top: 80%; width: 110px; height: 110px; border-radius: 50%; background: rgba(255, 255, 255, 0.2);"></div>
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
  <footer class="bg-gray-800 text-white py-4">
  <div class="container mx-auto text-center" >
    <p>Made with 🩷 by <a href="https://konkorde.org" class="text-blue-500 hover:underline">KONKORDE</a></p>
  </div>
</footer>

  </section>
  
  <style>
    .sponsor-card {
      position: relative;
      overflow: hidden;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      border-radius: 1rem; /* Rounded corners */
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: pointer;
      width: 250px; /* Fixed width for uniformity */
      height: 300px; /* Fixed height for uniformity */
    }
  
    .sponsor-card:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }
  
    /* Diamond Sponsors */
    .diamond {
      background-color: rgba(255, 215, 0, 0.1); /* Light gold background */
      border: 2px solid #FFD 700; /* Gold border */
    }
  
    /* Gold Sponsors */
    .gold {
      background-color: rgba(255, 223, 186, 0.1); /* Light orange background */
      border: 2px solid #FFA500; /* Orange border */
    }
  
    /* Silver Sponsors */
    .silver {
      background-color: rgba(192, 192, 192, 0.1); /* Light gray background */
      border: 2px solid #C0C0C0; /* Silver border */
    }
  
    .modal {
      display: flex;
      animation: fadeIn 0.3s ease-in-out;
    }
  
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  
    /* Background shapes */
    .shape {
      position: absolute;
      border-radius: 50%;
      opacity: 0.5;
      pointer-events: none; /* Prevent interaction with shapes */
    }
  
    @media (max-width: 768px) {
      .sponsor-card {
        width: 200px; /* Adjust width for smaller screens */
        height: 250px; /* Adjust height for smaller screens */
      }
  
      h2 {
        font-size: 3rem; /* Smaller font size for headings */
      }
  
      h3 {
        font-size: 2rem; /* Smaller font size for subheadings */
      }
    }
  
    @media (max-width: 480px) {
      .sponsor-card {
        width: 150px; /* Further adjust width for mobile */
        height: 200px; /* Further adjust height for mobile */
      }
  
      h2 {
        font-size: 2.5rem; /* Even smaller font size for mobile */
      }
  
      h3 {
        font-size: 1.5rem; /* Even smaller font size for mobile */
      }
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
  </style>