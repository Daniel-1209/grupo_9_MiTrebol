
window.addEventListener('load', function () {
    let formEdit = document.querySelector('#formEdit');
    let productName = document.querySelector('#text');
    let shortDescription = document.querySelector('#text2');
    let longDescription = document.querySelector('#text3');
    let imgMod = document.querySelector('#imgMod');
    let price = document.querySelector('#price');
    let btnSubmit = document.querySelector('#submitEdit');
    let smallNameTag = document.querySelector('.smallErName small');
    let smallShortTag = document.querySelector('.erShortDes');
    let smallLongTag = document.querySelector('.erLongDes');
    let smallImage = document.querySelector('.erImage');
    let smallPrice = document.querySelector('.erPrice');
    var errors = [];

    productName.addEventListener('change', function (){
        if(productName.value == ""){
            errors.push('Es necesario agregar el nombre del producto');
            errors.forEach(error => {
                if(error == 'Es necesario agregar el nombre del producto'){
                   smallNameTag.innerHTML += `${error}`
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
                   smallShortTag.innerHTML += `${error}`
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
                   smallLongTag.innerHTML += `${error}`
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
                   smallImage.innerHTML += `${error}`
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
               smallPrice.innerHTML += `${error}`
                alert('Debe asignar el precio');
            }
        })
    })

    btnSubmit.addEventListener('click', function (evento) {
        evento.preventDefault();
        
        if (productName.value.length < 5) {
            alert('El nombre debe tener al menos 5 carácteres');
            errors.productName = 'El nombre debe tener al menos 5 carácteres';
        }
        else if (shortDescription.value.length < 10) {
            alert('La descripción corta debe tener mínimo 10 carácteres');
            errors.shortDescription = ('La descripción corta debe tener mínimo 10 carácteres');
        }
        else if (longDescription.value.length < 20) {
            alert('La descripción larga debe tener mínimo 20 carácteres');
            errors.longDescription = ('La descripción larga debe tener mínimo 20 carácteres');
        }
        else if (price.value.length > 6) {
            alert('El precio del producto es mayor a 6 cifras, si esto es correcto contacta al administrador');
            errors.price = ('El precio del producto es mayor a 6 cifras, si esto es correcto contacta al administrador');
        }
        else {
            formEdit.submit();
        }
    })
});
