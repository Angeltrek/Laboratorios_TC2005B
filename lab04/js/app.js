const SECUENCE = document.querySelector("#secuence");
const MATH = document.querySelector("#math");
const COUNTER = document.querySelector("#counter");
const MEDIAS = document.querySelector("#medias");
const INVERSE = document.querySelector("#inverse");
const MERGE = document.querySelector("#merge");

SECUENCE.addEventListener("click", () => {
  printGivedNumber();
});

MATH.addEventListener("click", () => {
  mathTrivia();
});

COUNTER.addEventListener("click", () => {
  counter();
});

MEDIAS.addEventListener("click", () => {
  medias();
});

INVERSE.addEventListener("click", () => {
  inverse();
});

MERGE.addEventListener("click", () => {
  arr = prompt("Give An Array; Example '1 2 3 4 ...'");
  if (arr.length === 0) return;

  arr = arr.split(" ");
  arr = arr.map((num) => (parseInt(num) ? parseInt(num) : null));

  console.log(arr);

  const PARAGRAPH = document.createElement("p");
  PARAGRAPH.textContent = `Array sorteado: ${mergeSort(arr)}`;
  const CONTAINER = document.querySelector(".display");
  CONTAINER.appendChild(PARAGRAPH);
});

function printGivedNumber() {
  number = prompt("Give A Number");
  if (number < 1) return;

  const TABLE = document.createElement("table");

  const HEADER_ROW = document.createElement("tr");

  const HEADERS = ["Numero", "Quadrado", "Cubo"];
  for (let headerText of HEADERS) {
    const HEADER_CELL = document.createElement("th");
    HEADER_CELL.textContent = headerText;
    HEADER_ROW.appendChild(HEADER_CELL);
  }

  TABLE.appendChild(HEADER_ROW);

  for (let i = 0; i < number; i++) {
    const ROW = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      const CELL = document.createElement("td");
      if (j === 0) CELL.textContent = i;
      if (j === 1) CELL.textContent = Math.pow(i, 2);
      if (j === 2) CELL.textContent = Math.pow(i, 3);
      ROW.appendChild(CELL);
    }

    TABLE.appendChild(ROW);
  }

  const CONTAINER = document.querySelector(".display");
  CONTAINER.appendChild(TABLE);
}

function mathTrivia() {
  a = Math.floor(Math.random() * 100);
  b = Math.floor(Math.random() * 100);
  ans = parseInt(prompt(`Give Me the result of: ${a} + ${b}`));
  if (ans === a + b) return alert("Nice!!🐸");
  else alert("Try again😉");
}

function counter() {
  arr = prompt("Give An Array; Example '1 2 3 4 ...'");
  if (arr.length === 0) return;

  arr = arr.split(" ");
  arr = arr.map((num) => parseInt(num));

  negatives = 0;
  zeros = 0;
  positives = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positives += 1;
    else if (arr[i] < 0) negatives += 1;
    else zeros += 1;
  }

  const PARAGRAPH = document.createElement("p");
  PARAGRAPH.textContent = `Positives: ${positives} \n Negatives: ${negatives} \n Zeros: ${zeros}`;
  const CONTAINER = document.querySelector(".display");
  CONTAINER.appendChild(PARAGRAPH);
}

function medias() {
  arr = prompt("Give An Array of Arrays; Example '1 2 3 4, 1 2 3 4'");
  if (arr.length === 0) return;

  arr = arr.split(",");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(" ");
    arr[i] = arr[i].map((num) => (parseInt(num) ? parseInt(num) : null));
    arr[i] = arr[i].filter((num) => num !== null);
  }

  const arrayMedias = [];
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i];
    let sum = 0;
    for (let j = 0; j < row.length; j++) {
      sum += row[j];
    }
    const promedio = sum / row.length;
    arrayMedias.push(promedio);
  }

  const PARAGRAPH = document.createElement("p");
  PARAGRAPH.textContent = `Promedio de cada fila: ${arrayMedias}`;
  const CONTAINER = document.querySelector(".display");
  CONTAINER.appendChild(PARAGRAPH);
}

function inverse() {
  number = prompt("Give A Number");

  inv =
    parseFloat(number.toString().split("").reverse().join("")) *
    Math.sign(number);

  const PARAGRAPH = document.createElement("p");
  PARAGRAPH.textContent = `Número inverso: ${inv}`;
  const CONTAINER = document.querySelector(".display");
  CONTAINER.appendChild(PARAGRAPH);
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
