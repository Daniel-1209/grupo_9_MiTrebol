window.addEventListener('load', function(){
    let formEdit = document.querySelector('#formEdit');
    let productName = document.querySelector('#text');
    let shortDescription = document.querySelector('#text2');
    let longDescription = document.querySelector('#text3');
    let imgMod = document.querySelector('#imgMod');
    let price = document.querySelector('#price');
    let btnSubmit = document.querySelector('#submitEdit');
    console.log(imgMod);
    console.log(shortDescription);
    console.log(btnSubmit);

    productName.addEventListener('blur', function(){
        alert('Este campo es obligatorio');
        })
        shortDescription.onBlur = () => {
            this.alert('Este campo es obligatorio');
        }
        longDescription.onBlur = () => {
            this.alert('Este campo es obligatorio');
        }
        imgMod.onBlur = () => {
            this.alert('Es necesario añadir una imagen');
        }
        imgMod.addEventListener('change', function(){
            var filePath = this.value;
            var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
            if(!allowedExtensions.exec(filePath)){
                alert('Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.');
                fileInput.value = '';
                return false;
            }else{
                alert('Extensión correcta.');
                return true;
            }
        })
        price.onBlur = () => {
            this.alert('Este campo es obligatorio');
        }
    
        btnSubmit.addEventListener('click', function(event){
            event.preventDefault();
            let errors = {}
            if(productName.value.length < 5){
                productName.alert('El nombre debe tener al menos 5 carácteres');
                errors.productName = 'El nombre debe tener al menos 5 carácteres';
            }
            else if(shortDescription.value.length < 10){
                shortDescription.alert('Este campo debe tener mínimo 10 carácteres');
                errors.shortDescription = ('Este campo debe tener mínimo 10 carácteres');
            }
            else if(longDescription.value.length < 20){
                longDescription.alert('Este campo debe tener mínimo 20 carácteres');
                errors.longDescription = ('Este campo debe tener mínimo 20 carácteres');
            }
            else if(price.value.length > 6){
                price.alert('El precio del producto es mayor a 6 cifras, si esto es correcto contacta al administrador');
                errors.price = ('El precio del producto es mayor a 6 cifras, si esto es correcto contacta al administrador');
            }
            else{
                formEdit.submit();
            }
        })
    });
    
})