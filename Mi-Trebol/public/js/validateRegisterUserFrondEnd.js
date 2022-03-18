window.addEventListener("load", () => {
    let formRegister = document.querySelector("#formRegister");
    let user =  document.querySelector("#user");
    let firstName =  document.querySelector("#firstName");
    let lastName =  document.querySelector("#lastName");
    let email =  document.querySelector("#email");
    let password =  document.querySelector("#password");
    let password_confirmation =  document.querySelector("#password_confirmation");
    let avatar =  document.querySelector("#avatar");
    let submitButton =  document.querySelector("#submitButton");
    let erros = document.querySelectorAll('.error');
    validateEmail = (emailField) => {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(emailField).toLowerCase());
    };

    user.focus();
    erros[3].innerHTML= 'Erorrrr';


    user.addEventListener("blur", (e) => {
        e.preventDefault();
        if (user.value === "") {
          erros[0].innerHTML = "User vacio";
          user.style.border = "1px solid red";
          erros[0].classList.remove('aceptepStyle')
          erros[0].classList.add('errorStyle')
        } else {
            erros[0].innerHTML = "User valido";
            user.style.border = "1px solid green";
            erros[0].classList.remove('errorStyle')
            erros[0].classList.add('aceptepStyle')
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
  