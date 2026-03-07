let products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

let productList = document.getElementById("product-list");

for (let i = 0; i < products.length; i++) {
  let div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
<h3>${products[i].name}</h3>
<p>Giá: ${products[i].price} VND</p>
`;

  productList.appendChild(div);
}
