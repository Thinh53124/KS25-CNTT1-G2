// mang san pham
const products = [
    { id: 1, name: "Banh Chung", price: 150000 },
    { id: 2, name: "Gio Lua", price: 180000 },
    { id: 3, name: "Canh Dao", price: 500000 },
    { id: 4, name: "Mut Tet", price: 120000 },
    { id: 5, name: "Bao Li Xi", price: 25000 },
    { id: 6, name: "Dua Hau Tet", price: 80000 }
];

// truy xuat phan tu product-list
const productList = document.getElementById("product-list");

// duyet mang products
products.forEach(function(product) {

    // tao div product
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    // tao ten san pham
    const name = document.createElement("p");
    name.textContent = product.name;

    // tao gia san pham
    const price = document.createElement("p");
    price.textContent = "Gia: " + product.price + " VND";

    // chen vao div
    productDiv.appendChild(name);
    productDiv.appendChild(price);

    // chen vao product-list
    productList.appendChild(productDiv);

});