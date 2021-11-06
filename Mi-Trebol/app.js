
// Requiriendo los modulos a utilizar y estableciendo variables
let express = require('express');
let path = require('path');

let app = express();
let port = 3030;

// Ruta para utilizar los recursos de la carpeta public

app.use(express.static(path.resolve(__dirname,'./public')));

// Definiendo el puerto de arranque

app.listen(port,() => {
    console.log(`Servidor corriendo -> ${port}`)
});

// Definiendo las rutas de los archivos

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

