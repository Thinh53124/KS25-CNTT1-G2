const products = [
  {
    id: 1,
    name: "Bánh Chưng Tranh Khúc",
    price: 150000,
    img: "./img/banhchung.webp",
  },
  { id: 2, name: "Giò Lụa Ước Lễ", price: 180000, img: "./img/giolua.jpg" },
  {
    id: 3,
    name: "Cành Đào Nhật Tân",
    price: 500000,
    img: "./img/canhdao.webp",
  },
  { id: 4, name: "Mứt Tết Thập Cẩm", price: 120000, img: "./img/muttet.webp" },
  { id: 5, name: "Lì Xì May Mắn", price: 20000, img: "./img/lixi.webp" },
  { id: 6, name: "Dưa Hấu Khắc Chữ", price: 60000, img: "./img/duahau.jpg" },
];

let productList = document.getElementById("product-list");
let cartList = document.getElementById("cart-list");
let totalPrice = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function formatMoney(money) {
  return money.toLocaleString("vi-VN") + " đ";
}

let renderAllProduct = () => {
  let line = "";

  products.forEach((p) => {
    line += `
        <div class="product-card">
            <img src="${p.img}" alt="">
            <h3>${p.name}</h3>
            <p class="price">${formatMoney(p.price)}</p>
            <button class="btn-add" data-id="${p.id}">
                Thêm vào giỏ
            </button>
        </div>
        `;
  });

  productList.innerHTML = line;
};

let updateCart = () => {
  if (cart.length === 0) {
    cartList.innerHTML = `<li class="empty-msg">Chưa có món nào...</li>`;
    totalPrice.innerText = formatMoney(0);
    return;
  }

  let line = "";
  let sum = 0;

  cart.forEach((c, index) => {
    line += `
        <li>
            <span class="cart-item-name">${c.name}</span>

            <div>
                <span class="cart-item-price">${formatMoney(c.price)}</span>
                <button class="btn-remove" data-index="${index}">
                    X
                </button>
            </div>
        </li>
        `;

    sum += c.price;
  });

  cartList.innerHTML = line;
  totalPrice.innerText = formatMoney(sum);

  localStorage.setItem("cart", JSON.stringify(cart));
};

productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-add")) {
    let id = +e.target.dataset.id;

    let product = products.find((p) => p.id === id);

    cart.push(product);

    updateCart();
  }
});

cartList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-remove")) {
    let index = e.target.dataset.index;

    cart.splice(index, 1);

    updateCart();
  }
});

function checkout() {
  if (cart.length === 0) {
    alert("Giỏ hàng đang trống");
    return;
  }

  alert("Cảm ơn bạn đã mua hàng! Chúc mừng năm mới!");

  cart = [];

  localStorage.removeItem("cart");

  updateCart();
}

renderAllProduct();
updateCart();
