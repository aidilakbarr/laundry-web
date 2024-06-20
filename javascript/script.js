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

function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('emailAddress').value;
  var message = document.getElementById('message').value;

  if (name.trim() === '') {
      return false; // Mencegah form untuk dikirimkan
  }

  console.log(name);

  // Validasi email menggunakan regular expression
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email) && email.trim() === '') {
      alert('Invalid email address');
      return false; // Mencegah form untuk dikirimkan
  }

  if (message.trim() === '') {
    return false; // Mencegah form untuk dikirimkan
}
  // Jika validasi berhasil, form akan dikirimkan
  return true;
}
