var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const methodOverride = require("method-override"); // Pasar poder usar los métodos PUT y DELETE
let session = require("express-session");

// Requiriendo middleawares
const noVendedorMiddleware = require("./Middleaweares/noVendedorMiddleware");
const noCompradorMiddleware = require("./Middleaweares/noCompradorMiddleware")
const getCookiesMiddleware = require('./Middleaweares/getCookiesMiddleware');

var app = express();

// ************ Middlewares - (don't touch) ************

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

app.use(session({ secret: "Secreto" })); // Para guardar un usuario con sesion

// Utilizando mis middleawares

app.use(noVendedorMiddleware);
app.use(noCompradorMiddleware);
app.use(getCookiesMiddleware);
// LLamado a las paginas web para usarse

const index = require("./routes/indexRoute");
const vendedor = require("./routes/vendedorRoute");
const productsRoute = require("./routes/productsRoute");
const user = require("./routes/usersRoute");
const { setServers } = require("dns");

app.use("/", index);
app.use("/indexVendedor", vendedor);
app.use("/products", productsRoute);
app.use("/users", user);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
