product = [
  { id: 1, name: "Bánh mì", price: 20000 },
  { id: 2, name: "Phở Tái Lăn", price: 35000 },
  { id: 3, name: "Cơm rang dưa bò", price: 35000 },
  { id: 4, name: "Cay Cay Hằng Đại", price: 35000 },
];
function renderProduct() {
  let result = "";
  for (let i = 0; i < product.length; i++) {
    result += `<li class = "product-item">Tên: ${product[i].name} Giá: ${product[i].price}  <button class = "delete-btn" data-index="${i}">Xóa</button> </li> 
                    <br>`;
  }
  document.getElementById("product-list").innerHTML = result;
}
renderProduct();
function deleteProduct(index) {
  let wannaToDelete = window.confirm("Bạn có muốn xóa sản phẩm này không ?");
  if (wannaToDelete) {
    product.splice(index, 1);
    alert("Xóa thành công bố nó rồi !");
  } else {
    alert("Hủy thao tác xóa !");
  }
}
