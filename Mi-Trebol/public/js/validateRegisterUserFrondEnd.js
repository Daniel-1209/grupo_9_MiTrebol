window.addEventListener("load", () => {
  let formRegister = document.querySelector("#formRegister");
  let user = document.querySelector("#user");
  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lastName");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let password_confirmation = document.querySelector("#password_confirmation");
  let avatar = document.querySelector("#avatar");
  let submitButton = document.querySelector("#submitButton");
  let erros = document.querySelectorAll(".error");

  const validateEmail = (emailField) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailField).toLowerCase());
  };

  const CheckPassword = (inputText) => {
    const decimal =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,15}$/;
    if (inputText.match(decimal)) {
      return true;
    } else {
      return false;
    }
  };

  user.focus();

  // Nombre de cuenta

  user.addEventListener("blur", (e) => {
    e.preventDefault();
    if (user.value === "") {
      erros[0].innerHTML = "User vacio";
      user.style.border = "1px solid red";
      erros[0].classList.remove("aceptepStyle");
      erros[0].classList.add("errorStyle");
    } else {
      erros[0].innerHTML = "User valido";
      user.style.border = "1px solid green";
      erros[0].classList.remove("errorStyle");
      erros[0].classList.add("aceptepStyle");
    }
  });

  // Nombre de usuario

  firstName.addEventListener("blur", (e) => {
    e.preventDefault();
    if (firstName.value === "") {
      erros[1].innerHTML = "Nombre vacio";
      firstName.style.border = "1px solid red";
      erros[1].classList.remove("aceptepStyle");
      erros[1].classList.add("errorStyle");
    } else {
      erros[1].innerHTML = "Nombre valido";
      firstName.style.border = "1px solid green";
      erros[1].classList.remove("errorStyle");
      erros[1].classList.add("aceptepStyle");
    }
  });

  // Apellidos de usuario

  lastName.addEventListener("blur", (e) => {
    e.preventDefault();
    if (lastName.value === "") {
      erros[2].innerHTML = "Apellidos vacios";
      lastName.style.border = "1px solid red";
      erros[2].classList.remove("aceptepStyle");
      erros[2].classList.add("errorStyle");
    } else {
      erros[2].innerHTML = "Apellidos validos";
      lastName.style.border = "1px solid green";
      erros[2].classList.remove("errorStyle");
      erros[2].classList.add("aceptepStyle");
    }
  });

  // Email de usuario

  email.addEventListener("blur", (e) => {
    e.preventDefault();
    console.log(validateEmail(email.value));
    if (email.value === "") {
      erros[3].innerHTML = "Email vacio";
      email.style.border = "1px solid red";
      erros[3].classList.remove("aceptepStyle");
      erros[3].classList.add("errorStyle");
    } else if (!validateEmail(email.value)) {
      erros[3].innerHTML = "Correo no valido";
      email.style.border = "1px solid red";
      erros[3].classList.remove("aceptepStyle");
      erros[3].classList.add("errorStyle");
    } else {
      erros[3].innerHTML = "Email valido";
      email.style.border = "1px solid green";
      erros[3].classList.remove("errorStyle");
      erros[3].classList.add("aceptepStyle");
    }
  });

  // Password

  password.addEventListener("blur", (e) => {
    e.preventDefault();
    if (password.value === "") {
      erros[4].innerHTML = "Contraseña vacia";
      password.style.border = "1px solid red";
      erros[4].classList.remove("aceptepStyle");
      erros[4].classList.add("errorStyle");
    } else if (!CheckPassword(password.value)) {
      erros[4].innerHTML =
        "La contraseña deve contener al menos 1 letra minuscula, 1 mayuscula, 1 número y 1 simbolo";
      password.style.border = "1px solid red";
      erros[4].classList.remove("aceptepStyle");
      erros[4].classList.add("errorStyle");
    } else {
      erros[4].innerHTML = "Contraseña valida";
      password.style.border = "1px solid green";
      erros[4].classList.remove("errorStyle");
      erros[4].classList.add("aceptepStyle");
    }
  });

  // Password_Confirmate

  password_confirmation.addEventListener("blur", (e) => {
    e.preventDefault();
    if (password_confirmation.value === "") {
      erros[5].innerHTML = "Confirmar contraseña por favor";
      password_confirmation.style.border = "1px solid red";
      erros[5].classList.remove("aceptepStyle");
      erros[5].classList.add("errorStyle");
    } else if (password.value !== password_confirmation.value) {
      erros[5].innerHTML = "Contraseñas distintas";
      password_confirmation.style.border = "1px solid red";
      erros[5].classList.remove("aceptepStyle");
      erros[5].classList.add("errorStyle");
    } else {
      erros[5].innerHTML = "Confirmacion exitosa";
      password_confirmation.style.border = "1px solid green";
      erros[5].classList.remove("errorStyle");
      erros[5].classList.add("aceptepStyle");
    }
  });

  // Avatar

  avatar.addEventListener("change", (e) => {
    const filePath = avatar.value;
    // console.log(avatar.files[0].size);
    const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(filePath)) {
      erros[6].innerHTML = "Extension invalida";
      avatar.style.border = "1px solid red";
      erros[6].classList.remove("aceptepStyle");
      erros[6].classList.add("errorStyle");
    } else if (avatar.files[0].size > 5000000) {
      erros[6].innerHTML = "El tamaño de la imagen excede los 5 MB";
      avatar.style.border = "1px solid red";
      erros[6].classList.remove("aceptepStyle");
      erros[6].classList.add("errorStyle");
    } else {
      erros[6].innerHTML = "Imagen válida";
      avatar.style.border = "1px solid green";
      erros[6].classList.remove("errorStyle");
      erros[6].classList.add("aceptepStyle");
    }
  });

  // formRegister.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   if (password.value === "") {
  //     textPassword.innerHTML = "Contraseña vacia";
  //     textPassword.style.color = "red";
  //     password.style.border = "1px solid red";
  //   } else if (email.value === "" || !validateEmail(email.value)) {
  //     // console.log(email.value);
  //     textEmail.innerHTML = "Correo vacio o no valido";
  //     textEmail.style.color = "red";
  //     email.style.border = "1px solid red";
  //   } else {
  //     form.submit();
  //   }
  // });
});
