const bcrypt = require("bcrypt");
const db = require("../util/database");

class Users {
  login(email, password) {
    return db.execute(
      "SELECT IdUser FROM User WHERE email = ? AND password = ?",
      [email, password]
    );
  }

  getName(IdUser) {
    return db.execute("SELECT firstName FROM User WHERE IdUser = ?", [IdUser]);
  }
}

module.exports = new Users();
