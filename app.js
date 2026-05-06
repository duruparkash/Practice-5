const allProducts = [
  { name: "Nike Air Max", price: 120 },
  { name: "Adidas Ultraboost", price: 180 },
  { name: "Puma RS-X", price: 90 },
  { name: "New Balance 574", price: 75 },
  { name: "Converse Chuck Taylor", price: 55 },
  { name: "Vans Old Skool", price: 65 },
  { name: "Reebok Classic", price: 80 },
  { name: "Jordan 1 Retro", price: 170 },
];

let screen = document.getElementById("screen");
let priceSorting = document.getElementById("price sorting");
function displayProducts(products) {
  let screenShow = "";

  products.forEach((product) => {
    const { name, price } = product;

    screenShow += `
      <div class="product">
        <h3>${name}</h3>
        <p>$${price}</p>
      </div>
    `;
  });

  screen.innerHTML = screenShow;
}

priceSorting.addEventListener("change", (e) => {
  const value = e.target.value;
  let sortedProduct = [...allProducts];

  if (value === "High to Low") {
    sortedProduct.sort((a, b) => b.price - a.price);
  } else if (value === "Low to High") {
    sortedProduct.sort((a, b) => a.price - b.price);
  } else {
    sortedProduct = allProducts;
  }
  displayProducts(sortedProduct);
});

displayProducts(allProducts);
