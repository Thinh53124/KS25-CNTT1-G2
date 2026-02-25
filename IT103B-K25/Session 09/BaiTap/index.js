let names = ["iPhone 15", "Samsung S23", "Oppo Reno", "Xiaomi 13", "Nokia C20"];
let prices = [1200, 900, 450, 600, 80];
let stocks = [10, 5, 0, 8, 15];

let loop = true;

while (loop) {
  let choice = prompt(`--- HỆ THỐNG QUẢN LÝ KHO HÀNG ---
1. Lọc sản phẩm cao cấp (>500)
2. Kiểm định trạng thái dữ liệu (Hết hàng/Giá sàn)
3. Phân tích giá trị vốn hóa (Tổng tài sản)
4. Triển khai chiến dịch chiết khấu (Giảm 10%)
5. Truy vấn sản phẩm theo từ khóa
6. Báo cáo tình trạng tồn kho
7. Thoát chương trình

Vui lòng nhập lựa chọn của bạn (1-7):`);

  if (choice === null) {
    loop = false;
    break;
  }

  switch (Number(choice)) {
    case 1:
      highEndProducts();
      break;

    case 2:
      checkDataStatus();
      break;

    case 3:
      calculateTotalValue();
      break;

    case 4:
      applyDiscount();
      break;

    case 5:
      searchProduct();
      break;

    case 6:
      stockReport();
      break;

    case 7:
      exitProgram();
      loop = false;
      break;

    default:
      alert("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 7.");
      break;
  }
}

function highEndProducts() {
  let highEndProduct = names.filter((_, index) => prices[index] > 500);

  alert(
    "Danh sách sản phẩm cao cấp (>500):\n" +
      (highEndProduct.join(", ") || "Không có sản phẩm nào")
  );
}

function checkDataStatus() {
  let hasOutOfStock = stocks.some((s) => s === 0);
  let isAllAbove100 = prices.every((p) => p > 100);

  alert(`Kết quả kiểm định:
- Có sản phẩm hết hàng: ${hasOutOfStock ? "Có" : "Không"}
- Tất cả sản phẩm giá > 100: ${isAllAbove100 ? "Đúng" : "Sai"}`);
}

function calculateTotalValue() {
  let totalValue = prices.reduce((total, price, index) => {
    return total + price * stocks[index];
  }, 0);

  alert(
    `Tổng giá trị tài sản hiện có trong kho: ${totalValue.toLocaleString()} USD`
  );
}

function applyDiscount() {
  prices = prices.map((price) => price * 0.9);
  alert("Đã cập nhật giảm giá 10% cho toàn bộ sản phẩm!");
}

function searchProduct() {
  let keyword = prompt("Nhập tên sản phẩm cần tìm:");
  if (!keyword) return;

  keyword = keyword.toLowerCase();

  let results = [];

  names.forEach((name, index) => {
    if (name.toLowerCase().includes(keyword)) {
      results.push(
        `${name} - Giá: ${prices[index]} - Kho: ${stocks[index]}`
      );
    }
  });

  alert(
    results.length > 0
      ? "Kết quả tìm kiếm:\n" + results.join("\n")
      : "Không tìm thấy sản phẩm nào."
  );
}

function stockReport() {
  let statusReport = stocks.map((qty, index) => {
    let status = qty > 0 ? "Còn hàng" : "Hết hàng";
    return `${names[index]}: ${status} (${qty})`;
  });

  alert("Báo cáo tồn kho:\n" + statusReport.join("\n"));
}

function exitProgram() {
  alert("Đã thoát chương trình. Hẹn gặp lại!");
}