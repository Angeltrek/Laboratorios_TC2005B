const {
  calcularPromedio,
  escribirEnArchivo,
  longestSubstr,
} = require("./functions");
const http = require("http");
const url = require("url");
const querystring = require("querystring");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url);
  const queryParams = querystring.parse(query);

  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const postData = querystring.parse(body);

      if (pathname === "/calcular-promedio") {
        const numerosArray = postData.numeros
          .split(",")
          .map((num) => parseFloat(num.trim()));
        const promedio = calcularPromedio(numerosArray);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`El promedio de los numeros ingresados es: ${promedio}`);
      } else if (pathname === "/escribir-en-archivo") {
        escribirEnArchivo(postData.texto, postData.nombreArchivo);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(
          `El texto se ha guardado correctamente en el archivo "${postData.nombreArchivo}".`
        );
      } else if (pathname === "/longest-substring") {
        const resultado = longestSubstr(postData.str);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`El substring mas largo es de: ${resultado}`);
      }
    });
  } else if (req.method === "GET" && pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <form action="/calcular-promedio" method="post">
        <label for="numeros">Ingresa una lista de numeros separados por comas:</label>
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
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
