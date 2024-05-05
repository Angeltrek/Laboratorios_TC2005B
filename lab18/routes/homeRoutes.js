const express = require("express");
const router = express.Router();
const isAuth = require("./isAuth");

const controller = require("../controllers/homeController");

router.get("/", controller.get_home);

router.get("/add-to-cart/:productId", isAuth, controller.addToCart);

module.exports = router;
