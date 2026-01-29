// Mobile Navigation
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.innerHTML = navMenu.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Testimonial Slider
const track = document.getElementById("testimonial-track");
const dots = document.querySelectorAll(".slider-dot");
let currentIndex = 0;

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update active dot
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

// Auto slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % dots.length;
  updateSlider();
}, 5000);

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Sticky header on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

  const navLinks = document.querySelectorAll(".nav-link");




  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navLinks.forEach(l => l.classList.remove("active")); // remove old
      this.classList.add("active"); // add new
    });
  });
