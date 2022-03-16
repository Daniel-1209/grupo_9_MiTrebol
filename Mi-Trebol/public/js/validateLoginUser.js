window.addEventListener("load", () => {
  let email = document.querySelector("#email");
  let textEmail = document.querySelector("#texEmail");
  let password = document.querySelector("#password");
  let textPassword = document.querySelector("#texPassword");
  let form = document.querySelector("#formulario");

  email.focus();

  email.addEventListener("blur", (e) => {
    e.preventDefault();
    if (email.value === "") {
      // console.log(email.value);
      textEmail.innerHTML = "Correo vacio";
      textEmail.style.color = "red";
      email.style.border = "1px solid red";
      textEmail.style.textAlign = "center";
      textEmail.style.fontSize = "15px";
    } else {
      textEmail.innerHTML = "Correo valido";
      email.style.border = "1px solid green";
      textEmail.style.color = "green";
    }
  });

  password.addEventListener("blur", (e) => {
    e.preventDefault();
    if (password.value === "") {
      textPassword.innerHTML = "Contraseña vacia";
      textPassword.style.color = "red";
      password.style.border = "1px solid red";
      textPassword.style.textAlign = "center";
      textPassword.style.fontSize = "15px";
    } else {
      textPassword.innerHTML = "Contraseña valida";
      password.style.border = "1px solid green";
      textPassword.style.color = "green";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (password.value === "") {
      textPassword.innerHTML = "Contraseña vacia";
      textPassword.style.color = "red";
      password.style.border = "1px solid red";
    } else if (email.value === "") {
      console.log(email.value);
      textEmail.innerHTML = "Correo vacio";
      textEmail.style.color = "red";
      email.style.border = "1px solid red";
    } else {
      form.submit();
    }
  });
});
