let products = JSON.parse(localStorage.getItem("products")) || [];
let editId = null;

const productForm = document.getElementById("productForm");
const productList = document.getElementById("productList");
const emptyState = document.getElementById("emptyState");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};

const saveToStorage = () => {
  localStorage.setItem("products", JSON.stringify(products));
};


const toggleEmptyState = (isEmpty) => {
  if (isEmpty) {
    emptyState.classList.add("show");
    emptyState.innerHTML = `
      <div class="empty-state-icon">📦</div>
      <p class="empty-state-text">Chưa có sản phẩm nào trong danh sách</p>
    `;
  } else {
    emptyState.classList.remove("show");
  }
};

const renderProducts = (data = products) => {
  productList.innerHTML = "";
  toggleEmptyState(data.length === 0);

  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.id}</td>
            <td style="font-weight: 600">${item.name}</td>
            <td><span class="category-badge">${item.category}</span></td>
            <td class="price">${formatCurrency(item.price)}</td>
            <td class="quantity ${item.quantity < 5 ? "low-stock" : ""}">
                ${item.quantity}
            </td>
            <td class="description" title="${item.description}">
                ${item.description || "<em>Không có mô tả</em>"}
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="editProduct('${item.id}')">✏️ Sửa</button>
                    <button class="btn-delete" onclick="deleteProduct('${item.id}')">🗑️ Xóa</button>
                </div>
            </td>
        `;
    productList.appendChild(row);
  });
};

productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const productData = {
    id: editId || Date.now().toString().slice(-6),
    name: document.getElementById("productName").value,
    category: document.getElementById("productCategory").value,
    price: Number(document.getElementById("productPrice").value),
    quantity: Number(document.getElementById("productQuantity").value),
    description: document.getElementById("productDescription").value,
  };

  if (editId) {
    products = products.map((p) => (p.id === editId ? productData : p));
    alert("Cập nhật sản phẩm thành công!");
    resetForm();
  } else {
    products.push(productData);
    alert("Thêm sản phẩm thành công!");
  }

  saveToStorage();
  renderProducts();
  productForm.reset();
});

const deleteProduct = (id) => {
  const product = products.find((p) => p.id === id);
  if (confirm(`Bạn có chắc chắn muốn xóa sản phẩm "${product.name}"?`)) {
    products = products.filter((p) => p.id !== id);
    saveToStorage();
    renderProducts();
  }
};

window.editProduct = (id) => {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  editId = id;
  document.getElementById("formTitle").innerText = "Chỉnh Sửa Sản Phẩm";
  document.getElementById("productName").value = product.name;
  document.getElementById("productCategory").value = product.category;
  document.getElementById("productPrice").value = product.price;
  document.getElementById("productQuantity").value = product.quantity;
  document.getElementById("productDescription").value = product.description;

  submitBtn.innerHTML = "💾 Cập Nhật Sản Phẩm";
  cancelBtn.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const resetForm = () => {
  editId = null;
  document.getElementById("formTitle").innerText = "Thêm Sản Phẩm Mới";
  submitBtn.innerHTML = "➕ Thêm Sản Phẩm";
  cancelBtn.style.display = "none";
  productForm.reset();
};

cancelBtn.addEventListener("click", resetForm);

clearAllBtn.addEventListener("click", () => {
  if (confirm("CẢNH BÁO: Bạn có chắc chắn muốn xóa TOÀN BỘ danh sách sản phẩm?")) {
    products = [];
    saveToStorage();
    renderProducts();
  }
});

const handleFilter = () => {
  const searchTerm = searchInput.value.toLowerCase();
  const categoryTerm = filterCategory.value;

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm);
    const matchCategory = categoryTerm === "" || p.category === categoryTerm;
    return matchSearch && matchCategory;
  });

  renderProducts(filtered);
};

searchInput.addEventListener("input", handleFilter);
filterCategory.addEventListener("change", handleFilter);

renderProducts();