// mang san pham ban dau
const products = [
    { id: 1, name: "Banh Chung", price: 150000 },
    { id: 2, name: "Gio Lua", price: 180000 },
    { id: 3, name: "Canh Dao", price: 500000 },
    { id: 4, name: "Mut Tet", price: 120000 },
    { id: 5, name: "Bao Li Xi", price: 25000 },
    { id: 6, name: "Dua Hau Tet", price: 80000 }
];

const productList = document.getElementById("product-list");
const form = document.getElementById("product-form");
const nameInput = document.getElementById("product-name");
const priceInput = document.getElementById("product-price");
const searchInput = document.getElementById("search-input");


// dinh dang gia
function formatPrice(price){
    return Number(price).toLocaleString("vi-VN") + " VND";
}


// tao san pham
function renderProduct(product){

    const li = document.createElement("li");
    li.className = "product-item";

    const nameSpan = document.createElement("span");
    nameSpan.className = "product-name";
    nameSpan.textContent = product.name + " - ";

    const priceSpan = document.createElement("span");
    priceSpan.textContent = formatPrice(product.price);


    // nut sua gia
    const editBtn = document.createElement("button");
    editBtn.className = "edit-price-btn";
    editBtn.textContent = "Sua gia";

    editBtn.addEventListener("click", function(){

        const newPrice = prompt("Nhap gia moi (VND):");

        if(newPrice){
            priceSpan.textContent = formatPrice(newPrice);
        }

    });


    // nut xoa
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Xoa";

    deleteBtn.addEventListener("click", function(){

        const confirmDelete = confirm("Ban co chac muon xoa san pham nay?");

        if(confirmDelete){
            li.remove();
        }

    });


    li.appendChild(nameSpan);
    li.appendChild(priceSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    productList.appendChild(li);
}


// hien thi san pham ban dau
products.forEach(function(product){
    renderProduct(product);
});


// them san pham
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


// ===== TIM KIEM SAN PHAM =====

searchInput.addEventListener("input", function(){

    const keyword = searchInput.value.toLowerCase();

    const items = document.querySelectorAll(".product-item");

    items.forEach(function(item){

        const name = item.querySelector(".product-name").textContent.toLowerCase();

        if(name.includes(keyword)){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }

    });

});