let products = [];
let filteredProducts = [];

const init = () => {
    const data = localStorage.getItem("products");
    if (data) {
        products = JSON.parse(data);
        filteredProducts = products.slice();
    }

    document.getElementById("productForm").onsubmit = (e) => {
        e.preventDefault();
        addProduct();
    };
    document.getElementById("searchInput").oninput = searchProducts;
    document.getElementById("filterCategory").onchange = applyCategoryFilter;
    document.getElementById("clearAllBtn").onclick = deleteAllProducts;
    document.getElementById("cancelBtn").onclick = () => {
        document.getElementById("productForm").reset();
        document.getElementById("formTitle").innerText = "Thêm Sản Phẩm Mới";
        document.getElementById("submitBtn").innerText = "➕ Thêm Sản Phẩm";
        document.getElementById("cancelBtn").style.display = "none";
        document.getElementById("productForm").onsubmit = (e) => {
            e.preventDefault();
            addProduct();
        };
    };

    renderProducts(filteredProducts);
};

const addProduct = () => {
    const name = document.getElementById("productName").value.trim();
    const price = Number(document.getElementById("productPrice").value);
    const quantity = Number(document.getElementById("productQuantity").value);
    const category = document.getElementById("productCategory").value;
    const description = document.getElementById("productDescription").value.trim();

    if (name === "") {
        alert("Tên sản phẩm không được để trống");
        return;
    }
    if (category === "") {
        alert("Vui lòng chọn danh mục");
        return;
    }
    if (isNaN(price) || price < 0) {
        alert("Giá không hợp lệ");
        return;
    }
    if (isNaN(quantity) || quantity < 0) {
        alert("Số lượng không hợp lệ");
        return;
    }

    const idCounter = Number(localStorage.getItem("idCounter")) || 1;

    const product = { id: idCounter, name, price, quantity, category, description };

    products.push(product);
    filteredProducts = products.slice();

    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("idCounter", idCounter + 1);

    searchProducts();
    document.getElementById("productForm").reset();
};

const renderProducts = (list) => {
    const container = document.getElementById("table-container");

    if (list.length === 0) {
        container.innerHTML = `
            <div class="empty-state show">
                <div class="empty-state-icon">📦</div>
                <div class="empty-state-text">Không có sản phẩm nào</div>
            </div>
        `;
        updateStatistics();
        return;
    }

    let html = `
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>TÊN SẢN PHẨM</th>
                <th>DANH MỤC</th>
                <th>GIÁ</th>
                <th>SỐ LƯỢNG</th>
                <th>MÔ TẢ</th>
                <th>THAO TÁC</th>
            </tr>
        </thead>
        <tbody>
    `;

    list.forEach((product) => {
        const shortDescription = product.description.length > 30
            ? product.description.substring(0, 30) + "..."
            : product.description;

        const quantityClass = product.quantity < 10 ? "quantity low-stock" : "quantity";

        html += `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td class="price">${product.price.toLocaleString("vi-VN")} ₫</td>
            <td class="${quantityClass}">${product.quantity}</td>
            <td class="description">${shortDescription}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="editProduct(${product.id})">✏️ Sửa</button>
                    <button class="btn-delete" onclick="deleteProduct(${product.id})">🗑 Xóa</button>
                </div>
            </td>
        </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;

    updateStatistics();
};

const editProduct = (id) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    document.getElementById("productName").value = product.name;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productQuantity").value = product.quantity;
    document.getElementById("productCategory").value = product.category;
    document.getElementById("productDescription").value = product.description;

    document.getElementById("formTitle").innerText = "Chỉnh Sửa Sản Phẩm";
    document.getElementById("submitBtn").innerText = "💾 Cập Nhật";
    document.getElementById("cancelBtn").style.display = "inline-block";

    document.getElementById("productForm").onsubmit = (e) => {
        e.preventDefault();
        updateProduct(id);
    };

    document.getElementById("productForm").scrollIntoView({ behavior: "smooth" });
};

const updateProduct = (id) => {
    const name = document.getElementById("productName").value.trim();
    const price = Number(document.getElementById("productPrice").value);
    const quantity = Number(document.getElementById("productQuantity").value);
    const category = document.getElementById("productCategory").value;
    const description = document.getElementById("productDescription").value.trim();

    if (name === "") {
        alert("Tên sản phẩm không được để trống");
        return;
    }
    if (category === "") {
        alert("Vui lòng chọn danh mục");
        return;
    }
    if (isNaN(price) || price < 0) {
        alert("Giá không hợp lệ");
        return;
    }
    if (isNaN(quantity) || quantity < 0) {
        alert("Số lượng không hợp lệ");
        return;
    }

    const product = products.find((p) => p.id === id);
    if (!product) return;

    product.name = name;
    product.price = price;
    product.quantity = quantity;
    product.category = category;
    product.description = description;

    localStorage.setItem("products", JSON.stringify(products));

    filteredProducts = products.slice();
    searchProducts();

    document.getElementById("productForm").reset();
    document.getElementById("formTitle").innerText = "Thêm Sản Phẩm Mới";
    document.getElementById("submitBtn").innerText = "➕ Thêm Sản Phẩm";
    document.getElementById("cancelBtn").style.display = "none";
    document.getElementById("productForm").onsubmit = (e) => {
        e.preventDefault();
        addProduct();
    };
};

const deleteProduct = (id) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    if (!confirm(`Bạn có chắc muốn xóa "${product.name}"?`)) return;

    products = products.filter((p) => p.id !== id);
    localStorage.setItem("products", JSON.stringify(products));

    filteredProducts = products.slice();

    if (document.getElementById("submitBtn").innerText.includes("Cập Nhật")) {
        document.getElementById("productForm").reset();
        document.getElementById("formTitle").innerText = "Thêm Sản Phẩm Mới";
        document.getElementById("submitBtn").innerText = "➕ Thêm Sản Phẩm";
        document.getElementById("cancelBtn").style.display = "none";
        document.getElementById("productForm").onsubmit = (e) => {
            e.preventDefault();
            addProduct();
        };
    }
    searchProducts();
};

const deleteAllProducts = () => {
    if (!confirm("Bạn có chắc muốn xóa toàn bộ sản phẩm?")) return;

    products = [];
    filteredProducts = [];

    localStorage.removeItem("products");
    localStorage.removeItem("idCounter");

    renderProducts(filteredProducts);
};

const searchProducts = () => {
    const keyword = document.getElementById("searchInput").value.toLowerCase().trim();

    filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(keyword) ||
        product.description.toLowerCase().includes(keyword)
    );

    applyCategoryFilter();
};

const applyCategoryFilter = () => {
    const category = document.getElementById("filterCategory").value;

    const result = category === ""
        ? filteredProducts.slice()
        : filteredProducts.filter((p) => p.category === category);

    renderProducts(result);
};

const saveToStorage = () => {
    localStorage.setItem("products", JSON.stringify(products));
};

const loadFromStorage = () => {
    const data = localStorage.getItem("products");
    if (data) {
        products = JSON.parse(data);
        filteredProducts = products.slice();
    }
};

const updateStatistics = () => {
    const totalProducts = products.length;
    const totalQuantity = products.reduce((sum, p) => sum + p.quantity, 0);
    const totalValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

    document.getElementById("totalProducts").innerText = totalProducts;
    document.getElementById("totalQuantity").innerText = totalQuantity;
    document.getElementById("totalValue").innerText = totalValue.toLocaleString("vi-VN") + " ₫";
};

init();