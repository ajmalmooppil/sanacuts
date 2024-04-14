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
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
$(document).ready(function () {
  // Create XML document
  var xmlDoc = document.implementation.createDocument(null, "root");

  // Create elements and append them
  var servicesSection = xmlDoc.createElement("services");
  var service1 = xmlDoc.createElement("service");
  var serviceName1 = xmlDoc.createElement("name");
  serviceName1.textContent = "Concrete Cutting";
  var serviceDesc1 = xmlDoc.createElement("description");
  serviceDesc1.textContent =
    "Concrete cutting involves precise openings and incisions in concrete structures. We use advanced techniques and equipment for accurate results.";

  service1.appendChild(serviceName1);
  service1.appendChild(serviceDesc1);
  servicesSection.appendChild(service1);

  var service2 = xmlDoc.createElement("service");
  var serviceName2 = xmlDoc.createElement("name");
  serviceName2.textContent = "Core Drilling";
  var serviceDesc2 = xmlDoc.createElement("description");
  serviceDesc2.textContent =
    "Core drilling creates perfectly round holes in concrete surfaces for various applications such as plumbing, electrical, and HVAC installations.";

  service2.appendChild(serviceName2);
  service2.appendChild(serviceDesc2);
  servicesSection.appendChild(service2);

  xmlDoc.documentElement.appendChild(servicesSection);

  // Convert XML to string
  var serializer = new XMLSerializer();
  var xmlString = serializer.serializeToString(xmlDoc);

  // Output XML string
  console.log(xmlString);
});
