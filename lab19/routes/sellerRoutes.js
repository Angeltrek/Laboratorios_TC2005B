const express = require("express");
const router = express.Router();

const controller = require("../controllers/sellerController");

router.get("/", controller.get_sell);

router.post("/register-seller", controller.register_seller);

module.exports = router;
