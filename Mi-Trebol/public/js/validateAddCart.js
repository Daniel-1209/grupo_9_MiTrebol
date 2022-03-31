window.addEventListener('load', function () {

    let purchaseType = document.querySelector('#purchaseType');
    let deliveryType = document.querySelector('#deliveryType');
    let quantity = document.querySelector('#cantidad');
    let submit = document.querySelector('#submitDetail');
    let formDetail = document.querySelector('#bttn0_al_carrito');

    //Div para el mensaje de error//
    let sPurchase = document.querySelector('.erPurchase');
    let sDelivery = document.querySelector('.erDelivery');
    let sQuantity = document.querySelector('.erQuantity');
    let errors = [];

    // mensaje sde error//
    let purchE = 'Selecciona el tipo de compra';
    let delivE = 'Selecciona el tipo de envio ';
    let quantE = 'Define la cantidad de productos a comprar';

    //sName.innerHTML += `<li><small class="text-danger">${ermsg}</small></li>`

    purchaseType.addEventListener('change', function () {
        if (this.value != '1' && this.value != '2') {
            console.log(this.value)
            errors.push(purchE);
            sPurchase.innerHTML += `<li><small class="text-danger">${purchE}</small></li>`
        } else if(this.value == '1' || this.value == '2'){
            if (errors.includes(purchE)) {
                let iError = errors.indexOf(purchE);
                errors.splice(iError, 1);
                sPurchase.innerHTML = '';
            }else {
                return
            }
        }
    });
    purchaseType.addEventListener('blur', function () {
        if (this.value != '1' && this.value != '2') {
            //console.log(this.value)
            if (!errors.includes(purchE)) {
                errors.push(purchE);
                sPurchase.innerHTML += `<li><small class="text-danger">${purchE}</small></li>`
            } else {
                return
            }
        } else if (this.value == '1' || this.value == '2') {
            if (errors.includes(purchE)) {
                let iError = errors.indexOf(purchE);
                errors.splice(iError, 1);
                sPurchase.innerHTML = '';
            } else {
                return
            }
        }
    });

    deliveryType.addEventListener('change', function () {
        if (this.value != 'A domicilio' && this.value != 'Recoger en tienda') {
            errors.push(delivE);
            sDelivery.innerHTML += `<li><small class="text-danger">${delivE}</small></li>`
        } else if (errors.includes(delivE)) {
            let iError = errors.indexOf(delivE);
            errors.splice(iError, 1);
            sDelivery.innerHTML = '';
        }
    });

    deliveryType.addEventListener('blur', function () {
        if (this.value != 'A domicilio' && this.value != 'Recoger en tienda') {
            //console.log(this.value)
            if (!errors.includes(delivE)) {
                errors.push(delivE);
                sDelivery.innerHTML += `<li><small class="text-danger">${delivE}</small></li>`
            } else {
                return
            }
        } else if (this.value == 'A domicilio' || this.value == 'Recoger en tienda') {
            if (errors.includes(delivE)) {
                let iError = errors.indexOf(delivE);
                errors.splice(iError, 1);
                sDelivery.innerHTML = '';
            } else {
                return
            }
        }
    });

    quantity.addEventListener('blur', function () {
        if (this.value == '') {
            if (!errors.includes(quantE)) {
                errors.push(quantE);
                sDelivery.innerHTML += `<li><small class="text-danger">${quantE}</small></li>`
            } else {
                return
            }
        } else if( quantity.value != ''){
            if (errors.includes(quantE)) {
                let iError = errors.indexOf(quantE);
                errors.splice(iError, 1);
                console.log('despues de slice:', errors)
                sQuantity.innerHTML = '';
            } else {
                return
            }
        }

    });

    submit.addEventListener('click', function (e) {
        e.preventDefault();

        if (errors.length > 0) {
            console.log(errors)
        } else if (quantity.value == '') {
            errors.push(quantE);
            sDelivery.innerHTML += `<li><small class="text-danger">${quantE}</small></li>`
        } else if (purchaseType.value == 'Selecciona tu tipo de compra') {
           errors.push(purchE);
            sPurchase.innerHTML += `<li><small class="text-danger">${purchE}</small></li>`
        }
         else if (deliveryType.value == 'Selecciona tu tipo de envío') {
            errors.push(delivE);
            sDelivery.innerHTML += `<li><small class="text-danger">${delivE}</small></li>`
        } else {
            formDetail.submit();
        }
    })
});
