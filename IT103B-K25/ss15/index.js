const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

let productList = document.getElementById("product-list");


function addProducts() {
    let str = "";
    for (let i = 0; i < products.length; i++) {
        let checked = "";
        if (products[i].status) {
            checked = "checked";
        } else {
            checked = "";
        }
        str += `<li>
        <input type="checkbox" ${checked} onclick="selectInput(${i})" />
            <span class="${products[i].status ? "active" : ""}">${products[i].taskName}</span>
          <button onclick="editTask(${i})">sửa</button>
        <button onclick="deleteTask(${products[i].id})">xóa</button>
      </li>`;
    }

    // lấy elementUl
    document.getElementById("product-list").innerHTML = str;
}

addProducts();