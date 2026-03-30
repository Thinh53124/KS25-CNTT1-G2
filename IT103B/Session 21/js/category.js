/*
1. Danh sách danh mục : Dùng Mảng
2. Từng danh mục      : Object
3. Các thuộc tính có trong danh mục:
    + id   : mã danh mục _ không trùng
    + name : tên danh mục _ không trùng

*/

let categories = JSON.parse(localStorage.getItem("categories")) || [];
    // if (categories == null) {
    //     categories = [];
    // }

// Tạo hàm thêm danh mục sp
function addCategory() {
    console.log("đã gọi hàm");
    let categoryName = document.getElementById("category").value.trim();
    // for thường
    // for (let i = 0; i < categories.length; i++) {
    //     if (categories[i].name == categoryName) {
    //         console.log("tên danh mục đã tồn tại");
    //         return;
    //     }
        
    // }
    // Dùng find
    let result = categories.find((item)=>item.name == categoryName);
    if (result) {
        document.querySelector(".error-category").style.display = "block";
        document.querySelector(".error-category").innerHTML = "tên danh mục đã tồn tại";
        return;
    } else {
        document.querySelector(".error-category").style.display = "none";
    }
    document.querySelector(".error-category").style.display = "none";
    
    let category = {
        id: Math.floor(Math.random()*999999) + new Date().getMilliseconds(),
        name: categoryName
    }
    categories.push(category);
    localStorage.setItem("categories",JSON.stringify(categories));
    renderCategories();
}

function renderCategories() {
    let str = ``;
    for (let i = 0; i < categories.length; i++) {
        str += `<li> ${categories[i].name}
        <button>Sửa</button>
        <button>Xóa</button>
        </li>
        `
    }
    document.getElementById("list").innerHTML = str;
}