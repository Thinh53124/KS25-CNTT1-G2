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
        <span class="product-info">
            <strong>${product.name}</strong> - <span class="price-value">${product.price.toLocaleString()}</span> VND
        </span>
        <div class="actions">
            <button class="edit-price-btn">Sửa giá</button>
            <button class="delete-btn">Xóa</button>
        </div>
    `;

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        const isConfirmed = confirm("Bạn có chắc muốn xóa sản phẩm này?");
        if (isConfirmed) {
            li.remove();
        }
    });

    const editBtn = li.querySelector('.edit-price-btn');
    const priceSpan = li.querySelector('.price-value');

    editBtn.addEventListener('click', function() {
        const newPrice = prompt("Nhập giá mới (VND):");

        if (newPrice !== null && newPrice.trim() !== "" && !isNaN(newPrice)) {
            const priceNum = parseInt(newPrice);
            priceSpan.innerText = priceNum.toLocaleString(); 
        } else if (newPrice !== null) {
            alert("Vui lòng nhập một số tiền hợp lệ!");
        }
    });

    productList.appendChild(li);
}

products.forEach(p => renderProduct(p));