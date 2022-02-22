const path = require('path');
const fs = require('fs');

function getCookiesMiddleware(req, res, next) {

  next();
}

module.exports = getCookiesMiddleware;
