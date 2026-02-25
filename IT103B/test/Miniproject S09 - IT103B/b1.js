let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];

function orderReports() {
    orders.forEach((order, index) => {
        console.log(`${order} mang về ${revenues[index]} USD`);
    });
}
