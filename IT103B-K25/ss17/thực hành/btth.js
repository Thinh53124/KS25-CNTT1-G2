const defaultProducts = [
    { id: 1, name: "Bánh Chưng", price: 150000, img: "./img/banhchung.webp" },
    { id: 2, name: "Giò Lụa", price: 180000, img: "./img/giolua.webp" },
    { id: 3, name: "Cành Đào", price: 500000, img: "./img/canhdao.webp" },
    { id: 4, name: "Mứt Tết", price: 120000, img: "./img/muttet.webp" },
    { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "./img/lixi.webp" },
    { id: 6, name: "Dưa Hấu", price: 60000, img: "./img/duahau.webp" }
];

const products = JSON.parse(localStorage.getItem("products")) || defaultProducts;


let cart = JSON.parse(localStorage.getItem("cart")) || [];


function renderProducts() {
    let str = "";
    for (let i = 0; i < products.length; i++) {
        str += `
        <div class="product-card">
            <img src="${products[i].img}" alt="${products[i].name}">
            <h3>${products[i].name}</h3>
            <p class="price">${products[i].price.toLocaleString()}đ</p>
            <button class="btn-add" onclick="addToCart(${products[i].id})">Thêm vào giỏ</button>
        </div>`;
    }
    document.getElementById("product-list").innerHTML = str;
}
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();
}

function renderCart() {
    const cartList = document.getElementById("cart-list");
    const totalPriceEl = document.getElementById("total-price");
    
    if (cart.length === 0) {
        cartList.innerHTML = '<li class="empty-msg">Chưa có món nào...</li>';
        totalPriceEl.innerText = "0đ";
        return;
    }

    let str = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        str += `
        <li>
            <span class="cart-item-name">${item.name}</span>
            <div>
                <span class="cart-item-price">${item.price.toLocaleString()}đ</span>
                <button class="btn-remove" onclick="removeFromCart(${index})">X</button>
            </div>
        </li>`;
    });

    cartList.innerHTML = str;
    totalPriceEl.innerText = total.toLocaleString() + "đ";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();
}


document.getElementById("btn-checkout").onclick = function() {
    if (cart.length > 0) {
        alert("Đã thanh toán thành công!");
        
        localStorage.removeItem("cart");
        
        cart = [];
        renderCart();
    } else {
        alert("Giỏ hàng đang trống");
    }
};

renderProducts();
renderCart();