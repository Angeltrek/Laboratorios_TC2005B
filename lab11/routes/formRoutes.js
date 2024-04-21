const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "views", "menu.html"));
});

router.get("/forms", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "views", "forms.html"));
});

router.get("/imc-calculator", (request, response, next) => {
  response.sendFile(path.join(__dirname, "..", "views", "imc.html"));
});

router.post("/calculate-imc", (request, response, next) => {
  const weight = request.body.peso;
  const height = request.body.altura;
  const imc = weight / (height * height);
  response.send(
    `<h1> Tu IMC es de ${imc} </h1>
  <a href="/imc-calculator"> Atras </a>`
  );
});

router.get("/list-media", (request, response, next) => {
  response.sendFile(path.join(__dirname, "..", "views", "list-media.html"));
});

router.post("/calculate-media", (request, response, next) => {
  const numbersArray = request.body.list
    .split(" ")
    .map((num) => parseFloat(num.trim()));

  if (numbersArray.length === 0) return 0;
  const sum = numbersArray.reduce((total, num) => total + num, 0);
  const media = sum / numbersArray.length;
  f;

  response.send(`
  <h1> El promedio de los numeros ingresados es: ${media} </h1>
  <a href="/list-media"> Atras </a>
  `);
});

router.get("/new-file", (request, response, next) => {
  response.sendFile(path.join(__dirname, "..", "views", "new-file.html"));
});

router.post("/create-file", (request, response, next) => {
  const fileName = request.body.fileName;
  const txt = request.body.txt;

  fs.writeFile(fileName, txt, (err) => {
    if (err) {
      response.send(`<h1> Error al escribir en el archivo: ${err} </h1>`);
    } else {
      response.send(
        `<h1> El texto se ha escrito correctamente en el archivo "${fileName}". </h1>
        <a href="/new-file"> Atras </a>`
      );
    }
  });
});

module.exports = router;
