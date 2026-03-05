// mang san pham
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

const sortAscBtn = document.getElementById("sort-asc");
const sortDescBtn = document.getElementById("sort-desc");

function formatPrice(price){
    return Number(price).toLocaleString("vi-VN") + " VND";
}


// ve lai danh sach
function renderList(){

    productList.innerHTML = "";

    products.forEach(product => {

        const li = document.createElement("li");
        li.className = "product-item";

        const nameSpan = document.createElement("span");
        nameSpan.className = "product-name";
        nameSpan.textContent = product.name + " - ";

        const priceSpan = document.createElement("span");
        priceSpan.textContent = formatPrice(product.price);


        const editBtn = document.createElement("button");
        editBtn.textContent = "Sua gia";

        editBtn.addEventListener("click", function(){

            const newPrice = prompt("Nhap gia moi (VND):");

            if(newPrice){
                product.price = Number(newPrice);
                priceSpan.textContent = formatPrice(product.price);
            }

        });


        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Xoa";

        deleteBtn.addEventListener("click", function(){

            const confirmDelete = confirm("Ban co chac muon xoa san pham nay?");

            if(confirmDelete){
                const index = products.findIndex(p => p.id === product.id);
                products.splice(index,1);
                renderList();
            }

        });

        li.appendChild(nameSpan);
        li.appendChild(priceSpan);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        productList.appendChild(li);

    });

}


// hien thi ban dau
renderList();


// them san pham
form.addEventListener("submit", function(e){

    e.preventDefault();

    const newProduct = {
        id: Date.now(),
        name: nameInput.value,
        price: Number(priceInput.value)
    };

    products.push(newProduct);

    renderList();

    nameInput.value = "";
    priceInput.value = "";

});


// ===== TIM KIEM =====

searchInput.addEventListener("input", function(){

    const keyword = searchInput.value.toLowerCase();

    const items = document.querySelectorAll(".product-item");

    items.forEach(item => {

        const name = item.querySelector(".product-name").textContent.toLowerCase();

        if(name.includes(keyword)){
            item.style.display = "";
        }else{
            item.style.display = "none";
        }

    });

});


// ===== SAP XEP =====

// gia tang dan
sortAscBtn.addEventListener("click", function(){

    products.sort((a,b) => a.price - b.price);

    renderList();

});


// gia giam dan
sortDescBtn.addEventListener("click", function(){

    products.sort((a,b) => b.price - a.price);

    renderList();

});