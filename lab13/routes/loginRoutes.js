const express = require("express");
const router = express.Router();

const controller = require("../controllers/loginController");

router.get("/", controller.get_login);

router.post("/session", controller.session);

module.exports = router;
