const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
var i = 0;
function sliderImg(){
    var time = 10000;
    var images = [
 	"./assets/sl1.jpg",
	"./assets/sl2.jpg",
	"./assets/sl3.avif",
	"./assets/sl4.jpg",
        "./assets/sl5.jpg",
        "./assets/sl6.jpg",
        "./assets/sl7.jpg"];
    var h = document.getElementsByClassName("header");
    if (h.length > 0){
	
	h[0].style.backgroundImage = "linear-gradient(rgba(1, 24, 11, 0.7), rgba(1, 24, 11, 0.7)), url('" + images[i] + "')";
	i++;
	if (i >= images.length){
	    i = 0;
	}
    }

    setTimeout(sliderImg, time);
}
window.onload = sliderImg;

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const bookingType = document.getElementById("booking-type");

bookingType.addEventListener("click", (e) => {
  Array.from(bookingType.getElementsByTagName("div")).forEach((item) => {
    item.classList.remove("active");
  });

  e.target.classList.add("active");
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .booking", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

// offer container
ScrollReveal().reveal(".offer__card", {
  ...scrollRevealOption,
  interval: 500,
});

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}
