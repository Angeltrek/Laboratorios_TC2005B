const SUBMIT_FORM = document.querySelector("#submit-form");
const PRODUCT_CONTAINER = document.querySelector(".product_container");

let users = [];

SUBMIT_FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let confirm_password = document.querySelector("#confirm-password").value;

  if (password !== confirm_password) alert("La contraseña no es igual");
  else {
    const NEW_USER = {
      emai: email,
      password: password,
    };

    users.push(NEW_USER);
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#confirm-password").value = "";
    alert("Usuario Agregado");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "t" || event.key === "T") {
    document.querySelector("body").classList.toggle("verdana");
  }
});
