<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  const galleryImages = [
  { src: '/gallery/IMG-20250109-WA0010.jpg', alt: 'Photo 1', caption: 'Event Kickoff' },
  { src: '/gallery/I', alt: 'Photo 2', caption: 'Cultural Event' },
  { src: '/gallery/photo3.jpg', alt: 'Photo 3', caption: 'Competitions' },
  { src: '/gallery/photo4.jpg', alt: 'Photo 4', caption: 'Prize Distribution' },
  { src: '/gallery/photo5.jpg', alt: 'Photo 5', caption: 'Workshops' },
  { src: '/gallery/photo6.jpg', alt: 'Photo 6', caption: 'Closing Ceremony' },
];


  let selectedImage = null;
  let isModalOpen = false;

  const openModal = (image) => {
    selectedImage = image;
    isModalOpen = true;
  };

  const closeModal = () => {
    isModalOpen = false;
    selectedImage = null;
  };

  onMount(() => {
    gsap.from('.gallery-item', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });
  });
</script>

<section class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4 py-10">
  <h1 class="text-center text-5xl font-extrabold mb-12 tracking-wide">
    EKSHETRA 3.0 <span class="text-blue-500">Gallery</span>
  </h1>

  <!-- Grid Layout -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each galleryImages as image}
      <div
        class="gallery-item relative group cursor-pointer overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        on:click={() => openModal(image)}
      >
        <!-- Image -->
        <img
          src={image.src}
          alt={image.alt}
          class="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110"
        />
        <!-- Caption Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4"
        >
          <p class="text-lg font-semibold text-white">{image.caption}</p>
        </div>
      </div>
    {/each}
  </div>

  <!-- Modal for Full-Size Image -->
  {#if isModalOpen}
    <div class="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <div
        class="relative animate-modalOpen"
        style="animation: zoomIn 0.4s ease-out;"
      >
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          class="max-w-full max-h-[90vh] rounded-lg shadow-xl"
        />
        <button
          on:click={closeModal}
          class="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-400"
        >
          ✕
        </button>
      </div>
    </div>
  {/if}
</section>

<style>
  /* Modal Zoom-In Animation */
  @keyframes zoomIn {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
