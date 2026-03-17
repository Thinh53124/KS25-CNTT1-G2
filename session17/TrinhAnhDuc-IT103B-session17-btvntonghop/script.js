// ===== DANH SACH SAN PHAM =====
const products = [
    { id: 1, name: "Banh Chung", price: 150000, img: "" },
    { id: 2, name: "Gio Lua", price: 180000, img: "" },
    { id: 3, name: "Canh Dao", price: 500000, img: "" },
    { id: 4, name: "Mut Tet", price: 120000, img: "" },
    { id: 5, name: "Li Xi (Tep)", price: 20000, img: "" },
    { id: 6, name: "Dua Hau", price: 60000, img: "" }
];

// ===== DOM =====
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const totalPriceEl = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");

// ===== KHOI TAO CART =====
let cart = localStorage.getItem("cart");

if (cart) {
    cart = JSON.parse(cart);
} else {
    cart = [];
}

// ===== FORMAT TIEN =====
function formatMoney(number) {
    return number.toLocaleString("vi-VN") + " VND";
}

// ===== RENDER SAN PHAM =====
function renderProducts() {
    productList.innerHTML = "";

    products.forEach(product => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${product.name} - ${formatMoney(product.price)}</span>
            <button data-id="${product.id}">Mua ngay</button>
        `;

        const btn = li.querySelector("button");

        btn.addEventListener("click", function() {
            addToCart(product.id);
        });

        productList.appendChild(li);
    });
}

// ===== THEM VAO GIO HANG =====
function addToCart(productId) {

    const product = products.find(p => p.id === productId);

    cart.push(product);

    // luu localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();
}

// ===== RENDER GIO HANG =====
function renderCart() {
    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartList.innerHTML = "<p>Gio hang dang trong</p>";
        totalPriceEl.textContent = "0 VND";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${item.name} - ${formatMoney(item.price)}</span>
            <button data-index="${index}">X</button>
        `;

        const deleteBtn = li.querySelector("button");

        // ===== XOA SAN PHAM =====
        deleteBtn.addEventListener("click", function() {

            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));

            renderCart();
        });

        cartList.appendChild(li);
    });

    totalPriceEl.textContent = formatMoney(total);
}

// ===== THANH TOAN =====
checkoutBtn.addEventListener("click", function() {

    if (cart.length === 0) {
        alert("Gio hang dang trong");
        return;
    }

    alert("Da thanh toan thanh cong");

    // xoa storage
    localStorage.removeItem("cart");

    // reset
    cart = [];

    renderCart();
});

// ===== CHAY LAN DAU =====
renderProducts();
renderCart();