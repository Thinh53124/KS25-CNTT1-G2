product = [
  { id: 1, name: "Bánh mì", price: 20000 },
  { id: 2, name: "Phở Tái Lăn", price: 35000 },
  { id: 3, name: "Cơm rang dưa bò", price: 35000 },
  { id: 4, name: "Cay Cay Hằng Đại", price: 35000 },
];
let renderProduct = () => {
  let result = "";
  for (i = 0; i < product.length; i++) {
    result += `<li>Tên: ${product[i].name} Giá: ${product[i].price.toLocaleString("vi-VN")} VND       <button class="edit-price-btn" data-index = "${i}" >Sửa giá</button></li> <br>`;
  }
  document.getElementById("product-list").innerHTML = result;
};
renderProduct();

document.getElementById("product-list").addEventListener("click", (e) => {
  let newPrice;
  if (e.target.classList.contains("edit-price-btn")) {
    let index = e.target.dataset.index;
    while (true) {
      newPrice = prompt("Vui lòng nhập giá mới !");
      if (
        newPrice === null ||
        isNaN(Number(newPrice)) ||
        newPrice === "" ||
        Number(newPrice) < 0
      ) {
        alert("Giá bạn nhập không hợp lệ");
        continue;
      }
      break;
    }
    product[index].price = +newPrice;
    alert("cập nhập thành công !");
  }
  renderProduct();
});
