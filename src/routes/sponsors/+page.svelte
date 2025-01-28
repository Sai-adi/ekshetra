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
</script>

<Nav />

<section class="py-20 relative overflow-hidden bg-gradient-to-r from-teal-400 to-blue-600">
  <div class="container mx-auto text-center mt-12">
      <h2 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 mb-12">
          Our Sponsors
      </h2>

      <!-- Sponsors Section -->
      {#each Object.entries(sponsors) as [tier, sponsorList]}
          <div class="mb-16">
              <h3 class="text-4xl font-bold text-white mb-8">{tier.charAt(0).toUpperCase() + tier.slice(1)} Sponsors</h3>
              <div class="flex flex-wrap justify-center gap-10">
                  {#each sponsorList as sponsor}
                      <div class="sponsor-card {tier}" on:click={() => openModal(sponsor)} data-aos="fade-up">
                          <img src ={sponsor.logo} alt={sponsor.name} class="h-20 mx-auto">
                          <p class="mt-4 text-lg font-semibold text-white">{sponsor.name}</p>
                      </div>
                  {/each}
              </div>
          </div>
      {/each}

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
      pointer-events: none;
  }

  @media (max-width: 768px) {
      .sponsor-card {
          width: 200px;
          height: 250px;
      }

      h2 {
          font-size:  3rem;
      }

      h3 {
          font-size: 2rem;
      }
  }

  @media (max-width: 480px) {
      .sponsor-card {
          width: 150px;
          height: 200px;
      }

      h2 {
          font-size: 2.5rem;
      }

      h3 {
          font-size: 1.5rem;
      }
  }

  @font-face {
      font-family: 'Audiowide';
      src: url('./assets/fonts/Audiowide-Regular.ttf') format('truetype');
      font-weight: 400;
      font-style: normal;
  }

  body {
      font-family: 'Audiowide';
  }

  h1, h2, h3 {
      font-family: 'Audiowide';
  }

  p {
      font-family: 'Audiowide';
  }
</style>