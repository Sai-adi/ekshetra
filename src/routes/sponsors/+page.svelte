<script>
  import { onMount } from 'svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css'; // Import AOS styles
  import Nav from "../nav/+page.svelte";

  let sponsors = {
    diamond: [
      { name: "Diamond Sponsor 1", logo: "diamond-sponsor1-logo.png", website: "https://diamond-sponsor1.com", description: "Diamond Sponsor 1 is a leader in the industry." },
      { name: "Diamond Sponsor 2", logo: "diamond-sponsor2-logo.png", website: "https://diamond-sponsor2.com", description: "Diamond Sponsor 2 provides top-notch services." },
      { name: "Diamond Sponsor 3", logo: "diamond-sponsor3-logo.png", website: "https://diamond-sponsor3.com", description: "Diamond Sponsor 3 is known for innovation." },
    ],
    gold: [
      { name: "Gold Sponsor 1", logo: "gold-sponsor1-logo.png", website: "https://gold-sponsor1.com", description: "Gold Sponsor 1 is known for its quality." },
      { name: "Gold Sponsor 2", logo: "gold-sponsor2-logo.png", website: "https://gold-sponsor2.com", description: "Gold Sponsor 2 excels in customer satisfaction." },
      { name: "Gold Sponsor 3", logo: "gold-sponsor3-logo.png", website: "https://gold-sponsor3.com", description: "Gold Sponsor 3 is recognized for excellence." },
    ],
    silver: [
      { name: "Silver Sponsor 1", logo: "silver-sponsor1-logo.png", website: "https://silver-sponsor1.com", description: "Silver Sponsor 1 offers great value." },
      { name: "Silver Sponsor 2", logo: "silver-sponsor2-logo.png", website: "https://silver-sponsor2.com", description: "Silver Sponsor 2 is a trusted partner." },
      { name: "Silver Sponsor 3", logo: "silver-sponsor3-logo.png", website: "https://silver-sponsor3.com", description: "Silver Sponsor 3 provides reliable services." },
    ],
  };

  let selectedSponsor = null;

  function openModal(sponsor) {
    selectedSponsor = sponsor;
  }

  function closeModal() {
    selectedSponsor = null;
  }

  onMount(() => {
    AOS.init(); // Initialize AOS
  });
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
        <h3 class="text-4xl font-bold text-white mb-8 capitalize">{tier} Sponsors</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {#each sponsorList as sponsor}
            <div class="sponsor-card {tier}" on:click={() => openModal(sponsor)} data-aos="fade-up">
              <img src={sponsor.logo} alt={sponsor.name} class="h-20 mx-auto">
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
</style>
