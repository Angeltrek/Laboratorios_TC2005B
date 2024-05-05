const express = require("express");
const router = express.Router();
const isAuth = require("./isAuth");

const controller = require("../controllers/sellerController");

router.get("/", isAuth, controller.get_sell);

router.post("/register-seller", isAuth, controller.register_seller);

module.exports = router;
