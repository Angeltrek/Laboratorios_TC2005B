const DISPLAY_BILL = document.querySelector("#display-bill");
const PRODUCTS = document.querySelectorAll(".product");
const BILL_CONTAINER = document.querySelector(".bill");
const PRODUCT_LIST = document.querySelector(".product-list");
const SUBTOTAL_ELEMENT = document.querySelector(".subtotal");
const IVA_ELEMENT = document.querySelector(".iva");
const TOTAL_ELEMENT = document.querySelector(".total");
const PAY_BUTTON = document.querySelector("#pay");
const DELETE_BUTTON = document.querySelector("#delete");
let bill = [];

PRODUCTS.forEach((product) => {
  const BUY_BUTTON = product.querySelector(".buy-button");
  const DECREASE_BUTTON = product.querySelector(".decrease");
  const INCREASE_BUTTON = product.querySelector(".increase");
  const QUANTITY_INPUT = product.querySelector(".quantity");

  BUY_BUTTON.addEventListener("click", function () {
    const PRODUCT_NAME = product.querySelector(".product-name").textContent;
    const PRODUCT_PRICE = parseInt(
      product.querySelector(".product-price").textContent.replace("$", "")
    );
    const QUANTITY = parseInt(QUANTITY_INPUT.value);
    const SUBTOTAL = PRODUCT_PRICE * QUANTITY;
    const IVA = SUBTOTAL * 0.16;
    const TOTAL_PRICE = SUBTOTAL + IVA;

    const NEW_ITEM = {
      product_name: PRODUCT_NAME,
      product_price: PRODUCT_PRICE,
      quantity: QUANTITY,
      subtotal: SUBTOTAL,
      iva: IVA,
      total_price: TOTAL_PRICE,
    };

    bill.push(NEW_ITEM);
    alert(`${PRODUCT_NAME} agregado al carrito.`);
    BILL_CONTAINER.classList.remove("display");
  });

  DECREASE_BUTTON.addEventListener("click", function () {
    let currentValue = parseInt(QUANTITY_INPUT.value);
    if (currentValue > 1) {
      currentValue--;
      QUANTITY_INPUT.value = currentValue;
    }
  });

  INCREASE_BUTTON.addEventListener("click", function () {
    let currentValue = parseInt(QUANTITY_INPUT.value);
    currentValue++;
    QUANTITY_INPUT.value = currentValue;
  });
});

DISPLAY_BILL.addEventListener("click", () => {
  PRODUCT_LIST.innerHTML = "";

  bill.forEach(function (item) {
    const productItem = document.createElement("li");
    productItem.textContent = `${item.product_name}: $${item.total_price}`;
    PRODUCT_LIST.appendChild(productItem);
  });

  const subtotal = bill.reduce((acc, item) => acc + item.subtotal, 0);
  const iva = bill.reduce((acc, item) => acc + item.iva, 0);

  SUBTOTAL_ELEMENT.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  IVA_ELEMENT.textContent = `IVA: $${iva.toFixed(2)}`;
  TOTAL_ELEMENT.textContent = `Total: $${(subtotal + iva).toFixed(2)}`;

  BILL_CONTAINER.classList.toggle("display");
});

PAY_BUTTON.addEventListener("click", () => {
  alert("Se ha realizado la compra");
  deleteItems();
});

DELETE_BUTTON.addEventListener("click", () => {
  alert("Se ha borrado tu compra");
  deleteItems();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "t" || event.key === "T") {
    document.querySelector("body").classList.toggle("verdana");
  }
});

function deleteItems() {
  bill = [];
  BILL_CONTAINER.classList.remove("display");
}
