<script>
    let position = { x: 0, y: 0 };
  
    const updatePosition = (e) => {
      position = { x: e.clientX, y: e.clientY };
    };
  
    import { onMount } from 'svelte';
  
    onMount(() => {
      window.addEventListener('mousemove', updatePosition);
      return () => window.removeEventListener('mousemove', updatePosition);
    });
  </script>
  
  <style>
    /* Make sure the default cursor is hidden */
    * {
      cursor: none !important; /* Forces the cursor to be hidden */
    }
  
    /* Custom cursor style */
    .follower {
      position: fixed;
      width: 30px; /* Size of the white ring */
      height: 30px;
      border: 2px solid white; /* White ring */
      border-radius: 50%; /* Circle shape */
      transform: translate(-50%, -50%);
      pointer-events: none; /* Prevents it from interacting with elements */
      z-index: 9999; /* Ensures it's on top */
      mix-blend-mode: difference; /* Visible on dark and light backgrounds */
    }
  </style>
  
  <!-- Render the custom cursor -->
  <div
    class="follower"
    style="left: {position.x}px; top: {position.y}px"
  />
  