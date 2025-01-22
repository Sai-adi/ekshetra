<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import AOS from "aos";
  import "aos/dist/aos.css"; // Ensure AOS styles are imported
  import Nav from "../nav/+page.svelte";

  let committees = [
    { name: "Organizing Committee", head: "John Doe", mobile: "9876543210" },
    { name: "Technical Committee", head: "Jane Smith", mobile: "9123456789" },
    { name: "Hospitality Committee", head: "Michael Lee", mobile: "9876512340" },
    { name: "Logistics Committee", head: "Sarah Kim", mobile: "9123467890" },
    { name: "Sponsorship Committee", head: "David Brown", mobile: "9876523410" },
    { name: "Creative Committee", head: "Emma Wilson", mobile: "9123498760" },
  ];

  onMount(() => {
    AOS.init({ duration: 1200, offset: 100, easing: "ease-in-out" });
    gsap.from(".card", { opacity: 0, scale: 0.9, duration: 0.8, stagger: 0.2 });
    console.log("Committees Data:", committees);
  });
</script>

<style>
  .royal-border {
    border: 2px solid transparent;
    background: linear-gradient(white, white) padding-box,
      linear-gradient(90deg, #ffd700, #f9a825) border-box;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .card {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
    padding: 1.5rem; /* Increased padding for better spacing */
    max-width: 100%; /* Ensure cards do not overflow */
  }

  .card:hover {
    transform: translateY(-5px) scale(1.02); /* Added scale effect */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }

  .card h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #ffd700; /* Gold color for headings */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Text shadow for better readability */
  }

  .card p {
    margin: 0.25rem 0;
    color: #e0e0e0; /* Light gray for paragraph text */
  }

  .card p span {
    color: #ffd700; /* Gold color for labels */
  }

  .bg-gradient {
    background: linear-gradient(135deg, #1f2937, #374151);
  }


  /* New card background colors */
  .bg-royal-blue {
    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  }

  .bg-royal-purple {
    background: linear-gradient(135deg, #6b21a8, #9333ea);
  }

  .bg-royal-green {
    background: linear-gradient(135deg, #065f46, #10b981);
  }

  .bg-royal-red {
    background: linear-gradient(135deg, #991b1b, #ef4444);
  }

  /* Background shapes */
  .background-shape {
    position: absolute;
    z-index: 0;
    opacity: 0.1;
  }

  .shape-circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(255, 215, 0, 0.2); /* Light gold */
  }

  .shape-triangle {
    width: 0;
    height: 0;
    border-left: 75px solid transparent;
    border-right : 75px solid transparent;
    border-bottom: 130px solid rgba(255, 215, 0, 0.2); /* Light gold */
  }

  /* Adjusting the section to avoid overlap with the nav */
  section {
    padding-top: 120px; /* Adjust this value based on your nav height */
  }

  /* Reduce space between heading and cards in mobile view */
  @media (max-width: 640px) {
    .text-center h1 {
      margin-bottom: 0.5rem; /* Reduced margin for heading */
    }

    .text-center p {
      margin-bottom: 0.5rem; /* Reduced margin for paragraph */
    }
  }

  /* Responsive grid adjustments */
  @media (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr; /* Single column on small screens */
    }
  }

  @media (min-width: 640px) and (max-width: 1024px) {
    .grid {
      grid-template-columns: repeat(2, 1fr); /* Two columns on medium screens */
    }
  }

  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: repeat(3, 1fr); /* Three columns on large screens */
    }
  }
  /* Reduce space between heading and cards in mobile view */
@media (max-width: 640px) {
  .text-center h1 {
    margin-bottom: 0.5rem; /* Reduced margin for heading */
  }

  .text-center p {
    margin-bottom: 0.25rem; /* Reduced margin for paragraph */
  }
}
.text-center {
    margin-bottom: 1rem; /* Reduced bottom margin of the content div */
  }

  .grid-container {
    padding-top: 0.5rem; /* Reduced top padding for the cards container */
  }
  
</style>
<Nav />
<section class="min-h-screen bg-gradient text-white py-10">
  <div class="text-center">
    <h1 class="text-4xl font-bold text-gray-200">Contact Us</h1>
    <p class="text-lg mt-2 text-gray-400">Reach out to our committees for any queries or support.</p>
  </div>

  <div class="relative grid-container">
    <div class="background-shape shape-circle top-0 left-0"></div>
    <div class="background-shape shape-triangle bottom-0 right-0"></div>

    <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-5">
      {#each committees as committee, i}
        <div class="card royal-border p-6 bg-gray-800 shadow-lg bg-royal-{i % 4 === 0 ? 'blue' : i % 4 === 1 ? 'purple' : i % 4 === 2 ? 'green' : 'red'}" data-aos="fade-up" data-aos-delay="{i * 100}">
          <h2 class="text-xl font-semibold">{committee.name}</h2>
          <p class="mt-2">
            <span>Head:</span> {committee.head}
          </p>
          <p class="mt-1">
            <span>Mobile:</span> {committee.mobile}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>  