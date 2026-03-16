/*

LẤY DỮ LIỆU
    localStorage.getItem("tên_key")
    Đối với mảng hoặc object khi lấy về phải chuyển từ định dạng JSON sang dạng đúng của nó
    JSON.parse(Giá trị lấy về)
    ****************************
XÓA DỮ LIỆU
    1. Xóa từng key
        localStorage.removeItem("Tên_key")
    2. Xóa hết
        localStorage.clear()
*/


let age = localStorage.getItem("age")

let fullName = localStorage.getItem("fullName")

console.log("fullname", fullName);

let products = JSON.parse(localStorage.getItem("products"))

let removeItemYea = localStorage.removeItem("age")

localStorage.clear()