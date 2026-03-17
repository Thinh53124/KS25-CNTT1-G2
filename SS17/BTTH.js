const products = [
    { id: 1, name: "Bánh Chưng", price: 150000, img: "" },
    { id: 2, name: "Giò Lụa", price: 180000, img: "" },
    { id: 3, name: "Cành Đào", price: 500000, img: "" },
    { id: 4, name: "Mứt Tết", price: 120000, img: "" },
    { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "" },
    { id: 6, name: "Dưa Hấu", price: 60000, img: "" }
];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const totalElement = document.getElementById("total");
const checkoutBtn = document.getElementById("checkout");

let cart = [];

function loadCart() {

    let data = localStorage.getItem("cart");

    if (data) {
        cart = JSON.parse(data);
    } else {
        cart = [];
    }

    renderCart();
}

loadCart();

function renderProducts() {

    products.forEach(product => {

        let div = document.createElement("div");

        div.innerHTML = `
            <h4>${product.name}</h4>
            <p>${product.price} VND</p>
            <button onclick="addToCart(${product.id})">Mua ngay</button>
        `;

        productList.appendChild(div);
    });

}

renderProducts();

function addToCart(id) {

    let product = products.find(p => p.id === id);

    cart.push(product);

    saveCart();

    renderCart();
}
function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}
function renderCart() {

    cartList.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        let li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - ${item.price} VND
            <button onclick="removeItem(${index})">X</button>
        `;

        cartList.appendChild(li);
    });

    totalElement.innerText = total;
}
function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

    renderCart();
}
checkoutBtn.onclick = function () {

    if (cart.length === 0) {
        alert("Giỏ hàng đang trống");
        return;
    }

    alert("Đã thanh toán thành công");

    localStorage.removeItem("cart");

    cart = [];

    renderCart();
};