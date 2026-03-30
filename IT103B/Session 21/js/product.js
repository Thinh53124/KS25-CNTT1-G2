let products = JSON.parse(localStorage.getItem("products")) || [];

let categories = JSON.parse(localStorage.getItem("categories")) || [];
function renderCategories () {
    let str = "";
    for (let i = 0; i < categories.length; i++) {
        str += `<option value="${categories[i].id}">${categories[i].name}</option>`;
    }
    document.getElementById("options"). innerHTML = str;
}
renderCategories();

function addProduct(){
    let productName = document.getElementById("name").value.trim();
    let productImage = document.getElementById("image").value.trim();
    let categoryId = document.getElementById("options").value;
    let productPrice = document.getElementById("price").value.trim();
    let productStock = document.getElementById("stock").value.trim();

    let product = {
        name: productName,
        image: productImage,
        categoryId: categoryId,
        price: productPrice,
        stock: productStock
    };

    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

    renderProduct();
}

function handleChange() {
    let value = document.getElementById("options").value;
    console.log("value",value);
    
}

function renderProduct() {
    let str = "";
    for (let i = 0; i < products.length; i++) {
        str+= `<tr>
            <td>${products[i].id}</td>
            <td>${products[i].name}</td>
            <td>${products[i].image}</td>
            <td>${products[i].price}</td>
            <td>${products[i].stock}</td>
            <td><button class="edit">sửa</button></td>
            <td><button class="delete">xóa</button></td>
        </tr>`
    }
    document.getElementById("table").innerHTML = str;
}
renderProduct();

function search() {
    let keyword = document.getElementById("search").value.strim();

    let result = products.filter((item)=>item.name.icludes(keyword));
    console.log("Kết quả tìm kiếm",result);
}