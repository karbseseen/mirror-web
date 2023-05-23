// JavaScript code for the website

// Function to display a message when a navigation link is clicked
function showMessage() {
  alert("You clicked a navigation link!");
}

// Get all navigation links
var navLinks = document.querySelectorAll("nav ul li a");

// Attach a click event listener to each navigation link
navLinks.forEach(function(link) {
  link.addEventListener("click", showMessage);
});
