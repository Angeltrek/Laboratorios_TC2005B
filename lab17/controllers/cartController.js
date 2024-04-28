const session = require("express-session");
const ShoppingCart = require("../models/shoppingCart");

exports.get_cart = async (req, res, next) => {
  const IdUser = req.session.IdUser;

  if (IdUser) {
    const [cartProducts, metadata] = await ShoppingCart.getCart(
      req.session.IdUser
    );

    const totalPrice = cartProducts.reduce((total, product) => {
      return (
        total +
        product.price *
          (1 - product.discountPercentage / 100) *
          product.quantity
      );
    }, 0);

    res.render("cart", {
      active: "cart",
      session: req.session,
      cartProducts: cartProducts,
      totalPrice: totalPrice,
    });
  } else {
    res.redirect("/");
  }
};

exports.pay_cart = (req, res, next) => {
  const cartContent = ShoppingCart.getCartProducts();
  const address = req.cookies.address;

  res.render("checkout", {
    active: "cart",
    session: req.session,
    cartProducts: cartProducts,
  });
};
