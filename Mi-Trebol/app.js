
// Requiriendo los modulos a utilizar, estableciendo variables, requiriendo rutas 
let express = require('express');
let path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE



// ************ express() - (don't touch) ************
let app = express();
let port = 3000;


// ************ Middlewares - (don't touch) ************


app.use(express.static(path.resolve(__dirname,'./public'))); // Ruta para utilizar los recursos de la carpeta public
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE






// Configuramos EJS como el template engine de la app.

app.set('views', path.join(__dirname, './views'));
app.set('views enginen', 'ejs');

// LLamado a las paginas web para usarse

const index = require('./routes/indexRoute');
const productsRoute = require('./routes/productsRoute');
const user = require('./routes/usersRoute');

app.use('/', index);
app.use('/products', productsRoute);
app.use('/users', user);


// Definiendo el puerto de arranque

app.listen(port,() => {
    console.log(`Servidor corriendo -> ${port}`)
});


