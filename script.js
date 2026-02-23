// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const navbar = document.getElementById("navbar");

  // 1. Toggle Mobile Menu
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Optional: Animate hamburger to X
    hamburger.classList.toggle("toggle");
  });

  // 2. Navbar Scroll Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Close menu when a link is clicked (for mobile)
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});
