const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

const productList = document.getElementById('product-list');

function renderProduct(product) {
    const li = document.createElement('li');
    li.className = 'product-item';

    li.innerHTML = `
        <span class="info">
            <strong class="name">${product.name}</strong> - 
            <span class="price">${product.price.toLocaleString()}</span> VND
        </span>
        <div class="btns">
            <button class="edit-price-btn">Sửa giá</button>
            <button class="delete-btn">Xóa</button>
        </div>
    `;
    productList.appendChild(li);
}

products.forEach(p => renderProduct(p));


const sortSelect = document.getElementById('sort-controls');

function refreshList(array) {
    productList.innerHTML = "";
    array.forEach(product => renderProduct(product));
}

sortSelect.addEventListener('change', function () {
    const sortValue = this.value;

    let sortedProducts = [...products];

    if (sortValue === "sort-ascasc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "sort-desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    refreshList(sortedProducts);
});