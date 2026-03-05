let product = [
    { id: 1, name: "Bánh Chưng", price: 150000, img: "./source/BanhMi.jpg" },

    { id: 2, name: "Giò Lụa", price: 180000, img: "./source/BaMia.jpg" },

    { id: 3, name: "Cành Đào", price: 500000, img: "./source/CanhDao.jpg" },

    { id: 4, name: "Mứt Tết", price: 120000, img: "./source/Mut.jpg" },

    { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "./source/tocNgheo.jpg" },

    { id: 6, name: "Dưa Hấu", price: 60000, img: "./source/KhoGa.jpg" }

];
const cart = [
    // { id: 1, name: "Bánh Chưng Tranh Khúc", price: 150000, quantity: 1, img: "./source/BanhMi.jpg" },
    // { id: 2, name: "Giò Lụa", price: 180000, quantity: 1, img: "./source/BaMia.jpg" },
]
let renderProducts = () => {
    let str = "";
    for (let i = 0; i < product.length; i++) {
        str += `<div class="product-card">
                    <img src="${product[i].img}" alt="">
                    <h3>${product[i].name}</h3>
                    <p class="price">${product[i].price.toLocaleString("vi-VN")} đ</p>
                    <button class="btn-add" onclick ="addToCart(${i})">Thêm vào giỏ</button>
                </div>`;
    }
    document.getElementById("product-list").innerHTML = str;
}
renderProducts();
// hiển thị danh sách sản phẩm giỏ hàng
let renderCart = () => {
    let result = "";
    if (cart.length === 0) {
        document.getElementById("cart-list").innerHTML = `<li class="empty-msg">Chưa có món nào...</li>`;
    } else {
        for (let i = 0; i < cart.length; i++) {
            result += `<li>
                        <span class="cart-item-name">${cart[i].name}</span>
                        <span>SL:${cart[i].quantity}</span>
                        <div>
                            <span class="cart-item-price">${cart[i].price.toLocaleString("vi-VN")} đ</span>
                            <button class="btn-remove" onclick = "deleteProduct(${i})">X</button>
                        </div>
                    </li>`;
        }
        document.getElementById("cart-list").innerHTML = result;
    }
    renderCartSumary();
}
renderCart();
// chức năng thêm sản phẩm vào mảng !
function addToCart(index) {
    let item = { ...product[index], quantity: 1 };
    let resultIndex = cart.findIndex(c => c.name === product[index].name);
    if (resultIndex !== -1) {
        cart[resultIndex].quantity++;
        cart[resultIndex].price += product[index].price;
    } else {
        cart.push(item);
        console.log(cart);
    }
    renderCart();
    renderCartSumary();
    renderCartSumary();
}
// chức năng xóa phần tử ra khỏi mảng aka: COOK
function deleteProduct(index) {
    cart.splice(index, 1);
    renderCart();
}
//chức năng hiện thị giá tiền AKA" Cập nhập
function renderCartSumary(){
    if (cart.length === 0) {
        document.getElementsByClassName("cart-summary")[0].innerHTML = 
                    `<p>Tổng cộng:</p>
                    <h3 id="total-price">0 đ</h3>
                    <button id="btn-checkout" class="btn-checkout"
                    onclick="alert('Cảm ơn bạn đã mua hàng! Chúc mừng năm mới!'); resetCart();">Thanh Toán</button> `;

    } else {
        document.getElementsByClassName("cart-summary")[0].innerHTML =
                    `<p>Tổng cộng:</p>
                    <h3 id="total-price">${cart.reduce((sum, cur) => sum + cur.price, 0).toLocaleString("vi-VN")} đ</h3>
                    <button id="btn-checkout" class="btn-checkout"
                    onclick="alert('Cảm ơn bạn đã mua hàng! Chúc mừng năm mới!'); resetCart();">Thanh Toán</button> `;
    }

}
// chức năng reset lại mảng
function resetCart(){
    cart.length = 0;
    renderCart();
}