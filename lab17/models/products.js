const db = require("../util/database");
class Products {
  getAllProducts() {
    return db.execute("SELECT * FROM Product");
  }

  getProduct(IdProduct) {
    return db.execute("SELECT * FROM Product WHERE IdProduct = ?", [IdProduct]);
  }
}

module.exports = new Products();
