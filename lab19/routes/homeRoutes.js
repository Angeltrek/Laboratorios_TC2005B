const express = require("express");
const router = express.Router();

const controller = require("../controllers/homeController");

router.get("/", controller.get_home);

router.get("/add-to-cart/:productId", controller.addToCart);

module.exports = router;
