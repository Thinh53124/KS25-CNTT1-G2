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
        <span><strong>${product.name}</strong> - ${product.price.toLocaleString()} VND</span>
        <button class="delete-btn">Xóa</button>
    `;

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
        const isConfirmed = confirm("Bạn có chắc muốn xóa sản phẩm này?");

        if (isConfirmed) {
            li.remove();
        }
    });
    productList.appendChild(li);
}