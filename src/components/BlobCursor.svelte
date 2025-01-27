<script>
  import { onMount } from "svelte";

  let mainCircle;
  let trailingCircle;
  let mouseX = 0, mouseY = 0; // Mouse position
  let trailingX = 0, trailingY = 0; // Trailing circle position

  // Smooth animation loop for the trailing circle
  function animate() {
    const ease = 0.1; // Adjust smoothness (lower = smoother)
    trailingX += (mouseX - trailingX) * ease;
    trailingY += (mouseY - trailingY) * ease;

    if (trailingCircle) {
      trailingCircle.style.left = `${trailingX}px`;
      trailingCircle.style.top = `${trailingY}px`;
    }
    requestAnimationFrame(animate);
  }

  onMount(() => {
    mainCircle = document.getElementById("mainCircle");
    trailingCircle = document.getElementById("trailingCircle");
    animate(); // Start the trailing animation loop
  });
</script>

<div class="cursor-wrapper">
  <div id="mainCircle" class="cursor main"></div>
  <div id="trailingCircle" class="cursor trailing"></div>
</div>

<style>
  :global(body) {
    cursor: none; /* Hide default cursor */
    margin: 0;
    padding: 0;
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
    transition: transform 0.1s ease-out;
  }

  .main {
    width: 10px;
    height: 10px;
    background: white; /* Main circle color changed to white */
    z-index: 99999;
  }

  .trailing {
    width: 30px;
    height: 30px;
    border: 2px solid white; /* Trailing circle border color changed to white */
    background: transparent;
    z-index: 99998;
    opacity: 0.8;
    transition: transform 0.2s ease-out, opacity 0.3s; /* Smooth trailing */
  }

  /* Responsive styling */
  @media (max-width: 768px) {
    .main {
      width: 8px;
      height: 8px;
    }

    .trailing {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 480px) {
    .main {
      width: 6px;
      height: 6px;
    }

    .trailing {
      width: 20px;
      height: 20px;
    }
  }
</style>

<svelte:window
  on:mousemove={(e) => {
    // Update mouse position
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Move the main circle directly
    if (mainCircle) {
      mainCircle.style.left = `${mouseX}px`;
      mainCircle.style.top = `${mouseY}px`;
      // Add a scaling effect when moving
      mainCircle.style.transform = 'translate(-50%, -50%) scale(1.5)';
      
      clearTimeout(mainCircle.scaleTimeout);
      mainCircle.scaleTimeout = setTimeout(() => {
        mainCircle.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 100);
    }
  }}
  on:touchmove={(e) => {
    // Handle touch events for mobile
    const touch = e.touches[0];
    mouseX = touch.clientX;
    mouseY = touch.clientY;

    // Move the main circle directly
    if (mainCircle) {
      mainCircle.style.left = `${mouseX}px`;
      mainCircle.style.top = `${mouseY}px`;
      // Add a scaling effect when moving
      mainCircle.style.transform = 'translate(-50%, -50%) scale(1.5)';
      
      clearTimeout(mainCircle.scaleTimeout);
      mainCircle.scaleTimeout = setTimeout(() => {
        mainCircle.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 100);
    }
  }}
/>
