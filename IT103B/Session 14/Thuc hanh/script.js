const products = [
  { id: 1, name: "Bánh Chưng", price: 150000, img: "" },
  { id: 2, name: "Giò Lụa", price: 180000, img: "" },
  { id: 3, name: "Cành Đào", price: 500000, img: "" },
  { id: 4, name: "Mứt Tết", price: 120000, img: "" },
  { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "" },
  { id: 6, name: "Dưa Hấu", price: 60000, img: "" },
];

const cart = [
  { id: 1, name: "Bánh Chưng", price: 150000, img: "", quantity: 1 },
  { id: 2, name: "Giò Lụa", price: 180000, img: "", quantity: 1 },
];

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function renderProducts() {
  let str = "";

  for (let i = 0; i < products.length; i++) {
    str += `
      <div class="product-card">
        <img src="${products[i].img}" alt="">
        <h3>${products[i].name}</h3>
        <p class="price">${formatter.format(products[i].price)}</p>
        <button onclick="addToCart(${i})">Mua ngay</button>
      </div>
    `;
  }

  document.getElementById("product-container").innerHTML = str;
}

renderProducts();

function renderCart() {
  let str = "";

  if (cart.length === 0) {
    document.getElementById("cart-list").innerHTML =
      "<li>Giỏ hàng đang trống</li>";
    document.getElementById("total-price").innerText = formatter.format(0);
    return;
  }

  for (let i = 0; i < cart.length; i++) {
    str += `
      <li>
        <span>${cart[i].name}</span>
        <span>SL: ${cart[i].quantity}</span>
        <span>${formatter.format(cart[i].price)}</span>
        <button onclick="removeCart(${i})">X</button>
      </li>
    `;
  }

  document.getElementById("cart-list").innerHTML = str;

  updateTotal();
}

renderCart();

function addToCart(index) {
  let product = products[index];

  let found = false;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === product.id) {
      cart[i].quantity++;
      found = true;
      break;
    }
  }

  if (!found) {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  renderCart();
}

function removeCart(index) {
  cart.splice(index, 1);

  renderCart();
}

function updateTotal() {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  document.getElementById("total-price").innerText = formatter.format(total);
}
