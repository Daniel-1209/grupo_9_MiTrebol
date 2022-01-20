function yesRegister(req, res, next) {
  let ruta = req.url;
  // console.log(ruta);
  if (ruta === "/login" && req.session.user != undefined) {
    res.redirect("/");
  }

  next();
}

module.exports = yesRegister;
