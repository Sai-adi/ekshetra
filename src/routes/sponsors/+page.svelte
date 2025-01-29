<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import Nav from "../nav/+page.svelte";
    import { writable } from 'svelte/store';
  
    let sponsors = {
        diamond: [
            { name: "Diamond Sponsor 1", logo: "diamond-sponsor1-logo.png", website: "https://diamond-sponsor1.com", description: "Diamond Sponsor 1 is a leader in the industry, providing innovative solutions and exceptional service." },
            { name: "Diamond Sponsor 2", logo: "diamond-sponsor2-logo.png", website: "https://diamond-sponsor2.com", description: "Diamond Sponsor 2 provides top-notch services and has a strong commitment to quality." },
        ],
        gold: [
            { name: "Gold Sponsor 1", logo: "gold-sponsor1-logo.png", website: "https://gold-sponsor1.com", description: "Gold Sponsor 1 is known for its quality and customer satisfaction." },
            { name: "Gold Sponsor 2", logo: "gold-sponsor2-logo.png", website: "https://gold-sponsor2.com", description: "Gold Sponsor 2 excels in customer satisfaction and offers a wide range of services." },
        ],
        silver: [
            { name: "Silver Sponsor 1", logo: "silver-sponsor1-logo.png", website: "https://silver-sponsor1.com", description: "Silver Sponsor 1 offers great value and has a reputation for reliability." },
            { name: "Silver Sponsor 2", logo: "silver-sponsor2-logo.png", website: "https://silver-sponsor2.com", description: "Silver Sponsor 2 is a trusted partner, providing excellent service and support." },
        ],
    };
  
    let selectedSponsor = writable(null);
  
    function openModal(sponsor) {
        selectedSponsor.set(sponsor);
        gsap.to(".modal", { opacity: 1, scale: 1, duration: 0.3 });
    }
  
    function closeModal() {
        gsap.to(".modal", { opacity: 0, scale: 0.8, duration: 0.3, onComplete: () => selectedSponsor.set(null) });
    }
  
    onMount(() => {
        AOS.init();
    });
  </script>
  
  <Nav />
  
  <section class="py-20 relative overflow-hidden bg-gradient-to-r from-teal-400 to-blue-600">
    <div class="container mx-auto text-center mt-12">
        <h2 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 mb-12">
            Our Sponsors
        </h2>
  
        {#each Object.entries(sponsors) as [tier, sponsorList]}
            <div class="mb-16">
                <h3 class="text-4xl font-bold text-white mb-8">{tier.charAt(0).toUpperCase() + tier.slice(1)} Sponsors</h3>
                <div class="flex flex-wrap justify-center gap-10">
                    {#each sponsorList as sponsor}
                        <div class="sponsor-card {tier}" on:click={() => openModal(sponsor)} data-aos="fade-up">
                            <img src={sponsor.logo} alt={sponsor.name} class="h-20 mx-auto">
                            <p class="mt-4 text-lg font-semibold text-white">{sponsor.name}</p>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
  
        {#if $selectedSponsor}
            <div class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div class="bg-white rounded-lg p-6 max-w-md w-full shadow-lg text-center">
                    <h3 class="text-2xl font-bold mb-4 text-gray-800">{$selectedSponsor.name}</h3>
                    <p class="mb-4 text-gray-700">{$selectedSponsor.description}</p>
                    <a href="{$selectedSponsor.website}" target="_blank" class="block bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition">
                        Visit Website
                    </a>
                    <button on:click={closeModal} class="mt-6 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition">Close</button>
                </div>
            </div>
        {/if}
    </div>
  </section>
  
  <style>
    .sponsor-card {
        position: relative;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        border-radius: 1rem;
        cursor: pointer;
        width: 220px;
        height: 280px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .sponsor-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
    }
  
    .diamond {
        background-color: rgba(255, 215, 0, 0.15);
        border: 2px solid #FFD700;
    }
  
    .gold {
        background-color: rgba(255, 223, 186, 0.15);
        border: 2px solid #FFA500;
    }
  
    .silver {
        background-color: rgba(192, 192, 192, 0.15);
        border: 2px solid #C0C0C0;
    }
  
    .modal {
        display: flex;
        animation: fadeIn 0.3s ease-in-out;
    }
  
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
  
    @media (max-width: 768px) {
        .sponsor-card {
            width: 180px;
            height: 240px;
        }
        h2 { font-size: 3rem; }
        h3 { font-size: 2rem; }
    }
  
    @media (max-width: 480px) {
        .sponsor-card {
            width: 150px;
            height: 200px;
        }
        h2 { font-size: 2.5rem; }
        h3 { font-size: 1.5rem; }
    }
  
    @font-face {
        font-family: 'Audiowide';
        src: url('./assets/fonts/Audiowide-Regular.ttf') format('truetype');
    }
  
    body, h1, h2, h3, p {
        font-family: 'Audiowide', cursive;
    }
  </style>
  