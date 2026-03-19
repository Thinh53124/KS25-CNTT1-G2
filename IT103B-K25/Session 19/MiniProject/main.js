const products = [
  {
    id: 1,
    name: "Tai nghe Bluetooth TWS",
    price: 320000,
    image:
      "https://picsum.photos/seed/mp19-tws/1200/800",
    description: "Chống ồn nhẹ, pin 20h, kết nối ổn định.",
    status: false,
    quantity: 10,
  },
  {
    id: 2,
    name: "Bàn phím cơ 87 phím",
    price: 790000,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=60",
    description: "Switch blue, led trắng, gõ sướng tay.",
    status: false,
    quantity: 10,
  },
  {
    id: 3,
    name: "Chuột không dây công thái học",
    price: 450000,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=60",
    description: "Thiết kế ergonomic, sạc USB-C.",
    status: false,
    quantity: 10,
  },
  {
    id: 4,
    name: "USB 64GB",
    price: 120000,
    image:
      "https://picsum.photos/seed/mp19-usb/1200/800",
    description: "Nhỏ gọn, tốc độ đọc/ghi ổn định.",
    status: false,
    quantity: 10,
  },
  {
    id: 5,
    name: "Đế tản nhiệt laptop",
    price: 210000,
    image:
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=60",
    description: "2 quạt gió, đỡ mỏi cổ tay.",
    status: false,
    quantity: 10,
  },
  {
    id: 6,
    name: "Cáp sạc Type-C 1m",
    price: 80000,
    image:
      "https://images.unsplash.com/photo-1640903581708-8d491706515b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWV8ZW58MHx8MHx8fDA%3D",
    description: "Bọc dù, hỗ trợ sạc nhanh.",
    status: false,
    quantity: 10,
  },
  {
    id: 7,
    name: "Khô gà",
    price: 800000,
    image:
      "https://newstarpaper.vn/wp-content/uploads/2023/03/ba-mia-de-lam-gi-1.jpg",
    description: "Đè nhầm TEM.",
    status: false,
    quantity: 10,
  },
  {
    id: 8,
    name: "BỘ PC 100",
    price: 10000000000,
    image:
      "https://pcmarket.vn/media/product/10239_340784857_799984757660921_1932046047919300131_n.jpg",
    description: "PEAK",
    status: false,
    quantity: 10,
  },
];

let localProduct;
let cart = [];
// DOM
let productListr = document.getElementById("products-grid");



let emptyCart = document.getElementById("cart-empty");
let cartList = document.getElementById("cart-tbody");


let bagade = document.getElementById("product-count-badge");

let quantityBadge = document.getElementById("cart-qty-badge");
let lineBadge = document.getElementById("cart-lines-badge");

let statusLine = document.getElementById("stat-lines");
let quantityStatus = document.getElementById("stat-qty");
let moneyStatus = document.getElementById("stat-total");

let totalLine = document.getElementById("stat-lines");
let totalQuantity = document.getElementById("stat-qty");
let tottalMoney = document.getElementById("stat-total");

let clearAll = document.getElementById("clear-cart-btn");


function resetProduct() {
  if (!localStorage.getItem("ProductList")) {
    localStorage.setItem("ProductList", JSON.stringify(products));
  }
  if (!localStorage.getItem("CartList")) {
    localStorage.setItem("CartList", JSON.stringify([]));
  }
}
function saveProductAndCart() {
  localStorage.setItem("ProductList", JSON.stringify(localProduct));
  localStorage.setItem("CartList", JSON.stringify(cart));
}
// function clearAll(){
//   localStorage.clear();
// }
// clearAll();
resetProduct();
// overRide();
// saveProductAndCart();

function overRide() {
  localProduct = JSON.parse(localStorage.getItem("ProductList"));
  cart = JSON.parse(localStorage.getItem("CartList")) || [];
}


function formatVND(number) {
  return `${number.toLocaleString("vi-VN")} VNĐ`;
}


function renderAllProduct() {
  let html = localProduct.map(p => {
    return `
        <article class="card" data-product-id="${p.id}">
          <div class="card-img"><img src="${p.image}" /></div>
          <div class="card-body">
            <h3 class="card-title">${p.name}</h3>
            ${p.description}
            <div style = "color:red;" class = "quantityProduct" data-id = "${p.id}">
             ${p.quantity > 0 ? `Số lượng : ${p.quantity}` : "Hết Hàng !!!"}
            </div>
            <div class="card-footer">
              <div class="price">${formatVND(p.price)}</div>
              <button class="btn btn-primary btn-add" data-action="add-to-cart" data-product-id="${p.id}">
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </article>
      `
  }).join("");

  productListr.innerHTML = html;
  bagade.textContent = `${localProduct.length} sản phẩm`;
}

