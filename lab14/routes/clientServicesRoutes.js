const express = require("express");
const router = express.Router();

const controller = require("../controllers/clientServicesController");

router.get("/", controller.get_services);

module.exports = router;
