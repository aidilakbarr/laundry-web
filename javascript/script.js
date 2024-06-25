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
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitButton");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("emailAddress");
  const messageInput = document.getElementById("message");

  if (!form || !submitButton || !nameInput || !emailInput || !messageInput) {
    console.error("Form or one of the inputs not found");
    return;
  }

  console.log("Form and inputs found");

  // Function to check form validity
  function validateForm() {
    const isNameValid = nameInput.checkValidity();
    const isEmailValid = emailInput.checkValidity();
    const isMessageValid = messageInput.checkValidity();

    // Enable the submit button if all inputs are valid
    submitButton.disabled = !(isNameValid && isEmailValid && isMessageValid);
    console.log(`Form valid: ${isNameValid && isEmailValid && isMessageValid}`);
  }

  // Add event listeners to input fields to validate form on input
  nameInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
  messageInput.addEventListener("input", validateForm);

  // Initial validation check
  validateForm();

  console.log("Event listener about to be added to form");

  // Event listener for the submit button
  // Masih Error
  // form.addEventListener(
  //   "submit", function (event) {
  //     console.log("Form submitted"); // Check if the event listener is triggered
  //     // Prevent default form submission
  //     event.preventDefault();

  //     // Check if the form is valid
  //     if (form.checkValidity()) {
  //       // Prepare mailto link with form data
  //       const email = "aidilakbr95@gmail.com";
  //       const subject = "Contact Form Submission";
  //       const body = `Name: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value}`;
  //       const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
  //         subject
  //       )}&body=${encodeURIComponent(body)}`;

  //       // Redirect to the mailto link
  //       console.log("Redirecting to mailto link"); // Check if the condition is met
  //       console.log(mailtoLink); // Check the constructed mailto link
  //       window.location.href = mailtoLink;
  //     } else {
  //       // Optionally show validation messages or handle invalid form state
  //       console.log("Form validation failed"); // Check if form validation fails
  //       event.stopPropagation();
  //       form.classList.add("was-validated");
  //     }
  //   },
  //   console.log("Form submitteddsds"),
  //   false
  // );

  console.log("Event listener added to form");
});
