window.addEventListener('load', function () {
    let formEdit = document.querySelector('#formEdit');
    let productName = document.querySelector('#text');
    let shortDescription = document.querySelector('#text2');
    let longDescription = document.querySelector('#text3');
    let imgMod = document.querySelector('#imgMod');
    let price = document.querySelector('#price');
    let btnSubmitAdd = document.querySelector('#submitAdd');
    let smallNameAdd = document.querySelector('.erNameAdd');
    let smallShortAdd = document.querySelector('.erShortDesAdd');
    let smallLongAdd = document.querySelector('.erLongDesAdd');
    let smallImageAdd = document.querySelector('.erImageAdd');
    let smallPriceAdd = document.querySelector('.erPriceAdd');
    var errors = [];

    productName.addEventListener('change', function (){
        if(productName.value == ""){
            errors.push('Es necesario agregar el nombre del producto');
            errors.forEach(error => {
                if(error == 'Es necesario agregar el nombre del producto'){
                   smallNameAdd.innerHTML += `${error}`
                }
            })
            //alert('Es necesario agregar el nombre del producto');
        };
    })

    shortDescription.addEventListener('change', function(){
        if(shortDescription.value == ""){
            errors.push('Es necesario escribir una descripción corta');
            errors.forEach(error => {
                if(error == 'Es necesario escribir una descripción corta'){
                   smallShortAdd.innerHTML += `${error}`
                    alert('Es necesario escribir una descripción corta');
                }
            })
        }
    })

    longDescription.addEventListener('change', function(){
        if(longDescription.value == ""){
            errors.push('Agrega una descripción detallada del producto');
            errors.forEach(error => {
                if(error == 'Agrega una descripción detallada del producto'){
                   smallLongAdd.innerHTML += `${error}`
                    alert('Agrega una descripción detallada del producto');
                }
            })
        }
    })

    imgMod.addEventListener('change', function () {
        var filePath = this.value;
        var allowedExtensions = /(.jpg||.jpeg||.png||.gif)$/i;
        if (!allowedExtensions.exec(filePath)) {
            errors.push('Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.');
            errors.forEach(error => {
                if(error == 'Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.'){
                   smallImageAdd.innerHTML += `${error}`
                    alert('Agrega una descripción detallada del producto');
                }
            })
            fileInput.value = '';
            return false;
        } 
        //else {  alert('Extensión correcta.');
        //  return true; }
    })

    price.addEventListener('blur', function(){
        errors.push('Debe asignar el precio');
        errors.forEach(error => {
            if(error == 'Debe asignar el precio'){
               smallPriceAdd.innerHTML += `${error}`
                alert('Debe asignar el precio');
            }
        })
    })

    btnSubmitAdd.addEventListener('click', function (event) {
        event.preventDefault();
       
        if (productName.value.length < 5) {
            productName.alert('El nombre debe tener al menos 5 carácteres');
            errors.productName = 'El nombre debe tener al menos 5 carácteres';
        }
        else if (shortDescription.value.length < 10) {
            shortDescription.alert('La descripción corta debe tener mínimo 10 carácteres');
            errors.shortDescription = ('La descripción corta debe tener mínimo 10 carácteres');
        }
        else if (longDescription.value.length < 20) {
            longDescription.alert('La descripción larga debe tener mínimo 20 carácteres');
            errors.longDescription = ('La descripción larga debe tener mínimo 20 carácteres');
        }
        else if (price.value.length > 6) {
            price.alert('El precio del producto es mayor a 6 cifras, si esto es correcto contacta al administrador');
            errors.price = ('El precio del producto es mayor a 6 cifras, si esto es correcto contacta al administrador');
        }
        else {
            formEdit.submit();
        }
    })
});
