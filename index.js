let form = document.getElementsByTagName("form")[0];
let email = document.getElementById("input-email");
let errorText = document.getElementsByTagName("small")[0];
let errorIcon = document.getElementsByClassName("error-icon")[0];

form.addEventListener("submit", (e) => {

  e.preventDefault();

  if (validateEmail(email.value)) {
    errorIcon.classList.remove("show");
    errorText.classList.remove("show");
  }
  else {
    errorIcon.classList.add("show");
    errorText.classList.add("show");
  }

});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
