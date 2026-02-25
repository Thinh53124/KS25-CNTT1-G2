let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];

function orderReports() {
    orders.forEach((order, index) => {
        console.log(`${order} mang về ${revenues[index]} USD`);
    });
}

function sumRevenue() {
    return revenues.reduce((total, value) => total + value, 0);
}

function positiveRevenue() {
    return revenues
        .filter(value => value > 0)
        .reduce((total, value) => total + value, 0);
}

function highestOrder() {
    let max = Math.max(...revenues);
    let index = revenues.indexOf(max);
    return `${orders[index]} có doanh thu cao nhất: ${max} USD`;
}

orderReports();
console.log("Tổng doanh thu:", sumRevenue());
console.log("Tổng doanh thu dương:", positiveRevenue());
console.log(highestOrder());