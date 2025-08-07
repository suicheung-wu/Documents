document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    console.log("button tiggered");
  });
});
const date = document,getElementById("date");
date.innerHTML = new Date().getFullYear();