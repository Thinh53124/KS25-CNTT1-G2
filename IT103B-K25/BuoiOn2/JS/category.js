/*
    1. Danh sách danh mục: mảng
    2. Từng danh mục: object
    3. Các thuộc tính có trong danh mục: 
        + ID (Không trùng nhau, không để trống)
        + Name (Không để trống, không trùng nhau)
        + ...


*/
let categories = JSON.parse(localStorage.getItem("categories")) || [];

//Tạo hàm thêm danh mục sản phẩm
function addCategory() {
  let categoryName = document.getElementById("category").value.trim();
  // for
  // for (let i = 0; i < categories.length; i++) {
  //   if (categories[i].name == categoryName) {
  //     console.log("Trùng");
  //     return;
  //   }
  // }
  // find
  let result = categories.find((item) => item.name == categoryName);
  if (result) {
    document.querySelector(".error-category").style.display = "block";
    document.querySelector(".error-category").innerHTML =
      "tên danh mục đã tồn tại";
    return;
  } else {
    document.querySelector(".error-category").style.display = "none";
  }
  let category = {
    id: Math.floor(Math.random() * 9999) + new Date().getMilliseconds(),
    name: categoryName,
  };
  categories.push(category);
  localStorage.setItem("categories", JSON.stringify(categories));
  renderCategory()
}

//Tạo hàm hiển thị danh mục sản phẩm
function renderCategory() {
  let str = "";
  for (let i = 0; i < categories.length; i++) {
    str += `
        <li>Danh mục ${categories[i].name}
        <button class = "edit">Sửa</button>
        <button class = "delete">Xóa</button></li>
        `;
  }
  document.getElementById("list").innerHTML = str;
}

renderCategory();
