window.addEventListener("load", () => {
  let email = document.querySelector("#email");
  let textEmail = document.querySelector("#texEmail");
  let password = document.querySelector("#password");
  let textPassword = document.querySelector("#texPassword");
  let form = document.querySelector("#formulario");

  validateEmail = (emailField) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailField).toLowerCase());
  };

  email.focus();

  email.addEventListener("blur", (e) => {
    e.preventDefault();
    console.log(validateEmail(email.value));
    if (email.value === "") {
      // console.log(email.value);
      textEmail.innerHTML = "Correo vacio";
      textEmail.style.color = "red";
      email.style.border = "1px solid red";
      textEmail.style.textAlign = "center";
      textEmail.style.fontSize = "15px";
    } else if (!validateEmail(email.value)) {
      textEmail.innerHTML = "Correo no valido";
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
    } else if (email.value === "" || !validateEmail(email.value)) {
      // console.log(email.value);
      textEmail.innerHTML = "Correo vacio o no valido";
      textEmail.style.color = "red";
      email.style.border = "1px solid red";
    } else {
      form.submit();
    }
  });
});
