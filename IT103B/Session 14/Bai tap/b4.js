let products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

let productList = document.getElementById("product-list");
let nameInput = document.getElementById("product-name");
let priceInput = document.getElementById("product-price");

function formatPrice(price) {
  return price.toLocaleString("vi-VN") + " VND";
}

function renderProducts() {
  let str = "";

  for (let i = 0; i < products.length; i++) {
    str += `
<li class="product-item">
<h3>${products[i].name}</h3>
<p class="price">Giá: ${formatPrice(products[i].price)}</p>
<button onclick="editPrice(${i})">Sửa giá</button>
</li>
`;
  }

  productList.innerHTML = str;
}

function editPrice(index) {
  let newPrice = prompt("Nhập giá mới (VND):");

  if (newPrice === null || newPrice.trim() === "") return;

  products[index].price = Number(newPrice);

  renderProducts();
}

function addProduct(event) {
  event.preventDefault();

  let name = nameInput.value.trim();
  let price = priceInput.value.trim();

  if (name === "" || price === "") return;

  let newProduct = {
    id: Date.now(),
    name: name,
    price: Number(price),
  };

  products.push(newProduct);

  nameInput.value = "";
  priceInput.value = "";

  renderProducts();
}

renderProducts();
