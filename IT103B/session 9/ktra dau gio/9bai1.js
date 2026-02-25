let orders = ["đơn hàng A","đơn hàng B","đơn hàng C","đơn hàng D","đơn hàng E"];
let revenues =[1500,2000,1200,-500,3200];
let orderReports =[];

for(let i=0;i<orders.length;i++){
    let newArr = (orders[i] + ' mang về ' + revenues[i] + 'USD');
    orderReports.push(newArr);


}
console.log(orderReports);
