const product = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 250000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
let renderProduct = (arr) => {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += `<li class = "product-item">Tên: ${arr[i].name} Giá: ${arr[i].price.toLocaleString("vi-VN")} VND </li> <br>`;
    }
    document.getElementById("product-list").innerHTML = result;
}
renderProduct(product);
document.getElementById("sort-asc").addEventListener("click", () => {
    renderProduct([...product].sort((a, b) => a.price - b.price));
});
document.getElementById("sort-desc").addEventListener("click", () => {
    renderProduct([...product].sort((a, b) => b.price - a.price));
});