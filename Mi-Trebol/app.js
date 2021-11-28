
// Requiriendo los modulos a utilizar, estableciendo variables, requiriendo rutas 
let express = require('express');
let path = require('path');

let producCar = require('./routes/producCarRoute');
let index = require('./routes/indexRoute');

let app = express();
let port = 3030;

// Ruta para utilizar los recursos de la carpeta public

app.use(express.static(path.resolve(__dirname,'./public')));

// Configuramos EJS como el template engine de la app.

app.set('views', path.join(__dirname, './views'));
app.set('views enginen', 'ejs');

// LLamado a las paginas web para usarse

app.use('/', index);
app.use('/productCart', producCar);

// Definiendo el puerto de arranque

app.listen(port,() => {
    console.log(`Servidor corriendo -> ${port}`)
});


