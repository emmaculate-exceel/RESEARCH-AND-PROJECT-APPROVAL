const signInBtnEl = document.getElementById("sign-in");
const formContainerEl = document.getElementById("login-form-container");
const overlay = document.getElementById("overlay");
// const closeLogin = document.getElementsByClassName("close-login");

signInBtnEl.addEventListener("click", function () {
  formContainerEl.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

overlay.addEventListener("click", function () {
  formContainerEl.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.overflow = "scroll";
});
