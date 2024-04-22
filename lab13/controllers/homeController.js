const PRODUCTS_PER_PAGE = 10;
const ShoppingCart = require('../models/shoppingCart');
const products = require("../models/products");

exports.get_home = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const startIndex = (page - 1) * PRODUCTS_PER_PAGE;

        const ProductsJSON = products.getProducts();

        const currentPageProducts = ProductsJSON.products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

        const totalPages = Math.ceil(ProductsJSON.products.length / PRODUCTS_PER_PAGE);

        const cartContent = ShoppingCart.getCartProducts();

        res.render("home", { 
            products: currentPageProducts,
            totalPages: totalPages,
            currentPage: page,
            cartLength: cartContent.length
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.render("home", { products: [], totalPages: 1, currentPage: 1 });
    }
}

exports.addToCart = (req, res) => {
    const productId = req.params.productId;

    ShoppingCart.addToCart(productId);

    res.redirect('/');
}