const PRODUCTS_PER_PAGE = 10;
const Products = require("../models/products");
const ShoppingCart = require("../models/shoppingCart");

exports.get_home = async (req, res, next) => {
  try {
    const [products, metadata] = await Products.getAllProducts();

    res.render("home", {
      active: "home",
      session: req.session,
      products: products,
      currentPage: 0,
      totalPages: 10,
    });
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res
      .status(500)
      .json({ error: "Ocurrió un error al obtener los productos." });
  }
};

exports.addToCart = async (req, res) => {
  const IdUser = req.session.IdUser;
  const productId = req.params.productId;
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];
  const [cart, metadata1] = await ShoppingCart.getShoppingCart(IdUser);

  if (IdUser && cart.length > 0) {
    const IdCart = cart[0].IdCart;
    const [product, metadata2] = await Products.getProduct(productId);

    ShoppingCart.addToCart(IdCart, product[0], formattedDate);

    res.redirect("/");
  } else {
    req.flash(
      "alert",
      "Debes iniciar sesión para agregar productos al carrito"
    );
    res.redirect("/cart");
  }
};
