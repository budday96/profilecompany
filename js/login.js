const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  login = document.querySelector(".login-link"),
  loginForm = document.querySelector("#loginForm"), 
  errorMessage = document.querySelector(".error-message");
// Fungsi hidden password
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

//fungsi login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  const emailField = document.querySelector("#email").value; 
  const passwordField = document.querySelector("#password").value;

  if (emailField === "admin" && passwordField === "admin") {
    sessionStorage.setItem("isLoggedIn", "true"); 
    window.location.href = "admin.html";
  } else {
    errorMessage.textContent = "Email Atau Pasword Anda Salah, Silakan Coba Lagi."; 
  }
});