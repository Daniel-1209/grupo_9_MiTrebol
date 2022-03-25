window.addEventListener('load', function () {
    let formEditTag = document.querySelector('#formAdd');
    let nameTag = document.querySelector('#name');
    let shorTextTag = document.querySelector('#shortText');
    //let longText = document.querySelector('#longText');
    //let imgMod = document.querySelector('#imgMod');
    let price = document.querySelector('#price');
    //let category = document.querySelector('')
    let btnSubmitAdd = document.querySelector('#submitAdd')
    let sName = document.querySelector('.erNameAdd ul');
    let sShort = document.querySelector('.erShortAdd ul');
    let smallLongAdd = document.querySelector('.erLongAdd ul');
    let smallImageAdd = document.querySelector('.erImageAdd');
    let smallPriceAdd = document.querySelector('.erPriceAdd ul');
    var errors = [];
    var errorsName = [];
    let erMsg = 'Es necesario agregar el nombre del producto';
    let erMsgLength = 'El nombre debe tener mínimo 5 caráctres';
    //sName.innerHTML += `<li><small class="text-danger">${ermsg}</small></li>`

    nameTag.addEventListener('change', function () {
        console.log('hubo cambio en name')
        if (nameTag.value.length == 0) {
            console.log('name.length == 0')
            if (errorsName.length > 0) {
                if (errorsName.includes(erMsgLength)) {
                    let iError = errorsName.indexOf(erMsgLength);
                    errorsName.splice(iError, 1);
                    sName.innerHTML = '';
                    if (!errorsName.includes(erMsg)) {
                        errorsName.push(erMsg);
                        sName.innerHTML += `<li><small class="text-danger">${erMsg}</small></li>`
                    } else {
                        return
                    }
                } else if (!errorsName.includes(erMsg)) {
                    errorsName.push(erMsg);
                    sName.innerHTML += `<li><small class="text-danger">${erMsg}</small></li>`
                } else {
                    return
                }
                console.log(errorsName);
            } else {
                errorsName.push(erMsg);
                sName.innerHTML += `<li><small class="text-danger">${erMsg}</small></li>`
            }
        } else if (nameTag.value.length > 0 && nameTag.value.length < 5) {
            if (errorsName.length > 0) {
                if (errorsName.includes(erMsg)) {
                    let iError = errorsName.indexOf(erMsg);
                    errorsName.splice(iError, 1);
                    sName.innerHTML = '';
                    if (!errorsName.includes(erMsgLength)) {
                        errorsName.push(erMsgLength);
                        sName.innerHTML += `<li><small class="text-danger">${erMsgLength}</small></li>`
                    } else {
                        return
                    }
                } else if (!errorsName.includes(erMsgLength)) {
                    errorsName.push(erMsgLength);
                    sName.innerHTML += `<li><small class="text-danger">${erMsgLength}</small></li>`
                } else {
                    return
                }
                console.log(errorsName);
            } else if (errorsName.length == 0) {
                console.log('estoy en if errores = 0')
                errorsName.push(erMsgLength);
                sName.innerHTML += `<li><small class="text-danger">${erMsgLength}</small></li>`
            }
        } else if (nameTag.value.length >= 5) {
            errorsName = [];
            sName.innerHTML = '';
        }
    })

    shorTextTag.addEventListener('change', function () {
        let errorsShort = [];
        let ermsg = 'Es necesario escribir una descripción corta';
        let erShortLength = 'La descripción corta debe tener mínimo 10 carácteres';

        if (shortDescription.value == "" || " " || shortDescription.value.length == 0) {
            errorsShort.push(ermsg);
            errorsShort.forEach(errorS => {
                if (errorS == ermsg) {
                    sShort.innerHTML += `<li><small class="text-danger">${errorS}</small></li>`
                }
            })
        } else if (shortDescription.value.length < 10) {
            errorsShort.push(erShortLength);
            errorsShort.forEach(errorS => {
                if (errorS == erShortLength) {
                    sName.innerHTML += `<li><small class="text-danger">${errorS}</small></li>`
                }
            })
        } else if (shortDescription.value.length >= 10) {
            errorsShort = [];
            sName.innerHTML = '';
        }

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

    // ESCUCHA BOTÓN SUBMIT ENVIO DE FORMULARIO //
    btnSubmitAdd.addEventListener('click', function (evento) {
        evento.preventDefault();

        if (productName.value.length < 5) {
            errors.productName = 'El nombre debe tener al menos 5 carácteres';
        }
        else if (shortDescription.value.length < 10) {
            errors.shortDescription = ('La descripción corta debe tener mínimo 10 carácteres');
        }
        else if (longDescription.value.length < 20) {
            errors.longDescription = ('La descripción larga debe tener mínimo 20 carácteres');
        }
        else if (price.value.length > 6) {
            errors.price = ('El precio del producto es mayor a 6 cifras, si esto es correcto contacta al administrador');
        }
        else {
            formEdit.submit();
        }
    })
})

