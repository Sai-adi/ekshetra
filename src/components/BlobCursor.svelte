<script>
  import { onMount } from "svelte";

  let colors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#96CEB4',
    '#FFEEAD',
    '#D4A5A5',
    '#9FA8DA',
    '#FFD93D',
    '#6C5B7B',
    '#F8B195'
  ];

  let currentColorIndex = 0;
  let mainCircle;

  function changeColor() {
    if (mainCircle) {
      currentColorIndex = (currentColorIndex + 1) % colors.length;
      mainCircle.style.backgroundColor = colors[currentColorIndex];
    }
  }

  onMount(() => {
    mainCircle = document.getElementById("mainCircle");
    setInterval(changeColor, 1000);
  });
</script>

<div class="cursor-wrapper">
  <div id="mainCircle" class="cursor main"></div>
  <div id="trailingCircle" class="cursor trailing"></div>
</div>

<style>
  :global(body) {
    cursor: none;
  }

  .cursor-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
  }

  .cursor {
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.2s ease-out, opacity 0.2s ease-out; /* Smoother transitions */
  }

  .main {
    width: 20px; /* Larger size */
    height: 20px; /* Larger size */
    background: ivory;
    z-index: 99999;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* Smooth scaling */
  }

  .trailing {
    width: 40px; /* Larger size */
    height: 40px; /* Larger size */
    border: 3px solid ivory; /* Thicker border */
    background: transparent;
    z-index: 99998;
    transition: transform 0.4s ease-out, opacity 0.4s ease-out; /* Smooth trailing */
    opacity: 0.5; /* Add subtle fading effect */
  }
</style>

<svelte:window
  on:mousemove={(e) => {
    const mainCircle = document.getElementById("mainCircle");

    if (mainCircle) {
      mainCircle.style.left = e.clientX + "px";
      mainCircle.style.top = e.clientY + "px";
      // Scale up the main circle when moving
      mainCircle.style.transform = 'translate(-50%, -50%) scale(2)'; // Adjust scale for larger cursor
      
      // Reset scale after a short delay
      clearTimeout(mainCircle.scaleTimeout);
      mainCircle.scaleTimeout = setTimeout(() => {
        mainCircle.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 300); // Smooth timing
    }

    const trailingCircle = document.getElementById("trailingCircle");

    if (trailingCircle) {
      trailingCircle.style.left = e.clientX + "px";
      trailingCircle.style.top = e.clientY + "px";
      // Add a slight delay for trailing effect
      trailingCircle.style.transform = 'translate(-50%, -50%) scale(1.5)';
    }
  }}
  
  on:touchmove={(e) => {
    const touch = e.touches[0]; // Get the first touch point
    const mainCircle = document.getElementById("mainCircle");

    if (mainCircle) {
      mainCircle.style.left = touch.clientX + "px";
      mainCircle.style.top = touch.clientY + "px";
      mainCircle.style.transform = 'translate(-50%, -50%) scale(2)';
      
      clearTimeout(mainCircle.scaleTimeout);
      mainCircle.scaleTimeout = setTimeout(() => {
        mainCircle.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 300);
    }

    const trailingCircle = document.getElementById("trailingCircle");

    if (trailingCircle) {
      trailingCircle.style.left = touch.clientX + "px";
      trailingCircle.style.top = touch.clientY + "px";
      trailingCircle.style.transform = 'translate(-50%, -50%) scale(1.5)';
    }

    e.preventDefault(); // Prevent default scrolling behavior
  }}
/>
