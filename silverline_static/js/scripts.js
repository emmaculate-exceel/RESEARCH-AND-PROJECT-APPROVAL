`use strict`;

function showDateDropdown() {
  var dropdown = document.getElementById("date-dropdown");
  dropdown.classList.toggle("show");
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function showOneWay() {
  document.getElementById("one-way-form").style.display = "block";
  document.getElementById("round-trip-form").style.display = "none";
}

function showRoundTrip() {
  document.getElementById("one-way-form").style.display = "none";
  document.getElementById("round-trip-form").style.display = "block";
}

function showDepartureDropdown(id) {
  var dropdown = document.getElementById(id);
  dropdown.classList.toggle("show");
}

function showArrivalDropdown(id) {
  var dropdown = document.getElementById(id);
  dropdown.classList.toggle("show");
}

function selectDestination(event, destination, inputId) {
  event.preventDefault();
  document.getElementById(inputId).value = destination;
  var dropdowns = document.querySelectorAll(".dropdown-content");
  dropdowns.forEach(function (dropdown) {
    dropdown.classList.remove("show");
  });
}

// subscribe section
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
document.querySelector(".sub-btn").addEventListener("click", function () {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
