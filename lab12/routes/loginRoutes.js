const express = require("express");
const router = express.Router();
const ShoppingCart = require("../shoppingCart");
const Users = require("../users");

router.get("/", (req, res, next) => {
  const cartContent = ShoppingCart.getCartProducts();

  res.render("login", {
    cartLength: cartContent.length,
  });
});

router.post("/session", async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await Users.login(username, password);

    // Si el inicio de sesión es exitoso, redirige a la página de inicio
    res.redirect("/");
  } catch (error) {
    console.error("Error obteniendo usuario:", error);
    // Si hay un error en el inicio de sesión, redirige de nuevo a la página de inicio de sesión
    res.redirect("/login");
  }
});

module.exports = router;
