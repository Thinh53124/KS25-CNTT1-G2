/*
    1. Danh sách sản phẩm: mảng
    2. Từng sản phẩm: object
    3. Một sản phẩm có các thông tin sau: 
        + ID (Không trùng nhau, không để trống)
        + Name (Không để trống, không trùng nhau)
        + Price
        + Image
        + Stock
*/
let products = JSON.parse(localStorage.getItem("products")) || [];
//Tạo hảm hiển thị danh mục lựa chọn
let categories = JSON.parse(localStorage.getItem("categories")) || [];
function renderCategory() {
  let str = `<option value="">Lựa chọn danh mục</option>`;
  for (let i = 0; i < categories.length; i++) {
    str += `<option value="${categories[i].id}">
                Danh mục ${categories[i].name}
            </option>`;
  }
  document.getElementById("option").innerHTML = str;
}
renderCategory();
//tạo hàm thêm sản phẩm
function addProduct() {
  let productName = document.getElementById("name").value.trim();
  let productImage = document.getElementById("img").value.trim();
  let productPrice = document.getElementById("price").value.trim();
  let categoryId = handleChange();
  let productStock = document.getElementById("stock").value.trim();
  let product = {
    id: Math.floor(Math.random() * 9999) + new Date().getMilliseconds(),
    name: productName,
    image: productImage,
    category: categoryId,
    price: productPrice,
    stock: productStock,
  };
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  renderProduct();
}
//Hàm chọn danh mục sản phẩm
function handleChange() {
  let optionValue = document.getElementById("option").value;
  return optionValue; 
}
//Hàm tìm kiếm
function search() {
  let keyword = document.getElementById("search").value.trim().toLowerCase();
  let result = products.filter(item =>
    item.name.toLowerCase().includes(keyword)
  );

  renderProduct(result); 
}
// Hàm hiển thị danh sách sản phẩm
function renderProduct(list = products) {
  let str = "";
  for (let i = 0; i < list.length; i++) {
    str += `<tr>
                <td>${i + 1}</td>
                <td>${list[i].name}</td>
                <td>${list[i].image}</td>
                <td>${list[i].price}</td>
                <td>${list[i].stock}</td>
                <td>
                    <button class="edit">Sửa</button>
                    <button class="delete">Xóa</button>
                </td>
            </tr>`;
  }
  document.getElementById("table").innerHTML = str;
}
renderProduct();
