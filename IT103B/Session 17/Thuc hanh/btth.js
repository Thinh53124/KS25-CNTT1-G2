// const products = [
//   { id: 1, name: "Bánh Chưng", price: 150000, img: "" },
//   { id: 2, name: "Giò Lụa", price: 180000, img: "" },
//   { id: 3, name: "Cành Đào", price: 500000, img: "" },
//   { id: 4, name: "Mứt Tết", price: 120000, img: "" },
//   { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "" },
//   { id: 6, name: "Dưa Hấu", price: 60000, img: "" },
// ];
const products = JSON.parse(localStorage.getItem("products"));
function renderProducts() {
    let str = "";
    for (let i = 0; i < products.length; i++) {
        str += 
        `<div class="product-card">
            <img src="/img/banhchung.webp" alt="">
            <h3>${products[i].name}</h3>
            <p class="price">${products[i].price}</p>
            <button class="btn-add" id="btn-add-${product.id}">Thêm vào giỏ</button>
        </div>`
    }
    document.getElementById("product-list").innerHTML = str;
}
renderProducts(products);