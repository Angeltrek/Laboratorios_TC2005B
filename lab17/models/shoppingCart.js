const bcrypt = require("bcrypt");
const db = require("../util/database");

class ShoppingCart {
  getCart(IdUser) {
    return db.execute(
      "SELECT * FROM product AS p JOIN includes AS i ON p.IdProduct = i.IdProduct JOIN cart AS c ON i.IdCart = c.IdCart WHERE c.IdUser = ?",
      [IdUser]
    );
  }

  getIdCart(IdUser) {
    return db.execute("SELECT IdCart FROM cart WHERE IdUser = ?", [IdUser]);
  }

  checkIfAdded(IdCart, IdProduct) {
    return db.execute(
      "SELECT * FROM includes WHERE IdCart = ? AND IdProduct = ?",
      [IdCart, IdProduct]
    );
  }

  addToCart(product, IdCart) {
    const currentDate = new Date();

    const formattedDate = currentDate.toISOString().split("T")[0];

    return db.execute(
      "INSERT INTO includes (IdCart, IdProduct, price, quantity, discount, total, date) VALUES(?, ?, ?, ?, ?, ?, ?)",
      [
        IdCart,
        parseFloat(product.IdProduct),
        parseFloat(product.price),
        1,
        parseFloat(product.discount),
        parseFloat(product.price),
        formattedDate,
      ]
    );
  }

  updateCart(IdCart, added) {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    const quantity = parseInt(added.quantity) + 1;
    const price = parseFloat(added.price);
    const discount = parseFloat(added.discount);
    const total = parseFloat(added.total) + price;
    console.log(total);
    return db.execute(
      "UPDATE includes SET quantity = ?, price = ?, discount = ?, total = ?, date = ? WHERE IdCart = ?",
      [quantity, price, discount, total.toFixed(2), formattedDate, IdCart]
    );
  }
}

module.exports = new ShoppingCart();
