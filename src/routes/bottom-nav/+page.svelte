<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  let mapRef;

  onMount(() => {
    gsap.set(mapRef, { scale: 1 });

    // Map hover animations
    mapRef.addEventListener("mouseenter", () => {
      gsap.to(mapRef, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    });

    mapRef.addEventListener("mouseleave", () => {
      gsap.to(mapRef, { scale: 1, duration: 0.3, ease: "power2.out" });
    });

    // Load animations
    gsap.from(".contact-section", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });
  });
</script>

<div class="fixed bottom-0 left-0 right-0 p-8 bg-opacity-90 bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-800 animate-gradient-xy shadow-2xl rounded-t-lg flex flex-col md:flex-row justify-between items-center contact-section space-y-6 md:space-y-0 md:space-x-8">
  <!-- Contact Details -->
  <div class="flex flex-col items-center md:items-start w-full md:w-1/2">
    <div class="flex items-center space-x-3 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l1.06-1.06a1 1 0 011.415 0L7 11m0 0l2.828-2.828a1 1 0 011.414 0L13 11m-6 0v7a4 4 0 004 4h0a4 4 0 004-4v-7m-6 7H5m12-7v2m0-2h-2m2 0a2 2 0 012 2v3a2 2 0 01-2 2m-4 0h2m2-10a2 2 0 00-2-2h-4a2 2 0 00-2 2v3m8 0h-6m-2-3a2 2 0 012-2m0 0a2 2 0 01-2 2" />
      </svg>
      <span class="text-2xl font-semibold">Contact Us</span>
    </div>
    <p class="text-xl font-medium mb-2">+1 (234) 567-890</p>
    <p class="text-lg text-gray-400 mb-4">info@college.edu</p>
  </div>

  <!-- Google Map Embed -->
  <div class="w-full md:w-1/2 mt-4 md:mt-0">
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

<style>
  /* Animated Gradient Background */
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
</style>
