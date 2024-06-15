// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".menuCSS");
const overlay = document.querySelector(".overlay");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    overlay.classList.remove("active");
  }
});
