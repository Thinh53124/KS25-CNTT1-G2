// mang san pham ban dau
const products = [
    { id: 1, name: "Banh Chung", price: 150000 },
    { id: 2, name: "Gio Lua", price: 180000 },
    { id: 3, name: "Canh Dao", price: 500000 },
    { id: 4, name: "Mut Tet", price: 120000 },
    { id: 5, name: "Bao Li Xi", price: 25000 },
    { id: 6, name: "Dua Hau Tet", price: 80000 }
];

// lay phan tu HTML
const productList = document.getElementById("product-list");
const form = document.getElementById("product-form");
const nameInput = document.getElementById("product-name");
const priceInput = document.getElementById("product-price");


// ham hien thi san pham
function renderProduct(product) {

    const li = document.createElement("li");
    li.className = "product-item";

    li.textContent = product.name + " - " + product.price + " VND";

    productList.appendChild(li);
}


// hien thi danh sach ban dau
products.forEach(function(product){
    renderProduct(product);
});


// lang nghe submit form
form.addEventListener("submit", function(event){

    // ngan reload trang
    event.preventDefault();

    // lay gia tri input
    const name = nameInput.value;
    const price = priceInput.value;

    // tao object san pham
    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price
    };

    // them vao mang
    products.push(newProduct);

    // hien thi len giao dien
    renderProduct(newProduct);

    // xoa input
    nameInput.value = "";
    priceInput.value = "";

});