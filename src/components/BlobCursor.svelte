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
      transition: transform 0.2s ease; /* Added transition for scaling */
    }
  
    .main {
      width: 8px; /* Smaller size */
      height: 8px; /* Smaller size */
      background: ivory;
      z-index: 99999;
    }
  
    .trailing {
      width: 20px; /* Smaller size */
      height: 20px; /* Smaller size */
      border: 2px solid ivory;
      background: transparent;
      z-index: 99998;
      transition: border-color 0.3s ease;
    }
  </style>
  
  <svelte:window
    on:mousemove={(e) => {
      const mainCircle = document.getElementById("mainCircle");
      
      if (mainCircle) {
        mainCircle.style.left = e.clientX + "px";
        mainCircle.style.top = e.clientY + "px";
        // Scale up the main circle when moving
        mainCircle.style.transform = 'translate(-50%, -50%) scale(1.5)'; // Adjust scale for smaller cursor
        
        // Reset scale after a short delay
        clearTimeout(mainCircle.scaleTimeout);
        mainCircle.scaleTimeout = setTimeout(() => {
          mainCircle.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 200); // Adjust duration as needed
      }
      
      const trailingCircle = document.getElementById("trailingCircle");
      
      if (trailingCircle) {
        trailingCircle.style.left = e.clientX + "px";
        trailingCircle.style.top = e.clientY + "px";
      }
    }}
    
    on:touchmove={(e) => {
      const touch = e.touches[0]; // Get the first touch point
      const mainCircle = document.getElementById("mainCircle");
      
      if (mainCircle) {
        mainCircle.style.left = touch.clientX + "px";
        mainCircle.style.top = touch.clientY + "px";
        // Scale up the main circle when moving
        mainCircle.style.transform = 'translate(-50%, -50%) scale(1.5)';
        
        // Reset scale after a short delay
        clearTimeout(mainCircle.scaleTimeout);
        mainCircle.scaleTimeout = setTimeout(() => {
          mainCircle.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 200); // Adjust duration as needed
      }
      
      const trailingCircle = document.getElementById("trailingCircle");
      
      if (trailingCircle) {
        trailingCircle.style.left = touch.clientX + "px";
        trailingCircle.style.top = touch.clientY + "px";
      }
      
      e.preventDefault(); // Prevent default scrolling behavior
    }}
  />
  