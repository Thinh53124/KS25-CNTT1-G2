const name = ["Iphone","Samsung","Xiaomi","Oppo"];
const price = [2000,1200,800,20];
const stock = [20,10,0,0];
let choose;
function highthing(){
    // let message = "";
    // for(let i=0;i<price.length;i++){
    //     if(price[i]>500){
    //     message += name[i]+"\n";
    //     }
    // }
    // alert(message);
    let high = name.filter ((value,index) => price[index]>500);
    alert("Danh sách sản phẩm\n"+ high.join(",")||"Không có sản phẩm");
    }
function checkstatus(){
    // let outofstock = [];
    // let checkprice = [];
    let outofstock = stock.some(value => value <= 0);
    let checkprice = price.every(value => value > 100);
    alert (`Tình trạng hết hàng:${outofstock ? "Có" : "Không"} \n tất cả sản phẩm >100 :${checkprice ? "Đúng" : "Sai"}`);
    // for(let i=0;i<name.length;i++){
    //     if(stock[i] <= 0){
    //         outofstock.push(name[i]);
    //     }
    //     if(price[i]<=100){
    //         checkprice.push(name[i]);
    //     }
    // }

    // alert (`San pham hết hàng:\n${outofstock.length > 0? outofstock.join(",") : "Không"} \n tất cả sản phẩm <100 :${checkprice.length > 0 ? checkprice.join(",") : "Sai"}`);
}
function totalpricestorage(){
    let total = price.reduce((sum,value,i)=>{
        return sum + value * stock[i];
    },0);
    alert(`Tổng giá trị vốn hóa: ${total}`);
}
function discount(){
    let discountprice = price.forEach((value,i)=>{
        return price[i] = value * 0.9;
    });
    alert (`đã giảm 10% \n ${price}`);
}
function searchproduct(){
    // let findproduct = prompt("Nhập tên sản phẩm:");
    // let findproductindex = name.findIndex(value => value.toLowerCase() === findproduct.toLowerCase());
    // if(findproductindex !== -1){
    //     alert(`Sản phẩm: ${name[findproductindex]}\nGiá: ${price[findproductindex]}\nTồn kho: ${stock[findproductindex]}`);
    // }else{
    //     alert("Không tìm thấy sản phẩm");
    // }
    let findword = prompt("Sản phẩm cần tìm").toLowerCase();
    let result = [];
    name.forEach((value,index)=>{
        if(value.toLowerCase().includes(findword)){
            result.push(`${value} - ${price[index]} -${stock[index]}`)
        }
    })
    alert(result.length>0?"kết quả tìm kiếm "+"\n"+result.join("\n"):"không tìm thấy kết quả")
}
function reportstorage(){
    // let statuslist = stock.map(value => value > 0 ? "Còn hàng" : "Hết hàng");
    // let result = "";
    // for(let i=0;i<name.length;i++){
    //     result += `${name[i]} - ${statuslist[i]} - (${stock[i]})\n`;
    // }
    // alert (result);
    let status = stock.map((value,index)=>{
        let reportstatus = value > 0 ? "còn hàng" : "hết hàng";
        return `${name[index]} - ${reportstatus} - ${value}`
    })
    alert ("báo cáo tồn kho \n" + status.join("\n"))
}
do {
    choose = +prompt(`
        --Hệ thống quản lý kho hàng--
        1.Lọc sản phẩm cao cấp(>500)
        2.Kiểm tra trạng thái dữ liệu(Hết hàng/Giá sàn)
        3.Phân tích giá trị vốn hóa(tổng tài sản)
        4.Trải khai chiến dịch chiết khấu(Giảm 10%)
        5.Truy vấn sản phẩm theo từ khóa
        6.Báo cáo tình trạng tồn kho
        7.Thoát chương trình`);
        switch (choose) {
            case 1:
                highthing();
                break;
            case 2:
                checkstatus();
                break;
            case 3:
                totalpricestorage();
                break;
            case 4:
                discount();
                break;
            case 5:
                searchproduct();
                break;
            case 6:
                reportstorage();
                break;
            case 7:
                break;
            default:
                break;
        }

} while (choose != 0);