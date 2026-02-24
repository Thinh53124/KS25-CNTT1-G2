/*
    Kiểu dữ liệu:
        2 nhóm:
        N1: 
        +number
        +string
        +boolean
        +undefined
        +NaN
        +Null
        N2:
        + array 
        + fundtion
        + object
    Toán tử:
        + số học: +, -, *, /, %, **
        + logic: &&,||
        + so sánh: >, <, >=, <=, !=, !==, ==, ===
        + tăng giảm: ++a, a++
        + ba ngôi: ...?...:...
    Câu đk & vòng lặp:
        condition:
            + if_else
            + if_else: lồng
            + if_else: bậc thang
            + switch-case
        loop:
            + for
            + while
            + do while
    Bài 3: mảng
    + Cách khai báo let const var tên mảng = [];
    + Thao tác với mảng
    + CRUD
        C(CREATE) : Thêm
        - push(): thêm cuối
        - unshift(): Thêm vào đầu
        - splice(): thêm vào vị trí bất kỳ
        R(READ) : Hiển thị
        - for, for in, for of
        U(UPDATE) : cập nhật
        - arr[index] = gtri mới
        - splice(index, deleteCount, addValue): 
        D(DELETE) : xóa
        - pop(): xóa cuối
        - shift(): xóa đầu
        - splice(): xóa vị trí bất kì

    + Các phương thức làm việc với mảng
        1. slice(): cắt, sao chép ra mảng mới
        2. concat(): gộp, nối mảng
        3. reverse(): đảo ngược mảng
        4. split(): chuyển string sang mảng
        5. join(): từ mảng sang string
        6. indexOf(): trả về vị trí (không có trả về -1)
        7. includes(): trả về true || false
        8. sort(): theo bảng ASC
    Bài 4: hàm
        1. DECLARATION
            function name(){
            
            }
        2. EXPRESSION
            const fn = function(){
            
            }
        3. ARROW
            ()=>{}
        - THAM SỐ: định nghĩa trong hàm
        - ĐỐI SỐ: khi gọi hàm truyền giá trị
    Bài 5: 


*/

const sum = (a,b)=>a+b
console.log(sum(5,6));

//     console.log(a+b);
    
// }

// sum(5,6)