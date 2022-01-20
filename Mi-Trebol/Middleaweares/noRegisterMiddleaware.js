function yesRegister(req, res, next) {
  let ruta = req.url;
  let id = req.params.id;
  // console.log(id,ruta,`/products/cart/${id}` );
  if (ruta === `/cart/${id}` && req.session.user == undefined) {
    // window.alert("Ingresa para poder comprar");
    res.redirect("/");
  }

  next();
}

module.exports = yesRegister;
