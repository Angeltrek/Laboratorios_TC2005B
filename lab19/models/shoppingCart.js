const bcrypt = require("bcrypt");
const db = require("../util/database");
const products = require("./products");

class ShoppingCart {
  async createCart(IdUser, date) {
    try {
      await db.execute(
        "INSERT INTO Cart (IdUser, IdPayment, orderNumber, orderDate, deleted, paid) VALUES (?, 1, 'ORD123', ?, FALSE, FALSE);",
        [IdUser, date]
      );
    } catch (error) {
      console.error(error);
    }
  }

  async getShoppingCart(IdUser) {
    return await db.execute(
      "SELECT * FROM Cart WHERE IdUser = ? AND NOT deleted AND NOT paid;",
      [IdUser]
    );
  }

  async addToCart(IdCart, product, date) {
    try {
      await db.execute(
        "INSERT INTO Includes (IdCart, IdProduct, price, quantity, discount, total, date) VALUES (?, ?, ?, ?, ?, ?, ?);",
        [
          IdCart,
          product.IdProduct,
          parseFloat(product.price),
          1,
          parseFloat(product.discountPercentage),
          parseFloat(product.price),
          date,
        ]
      );
    } catch (error) {
      console.error(error);
    }
  }

  async getCartProducts(IdCart, IdUser) {
    try {
      return await db.execute(
        "SELECT p.*, i.quantity FROM Product AS p JOIN Includes AS i ON p.IdProduct = i.IdProduct JOIN Cart AS c ON i.IdCart = c.IdCart WHERE c.IdCart = ? AND c.IdUser = ?;",
        [IdCart, IdUser]
      );
    } catch (error) {
      console.error(error);
    }
  }

  async getTotalCost(IdCart, IdUser) {
    try {
      return await db.execute(
        "SELECT SUM(total - (total * (discount / 100))) AS totalPrice FROM Includes AS i JOIN Cart AS c ON i.IdCart = c.IdCart WHERE c.IdUser = ? AND c.IdCart = ?;",
        [IdUser, IdCart]
      );
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new ShoppingCart();
