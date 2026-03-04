/* 

object(đối tượng).Mô phỏng 1 đối tượng trong thực tế
VD:đối tượng con mèo,cái xe,cái bàn,con người,.....`
1 đối tượng bao gồm 2 thành phần chính:
1.Thuộc tính(Properties)
2.Phương thức(methods)

con mèo:thuộc tính (màu mắt,màu lông,cân nặng,...)
        phương thức(bắt chuột,kêu,....)
Tại sao lại sinh ra object?
giúp gom nhóm các thuộc tính,phương thức chung cho đối tượng để dễ quản lý ,thao tác
cách khai báo đối tượng
bên trong đối tượng bao gồm các cặp KEY và VALUE được ngăn cách với nhau bởi dấu phẩy

*/
let students={
    name:"thu",
    email:"thu@gmail.com",
}//khởi tạo đối tượng sinh viên
let product={
    id:1,
    price:5000,
    image:"",
    name:"iphone15",
    sayHello: function name(params) {
        console.log("xin chao");
        
    },
};//khởi tạo đối tượng sản phẩm
/* 
Thao tác với đối tượng
CRUD
1.C_Create thêm
2.R_Read Đọc
3.U_Update cập nhật
4.D_Delete Xóa
*/
// tạo đối tượng sách
let valorant={

};
// thêm các thuộc tính
valorant.id="2504";
valorant.agent="clove"
valorant["skin"]="Kuronami";
console.log("valorant",valorant);
for(const key in valorant){
    console.log("key:",valorant[key]);
}
valorant.skin = "Gaia"
valorant.agent = "Reyna"
console.log("valorant",valorant);
valorant.skin = "Gaia"
valorant.sokin = "Gaia"
delete valorant.sokin;
console.log("valorant",valorant);

let a=5;
let b=a;
a=11;
console.log("b",b);

let obj1={
    email:"A",
}
let obj2=obj1;
obj1.email = "B";
console.log("obj2",obj2);




