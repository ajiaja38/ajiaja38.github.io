// Membuat event Navbar pada mobile web version
const hamburger = document.querySelector(".hamburger-icon");
const navigasi = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navigasi.classList.toggle("active");
});
