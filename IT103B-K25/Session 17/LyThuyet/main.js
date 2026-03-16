/*
BROWSER STORAGE:
    -Dịch vụ cho phép lưu trữ dữ liệu phía trình duyệt web!
        Cung cấp 3 kiểu lưu dữ liệu
        1. Local Storage
            + Dung lượng lưu: 5-10MB
            + Dữ liệu khi lưu (đóng trình duyệt, tắt máy) thì dữ liệu không bị mất !
        2. Session Storage
            + Dung lượng lưu: 5-10MB
            + Phiên làm việc: Khi đóng trình duyệt, tắt máy thì dữ liệu bị mất
        3. Cookies
            + Có thể set được thời gian tồn tại
    ***********************************************************************************
    - Cách lưu trữ dữ liệu. 
    I. Lưu: localStorage.setItem(Tên_Key, value)
        Đối với dữ liệu là mảng hoặc object thì phải chuyển sang định dạng JSON.
        JSON.stringify(Dữ liệu)
*/

let fullName = "Phùng Thanh Độ";
localStorage.setItem("fullName", fullName);

let age = 36;
localStorage.setItem("age", age);

let students = ["Độ", "Vũ"];
localStorage.setItem("student", JSON.stringify(students));

let products = [
  {
    id: 1,
    name: "Khô Gà",
  },
  {
    id: 2,
    name: "Bã Mía",
  },
];

localStorage.setItem("products", JSON.stringify(products))
