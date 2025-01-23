<script>
    import { onMount } from 'svelte';
    let isLoading = true;
  
    onMount(() => {
      // Simulate a loading delay
      setTimeout(() => {
        isLoading = false;
      }, 3000); // Adjust the delay as needed
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
      background: linear-gradient(to bottom, #000, #1a1a1a);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease, visibility 0s 0.5s;
    }
  
    /* Show state for loading screen */
    .loading-screen.show {
      opacity: 0.5;
      visibility: visible;
      transition: opacity 0.5s ease;
    }
  
    /* Netflix-style logo animation */
    .netflix-logo {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: bounceIn 1s ease-in-out, fadeOut 2s ease-in-out 2s forwards;
    }
  
    .netflix-logo img {
      width: 400px; /* Adjust the image size */
      height: auto;
      animation: pulse 2s infinite, fadeOut 2s ease-in-out 2s forwards;
      filter: drop-shadow(0px 0px 10px red);
    }
  
    /* Add glowing effect to logos */
    .netflix-logo img:hover {
      filter: drop-shadow(0px 0px 20px #ff0000);
      transform: scale(1.05);
      transition: all 0.3s ease-in-out;
    }
  
    /* Spacing between the logos */
    .netflix-logo .logo-spacing {
      margin-top: 20px; /* Adjust the spacing between the two logos */
      animation: bounce 1.5s infinite ease-in-out;
    }
  
    /* Expand line animation (like Netflix logo effect) */
    .netflix-logo::before,
    .netflix-logo::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      height: 2px;
      background: red;
      transform: translate(-50%, -50%) scaleX(0);
      transform-origin: center;
      animation: expandLine 1s ease-in-out forwards;
    }
  
    .netflix-logo::before {
      animation-delay: 0.5s;
    }
  
    .netflix-logo::after {
      animation-delay: 0.8s;
    }
  
    /* Keyframes for logo zoom-in effect */
    @keyframes zoomIn {
      0% {
        transform: scale(0.5);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  
    /* Keyframes for fade-out effect */
    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  
    /* Keyframes for expand line effect */
    @keyframes expandLine {
      0% {
        transform: translate(-50%, -50%) scaleX(0);
      }
      100% {
        transform: translate(-50%, -50%) scaleX(1);
      }
    }
  
    /* Bounce effect for logos */
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  
    /* Pulse effect for logos */
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
  
    /* Keyframes for bounce-in effect */
    @keyframes bounceIn {
      0% {
        transform: scale(0.5);
        opacity: 0;
      }
      60% {
        transform: scale(1.2);
        opacity: 1;
      }
      100% {
        transform: scale(1);
      }
    }
  </style>
  
  {#if isLoading}
    <div class="loading-screen show">
      <!-- Netflix-style Image Logo -->
      <div class="netflix-logo">
        <!-- First Logo -->
        <img src="/logos/both1.png" alt="Logo 1" />
        
        <!-- Second Logo with spacing -->
        <div class="logo-spacing">
          <img src="/logos/VALIANT WIZADRS w.png" alt="Logo 2" />
        </div>
      </div>
    </div>
  {/if}
  
  {#if !isLoading}
    <slot />
  {/if} 