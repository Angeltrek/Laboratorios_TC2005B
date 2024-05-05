const express = require("express");
const router = express.Router();
const isAuth = require("./isAuth");

const controller = require("../controllers/cartController");

router.get("/", isAuth, controller.get_cart);

router.get("/pay", isAuth, controller.pay_cart);

module.exports = router;
