const fs = require("fs");

function calcularPromedio(numeros) {
  if (numeros.length === 0) return 0;
  const suma = numeros.reduce((total, num) => total + num, 0);
  return suma / numeros.length;
}

function escribirEnArchivo(texto, nombreArchivo) {
  fs.writeFile(nombreArchivo, texto, (err) => {
    if (err) {
      console.error("Error al escribir en el archivo:", err);
    } else {
      console.log(
        `El texto se ha escrito correctamente en el archivo "${nombreArchivo}".`
      );
    }
  });
}

function longestSubstr(s) {
  let maxLength = 0;
  let start = 0;
  const charIndexMap = {};

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (
      charIndexMap[currentChar] !== undefined &&
      charIndexMap[currentChar] >= start
    ) {
      start = charIndexMap[currentChar] + 1;
    }
    charIndexMap[currentChar] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

module.exports = { calcularPromedio, escribirEnArchivo, longestSubstr };
