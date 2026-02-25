let orders = [
  "Đơn hàng A",
  "Đơn hàng B",
  "Đơn hàng C",
  "Đơn hang D",
  "Đơn hang E",
];

let revenues = [1500, 2800, 1200, -500, 3200];

const orderReports = orders.map((order, index) => {
  return `${order} mang về ${revenues[index]} USD`;
});

console.log("Danh sách báo cáo:");
console.log(orderReports);

orderReports(orderReport);


function sum(sumRenevues){
    let sumRenevue = revenues.filter((index) => {
        return sum > 0 
    })
}

sum(sumRenevues)