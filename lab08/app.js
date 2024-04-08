const express = require("express");
const {
  calcularPromedio,
  escribirEnArchivo,
  longestSubstr,
} = require("./functions");
const readline = require("readline");

const app = express();
const port = 3000;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/calcular-promedio", (req, res) => {
  const { numeros } = req.body;
  const numerosArray = numeros.split(",").map((num) => parseFloat(num.trim()));
  const promedio = calcularPromedio(numerosArray);
  res.send(`El promedio de los números ingresados es: ${promedio}`);
});

app.post("/escribir-en-archivo", (req, res) => {
  const { texto, nombreArchivo } = req.body;
  escribirEnArchivo(texto, nombreArchivo);
  res.send(
    `El texto se ha guardado correctamente en el archivo "${nombreArchivo}".`
  );
});

app.post("/longest-substring", (req, res) => {
  const { str } = req.body;
  const resultado = longestSubstr(str);
  res.send(`El substring mas largo es de: ${resultado}`);
});

app.get("/", (req, res) => {
  res.send(`
    <form action="/calcular-promedio" method="post">
      <label for="numeros">Ingresa una lista de números separados por comas:</label>
      <input type="text" id="numeros" name="numeros">
      <button type="submit">Calcular Promedio</button>
    </form>
    <form action="/escribir-en-archivo" method="post">
      <label for="texto">Ingresa el texto que deseas guardar en el archivo:</label>
      <input type="text" id="texto" name="texto">
      <label for="nombreArchivo">Ingresa el nombre del archivo:</label>
      <input type="text" id="nombreArchivo" name="nombreArchivo">
      <button type="submit">Guardar en Archivo</button>
    </form>
    <form action="/longest-substring" method="post">
      <label for="longestsubstr">Ingresa el string para saber cual saber el substring mas largo:</label>
      <input type="text" id="longestsubstr" name="str">
      <button type="submit">Enviar string</button>
    </form>
  `);
});

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
