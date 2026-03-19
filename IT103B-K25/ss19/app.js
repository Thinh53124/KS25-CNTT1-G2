const products = [
  {
    id: 1,
    name: "Tai nghe Bluetooth TWS",
    price: 320000,
    image: "https://picsum.photos/seed/mp19-tws/1200/800",
    description: "Chống ồn nhẹ, pin 20h, kết nối ổn định."
  },
  {
    id: 2,
    name: "Bàn phím cơ 87 phím",
    price: 790000,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=60",
    description: "Switch blue, led trắng, gõ sướng tay."
  },
  {
    id: 3,
    name: "Chuột không dây công thái học",
    price: 450000,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=60",
    description: "Thiết kế ergonomic, sạc USB-C."
  },
  {
    id: 4,
    name: "USB 64GB",
    price: 120000,
    image: "https://picsum.photos/seed/mp19-usb/1200/800",
    description: "Nhỏ gọn, tốc độ đọc/ghi ổn định."
  },
  {
    id: 5,
    name: "Đế tản nhiệt laptop",
    price: 210000,
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=60",
    description: "2 quạt gió, đỡ mỏi cổ tay."
  },
  {
    id: 6,
    name: "Cáp sạc Type-C 1m",
    price: 80000,
    image: "https://picsum.photos/seed/mp19-cable/1200/800",
    description: "Bọc dù, hỗ trợ sạc nhanh."
  }
];

let cart = JSON.parse(localStorage.getItem('MINI_SHOP_CART')) || [];

const productsGrid = document.getElementById('products-grid');
const productsEmpty = document.getElementById('products-empty');
const productCountBadge = document.getElementById('product-count-badge');

const cartTbody = document.getElementById('cart-tbody');
const cartEmpty = document.getElementById('cart-empty');
const cartLinesBadge = document.getElementById('cart-lines-badge');
const cartQtyBadge = document.getElementById('cart-qty-badge');

const statLines = document.getElementById('stat-lines');
const statQty = document.getElementById('stat-qty');
const statTotal = document.getElementById('stat-total');

const clearCartBtn = document.getElementById('clear-cart-btn');

function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN').format(amount) + " VNĐ";
}

function renderProducts() {
  if (products.length === 0) {
    productsGrid.classList.add('hidden');
    productsEmpty.classList.remove('hidden');
    productCountBadge.innerText = "0 sản phẩm";
    return;
  }

  productsEmpty.classList.add('hidden');
  productsGrid.innerHTML = products.map(product => `
    <article class="card">
      <div class="card-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <h3 class="card-title">${product.name}</h3>
        <p class="card-desc">${product.description}</p>
        <div class="card-footer">
          <div class="price">${formatVND(product.price)}</div>
          <button class="btn btn-primary" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
        </div>
      </div>
    </article>
  `).join('');

  productCountBadge.innerText = `${products.length} sản phẩm`;
}

window.addToCart = function(productId) {
  const product = products.find(p => p.id === productId);
  const cartItem = cart.find(item => item.id === productId);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  updateApp();
};

window.changeQuantity = function(productId, delta) {
  const cartItem = cart.find(item => item.id === productId);
  if (!cartItem) return;

  cartItem.quantity += delta;

  if (cartItem.quantity <= 0) {
    removeFromCart(productId, false);
  } else {
    updateApp();
  }
};

window.removeFromCart = function(productId, shouldConfirm = true) {
  const cartItem = cart.find(item => item.id === productId);
  if (!cartItem) return;

  if (shouldConfirm) {
    const confirmDelete = confirm(`Bạn có chắc muốn xóa "${cartItem.name}" khỏi giỏ hàng?`);
    if (!confirmDelete) return;
  }

  cart = cart.filter(item => item.id !== productId);
  updateApp();
};

clearCartBtn.addEventListener('click', () => {
  if (cart.length === 0) return;
  
  if (confirm("CẢNH BÁO: Bạn có chắc chắn muốn xóa toàn bộ giỏ hàng không?")) {
    cart = [];
    updateApp();
  }
});


function renderCart() {
  if (cart.length === 0) {
    cartTbody.innerHTML = '';
    cartEmpty.classList.remove('hidden');
    document.querySelector('.table-wrap').classList.add('hidden');
  } else {
    cartEmpty.classList.add('hidden');
    document.querySelector('.table-wrap').classList.remove('hidden');

    cartTbody.innerHTML = cart.map(item => `
      <tr>
        <td>${item.name}</td>
        <td class="right">${formatVND(item.price)}</td>
        <td class="center">
          <div class="qty-controls">
            <button class="btn btn-icon btn-ghost" onclick="changeQuantity(${item.id}, -1)">-</button>
            <span class="qty">${item.quantity}</span>
            <button class="btn btn-icon btn-ghost" onclick="changeQuantity(${item.id}, 1)">+</button>
          </div>
        </td>
        <td class="right">${formatVND(item.price * item.quantity)}</td>
        <td class="center">
          <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Xóa</button>
        </td>
      </tr>
    `).join('');
  }

  updateStats();
}

function updateStats() {
  const totalLines = cart.length;
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  cartLinesBadge.innerText = `${totalLines} dòng`;
  cartQtyBadge.innerText = `${totalQty} món`;

  statLines.innerText = totalLines;
  statQty.innerText = totalQty;
  statTotal.innerText = formatVND(totalPrice);
}

function updateApp() {
  localStorage.setItem('MINI_SHOP_CART', JSON.stringify(cart));
  renderCart();
}

renderCart();
renderProducts();