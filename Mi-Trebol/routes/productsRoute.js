
let express = require('express');
const path = require('path');
let router = express.Router();
let multer = require('multer');


let productsController = require('../controllers/productsController');

// Requiriendo middleawares
const noRegisterMiddleaware = require("../Middleaweares/noRegisterMiddleaware");

// Se crea el metodo para guardar los archivos de imagen con multer
// Configura la carpeta donde el server guardará las imagenes de los perfiles
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname,'../public/img' )
        cb(null, folder);
    },
    filename:(req, file, cb) => {
        // Establece un nombre a las imagenes segun fecha en mili seg, agrega un string identificador y usa la extension del mismo archivo
        
        let imageProducto = 'Producto-' + Date.now()+ path.extname(file.originalname);
        cb(null, imageProducto) ; 
    }
});

// Se crea la variable que saca la operacion de storange

let uploadFile = multer({storage: storage});



//Todos los productos
router.get('/', productsController.home);

//Todos los productos por categoria
router.get('/:idCategory', productsController.category);

// Detalle de los productos por id
router.get('/detail/:id', productsController.detail);

// Buscar producto
router.get('/search',productsController.search );

// Carrito de compras
router.get('/cart', productsController.car);
// Agregando un nuevo producto al carrito
router.post('/cart/:id',noRegisterMiddleaware, productsController.newCarProduct);
// Eliminar un nuevo producto al carrito
router.delete('/cart/delete/:id',noRegisterMiddleaware, productsController.deleteCarProduct);

// Editar detalles del producto vista
router.get('/edit/:id', productsController.edit);
// Editar detalle del producto post
router.post('/edit/:id',  uploadFile.single('productoImage'), productsController.update);

// Eliminar producto
router.delete('/edit/:id/eliminar', productsController.delete);


module.exports =  router;