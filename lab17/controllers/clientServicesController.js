const ShoppingCart = require("../models/shoppingCart");

exports.get_services = (req, res, next) => {
  const cartContent = ShoppingCart.getCartProducts();

  res.render("services", {
    cartLength: cartContent.length,
    session: req.session,
  });
};