function renderCart() {
  let html = "";
  cartList.innerHTML = "";
  emptyCart.innerHTML = "";
  if (cart.length === 0) {
    emptyCart.innerHTML = `
      <div class="empty-title">Giỏ hàng đang trống</div>
          <div class="empty-subtitle">
            Hãy bấm <strong>Thêm vào giỏ</strong> ở sản phẩm bên trái.
          </div>
    `;
    updateCart();
    return;
  }
  cart.forEach(p => {
    html += `
      <tr data-product-id="${p.id}">
          <td>
            <input type = "checkbox" ${p.status ? "checked" : ""} data-id = "${p.id}" class= "checkItem"/>
          ${p.name}
          </td>
          <td class="right">${formatVND(p.price)}</td>
          <td class="center">
            <div class="qty-controls">
              <button class="btn btn-icon btn-ghost" data-action="dec" data-product-id="${p.id}" aria-label="Giảm">-</button>
              <span class="qty">${p.quantity}</span>
              <button class="btn btn-icon btn-ghost" data-action="inc" data-product-id="${p.id}" aria-label="Tăng">+</button>
            </div>
          </td>
          <td class="right">${formatVND(p.price * p.quantity)}</td>
          <td class="center">
            <button class="btn btn-ghost" data-action="remove" data-product-id="${p.id}">
              Xóa
            </button>
          </td>
      </tr>
    `;
  });
  cartList.innerHTML = html;
  saveProductAndCart();
  updateCart();
}

function updateCart() {
  quantityBadge.textContent = `${cart.reduce((sum, cur) => sum + cur.quantity, 0)} món`;
  lineBadge.textContent = `${cart.length} dòng`;
  statusLine.textContent = `${cart.length}`;
  quantityStatus.textContent = `${cart.reduce((sum, cur) => sum + cur.quantity, 0)}`;
  moneyStatus.textContent = `${formatVND(cart.reduce((sum, cur) => sum + (cur.quantity * cur.price), 0))}`;
}

productListr.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-add")) {
    const id = +e.target.dataset.productId;
    let result = cart.find(c => c.id === id);
    let resultProduct = localProduct.find(c => c.id === id);
    if (resultProduct.quantity <= 0) {
      alert("Không thể mua thêm !!");
      // let div = e.target.closest(`.card`).querySelector(".quantityProduct");
      // div.textContent = "Hết Hàng !!!";
      // div.style.color = "red";
      return;
    }

    if (result) {
      result.quantity++;
    } else {
      const product = localProduct.find(c => c.id === id);
      cart.push(
        {
          ...product,
          quantity: 1,
          status: false,
        });
    }

    resultProduct.quantity--;

    saveProductAndCart();
    renderAllProduct();
    // cart = JSON.parse(localStorage.getItem("CartList"));
    renderCart();
  }
});

cartList.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) {
    return;
  }
  const action = btn.dataset.action;
  const id = +btn.dataset.productId;
  let result = cart.find(c => c.id === id);
  let resultProduct = localProduct.find(c => c.id === id);
  let indexDelete = cart.findIndex(c => c.id === id);
  if (!action) {
    return;
  }
  switch (action) {
    case "dec":
      result.quantity--;
      resultProduct.quantity++;
      if (result.quantity === 0) {
        cart.splice(indexDelete, 1);
      }
      break;
    case "inc":
      if (resultProduct.quantity <= 0) {
        alert("Hết Hàng !!");
        return;
      }
      result.quantity++;
      resultProduct.quantity--;
      break;
    case "remove":
      let wannaDelete = window.confirm(`Bạn có muốn xóa ${result.name} hay không ?`);
      if (wannaDelete) {
        resultProduct.quantity += result.quantity;
        cart.splice(indexDelete, 1);
      }
      break;
  }
  saveProductAndCart();
  renderAllProduct();
  renderCart();
});

clearAll.addEventListener("click", (e) => {
  if (cart.length === 0) {
    alert("Không có hàng để mà xóa !!!");
    return;
  }
  if (cart.some(c => c.status === true)) {
    // overRide();
    cart.forEach(c => {
      if (c.status) {
        let product = localProduct.find(p => p.id === c.id);
        product.quantity += c.quantity;
      }
    });
    cart = cart.filter(c => c.status !== true);
  }
  // cart = JSON.parse(localStorage.getItem("CartList")) || [];
  // overRide();
  // renderCart();
  else {
    let wannaDeleteAll = window.confirm("Bạn có muốn xóa tất cả hay không ?");
    if (wannaDeleteAll) {
      // localStorage.removeItem("CartList");
      cart.forEach(c => {
        let product = localProduct.find(p => p.id === c.id);
        product.quantity += c.quantity;
      });
      cart = [];
    }
  }
  // overRide();
  saveProductAndCart();
  renderAllProduct();
  renderCart();
});
cartList.addEventListener("change", (e) => {
  let checkbox = e.target;

  if (!checkbox.classList.contains("checkItem")) return;

  const id = +checkbox.dataset.id;
  const result = cart.find(c => c.id === id);

  if (!result) return;

  result.status = checkbox.checked;
  saveProductAndCart();
  renderCart();
})

// saveProduct();
overRide();
renderAllProduct();
renderCart();