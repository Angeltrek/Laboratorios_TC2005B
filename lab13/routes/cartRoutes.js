const express = require("express");
const router = express.Router();

const controller = require("../controllers/cartController");

router.get("/", controller.get_cart);

router.get("/pay", controller.pay_cart);

module.exports = router;
