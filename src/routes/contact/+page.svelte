<script>
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import Nav from "../nav/+page.svelte";
  import gsap from "gsap";

  const committees = [
    {
      name: "Finance & Budget",
      heads: [
        { name: "B.Dileepkumar", phone: "9676677116" },
        { name: "Karthik", phone: "7657083099" },
        { name: "Purnema", phone: "9182156252" },
      ],
    },
    {
      name: "Event Coordination",
      heads: [
        { name: "A.S.Adithya", phone: "8317511173" },
        { name: "Vinesh", phone: "7780362864" },
        { name: "Varshitha", phone: "9347936137" },
      ],
    },
    {
      name: "Cultural",
      heads: [
        { name: "Venkatesh", phone: "6281375552" },
        { name: "Keerthi", phone: "9391903868" },
        { name: "Sneha", phone: "7989283901" },
      ],
    },
    {
      name: "Food & Beverages",
      heads: [
        { name: "Ch.Sai.Kiran", phone: "9949072310" },
        { name: "Ch.Chakri", phone: "8002233445" },
        { name: "P.Havish", phone: "8002233445" },
      ],
    },
    {
      name: "Media & Public",
      heads: [
        { name: "Sam Moses", phone: "7654321098" },
        { name: "Praveen", phone: "9866696178" },
        { name: "Gowri Shankar", phone: "8688617166" },
      ],
    },
    {
      name: "Logistics & Ops",
      heads: [
        { name: "Achit", phone: "6305438394" },
        { name: "Himadeep", phone: "6789098765" },
        { name: "Kiran", phone: "6789098765" },
      ],
    },
    {
      name: "Miscellaneous",
      heads: [
        { name: "K.Aditya", phone: "9490459963" },
        { name: "Nayani", phone: "6305427404" },
        { name: "P.Saranya", phone: "8688161699" },
      ],
    },
  ];

  const scrambleText = (element, text) => {
    const originalText = text;
    const length = originalText.length;
    let currentText = "";

    const scramble = () => {
      currentText = "";
      for (let i = 0; i < length; i++) {
        const char = originalText[i];
        if (char.match(/[0-9]/)) {
          currentText += Math.floor(Math.random() * 10); // Scramble numbers
        } else if (char.match(/[a-zA-Z]/)) {
          const isUppercase = char === char.toUpperCase();
          const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Random letter
          currentText += isUppercase ? randomChar.toUpperCase() : randomChar;
        } else {
          currentText += char; // Preserve non-alphanumeric characters
        }
      }
      element.innerText = currentText;
    };

    const interval = setInterval(() => {
      scramble();
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      gsap.to(element, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => {
          element.innerText = originalText;
          gsap.to(element, {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });
        },
      });
    }, 3000); // Duration of scrambling effect
  };

  onMount(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 100,
    });

    const scrambleElements = document.querySelectorAll(".scramble-effect");
    scrambleElements.forEach((element) => {
      scrambleText(element, element.textContent);
    });
  });
</script>

