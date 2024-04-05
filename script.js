document.addEventListener("DOMContentLoaded", function () {
  const serviceLink = document.querySelector('a[href="#service"]');
  const serviceSection = document.getElementById("services");
  // Get the "Contact" link
  const contactLink = document.querySelector('a[href="#contact"]');
  // Get the contact section
  const contactSection = document.getElementById("contact");

  // Smooth scroll to the contact section when clicking on the "Contact" link
  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
  serviceLink.addEventListener("click", function (event) {
    event.preventDefault();
    serviceSection.scrollIntoView({ behavior: "smooth" });
  });

  window.addEventListener("scroll", function () {
    var element = document.querySelector(".service");
    var position = element.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      document
        .querySelector(".service-details h3")
        .classList.add("animate-typing");
      document
        .querySelector(".service-details p")
        .classList.add("animate-typing");
    }
  });
  window.addEventListener("scroll", function () {
    var aboutSection = document.getElementById("about-section");
    var position = aboutSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;
    var paragraphs = document.querySelectorAll(".scrolling-text");

    if (position < screenPosition) {
      paragraphs.forEach(function (paragraph) {
        paragraph.classList.add("animate-fade-in");
      });
    } else {
      paragraphs.forEach(function (paragraph) {
        paragraph.classList.remove("animate-fade-in");
      });
    }
  });
});
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    document.querySelector(".loading-container").style.display = "block";
    // Show the loading animation

    // Simulate form submission (you should replace this with your actual form submission logic)
    setTimeout(function () {
      // Hide the loading animation after a delay (you can replace the delay with your actual submission logic)
      document.querySelector(".loading-container").style.display = "none";
      // For demonstration purpose
    }, 4000); // Change the delay as needed
  });
