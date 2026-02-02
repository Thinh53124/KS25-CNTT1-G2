let username = "admin";
let pass = "12345";
let count = 3;
let choose = 0;
let usernamelower = username.toLowerCase();
let islogin = false;
let totalcount = 0;
let counteven = 0;
let countodd = 0;
let bookid;
let menu;
let rows;
let cols;
let quantity;
let cost;
let years;
do {
    usernamelower = prompt("Nhap ten tai khoan");
    pass = +prompt("Nhap mat khau");
    if (count == 0) {
        islogin = false;
        alert("Hết lượt đăng nhập")
        break;
    }
    if (usernamelower == "admin" && pass == "12345") {
        islogin = true;
        alert(`Đăng nhập thành công`);
        break;
    } else if (usernamelower == "admin" && pass != "12345") {
        alert(`Sai mat khau (con ${count} lan)`)
        count--;
    } else if (usernamelower != "admin" && pass == "12345") {
        alert(`Sai tai khoan (con ${count} lan)`);
        count--;
    }
} while (username != "admin" || pass != "12345");
if (islogin == true) {

    do {
    menu = "menu\n"
    menu += "1.Phân loại mã số sách.\n"
    menu += "2.Thiết kế bản đồ kho sách\n"
    menu += "3.Dự toán phí bảo trì sách theo năm\n"
    menu += "4.Tìm mã số sách may mắn\n"
    menu += "5.Thoát chương trình\n"
    choose = Number(prompt(menu))
    switch (choose) {
    case 1:
        do {
            bookid = +prompt("Nhập mã số sách (Nhập 0 để dừng): ");
            totalcount++;
            if(bookid % 2 === 0){
                counteven++;
            }else {
                countodd++;
            }
        } while (bookid != 0);
        console.log("Kết quả mã phân loại sách");
        console.log("Tổng số mã sách: "+ totalcount);
        console.log("Số sách khoa học: "+ counteven);
        console.log("Số sách vật lý: "+ countodd);
        break;
    case 2:
        rows = +prompt("Nhap hang:");
        cols = +prompt("Nhap cot: ");
        for(let i = 1;i<=rows;i++){
            let line = "";
            for(let j =1;j<=cols;j++){
                if(i===j){
                    console.log(`${i}-${j} (kệ ưu tiên)`);
                }else {
                    console.log(`${i}-${j}`);
                }
            }
        }
        break;
    case 3:
    quantity = Number(prompt("Số sách:"));
   cost = Number(prompt("Phí 1 cuốn:"));
   years = Number(prompt("Số năm:"));

  if (isNaN(quantity) || isNaN(cost) || isNaN(years)) {
    alert("Nhập sai dữ liệu!");
    return;
  }

  let year = 1;
  while (year <= years) {
    let total = quantity * cost;
    console.log(`Năm ${year}: ${total.toLocaleString()} VNĐ`);
    cost *= 1.1;
    year++;
  }
break;
   case 4:
     let n = Number(prompt("Nhập N:"));
  if (n <= 0 || isNaN(n)) {
    alert("N không hợp lệ!");
    return;
  }

  let i = 1;
  let count = 0;
  let list = "";

  do {
    if (i % 3 === 0 && i % 5 !== 0) {
      list += i + " ";
      count++;
    }
    i++;
  } while (i <= n);

  console.log(list || "Không có mã phù hợp");
  console.log(`Tổng: ${count}`);
break;
    default:
        console.log("vui lòng nhập từ 1-5");
        break;
}
    } while (choose !=5);
}