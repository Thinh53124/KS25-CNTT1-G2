let products = [
{ id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
{ id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true },
{ id: "P03", name: "Ban phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false },
{ id: "P04", name: "Man hinh Dell UltraSharp", price: 450, category: "Man hinh", inStock: true },
{ id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phụ kiện", inStock: true }
];
const targetId = 2;
const foundProduct = products.find(product => product.id === targetId);
if (foundProduct) {
    console.log("Thông tin chi tiết sản phẩm:");
    console.log(foundProduct);
} else {
    console.log("Không tìm thấy sản phẩm");
}


let result = products.every(product => typeof product.price > 0);
if(result==true){
    console.log("du lieu bang gia hop le");
}
else{
    console.log("phat hien san pham chua cap nhat gia");
}





