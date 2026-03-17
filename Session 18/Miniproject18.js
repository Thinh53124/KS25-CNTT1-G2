let products = JSON.parse(localStorage.getItem("products")) || [];
// localStorage.setItem("products",JSON.stringify(products));
function addproducts() {
    let index = 0;
    let newproductname = document.getElementById("productName")
    let newproductprice = document.getElementById("productPrice")
    let newproductquantity = document.getElementById("productQuantity")
    let newproductdesc = document.getElementById("productDescription")
    let newproductcategory = document.getElementById("productCategory")
    if (newproductname.value == "") {
        alert(` Trường nhập không được để trống`)
        return;
    }
    if (newproductprice.value <= 0) {
        alert(` Giá phải lớn hơn 0`)
        return;
    }
    if (newproductquantity.value <= 0) {
        alert(` Số lượng phải lớn hơn 0`)
        return;
    }
    let newproduct = {
        id: newid(),
        name: newproductname.value,
        category: newproductcategory.value,
        price: newproductprice.value,
        quantity: newproductquantity.value,
        desc: newproductdesc.value,
    }
    products.push(newproduct);
    newproductcategory.value = "";
    newproductname.value = "";
    newproductdesc.value = "";
    newproductprice.value = "";
    newproductquantity.value = "";
    localStorage.setItem("products", JSON.stringify(products))
    renderlist();

}
function newid() {
    if (products.length === 0) {
        return 1;
    }
    let max = products[0].id;
    products.forEach((value) => {
        if (value.id > max) {
            max = value.id
        }
    })
    return max + 1;
}
function renderlist(index) {
    JSON.parse(localStorage.getItem("products"))
    productTableBody.innerHTML = products
        .map((product, index) => {
            return `<tr>
                <td>${product.id}</td>
                <td><strong>${product.name}</strong></td>
                <td>${product.category}</td>
                <td class="price">${product.price}&nbsp;₫</td>
                <td class="quantity">${product.quantity}</td>
                <td class="description">${product.desc == "" ? " Không có mô tả" : product.desc}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit" onclick="editproduct(${index})">
                      ✏️ Sửa
                    </button>
                    <button class="btn-delete" onclick="deleteproduct(${index})">
                      🗑️ Xóa
                    </button>
                  </div>
                </td>
              </tr>`
        })
}
function deleteproduct(index) {
    products.splice(index, 1)
    renderlist();
    localStorage.setItem("products", JSON.stringify(products))
}
function editproduct(index) {
    let editproductname = document.getElementById("productName")
    let editproductprice = document.getElementById("productPrice")
    let editproductquantity = document.getElementById("productQuantity")
    let editproductdesc = document.getElementById("productDescription")
    let editproductcategory = document.getElementById("productCategory")
    products[index].name = editproductname.value
    products[index].price = editproductprice.value
    products[index].quantity = editproductquantity.value
    products[index].desc = editproductdesc.value
    products[index].category = editproductcategory.value
    editproductcategory.value = "";
    editproductdesc.value = "";
    editproductquantity.value = "";
    editproductprice.value = "";
    editproductname.value = "";
    localStorage.setItem("products", JSON.stringify(products))
    renderlist();
}
function deleteall(index) {
    products.splice(index, products.length)
    renderlist();
    localStorage.setItem("products", JSON.stringify(products))
}
function searchcategory() {
    let searchfilter = document.getElementById("filterCategory")
    let FOUND = products.filter((value) => {

    })
    renderlist();
}
function searchproduct() {
    let searchproducts = document.getElementById("searchInput")
    searchproducts.addEventListener("input", (e) => {
        let found = products.filter((value) => value.name.TolowerCase().includes(searchproducts.value.TolowerCase()))
        console.log(found);
    })
    renderlist();
}