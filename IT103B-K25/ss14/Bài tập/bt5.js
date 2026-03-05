const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search-input');

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

searchInput.addEventListener('input', function() {
    const keyword = this.value.toLowerCase().trim();
    const allItems = document.querySelectorAll('.product-item');

    allItems.forEach(item => {
        const productName = item.querySelector('.name').innerText.toLowerCase();

        if (productName.includes(keyword)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});