const express = require("express");
const router = express.Router();
const ShoppingCart = require("../shoppingCart");
const products = require("../products");

const PRODUCTS_PER_PAGE = 10;

router.get("/", async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;

    const ProductsJSON = products.getProducts();

    const currentPageProducts = ProductsJSON.products.slice(
      startIndex,
      startIndex + PRODUCTS_PER_PAGE
    );

    const totalPages = Math.ceil(
      ProductsJSON.products.length / PRODUCTS_PER_PAGE
    );

    const cartContent = ShoppingCart.getCartProducts();

    res.render("home", {
      products: currentPageProducts,
      totalPages: totalPages,
      currentPage: page,
      cartLength: cartContent.length,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.render("home", { products: [], totalPages: 1, currentPage: 1 });
  }
});

router.get("/add-to-cart/:productId", (req, res) => {
  const productId = req.params.productId;

  ShoppingCart.addToCart(productId);

  res.redirect("/");
});

module.exports = router;
