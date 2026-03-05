let products = [
{ id: 1, name: "Bánh Chưng", price: 150000 },
{ id: 2, name: "Giò Lụa", price: 180000 },
{ id: 3, name: "Cành Đào", price: 500000 },
{ id: 4, name: "Mứt Tết", price: 120000 },
{ id: 5, name: "Bao Lì Xì", price: 25000 },
{ id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
function addproduct(){
    let productname = document.getElementById("product-name");
    let productprice = document.getElementById("product-price");
    if(productname.value.trim()==""){
        alert(`Khong duoc de rong`);
        return;
    }
    if(productprice.value.trim()==""){
        alert(`Khong duoc de rong`);
        return;
    }
    let newproduct ={
        id : products.length + 1,
        name : productname.value,
        price: productprice.value,
    }
    products.push(newproduct)
    productname.value = "";
    productprice.value = "";
    renderproducts();
}
function renderproducts(){
    // let productname = document.getElementById("product-name")
    // let productprice = document.getElementById("product-price")
    // let string = "";
    productlist.innerHTML = products
    .map((products)=>{
        return `id:${products.id}--name:${products.name}---price:${products.price} <br>`
    })
    .join("")
}
renderproducts();
function deleteproducts(){
    let findproduct = +prompt(`tim id san pham can xoa`);
    let found = products.findIndex((value)=>value.id === findproduct)
    let confirmdl = confirm(` Ban co chac muon xoa`)
    if(found){
        if(confirmdl){
            products.splice(found,1);
            renderproducts();
        }
    }else {
        alert(`khong tim thay`)
    }
}