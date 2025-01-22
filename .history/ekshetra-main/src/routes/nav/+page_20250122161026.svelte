<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  let isMenuOpen = false;

  // Toggle the mobile menu
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    const mobileMenu = document.getElementById('mobileMenu');
    if (isMenuOpen) {
      mobileMenu.style.transform = 'translateX(0)';
    } else {
      mobileMenu.style.transform = 'translateX(-100%)';
    }
  };

  onMount(() => {
    const menuButton = document.getElementById('menuButton');
    const closeMenuButton = document.getElementById('closeMenuButton');

    menuButton.addEventListener('click', toggleMenu);
    closeMenuButton.addEventListener('click', toggleMenu);
  });
</script>

<header class="bg-gradient-to-r from-orange-400 to-pink-500 sticky top-0 z-50">
  <nav class="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-2 mx-auto bg-[#1e293b] rounded-full shadow-md max-w-7xl h-20 mt-4">
    <div class="flex items-center space-x-3">
      <a href="#" data-text="HOME" id="home-link"><img src="/logos/main.png" alt="EKSHETRA Logo" class="w-16 h-16 rounded-full object-cover"></a>
    </div>

    <div class="hidden lg:flex space-x-12 text-lg">
      <a href="about" class="nav-link text-white underline-animation">About</a>
      <a href="#events" class="nav-link text-white underline-animation">Events</a>
      <a href="#gallery" class="nav-link text-white underline-animation">Gallery</a>
      <a href="#team" class="nav-link text-white underline-animation">Team</a>
      <a href="#contact" class="nav-link text-white underline-animation">Contact</a>
    </div>

    <a href="#register" class="hidden lg:inline-block px-5 py-2 bg-[#0ea5e9] text-white rounded-full hover:bg-[#0284c7] shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
      Register
    </a>

    <button class="lg:hidden flex items-center px-4 py-2 bg-[#0ea5e9] text-white rounded-full shadow-lg hover:bg-[#0284c7] transition-all duration-300 transform hover:scale-105 hover:shadow-xl" id="menuButton">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </nav>

  <!-- Mobile Menu -->
  <div id="mobileMenu" class="fixed top-0 left-0 w-3/4 h-full bg-[#334155] text-white z-50 transform -translate-x-full transition-transform duration-300 ease-in-out">
    <button id="closeMenuButton" class="absolute top-4 right-4 text-white">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    <ul class="mt-20 space-y-6 px-6"> <!-- Added padding here -->
      <li><a href="about" class="block text-lg underline-animation">About</a></li>
      <li><a href="#events" class="block text-lg underline-animation">Events</a></li>
      <li><a href="#gallery" class="block text-lg underline-animation">Gallery</a></li>
      <li><a href="#team" class="block text-lg underline-animation">Team</a></li>
      <li><a href="#contact" class="block text-lg underline-animation">Contact</a></li>
      <li><a href="#register" class="block px-4 py-2 bg-[#0ea5e9] text-white rounded-full hover:bg-[#0284c7] shadow-lg">Register</a></li>
    </ul>
  </div>
</header>

<style>
  /* Navbar Styles */
  header {
    z-index: 1000;
  }

  nav {
    background-color: rgba(30, 41, 59, 0.9);
  }

  .nav-link {
    position: relative;
    text-decoration: none;
    color: white;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: #0ea5e9;
  }

  .underline-animation {
    position: relative;
    display: inline-block;
  }

  .underline-animation::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: #0ea5e9;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: right;
  }

  .underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  /* Mobile Menu Styles */
  #mobileMenu {
    transition: transform 0.3s ease-in-out;
  }

  #closeMenuButton {
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0; /* Ensure no default margin */
  }

  li {
    margin: 1rem 0;
    text-align: center; /* Center the text in each list item */
  }

  @media (min-width: 1024px) {
    #mobileMenu {
      display: none;
    }
  }
</style>