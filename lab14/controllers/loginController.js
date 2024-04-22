const ShoppingCart = require("../models/shoppingCart");
const Users = require("../models/users");

exports.get_login = (req, res, next) => {
  const cartContent = ShoppingCart.getCartProducts();

  res.render("login", {
    cartLength: cartContent.length,
    session: req.session,
    messages: req.flash(),
  });
};

exports.session = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await Users.login(username, password);

    const sessionData = req.session;

    sessionData.username = user.username;

    req.flash("success", "¡Inicio de sesión exitoso!");

    res.cookie('address', `${user.address.address}`);

    res.redirect("/");
  } catch (error) {
    req.flash("error", "Nombre de usuario o contraseña incorrectos");

    console.error("Error obteniendo usuario:", error);
    res.redirect("/login");
  }
};

exports.logout = (req, res, next) => {
  req.session.destroy(() => {
      res.redirect('/');
  });
};