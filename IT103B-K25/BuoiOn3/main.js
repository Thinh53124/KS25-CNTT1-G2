let products = JSON.parse(localStorage.getItem("products")) || [];

function updateProduct() {
  document.getElementById("totalBadge").innerHTML =
    `${products.length} sản phẩm`;
}

function resetForm() {
  document.getElementById("iName").value = "";
  document.getElementById("iPrice").value = "";
  document.getElementById("iStock").value = "";
  document.getElementById("iStatus").value = "Còn hàng";
  document.getElementById("editId").value = "";
  document.getElementById("formTitle").innerText = "Thêm sản phẩm mới";
  document.getElementById("btnSubmit").innerText = "Thêm sản phẩm";
}

function renderProduct(list = products) {
  let str = "";
  for (let i = 0; i < list.length; i++) {
    str += `<tr id="row-${list[i].id}">
                <td>${i + 1}</td>
                <td class="td-name">${list[i].name}</td>
                <td class="td-price">${list[i].price}</td>
                <td style="font-weight: 700">${list[i].stock}</td>
                <td>${list[i].status}</td>
                <td>
                  <div class="td-actions">
                    <button class="btn btn-sm btn-edit" onclick="editProduct(${list[i].id})">✏ Sửa</button>
                    <button class="btn btn-sm btn-del" onclick="deleteProduct(${i})">✕ Xóa</button>
                  </div>
                </td>
              </tr>`;
  }
  document.getElementById("tbody").innerHTML = str;
  if (list.length == 0) {
    document.querySelector("#emptyState").style.display = "block";
    return;
  } else {
    document.querySelector("#emptyState").style.display = "none";
  }
}

renderProduct();
updateProduct();

function addProduct() {
  let idEdit = document.getElementById("editId").value;
  let productName = document.getElementById("iName").value.trim();
  let productPrice = document.getElementById("iPrice").value.trim();
  let productStock = document.getElementById("iStock").value.trim();
  let productStatus = document.getElementById("iStatus").value.trim();

  if (!productName || productName.trim() === "") {
    document.querySelector(".error-name").style.display = "block";
    return false;
  } else {
    document.querySelector(".error-name").style.display = "none";
  }

  if (!idEdit) {
    const isExist = products.some((c) => c.name === productName);
    if (isExist) {
      document.querySelector(".error-name").style.display = "block";
      document.querySelector(".error-name").innerHTML = "Sản phẩm đã tồn tại";
      return false;
    }
  }

  if (!productPrice || productPrice.trim() === "") {
    document.querySelector(".error-price").style.display = "block";
    return false;
  } else {
    document.querySelector(".error-price").style.display = "none";
  }

  if (parseFloat(productPrice) < 1000) {
    document.querySelector(".error-price").style.display = "block";
    document.querySelector(".error-price").innerHTML = "Giá phải lớn hơn 1000";
    return false;
  }

  if (!productStock || productStock.trim() === "") {
    document.querySelector(".error-stock").style.display = "block";
    return false;
  } else {
    document.querySelector(".error-stock").style.display = "none";
  }

  if (
    !Number.isInteger(parseFloat(productStock)) ||
    parseFloat(productStock) < 0
  ) {
    document.querySelector(".error-stock").style.display = "block";
    document.querySelector(".error-stock").innerHTML =
      "Tồn kho phải là số nguyên lớn hơn hoặc bằng 0.";
    return false;
  }

  if (idEdit) {
    let index = products.findIndex((p) => p.id == idEdit);
    products[index] = {
      id: +idEdit,
      name: productName,
      price: parseFloat(productPrice),
      stock: parseInt(productStock),
      status: productStatus,
    };
    alert("Cập nhật sản phẩm thành công!");
  } else {
    let product = {
      id: Math.floor(Math.random() * 9999) + new Date().getMilliseconds(),
      name: productName,
      price: parseFloat(productPrice),
      stock: parseInt(productStock),
      status: productStatus,
    };
    products.push(product);
    alert("Thêm sản phẩm thành công!");
  }

  localStorage.setItem("products", JSON.stringify(products));
  renderProduct();
  updateProduct();
  resetForm();
}

function deleteProduct(index) {
  if (!confirm("Bạn có chắc muốn xóa?")) return;
  products.splice(index, 1);
  alert("Xóa sản phẩm thành công!");
  localStorage.setItem("products", JSON.stringify(products));
  renderProduct();
  updateProduct();
}

function editProduct(id) {
  let product = products.find((p) => p.id === id);

  document.getElementById("iName").value = product.name;
  document.getElementById("iPrice").value = product.price;
  document.getElementById("iStock").value = product.stock;
  document.getElementById("iStatus").value = product.status;
  document.getElementById("editId").value = id;

  document.getElementById("formTitle").innerText = "Chỉnh sửa sản phẩm";
  document.getElementById("btnSubmit").innerText = "Lưu thay đổi";
}

function searchProduct() {
  let keyword = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  let result = products.filter((item) =>
    item.name.toLowerCase().includes(keyword),
  );
  document.getElementById("emptyState").innerHTML =
    `<div class="empty-ico">📭</div>
    <p>Không tìm thấy sản phẩm phù hợp!!</p>`;
  renderProduct(result);
}
