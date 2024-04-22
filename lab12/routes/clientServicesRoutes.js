const express = require("express");
const router = express.Router();
const ShoppingCart = require("../shoppingCart");

router.get("/", (req, res, next) => {
  const cartContent = ShoppingCart.getCartProducts();

  res.render("services", {
    cartLength: cartContent.length,
  });
});

module.exports = router;
