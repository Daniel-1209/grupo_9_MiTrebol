const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/usersList.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
function getCookiesMiddleware(req, res, next) {
  if (req.cookies && req.cookies['Mi-Trebol-User-Id']) {
    for (element of users) {
      if (element.id === req.cookies?.UserId) {
        req.session.user = element;
        break;
      }
    }
  }

  next();
}

module.exports = getCookiesMiddleware;