<Nav />
<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>
<div class="bg-light-effect mb-autorelative min-h-screen text-white py-10 overflow-hidden relative">
  <!-- Background Shapes -->
  <div class="bg-shapes">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
    <div class="shape shape-4"></div>
    <div class="shape shape-5"></div>
  </div>

  <div class="relative z-20 container mx-auto px-4 mt-20">
    <h1 class="section-heading text-4xl font-bold mb-8 pt-5  text-center" data-aos="fade-up" data-aos-duration="1000">
        Reach Our Committe(s)<span class="text-purple-400"></span>
      </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each committees as committee}
        <div
          class="bg-[#333333] rounded-xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300 p-6 relative group"
          data-aos="fade-up"
        >
          <h2 class="text-2xl font-semibold mb-4 text-center text-blue-300 group-hover:text-white transition-colors duration-300">
            {committee.name}
          </h2>
          <ul>
            {#each committee.heads as head}
              <li class="flex items-center justify-between py-3 px-4 bg-gray-700 rounded-lg mb-3 shadow-md hover:bg-gray-600 transition-colors duration-300">
                <span class="text-lg font-medium scramble-effect">{head.name}</span>
                <a
                  href="tel:{head.phone}"
                  class="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200 scramble-effect"
                >
                  {head.phone}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</div>
<!-- Contact Section -->
<div class="mt-auto relative bottom-0 left-0 right-0 p-8 bg-[#003366] bg-opacity-90 shadow-2xl rounded-t-lg flex flex-col md:flex-row justify-between items-center contact-section space-y-6 md:space-y-0 md:space-x-8">
  <div class="mt-3 flex flex-col items-center md:items-start w-full md:w-1/2" data-aos="fade-up" data-aos-delay="400">
    <div class="flex items-center space-x-3 mb-4">
      <div class="w-8 h-8 flex justify-center items-center">
        <img src="./image.png" alt="Phone Icon" class="w-8 h-8" />
      </div>
      <span class="text-2xl font-semibold">Contact Us</span>
    </div>
    <p class="text-xl font-medium mb-2">
        <a href="tel:+1234567890" class="hover:underline">9490459963</a>
    </p>
    <p class="text-xl font-medium mb-2">
        <a href="tel:+1234567890" class="hover:underline">9676677116</a>
    </p>
    <h3 class="text-lg font-semibold text-white mb-2">Follow Us on Instagram</h3>
    <div class="flex justify-center mt-4">
      <a href="https://www.instagram.com/ekshetra_3.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="hover:scale-110 transition-transform duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3H16A5 5 0 0121 8V16A5 5 0 0116 21H8A5 5 0 013 16V8A5 5 0 018 3ZM12 15.5A3.5 3.5 0 1012 8.5 3.5 3.5 0 0012 15.5ZM16.5 7.5A1.5 1.5 0 1118 6 1.5 1.5 0 0116.5 7.5Z" />
        </svg>
      </a>
    </div>
  </div>

  <!-- Google Map Embed -->
  <div class="w-full md:w-1/2 mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="400">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5764682633658!2d83.32945747494506!3d17.811591383149768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395befa9dda303%3A0x5781c56a5df412!2sBaba%20Institute%20of%20Technology%20%26%20Sciences!5e0!3m2!1sen!2sin!4v1737482955981!5m2!1sen!2sin"
      width="100%"
      height="250"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="rounded-lg shadow-lg transition-transform duration-300"
    ></iframe>
  </div>
</div>
<footer class="bg-gray-800 text-white py-4">
  <div class="container mx-auto text-center">
    <p>Made with 🩷 by <a href="https://konkorde.org" class="text-blue-500 hover:underline">KONKORDE</a></p>
  </div>
</footer>
<div>
  <a
      href="/"
      class="fixed bottom-6 right-6 z-50 p-2 lg:p-4 bg-white hover:bg-opacity-50 rounded-full"
  >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
      >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
      </svg>
  </a>
</div>

<style>
  .bg-light-effect {
    background: linear-gradient(135deg, rgba(75, 0, 130, 0.8), rgba(255, 215, 0, 0.8));
    background-size: 200% 200%;
    animation: gradient-animation 8s infinite alternate;
}

@keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 50% 100%;
    }
    100% {
        background-position: 100% 50%;
    }
}

.bg-shapes {
    position: absolute;
    inset: 0;
    z-index: 10;
    pointer-events: none;
}

.shape {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    animation: float 6s ease-in-out infinite;
}

.shape-1 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 15%;
    filter: blur(120px);
    animation-delay: 0s;
}

.shape-2 {
    width: 400px;
    height: 400px;
    bottom: 15%;
    right: 10%;
    filter: blur(150px);
    animation-delay: 2s;
}

.shape-3 {
    width: 200px;
    height: 200px;
    top: 20%;
    right: 20%;
    filter: blur(100px);
    animation-delay: 4s;
}

.shape-4 {
    width: 250px;
    height: 250px;
    bottom: 20%;
    left: 20%;
    filter: blur(110px);
    animation-delay: 6s;
}

.shape-5 {
    width: 350px;
    height: 350px;
    top: 30%;
    left: 5%;
    filter: blur(130px);
    animation-delay: 8s;
}

@keyframes float {
    0% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(30px) translateX(-30px);
    }
    100% {
      transform: translateY(0) translateX(0);
    }
}

footer {
    background-color: #1f2937;
    color: #ffffff;
    padding: 1rem 0;
    text-align: center;
}

footer a {
    color: #3b82f6;
    text-decoration: none;
    transition: all 0.3s ease;
}

footer a:hover {
    text-decoration: underline;
    color: #60a5fa;
}

@font-face {
    font-family: 'Audiowide';
    src: url('./assets/fonts/Audiowide-Regular.ttf') format('truetype');
    font-weight: 400; /* Regular */
    font-style: normal;
}

/* Apply Poppins to the entire site */
body {
    font-family: 'Poppins', sans-serif;
}

/* Set bold for headings */
h1, h2, h3, h4, h5, h6 {
    font-weight: 700; /* Bold */
}

/* Set normal weight for paragraphs */
p {
    font-weight: 400; /* Normal */
}
</style>