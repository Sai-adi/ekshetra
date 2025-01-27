<script>
  import { onMount } from 'svelte';
  let isLoading = true;
  let videoElement;
  let fadeOutTimeout;

  onMount(() => {
    // Simulate a loading delay
    setTimeout(() => {
      isLoading = false;
    }, 4900); // Adjust the delay as needed
  });

  // Function to set the video start time and handle the fade-out
  const setVideoStartTime = () => {
    if (videoElement) {
      videoElement.currentTime = 25; // Set video to start at 25 seconds
      videoElement.play(); // Ensure the video starts playing

      // After 14 seconds of video play, start the fade-out effect
      fadeOutTimeout = setTimeout(() => {
        isLoading = false; // Hide the loading screen after 14 seconds
      }, 14000); // 14 seconds fade-out delay
    }
  };

  // Reactive variable to determine the device type
  let isMobile = false;

  // Check if the device is mobile
  const checkDeviceType = () => {
    isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
  };

  onMount(() => {
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  });
</script>

<style>
  /* Fullscreen loading container */
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000; /* Fallback background while video loads */
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    visibility: visible;
    transition: opacity 1s ease-out, visibility 0s 1s; /* Fade-out transition */
  }

  /* Full-Screen Video Styling */
  .loading-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto; /* Maintain aspect ratio */
    max-height: 100%; /* Prevent overflow */
    object-fit: cover; /* Ensures video fully covers the screen */
  }

  /* Fade-out effect for the loading screen */
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; visibility: hidden; }
  }

  /* Adjust the animation for fading out after certain time */
  .loading-screen.fade-out {
    opacity: 0;
    visibility: hidden;
  }
</style>

<!-- Loading Screen -->
{#if isLoading}
<div class="loading-screen show">
    <!-- Full-Screen Video -->
    <video
      class="loading-video"
      autoplay
      muted
      loop
      playsinline
      bind:this={videoElement}
      on:loadedmetadata={setVideoStartTime}
    >
      {#if isMobile}
        <source src="./show8.mp4" type="video/mp4" />
      {:else}
        <source src="./vedio2.mp4" type="video/mp4" />
      {/if}
      Your browser does not support the video tag.
    </video>
</div>
{/if}

<!-- Main Content -->
{#if !isLoading}
<slot />
{/if}
