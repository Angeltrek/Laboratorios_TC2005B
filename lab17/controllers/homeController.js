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

  if (IdUser) {
    const productId = req.params.productId;
    const [productToAdd, metadata1] = await Products.getProduct(productId);
    const [IdCart, metadata2] = await ShoppingCart.getIdCart(IdUser);
    const [isAdded, metadata3] = await ShoppingCart.checkIfAdded(
      IdCart[0].IdCart,
      productId
    );

    if (isAdded.length < 1) {
      ShoppingCart.addToCart(productToAdd[0], IdCart[0].IdCart);
    } else {
      ShoppingCart.updateCart(IdCart[0].IdCart, isAdded[0]);
    }
  } else {
    res.redirect("/");
  }
};
