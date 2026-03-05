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


// ham tao san pham tren giao dien
function renderProduct(product) {

    const li = document.createElement("li");
    li.className = "product-item";

    li.textContent = product.name + " - " + product.price + " VND ";

    // tao nut xoa
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Xoa";

    // su kien xoa
    deleteBtn.addEventListener("click", function(){

        const confirmDelete = confirm("Ban co chac muon xoa san pham nay?");

        if(confirmDelete){
            li.remove();
        }

    });

    li.appendChild(deleteBtn);

    productList.appendChild(li);
}


// hien thi san pham ban dau
products.forEach(function(product){
    renderProduct(product);
});


// xu ly them san pham
form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = nameInput.value;
    const price = priceInput.value;

    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price
    };

    products.push(newProduct);

    renderProduct(newProduct);

    nameInput.value = "";
    priceInput.value = "";

});