function yesRegister(req, res, next) {
  let ruta = req.url;
  //console.log(ruta)
  if (ruta === `/indexVendedor` && req.session.user == undefined) {
    res.redirect("/");
  }

  if (ruta === `/indexVendedor` && req.session.user != undefined) {
    if (req.session.user.category === "Comprador") {
      res.redirect("/");
    }
  }

  if (req.session.user != undefined) {
    if (req.session.user.category === "Comprador") {
      let arraySplit = ruta.split("/");
      for (let i = 0; i < arraySplit.lenght; i++) {
        if (arraySplit[i] === "create" || arraySplit[i] === "edit") {
          res.redirect("/");
        }
      }
    }
  }

  next();
}

module.exports = yesRegister;
