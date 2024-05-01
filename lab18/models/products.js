const db = require("../util/database");
class Products {
  async getAllProducts() {
    return await db.execute("SELECT * FROM Product");
  }

  async getProduct(IdProduct) {
    return await db.execute("SELECT * FROM Product WHERE IdProduct = ?", [
      IdProduct,
    ]);
  }
}

module.exports = new Products();
