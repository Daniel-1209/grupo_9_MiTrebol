
// Requiriendo los modulos a utilizar, estableciendo variables, requiriendo rutas 
let express = require('express');
let path = require('path');



let index = require('./routes/indexRoute');
let products = require('./routes/productsRoute');
let user = require('./routes/usersRoute');


let app = express();
let port = 3030;

// Ruta para utilizar los recursos de la carpeta public

app.use(express.static(path.resolve(__dirname,'./public')));

// Configuramos EJS como el template engine de la app.

app.set('views', path.join(__dirname, './views'));
app.set('views enginen', 'ejs');

// LLamado a las paginas web para usarse

app.use('/', index);
app.use('/', products);
app.use('/', user);


// Definiendo el puerto de arranque

app.listen(port,() => {
    console.log(`Servidor corriendo -> ${port}`)
});


