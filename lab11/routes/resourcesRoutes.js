const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "views", "menu.html"));
});

router.get("/resources", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "views", "resources.html"));
});

router.get("/questions", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "views", "questions.html"));
});

router.get("/references", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "views", "references.html"));
});

module.exports = router;
