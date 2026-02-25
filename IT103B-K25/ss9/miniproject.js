let names = ["Iphone", "Iqoo", "Samsung", "Xiaomi"];
let prices = [3600, 1800, 0, 1000];
let stocks = [36, 18, 20, 0];


let choose;
do {
    choose = +prompt(`---- Hệ thống quản lý kho hàng ----
        1. Lọc sản phẩm cao cấp (>500)
        2. Kiểm tra trạng thái dữ liệu
        3. Phân tích giá trị vốn hóa
        4. Triển khai chiết khấu (10%)
        5. Truy vấn sản phẩm theo từ khóa
        6. Báo cáo tình trạng tồn kho
        7. Thoát chương trình`);

    switch (choose) {
        case 1:
            sortingProduct();
            break;
        case 2:
            checkStatus();
            break;
        case 3:
            totalPriceStorage();
            break;
        case 4:
            discountProduct();
            break;
        case 5:
            searchProduct();
            break;
        case 6:
            getInventoryReport();
            break;
        case 7:
            alert("Chương trình kết thúc");
            break;
        default:
            if (choose !== 7)
                alert("Lựa chọn không hợp lệ!");
            break;
    }

} while (choose !== 7);


function sortingProduct() {
    let product = names.filter((value, index) => prices[index] > 500);
    alert(`Danh sách sản phẩm giá > 500: \n` + (product.join(" , ") || "Không có sản phẩm nào"));
}

function checkStatus() {
    let outOfStock = stocks.some(value => value === 0);
    let checkPrice = prices.every(price => price > 100);

    alert(`Tình trạng hết hàng: ${outOfStock ? "Có" : "Không"}
Tất cả sản phẩm > 100: ${checkPrice ? "Đúng" : "Sai"}`);
}

function totalPriceStorage() {
    let total = prices.reduce((sum, value, i) => {
        return sum + value * stocks[i];
    }, 0);
    alert(`Tổng giá trị vốn hóa: ${total.toLocaleString()} USD`);
}

function discountProduct() {
    prices.forEach((value, i) => {
        prices[i] = value * 0.9;
    });
    alert(`Đã áp dụng giảm 10% thành công cho tất cả sản phẩm`);
}

function searchProduct() {
    let keyword = prompt("Sản phẩm cần tìm:").toLowerCase();
    let matches = [];

    names.forEach((itemName, index) => {
        if (itemName.toLowerCase().includes(keyword)) {
            matches.push(`${itemName} - Giá: ${prices[index]} - Kho: ${stocks[index]}`);
        }
    });

    alert(matches.length > 0
        ? "Kết quả tìm kiếm:\n" + matches.join("\n")
        : "Không tìm thấy kết quả phù hợp.");
}

function getInventoryReport() {
    let inventoryDetails = stocks.map((quantity, index) => {
        let availability = quantity > 0 ? "còn hàng" : "hết hàng";
        return `${names[index]} - ${availability} - SL: ${quantity}`;
    });

    alert("Báo cáo tồn kho:\n" + inventoryDetails.join("\n"));
}