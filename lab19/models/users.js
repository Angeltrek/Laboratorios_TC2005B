const bcrypt = require("bcrypt");
const db = require("../util/database");

class Users {
  async login(email, password) {
    try {
      const [user, metadata] = await db.execute(
        "SELECT IdUser, password FROM User WHERE email = ?",
        [email]
      );

      if (user.length === 0) {
        return null;
      }

      const hashedPassword = user[0].password;

      const passwordMatch = await bcrypt.compare(password, hashedPassword);

      if (passwordMatch) {
        return user[0].IdUser;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      throw error;
    }
  }

  async createUser(
    firstName,
    lastName,
    age,
    gender,
    email,
    username,
    password
  ) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await db.execute(
        "INSERT INTO User (firstName, lastName, age, gender, email, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [firstName, lastName, age, gender, email, username, hashedPassword]
      );
    } catch (error) {
      console.log(error);
      throw new Error("Error, cannot register the user");
    }
  }

  async setRole(email, role) {
    try {
      await db.execute(
        "INSERT INTO Have (IdUser, IdRole) VALUES ((SELECT IdUser FROM User WHERE email = ?), ?);",
        [email, role]
      );
    } catch (error) {
      console.error(error);
    }
  }

  async getRole(IdUser) {
    try {
      return await db.execute("SELECT IdRole FROM Have WHERE IdUser = ?;", [
        IdUser,
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  async setSellerRole(IdUser) {
    try {
      await db.execute("UPDATE Have SET IdRole = 2 WHERE IdUser = ?;", [
        IdUser,
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  async createSeller(IdUser, phone, address) {
    try {
      await db.execute(
        "INSERT INTO Seller (IdUser, earnings, phone, address) VALUES (?, ?, ?, ?);",
        [IdUser, 0.0, phone, address]
      );
    } catch (error) {
      console.error(error);
    }
  }

  async getPrivileges(IdRole) {
    try {
      return await db.execute(
        "SELECT descriptionPrivilege FROM Privilege AS p JOIN Own AS o ON o.IdPrivilege = p.IdPrivilege WHERE o.IdRole = ?;",
        [IdRole]
      );
    } catch (error) {
      console.error(error);
    }
  }

  async getName(IdUser) {
    return await db.execute("SELECT firstName FROM User WHERE IdUser = ?", [
      IdUser,
    ]);
  }
}

module.exports = new Users();
