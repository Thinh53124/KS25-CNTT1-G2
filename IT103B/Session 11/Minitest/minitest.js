let products = [
  {
    id: "P01",
    name: "Laptop MacBook Pro M3",
    price: 2000,
    category: "Laptop",
    inStock: true,
  },
  {
    id: "P02",
    name: "Chuột không dây Logitech",
    price: 45,
    category: "Phụ kiện",
    inStock: true,
  },
  {
    id: "P03",
    name: "Bàn phím cơ Keychron",
    price: 95,
    category: "Phụ kiện",
    inStock: false,
  },
  {
    id: "P04",
    name: "Man hinh Dell UltraSharp",
    price: 450,
    category: "Man hinh",
    inStock: true,
  },
  {
    id: "P05",
    name: "Tai nghe Sony WH-1000XM5",
    price: 350,
    category: "Phụ kiện",
    inStock: true,
  },
];

function findById(products) {
  let id = prompt("Nhập tên sản phẩm:");

    let results = products.filter(item =>
        item.id.toLowerCase().includes(id.toLowerCase())
    );

    if (results.length > 0) {
        let output = results.map(item =>
            `id: ${item.id} - name: ${item.name} - price: ${item.price} - category: ${item.category} - inStock: ${item.inStock}`
        ).join("\n");

    alert(output);
  } else {
    alert("Không tìm thấy sản phẩm!");
  }
}
findById(products);