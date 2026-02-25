let name = ["a","b"];
let price = [700,400];
let stock = [10,20];
// function highprice (){
//     let upper = name.filter((value,index) => price[index] >500 );
//     alert (`San pham co gia >500: ${upper.join("\n")}`);
// }
// highprice();
function totalprice (price,stock){
    let total = price.reduce((sum,value,index)=>{
        return sum + value * stock[index];
    });
    alert(`Tổng giá sản phẩm: ${total}`);
}
totalprice(price,stock);