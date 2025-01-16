<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  // GSAP Animations for Page Load and Effects
  onMount(() => {
    // Animate Navigation Bar on Load
    gsap.from(".nav-items", {
      opacity: 0,
      y: -30,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out"
    });

    // Animate Logo on Load
    gsap.from(".logo", {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: "bounce.out"
    });

    // Mobile Menu Animation
    gsap.from(".mobile-menu", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power2.out"
    });

    // Animate Main Heading (h1)
    gsap.from(".main-heading", {
      opacity: 0,
      y: -100,
      duration: 1.5,
      ease: "power3.out"
    });

    // Animate Subheading (p)
    gsap.from(".main-subheading", {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.5
    });

    // Animate Button Hover
    gsap.from(".main-button", {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay: 1
    });

    // Custom Cursor Animation
    const cursor = document.querySelector('.custom-cursor');
    
    // Track mouse position
    document.addEventListener('mousemove', (e) => {
      gsap.to(cursor, {
        duration: 0.2,
        x: e.clientX - cursor.offsetWidth / 2,
        y: e.clientY - cursor.offsetHeight / 2,
        ease: "power2.out"
      });
    });

    // Mouse click effect
    document.addEventListener('mousedown', () => {
      cursor.classList.add('clicking');
    });

    document.addEventListener('mouseup', () => {
      cursor.classList.remove('clicking');
    });
  });
</script>

<style>
  /* Custom cursor styling */
  .custom-cursor {
    position: absolute;
    width: 15px; /* Smaller size for the cursor dot */
    height: 15px;
    border-radius: 50%;
    background: #f39c12; /* Yellow color for the cursor */
    pointer-events: none;
    z-index: 9999; /* Ensures it stays above everything */
    transition: transform 0.1s ease;
  }

  /* Effect for when the mouse is clicked */
  .custom-cursor.clicking {
    transform: scale(1.2); /* Slightly bigger on click */
    background-color: #e74c3c; /* Red color when clicked */
  }

  /* Body styling to remove default cursor */
  body {
    cursor: none; /* Remove default pointer */
  }

  /* Main content styles */
  .main-content {
    background-color: #f8f9fa;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .main-heading {
    font-size: 4rem;
    font-weight: bold;
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }

  .main-subheading {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: #343a40;
    opacity: 0.8;
  }

  .main-button {
    margin-top: 2rem;
    padding: 1rem 2rem;
    font-size: 1.25rem;
    background: linear-gradient(to right, #56ccf2, #2f80ed);
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  .main-button:hover {
    transform: scale(1.1);
  }

  /* Shapes and Animations */
  .main-content .shape-1 {
    position: absolute;
    top: 25%;
    left: 25%;
    width: 120px;
    height: 120px;
    background-color: #ff6347;
    border-radius: 50%;
    animation: pulse 2s infinite ease-in-out;
  }

  .main-content .shape-2 {
    position: absolute;
    bottom: 25%;
    right: 25%;
    width: 150px;
    height: 150px;
    background-color: #4caf50;
    border-radius: 50%;
    animation: bounce 2s infinite ease-in-out;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.3;
    }
    100% {
      transform: scale(1);
      opacity: 0.7;
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
  }
.nav-items a {
  position: relative;
  padding: 10px 15px; /* Add padding for better click area */
  border-radius: 5px; /* Rounded corners for links */
  text-decoration: none;
  color: white;
  transition: color 0.3s ease-in-out;
}

.nav-items a::after {
  content: '';
  position: absolute;
  bottom: 0; /* Position the underline at the bottom of the link */
  left: 0;
  width: 0;
  height: 2px; /* Thickness of the underline */
  background-color: white; /* Color of the underline */
  transition: width 0.3s ease-in-out;
}

.nav-items a:hover {
  color: #d1d5db; /* Light gray text on hover */
}

.nav-items a:hover::after {
  width: 100%; /* Extend the underline on hover */
}
</style>

<nav class="bg-blue-600 p-4 shadow-md relative">
  <div class="flex items-center justify-between">
    <!-- Left side: Menu items -->
    <ul class="flex space-x-4 text-white hidden md:flex nav-items">
      <li><a href="/" class="text-lg hover:underline transition duration-300 ease-in-out">Sponsors</a></li>
      <li><a href="/about" class="text-lg hover:underline transition duration-300 ease-in-out">About</a></li>
    </ul>

    <!-- Logo in the center -->
    <div class="logo flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
      <img src="/name.png" alt="Logo" class="h-12 md:h-16 lg:h-60">
    </div>

    <!-- Right side: Menu items -->
    <ul class="flex space-x-4 text-white hidden md:flex nav-items">
      <li><a href="/events" class="text-lg hover:underline transition duration-300 ease-in-out">Gallery</a></li>
      <li><a href="/contact" class="text-lg hover:underline transition duration-300 ease-in-out">Contact</a></li>
    </ul>

    <!-- Mobile menu button -->
    <div class="md:hidden flex items-center space-x-4">
      <button class="text-white" on:click={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div class="mobile-menu bg-blue-600 p-4 absolute top-0 right-0 w-full h-full flex justify-center items-center space-y-6 z-10">
      <ul class="space-y-4 text-white text-lg">
        <li><a href="/" class="hover:underline transition duration-300 ease-in-out">Home</a></li>
        <li><a href="/about" class="hover:underline transition duration-300 ease-in-out">About</a></li>
        <li><a href="/events" class="hover:underline transition duration-300 ease-in-out">Events</a></li>
        <li><a href="/contact" class="hover:underline transition duration-300 ease-in-out">Contact</a></li>
      </ul>
    </div>
  {/if}
</nav>

<!-- Main Content Section with Creative Design -->
<main class="main-content relative overflow-hidden h-screen flex items-center justify-center text-center">
  <!-- Background Layers for Depth -->
  <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 opacity-80"></div>
  <div class="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center" style="background-image: url('/path-to-your-image.jpg');"></div>

  <!-- Content Wrapper -->
  <div class="relative z-10 text-white">
    <h1 class ="main-heading">Welcome to EKSHETRA 3.0</h1>
    <p class="main-subheading">The ultimate technical fest of the year. Let's innovate together!</p>
    <button class="main-button">Get Started</button>
  </div>

  <!-- Animated Shapes -->
  <div class="shape-1"></div>
  <div class="shape-2"></div>
</main>

<!-- Custom Cursor -->
<div class="custom-cursor"></div> 