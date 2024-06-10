function showOneWay() {
  document.getElementById("one-way-form").style.display = "block";
  document.getElementById("round-trip-form").style.display = "none";
  document.getElementById("one-way-btn").classList.add("active");
  document.getElementById("round-trip-btn").classList.remove("active");
}

function showRoundTrip() {
  document.getElementById("one-way-form").style.display = "none";
  document.getElementById("round-trip-form").style.display = "block";
  document.getElementById("one-way-btn").classList.remove("active");
  document.getElementById("round-trip-btn").classList.add("active");
}

function showDepartureDropdown() {
  document.getElementById("departure-dropdown").classList.toggle("show");
}

function showArrivalDropdown() {
  document.getElementById("arrival-dropdown").classList.toggle("show");
}

function selectDestination(event, inputId) {
  event.preventDefault();
  document.getElementById(inputId).value = event.target.textContent;
  document.getElementById(inputId + "-dropdown").classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dropdown input").forEach((input) => {
    input.addEventListener("focus", function () {
      document.getElementById(input.id + "-dropdown").classList.add("show");
    });

    input.addEventListener("blur", function () {
      setTimeout(() => {
        document
          .getElementById(input.id + "-dropdown")
          .classList.remove("show");
      }, 200);
    });
  });

  document.querySelectorAll(".dropdown-content a").forEach((link) => {
    link.addEventListener("click", function (event) {
      const inputId = event.target
        .closest(".dropdown-content")
        .id.replace("-dropdown", "");
      selectDestination(event, inputId);
    });
  });
});

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
