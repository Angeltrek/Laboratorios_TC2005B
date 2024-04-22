const express = require("express");
const router = express.Router();
const ShoppingCart = require("../shoppingCart");

router.get("/", (req, res, next) => {
  const cartContent = ShoppingCart.getCartProducts();

  const totalPrice = cartContent.reduce((total, product) => {
    return total + product.price * (1 - product.discountPercentage / 100);
  }, 0);

  res.render("cart", {
    cartProducts: cartContent,
    cartLength: cartContent.length,
    totalPrice: totalPrice,
  });
});

router.get("/pay", (req, res, next) => {
  const cartContent = ShoppingCart.getCartProducts();

  res.render("checkout", {
    cartLength: cartContent.length,
  });
});

module.exports = router;
