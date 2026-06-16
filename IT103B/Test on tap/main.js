let products = JSON.parse(localStorage.getItem("products")) || [];

// hàm render
function renderProduct(list = products) {
    let tbody = document.getElementById("tbody");
    let emptyState = document.getElementById("emptyState");

    if (list.length === 0) {
        tbody.innerHTML = "";
        emptyState.style.display = "block";
        return;
    } else {
        emptyState.style.display = "none";
    }

    let str = "";

    for (let i = 0; i < list.length; i++) {
        let status = list[i].quantity > 0 ? "Còn hàng" : "Hết hàng";

        str += `
            <tr>
                <td>${i + 1}</td>
                <td>${list[i].name}</td>
                <td>${Number(list[i].price).toLocaleString()} ₫</td>
                <td class="center">${list[i].quantity}</td>
                <td>${status}</td>
                <td>
                  <div class="td-actions">
                    <button class="btn btn-sm btn-edit" onclick="editProduct(${list[i].id})">✏ Sửa</button>
                    <button class="btn btn-sm btn-del" onclick="deleteProduct(${list[i].id})">✕ Xóa</button>
                  </div>
                </td>
            </tr>
        `;
    }

    tbody.innerHTML = str;

    document.getElementById("totalBadge").innerText = `${products.length} sản phẩm`;
}
// hàm thêm
function addProduct() {
    clearErrors();

    let idEdit = document.getElementById("editId").value;

    let name = document.getElementById("name").value.trim();
    let price = +document.getElementById("price").value;
    let quantity = +document.getElementById("quantity").value;

    let isValid = true;

    // ===== VALIDATE =====
    if (!name) {
        document.getElementById("errName").innerText = "Vui lòng nhập tên sản phẩm.";
        isValid = false;
    }

    let isDuplicate = products.some(p =>
        p.name.toLowerCase() === name.toLowerCase() && p.id != idEdit
    );
    if (isDuplicate) {
        document.getElementById("errName").innerText = "Tên sản phẩm đã tồn tại.";
        isValid = false;
    }

    if (price <= 0 || isNaN(price)) {
        document.getElementById("errPrice").innerText = "Giá phải là số dương lớn hơn 0.";
        isValid = false;
    }

    if (!Number.isInteger(quantity) || quantity < 0) {
        document.getElementById("errQuantity").innerText = "Tồn kho phải là số nguyên ≥ 0.";
        isValid = false;
    }

    if (!isValid) return;

    // ===== UPDATE =====
    if (idEdit) {
        let index = products.findIndex(p => p.id == idEdit);
        products[index] = { id: +idEdit, name, price, quantity };
    } 
    // ===== CREATE =====
    else {
        let newId = products.length > 0
            ? Math.max(...products.map(p => p.id)) + 1
            : 1;

        products.push({ id: newId, name, price, quantity });
    }

    localStorage.setItem("products", JSON.stringify(products));
    renderProduct();
    resetForm();
}
// hàm sửa
function editProduct(id) {
    let product = products.find(p => p.id === id);

    document.getElementById("name").value = product.name;
    document.getElementById("price").value = product.price;
    document.getElementById("quantity").value = product.quantity;
    document.getElementById("editId").value = id;

    document.getElementById("formTitle").innerText = "Chỉnh sửa sản phẩm";
    document.getElementById("btnSubmit").innerText = "Lưu thay đổi";
}
// hàm xóa
function deleteProduct(id) {
    let confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm không?");
    if (!confirmDelete) return;

    products = products.filter(p => p.id !== id);

    localStorage.setItem("products", JSON.stringify(products));
    renderProduct();

    alert("Xóa sản phẩm thành công!");
}
// hàm làm mới
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("editId").value = "";

    clearErrors();

    document.getElementById("formTitle").innerText = "Thêm sản phẩm mới";
    document.getElementById("btnSubmit").innerText = "Thêm sản phẩm";
}

// tìm kiếm
document.getElementById("searchInput").addEventListener("input", function () {
    let keyword = this.value.toLowerCase();

    let filterProduct = products.filter(p =>
        p.name.toLowerCase().includes(keyword)
    );

    if (filterProduct.length === 0) {
        document.getElementById("emptyState").style.display = "block";
        document.querySelector("#emptyState p").innerText = "Không tìm thấy sản phẩm phù hợp.";
    } else {
        document.getElementById("emptyState").style.display = "none";
    }

    renderProduct(filterProduct);
});

function clearErrors() {
    document.getElementById("errName").innerText = "";
    document.getElementById("errPrice").innerText = "";
    document.getElementById("errQuantity").innerText = "";
}

renderProduct();