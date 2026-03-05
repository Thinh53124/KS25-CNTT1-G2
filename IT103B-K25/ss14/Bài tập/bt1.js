const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 }
];

const productList = document.getElementById('product-list');
const productForm = document.getElementById('product-form');

function renderProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
        const li = document.createElement('li');
        li.classList.add('product');
        li.innerHTML = `<strong>${product.name}</strong> - ${product.price.toLocaleString()} VNĐ`;
        productList.appendChild(li);
    });
}

productForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('product-name');
    const priceInput = document.getElementById('product-price');

    if (nameInput.value && priceInput.value) {
        const newProduct = {
            id: products.length + 1,
            name: nameInput.value,
            price: Number(priceInput.value)
        };

        products.push(newProduct);
        renderProducts();

        nameInput.value = "";
        priceInput.value = "";
    } else {
        alert("Vui lòng nhập đầy đủ tên và giá sản phẩm!");
    }
});

renderProducts();