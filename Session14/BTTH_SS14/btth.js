const products = [

    { id: 1, name: "Bánh Chưng", price: 150000, img: "" },

    { id: 2, name: "Giò Lụa", price: 180000, img: "" },

    { id: 3, name: "Cành Đào", price: 500000, img: "" },

    { id: 4, name: "Mứt Tết", price: 120000, img: "" },

    { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "" },

    { id: 6, name: "Dưa Hấu", price: 60000, img: "" }

];
const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
console.log(formatter.format(1000000));
// tạo hàm render dữ liệu
function productsrender() {
    let sum = "";
    for (let i = 0; i < products.length; i++) {
        sum += `<div class="product-card">
                    <img src="${products[i].img}" alt="">
                    <h3>${products[i].name}</h3>
                    <p class="price">${formatter.format(products[i].price)}</p>
                    <button class="btn-add" id="btn-add">Thêm vào giỏ</button>
                </div>`;
    }
    document.getElementById("product-list").innerHTML = sum;
}
productsrender();
const cart = [
    { id: 1, name: "Bánh Chưng", price: 150000, img: "", quantity: 1 },

    { id: 2, name: "Giò Lụa", price: 180000, img: "", quantity: 1 },
];
function renderCart() {
    let str = "";
    for (let i = 0; i < cart.length; i++) {
        str += `<li>
                    <span class="cart-item-name">${cart[i].name}</span>
                    <span>SL:1</span>
                    <div>
                            <span class="cart-item-price">${cart[i].price}</span>
                            <button class="btn-remove">X</button>
                        </div>
                    </li>`
    }
    document.getElementById("cart-list").innerHTML = str;
}
renderCart();
function addToCart(index) {
    console.log(` Thông tin sản phẩm`, products[index]);
    let newproduct = 
    cart.push(...products[index])
    renderCart();
}
addToCart();
