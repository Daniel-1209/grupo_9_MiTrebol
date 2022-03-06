function validateRegister(event) {
    console.log(event)
    //event?.preventDefault()
    const formElements = document.getElementById('registerForm').elements
    const {user,
        firstName,
        lastName,
        email,
        password,
        password_confirmation,
        category,
    avatar} = formElements

    let has_errors = false
    if (!user.value || user.value.length<2) {
        has_errors= true
        document.getElementById("user_error").innerHTML="Usuario debe esta lleno y contener al menos 2 caracteres"
    }

    if (!firstName.value || firstName.value.length<2) {
        has_errors= true
        document.getElementById("name_error").innerHTML="Nombre debe esta lleno y contener al menos 2 caracteres"
    }
    if (!lastName.value || lastName.value.length<2) {
        has_errors= true
        document.getElementById("lastName_error").innerHTML="Apellido debe esta lleno y contener al menos 2 caracteres"
    }
    if (!password.value || password.value.length<8) {
        has_errors= true
        document.getElementById("password_error").innerHTML="Contraseña debe esta lleno y contener al menos 8 caracteres"
    }
    if (!password_confirmation.value || password_confirmation.value.length<8 ||password_confirmation.value != password.value) {
        has_errors= true
        document.getElementById("password_confirmation_error").innerHTML="Confirmacion de contraseña debe esta lleno, contener al menos 8 caracteres y coincidir con la contraseña"
    }
    console.log(avatar.files)

    if (!avatar.value || avatar.files.length !=1 ||  avatar.files[0].type.includes("image") ) {
        has_errors= true
        document.getElementById("avatar_error").innerHTML="Se debe seleccionar un archivo como avatar y este debe ser una imagen"
    }
const email_regex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/
    if (!email.value || !email_regex.test(email.value)) {
        has_errors=true
        document.getElementById("email_error").innerHTML="Email es requerido y debe cumplir con el formato de email"
    }
    if (has_errors) {
        event.preventDefault()
    }
    return !has_errors
}
console.log('script cargado')

document.getElementById("registerForm").addEventListener("submit",validateRegister)