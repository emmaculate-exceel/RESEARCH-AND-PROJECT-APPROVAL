function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("signInModal");
  if (event.target == modal) {
    closeModal("signInModal");
  }
};

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
//the new changes for arrival and departure
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

function setFixedTime() {
  document.getElementById("time").value = "12:00";
}

document.addEventListener('DOMContentLoaded', function() {
  const departureInput = document.getElementById('departure');
  const arrivalInput = document.getElementById('arrival');
  const departureDropdown = document.getElementById('departureDropdown');
  const arrivalDropdown = document.getElementById('arrivalDropdown');

  // Event listeners for the departure input
  departureInput.addEventListener('focus', function() {
      departureDropdown.style.display = 'block';
  });

  departureInput.addEventListener('blur', function() {
      setTimeout(() => {
          departureDropdown.style.display = 'none';
      }, 200); // Add a slight delay to allow click event to register
  });

  departureDropdown.addEventListener('click', function(event) {
      if (event.target.classList.contains('dropdown-item')) {
          departureInput.value = event.target.textContent;
      }
  });

  // Event listeners for the arrival input
  arrivalInput.addEventListener('focus', function() {
      arrivalDropdown.style.display = 'block';
  });

  arrivalInput.addEventListener('blur', function() {
      setTimeout(() => {
          arrivalDropdown.style.display = 'none';
      }, 200); // Add a slight delay to allow click event to register
  });

  arrivalDropdown.addEventListener('click', function(event) {
      if (event.target.classList.contains('dropdown-item')) {
          arrivalInput.value = event.target.textContent;
      }
  });
});




// document.addEventListener('DOMContentLoaded', function () {
//     console.log('Document is ready');

//     const oneWayBtn = document.getElementById('one-way-btn');
//     const roundTripBtn = document.getElementById('round-trip-btn');
//     const returnDateContainer = document.getElementById('return-date-container');

//     // Initially hide the return date input
//     returnDateInput.parentElement.style.display = 'none';

//     oneWayBtn.addEventListener('click', function () {
//         console.log('One Way clicked');
//         oneWayBtn.classList.add('active');
//         roundTripBtn.classList.remove('active');
//         returnDateContainer.style.display = 'none';
//     });

//     roundTripBtn.addEventListener('click', function () {
//         console.log('Round Trip clicked');
//         roundTripBtn.classList.add('active');
//         oneWayBtn.classList.remove('active');
//         returnDateContainer.style.display = 'block';
//     });
// });

// function showDepartureDropdown() {
//   var dropdown = document.getElementById("departure-dropdown");
//   dropdown.classList.toggle("show");
// }

// function showArrivalDropdown() {
//   var dropdown = document.getElementById("arrival-dropdown");
//   dropdown.classList.toggle("show");
// }

// function selectDeparture(event, destination) {
//   event.preventDefault();
//   var departureInput = document.getElementById("departure");
//   departureInput.value = destination;
//   closeDropdown("departure-dropdown");
// }

// function selectDestination(event, destination) {
//   event.preventDefault(); // Prevent the default action of the anchor tag
//   var arrivalInput = document.getElementById("arrival");
//   arrivalInput.value = destination;
//   closeDropdown();
// }

// function closeDropdown() {
//   var dropdown = document.getElementById("arrival-dropdown");
//   if (dropdown) {
//     dropdown.classList.remove("show");
//   }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const dateInput = document.getElementById('date');
//     const timeInput = document.getElementById('time');

//     function setFixedTime() {
//         const selectedDate = new Date(dateInput.value);
//         if (!isNaN(selectedDate)) {
//             // Example logic: set the time to 10:00 AM
//             const fixedTime = "10:00";
//             timeInput.value = fixedTime;
//         } else {
//             // Handle the case where the selected date is invalid or cleared
//             timeInput.value = "";
//         }
//     }

//     dateInput.addEventListener('change', setFixedTime);
// });


// // Close the dropdown menu if the user clicks outside of it
// window.addEventListener("click", function (event) {
//   if (!event.target.matches("#arrival") && !event.target.closest(".dropdown")) {
//     closeDropdown();
//   }
//   if (
//     !event.target.matches("#departure") &&
//     !event.target.closest(".dropdown")
//   ) {
//     closeDropdown("departure-dropdown");
//   }
// });

// function showDateDropdown() {
//   var dropdown = document.getElementById("date-dropdown");
//   dropdown.classList.toggle("show");
// }

// window.addEventListener("click", function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     for (var i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// });

// document
//   .getElementById("payment-form")
//   // .addEventListener("submit", function (event) {
//   //   event.preventDefault();
//     alert("Payment submitted successfully!");
//   });

// scripts.js

// function openModal() {
//   document.getElementById("signInModal").style.display = "block";
// }

function closeModal() {
  document.getElementById("signInModal").style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("signInModal");
  if (event.target == modal) {
    closeModal();
  }
};

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function showDateDropdown() {
  var dropdown = document.getElementById("date-dropdown");
  dropdown.classList.toggle("show");
}

// function openModal() {
//   document.getElementById("signInModal").style.display = "block";
// }

function closeModal() {
  document.getElementById("signInModal").style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("signInModal");
  if (event.target == modal) {
    closeModal();
  }
};

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
});

// document
//   .getElementById("book-now-button")
//   .addEventListener("click", function (event) {
//     console.log("Button clicked!");
//     var paymentSection = document.getElementById("payment-details");
//     paymentSection.style.display = "block";
//   });

// document
//   .getElementById("book-now-button")
//   .addEventListener("click", function (event) {
//     // console.log("Button clicked!");
//     var paymentSection = document.getElementById("payment-details");
//     paymentSection.style.display = "block";
//     showSignInForm();
//   });
