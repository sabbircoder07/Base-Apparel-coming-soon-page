const submitBtn = document.querySelector(".btn-submit");
const errorIcon = document.querySelector(".error-icon");
const errorMessage = document.querySelector(".error-message");
const emailID = document.querySelector("#email-id");

function isValidEmail(email) {
  const rex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let result = rex.test(String(email).toLowerCase().trim());
  if (result === true) {
    errorIcon.style.display = "none";
    errorMessage.innerHTML = "";
    emailID.classList.remove("invalid-email-id");
  } else {
    emailID.classList.add("invalid-email-id");
    emailID.focus();
    errorIcon.style.display = "block";
    errorMessage.style.color = "#c92a2a";
    errorMessage.innerHTML = "Please enter a valid email address";
  }
}
function handleToClick(event) {
  event.stopPropagation();
  event.preventDefault();
  isValidEmail(emailID.value);
}
submitBtn.addEventListener("click", handleToClick);

emailID.addEventListener("focusout", function () {
  if (errorMessage.innerHTML != "") {
    isValidEmail(emailID.value);
  }
});
emailID.addEventListener("change", function () {
  if (errorMessage.innerHTML != "") {
    isValidEmail(emailID.value);
  }
});
