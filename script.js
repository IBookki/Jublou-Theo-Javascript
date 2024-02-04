const themeButton = document.getElementById("theme");

function onClick() {
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", onClick);

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Envoi du formulaire détecté !");

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let pseudo = document.querySelector("#pseudo");
  let email = document.querySelector("#email");

  if (pseudo.value.trim() === "") {
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ pseudo ne peut pas être vide";

    errorList.appendChild(err);
  } else {
    pseudo.classList.add("success");
  }

  if (email.value.trim() === "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";

    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (pseudo.classList.contains("success") && email.classList.contains("success")) {
    successContainer.classList.add("visible");
  }
});
