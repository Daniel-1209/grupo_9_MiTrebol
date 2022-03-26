window.addEventListener('load', function () {
    let formAddTag = document.querySelector('#formAdd');
    let nameTag = document.querySelector('#name');
    let shorTextTag = document.querySelector('#shortText');
    let longText = document.querySelector('#longText');
    let imgMod = document.querySelector('#imgMod');
    let price = document.querySelector('#price');
    let btnSubmitAdd = document.querySelector('#submitAdd')
    
    // div de errores
    let sName = document.querySelector('.erNameAdd ul');
    let sShort = document.querySelector('.erShortAdd ul');
    let sLong = document.querySelector('.erLongAdd ul');
    let sImage = document.querySelector('.erImageAdd ul');
    let sPrice = document.querySelector('.erPriceAdd ul');
    var errors = [];
    var errorsName = [];
    var errorsShort = [];
    var errorsLong = [];

    // mensajes de error // 
    let erMsg = 'Favor de agregar el nombre del producto';
    let erMsgLength = 'El nombre debe tener mínimo 5 caráctres';
    let erShortEmpty = 'Favor de agregar una descripción corta del producto';
    let erShortLength = 'La descripción corta debe tener mínimo 10 caráctres';
    let erLongEmpty = 'Favor de agregar una descripción detallada del producto';
    let erLongLength = 'La descripción corta debe tener mínimo 20 caráctres';
    let erImg = 'Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif';
    let erPriceBlur = 'Debe asignar el precio';
    let erPriceInvalid = 'Precio Inválido. Si el precio es correcto, favor de contactar al administrador'
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
    });
    nameTag.addEventListener('blur', function () {
        if (nameTag.value.length == 0) {
            if (!errorsName.includes(erMsg)) {
                errorsName.push(erMsg);
                sName.innerHTML += `<li><small class="text-danger">${erMsg}</small></li>`;
            } else {
                return
            }
        } else {
            return
        }
    });


    shorTextTag.addEventListener('change', function () {
        console.log('hubo cambio en descripción corta')
        if (shorTextTag.value.length == 0) {
            console.log('Shortext.length == 0')
            if (errorsShort.length > 0) {
                if (errorsShort.includes(erShortLength)) {
                    let iError = errorsShort.indexOf(erShortLength);
                    errorsShort.splice(iError, 1);
                    sShort.innerHTML = '';
                    if (!errorsShort.includes(erShortEmpty)) {
                        errorsShort.push(erShortEmpty);
                        sShort.innerHTML += `<li><small class="text-danger">${erShortEmpty}</small></li>`
                    } else {
                        return
                    }
                } else if (!errorsShort.includes(erShortEmpty)) {
                    errorsShort.push(erShortEmpty);
                    sShort.innerHTML += `<li><small class="text-danger">${erShortEmpty}</small></li>`
                } else {
                    return
                }
                console.log(errorsShort);
            } else {
                errorsShort.push(erShortEmpty);
                sShort.innerHTML += `<li><small class="text-danger">${erShortEmpty}</small></li>`
            }
        } else if (shorTextTag.value.length > 0 && shorTextTag.value.length < 10) {
            if (errorsShort.length > 0) {
                if (errorsShort.includes(erShortEmpty)) {
                    let iError = errorsShort.indexOf(erShortEmpty);
                    errorsShort.splice(iError, 1);
                    sShort.innerHTML = '';
                    if (!errorsShort.includes(erShortLength)) {
                        errorsShort.push(erShortLength);
                        sShort.innerHTML += `<li><small class="text-danger">${erShortLength}</small></li>`
                    } else {
                        return
                    }
                } else if (!errorsShort.includes(erShortLength)) {
                    errorsShort.push(erShortLength);
                    sShort.innerHTML += `<li><small class="text-danger">${erShortLength}</small></li>`
                } else {
                    return
                }
                console.log(errorsShort);
            } else if (errorsShort.length == 0) {
                console.log('estoy en if errores = 0 de short')
                errorsShort.push(erShortLength);
                sShort.innerHTML += `<li><small class="text-danger">${erShortLength}</small></li>`
            }
        } else if (shorTextTag.value.length >= 10) {
            errorsShort = [];
            sShort.innerHTML = '';
        }
    });
    shorTextTag.addEventListener('blur', function () {
        if (shorTextTag.value.length == 0) {
            if (!errorsShort.includes(erShortEmpty)) {
                errorsShort.push(erShortEmpty);
                sShort.innerHTML += `<li><small class="text-danger">${erShortEmpty}</small></li>`;
            } else {
                return
            }
        } else {
            return
        }
    });

    longText.addEventListener('change', function () {
        console.log('hubo cambio en descripción larga')
        if (longText.value.length == 0) {
            if (errorsLong.length > 0) {
                if (errorsLong.includes(erLongLength)) {
                    let iError = errorsLong.indexOf(erLongLength);
                    errorsLong.splice(iError, 1);
                    sLong.innerHTML = '';
                    if (!errorsLong.includes(erLongEmpty)) {
                        errorsLong.push(erLongEmpty);
                        sLong.innerHTML += `<li><small class="text-danger">${erLongEmpty}</small></li>`
                    } else {
                        return
                    }
                } else if (!errorsLong.includes(erLongEmpty)) {
                    errorsLong.push(erLongEmpty);
                    sLong.innerHTML += `<li><small class="text-danger">${erLongEmpty}</small></li>`
                } else {
                    return
                }
                console.log(errorsLong);
            } else {
                errorsLong.push(erLongEmpty);
                sLong.innerHTML += `<li><small class="text-danger">${erLongEmpty}</small></li>`
            }
        } else if (longText.value.length > 0 && longText.value.length < 20) {
            if (errorsLong.length > 0) {
                if (errorsLong.includes(erLongEmpty)) {
                    let iError = errorsLong.indexOf(erLongEmpty);
                    errorsLong.splice(iError, 1);
                    sLong.innerHTML = '';
                    if (!errorsLong.includes(erLongLength)) {
                        errorsLong.push(erLongLength);
                        sLong.innerHTML += `<li><small class="text-danger">${erLongLength}</small></li>`
                    } else {
                        return
                    }
                } else if (!errorsLong.includes(erLongLength)) {
                    errorsLong.push(erLongLength);
                    sLong.innerHTML += `<li><small class="text-danger">${erLongLength}</small></li>`
                } else {
                    return
                }
                console.log(errorsLong);
            } else if (errorsLong.length == 0) {
                console.log('estoy en if errores = 0 de short')
                errorsLong.push(erLongLength);
                sLong.innerHTML += `<li><small class="text-danger">${erLongLength}</small></li>`
            }
        } else if (longText.value.length >= 20) {
            errorsLong = [];
            sLong.innerHTML = '';
        }
    });
    longText.addEventListener('blur', function () {
        if (shorTextTag.value.length == 0) {
            if (!errorsLong.includes(erLongEmpty)) {
                errorsLong.push(erLongEmpty);
                sLong.innerHTML += `<li><small class="text-danger">${erLongEmpty}</small></li>`;
            } else {
                return
            }
        } else {
            return
        }
    });

    imgMod.addEventListener('change', function () {
        var filePath = this.value;
        console.log(filePath);
        var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if (!allowedExtensions.exec(filePath)) {
            if (!errors.includes(erImg)) {
                errors.push(erImg);
                sImage.innerHTML += `<li><small class="text-danger">${erImg}</small></li>`
            }
            else if (errors.includes(erImg)) {
                return
            }
        } else if (errors.includes(erImg)) {
            let iError = errors.indexOf(erImg);
            errors.splice(iError, 1);
            sImage.innerHTML = '';
        }
    });

    price.addEventListener('change', function () {
        if (price.value.length > 0 && price.value.length <= 6) {
            let iE1 = errors.indexOf(erPriceInvalid);
            let iE2 = errors.indexOf(erPriceBlur);
            errors.splice(iE1, 1);
            errors.splice(iE2, 1);
            sPrice.innerHTML = '';
        } else if (price.value.length > 6) {
            let iE2 = errors.indexOf(erPriceBlur);
            errors.splice(iE2, 1);
            sPrice.innerHTML = '';
            if (!errors.includes(erPriceInvalid)) {
                errors.push(erPriceInvalid);
                sPrice.innerHTML += `<li><small class="text-danger">${erPriceInvalid}</small></li>`
            } else {
                return
            }
        } else {
            return
        }
    });
    price.addEventListener('blur', function () {
        if (price.value.length == 0) {
            if (errors.includes(erPriceInvalid)) {
                let iE = errors.indexOf(erPriceInvalid);
                errors.splice(iE, 1);
                sPrice.innerHTML = '';
                if (!errors.includes(erPriceBlur)) {
                    errors.push(erPriceBlur);
                    sPrice.innerHTML += `<li><small class="text-danger">${erPriceBlur}</small></li>`;
                } else {
                    return
                }
            } else if (!errors.includes(erPriceBlur)) {
                    errors.push(erPriceBlur);
                    sPrice.innerHTML += `<li><small class="text-danger">${erPriceBlur}</small></li>`;;
                } else {
                    return
                }
        }
    })


    // ESCUCHA BOTÓN SUBMIT ENVIO DE FORMULARIO //
    btnSubmitAdd.addEventListener('click', function (evento) {
        evento.preventDefault();

        if (nameTag.value.length < 5) {
            errorsName.erMsgLength = erMsgLength;
        }
        else if (shorTextTag.value.length < 10) {
            errorsShort.erShortLength = erShortLength;
        }
        else if (longText.value.length < 20) {
            errorsLong.errorsLong = errorsLong;
        }
        else if (price.value.length > 6) {
            errors.erPriceInvalid = erPriceInvalid;
        }
        else {
            formAddTag.submit();
        }
    });
});

