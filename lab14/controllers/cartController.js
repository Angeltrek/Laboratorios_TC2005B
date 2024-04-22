const ShoppingCart = require("../models/shoppingCart");

exports.get_cart = (req, res, next) => {
  const cartContent = ShoppingCart.getCartProducts();

  const totalPrice = cartContent.reduce((total, product) => {
    return total + product.price * (1 - product.discountPercentage / 100);
  }, 0);

  res.render("cart", {
    cartProducts: cartContent,
    cartLength: cartContent.length,
    totalPrice: totalPrice,
    session: req.session,
  });
};

exports.pay_cart = (req, res, next) => {
  const cartContent = ShoppingCart.getCartProducts();
  const address = req.cookies.address;
  
  res.render("checkout", {
    cartLength: cartContent.length,
    session: req.session,
    address: (address !== null ? address : "")
  });
};
