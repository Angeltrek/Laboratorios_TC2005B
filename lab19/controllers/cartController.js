const ShoppingCart = require("../models/shoppingCart");

exports.get_cart = async (req, res, next) => {
  const IdUser = req.session.IdUser;
  const [cart, metadata1] = await ShoppingCart.getShoppingCart(IdUser);

  if (IdUser && cart) {
    const [cartProducts, metadata2] = await ShoppingCart.getCartProducts(
      cart[0].IdCart,
      IdUser
    );

    const [totalPrice, metadata3] = await ShoppingCart.getTotalCost(
      cart[0].IdCart,
      IdUser
    );

    res.render("cart", {
      active: "cart",
      session: req.session,
      cartProducts: cartProducts,
      totalPrice: totalPrice[0].totalPrice,
    });
  } else if (IdUser) {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];

    ShoppingCart.createCart(IdUser, formattedDate);

    res.redirect("/cart");
  } else {
    res.redirect("/");
  }
};

exports.pay_cart = (req, res, next) => {
  res.render("checkout", {
    active: "cart",
    session: req.session,
    cartProducts: cartProducts,
  });
};
