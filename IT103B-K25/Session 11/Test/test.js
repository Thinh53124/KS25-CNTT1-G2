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
    name: "Chuột không day Logitech",
    price: 45,
    category: "Phụ kiện",
    inStock: true,
  },
  {
    id: "P03",
    name: "Ban phím cơ Keychron",
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

findID();

checkData();

formatDisplay();

function findID() {
  let findObjID = products.find((s) => {
    return s.id === "P03";
  });

  if (!findObjID) {
    console.log("Không tìm thấy sản phẩm");
  } else {
    console.log(findObjID.name);
  }
}

function checkData() {
  let result = products.every((s) => {
    return s.price > 0;
  });

  if (result) {
    console.log("Dữ liệu bảng giá hợp lệ");
  } else {
    console.log("Phát hiện sản phẩm chưa cập nhật giá");
  }
}
function formatDisplay() {
  let catalogDisplay = [];
  let output = []
  products.forEach((product) => {
    
  });
}

