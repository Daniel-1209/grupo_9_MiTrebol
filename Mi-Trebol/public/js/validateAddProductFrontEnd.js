window.addEventListener('load', function () {
    let formEdit = document.querySelector('#formEdit');
    let productName = document.querySelector('#text');
    let shortDescription = document.querySelector('#text2');
    let longDescription = document.querySelector('#text3');
    let imgMod = document.querySelector('#imgMod');
    let price = document.querySelector('#price');
    let btnSubmitAdd = document.querySelector('#submitAdd');
    let smallNameAdd = document.querySelector('.erNameAdd ul');
    let smallShortAdd = document.querySelector('.erShortAdd ul');
    let smallLongAdd = document.querySelector('.erLongAdd ul');
    let smallImageAdd = document.querySelector('.erImageAdd');
    let smallPriceAdd = document.querySelector('.erPriceAdd ul');
    var errors = [];

    productName.addEventListener('change', function () {
        let errorsName = [];
        let ermsg = 'Es necesario agregar el nombre del producto';
        let ermsgLength = 'El nombre debe tener mínimo 5 caráctres';
        if (productName.value == "") {
            errorsName.push(ermsg);
            errorsName.forEach(errorN => {
                if (errorN == ermsg) {
                    smallNameAdd.innerHTML += `<li><small class="text-danger">${errorN}</small></li>`
                }
            })
        } else if (productName.value.length < 5) {
            errorsName.push(ermsgLength);
            errorsName.forEach(errorN => {
                if (errorN == ermsgLength) {
                    smallNameAdd.innerHTML += `<li><small class="text-danger">${errorN}</small></li>`
                }
            })
        } else if (productName.value.length >= 5) {
            errorsName = [];
            smallNameAdd.innerHTML = '';
        }
    })

    shortDescription.addEventListener('change', function () {
        let errorsShort = [];
        let ermsg = 'Es necesario escribir una descripción corta';
        let erShortLength = 'La descripción corta debe tener mínimo 10 carácteres';

        if (shortDescription.value == "" || " " || shortDescription.value.length == 0) {
            errorsShort.push(ermsg);
            errorsShort.forEach(errorS => {
                if (errorS == ermsg) {
                    smallShortAdd.innerHTML += `<li><small class="text-danger">${errorS}</small></li>`
                }
            })
        } else if (shortDescription.value.length < 10) {
            errorsShort.push(erShortLength);
            errorsShort.forEach(errorS => {
                if (errorS == erShortLength) {
                    smallShortAdd.innerHTML += `<li><small class="text-danger">${errorS}</small></li>`
                }
            })
        } else if (shortDescription.value.length >= 10) {
            errorsShort = [];
            smallShortAdd.innerHTML = '';
        }

    })

    longDescription.addEventListener('change', function () {
        let errorsLong =[];
        let ermsg = 'Agrega una descripción detallada del producto';
        let ermsgLength = 'La descripción larga debe tener mínimo 20 carácteres';
        if (longDescription.value == "" || longDescription.value.length == 0) {
            errorsLong.push(ermsg);
            errorsLong.forEach(errorL => {
                if (errorL == ermsg) {
                    smallLongAdd.innerHTML += `<li><small class="text-danger">${errorL}</small></li>`
                   
                }
            })
        } else if (longDescription.value.length < 20) {
            errorsLong.push(ermsgLength);
            errorsLong.forEach(errorL => {
                if (errorL == ermsgLength) {
                    smallLongAdd.innerHTML += `<li><small class="text-danger">${errorL}</small></li>`
                   
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
                if (error == 'Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.') {
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

    price.addEventListener('blur', function () {
        errors.push('Debe asignar el precio');
        errors.forEach(error => {
            if (error == 'Debe asignar el precio') {
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
})

