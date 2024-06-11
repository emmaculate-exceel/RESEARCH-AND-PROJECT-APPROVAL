/// setting variables
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let lastname = document.getElementById("lastname");
let number = document.getElementById("number");
let title = document.getElementById("title");
let form = document.getElementsByTagName("form")[0];
let inputEmail = document.querySelector('input[name="user_email"]');
let inputPass = document.querySelector('input[name="user_password"]');
let inputName = document.querySelector('input[name="user_name"]');
let inputPhone = document.querySelector('input[name="user_phone"]');
let inputLname = document.querySelector('input[name=user_lastname');

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  lastname.style.maxHeight = "0";
  number.style.maxHeight = "0";
  title.innerHTML = "Login";
  form.setAttribute("action", "/login");
  inputName.removeAttribute("required");
  inputPhone.removeAttribute("required");
  inputLname.removeAttribute("required");
  inputEmail.setAttribute("name", "login_email");
  inputPass.setAttribute("name", "login_password");
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};

signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  lastname.style.maxHeight = "60px";
  number.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    form.setAttribute("action", "/signup");
    inputEmail.setAttribute("name", "user_email");
    inputPass.setAttribute("name", "user_password");
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
};

// toggling of the password

document.getElementById("togglePassword").addEventListener("click", function (e) {
    const passwordField = document.getElementById("password");
    const passwordFieldType = passwordField.getAttribute("type");
    const toggleButton = e.target;

    if (passwordFieldType === "password") {
      passwordField.setAttribute("type", "text");
      toggleButton.textContent = "Hide";
    } else {
      passwordField.setAttribute("type", "password");
      toggleButton.textContent = "";
    }
  });
