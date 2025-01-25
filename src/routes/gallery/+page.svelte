<script>
  import { onMount } from 'svelte';
  import Nav from '../../components/Nav.svelte';
  import gsap from 'gsap';
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  const imageFiles = import.meta.glob('/static/gallery/*');
  let ekshetra2Images = [];

  onMount(async () => {
    ekshetra2Images = await Promise.all(
      Object.keys(imageFiles).map(async (path) => {
        return path.replace('/static', '');
      })
    );

    AOS.init();
    
    gsap.fromTo('.heading', { opacity: 1 }, {
      opacity: 0,
      duration: 2,
      delay: 1,
      onComplete: () => {
        headingVisible = false;
        imagesVisible = true;
      }
    });
  });

  let currentIndex = 0;
  let headingVisible = true;
  let imagesVisible = false;

  const nextImage = () => {
    currentIndex = (currentIndex + 1) % ekshetra2Images.length;
    animateSlider();
  };

  const prevImage = () => {
    currentIndex = (currentIndex - 1 + ekshetra2Images.length) % ekshetra2Images.length;
    animateSlider();
  };

  const animateSlider = () => {
    gsap.to('.slider', {
      x: -currentIndex * 100 + '%',
      duration: 1,
      ease: 'power2.inOut',
    });
  };
</script>

<Nav />

<section class="relative min-h-screen bg-gray-100 text-white">
  {#if headingVisible}
    <div class="absolute inset-0 flex items-center justify-center z-10 heading">
      <h1 class="text-5xl font-extrabold text-center tracking-wide text-gray-800">
        Memories of <span class="text-blue-500">Ekshetra 2.0</span>
      </h1>
    </div>
  {/if}
  
  {#if imagesVisible}
    <div class="relative overflow-hidden">
      <div class="slider flex transition-transform duration-700">
        {#each ekshetra2Images as imagePath}
          <div class="flex-shrink-0 w-full h-screen flex items-center justify-center p-8" data-aos="fade-up">
            <div 
              class="max-w-full max-h-full bg-contain bg-no-repeat bg-center" 
              style="background-image: url('{imagePath}'); width: 80%; height: 80%;" 
            />
          </div>
        {/each}
      </div>
      
      <button class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 p-2 rounded-full" on:click={prevImage}>
        Previous
      </button>
      <button class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 p-2 rounded-full" on:click={nextImage}>
        Next
      </button>
    </div>
  {/if}
</section>

<style>
  .slider > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>