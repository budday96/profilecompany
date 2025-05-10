const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  cmpwFields = document.querySelectorAll(".confirm_password"),
  registerForm = document.querySelector("#registerForm"); 

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const allFields = [...pwFields, ...cmpwFields];
    allFields.forEach((pwField) => {
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

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = "Login.html";
});
