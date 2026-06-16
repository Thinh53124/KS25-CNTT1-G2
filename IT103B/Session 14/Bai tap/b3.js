let products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

function formatPrice(price) {
  return price.toLocaleString("vi-VN") + " VND";
}

function renderProducts() {
  let str = "";

  for (let i = 0; i < products.length; i++) {
    str += `
<li class="product-item">
<h3>${products[i].name}</h3>
<p>Giá: ${formatPrice(products[i].price)}</p>
<button onclick="editPrice(${i})">Sửa giá</button>
<button onclick="deleteProduct(${products[i].id})">Xóa</button>
</li>
`;
  }

  document.getElementById("product-list").innerHTML = str;
}

function addProduct(event) {
  event.preventDefault();

  let name = document.getElementById("product-name").value.trim();
  let price = document.getElementById("product-price").value.trim();

  if (name === "" || price === "") return;

  let newProduct = {
    id: Date.now(),
    name: name,
    price: Number(price),
  };

  products.push(newProduct);

  document.getElementById("product-name").value = "";
  document.getElementById("product-price").value = "";

  renderProducts();
}

function deleteProduct(id) {
  let confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này không?");

  if (confirmDelete) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        products.splice(i, 1);
        break;
      }
    }

    renderProducts();
  }
}

function editPrice(index) {
  let newPrice = prompt("Nhập giá mới (VND):");

  if (newPrice === null || newPrice.trim() === "") return;

  products[index].price = Number(newPrice);

  renderProducts();
}

renderProducts();
