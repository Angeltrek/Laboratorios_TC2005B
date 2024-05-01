const express = require("express");
const router = express.Router();

const controller = require("../controllers/loginController");

router.get("/", controller.get_login);

router.post("/session", controller.session);

router.get("/logout", controller.logout);

router.get("/register", controller.get_register);

router.post("/send-register", controller.send_register);

module.exports = router;
