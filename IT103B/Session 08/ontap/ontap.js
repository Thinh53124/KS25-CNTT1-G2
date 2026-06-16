/*
    B1:
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
    B2:
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
    B3:
        Mảng:
        + cách khai báo bằng: let, const, var TÊN MẢNG =[];
        + Thao tác với mảng 
        + CURD
         C: CREATE: THÊM
          _push(): thêm cuối
          _unshift(): thêm vào đầu
          _splice(): thêm vào vị trí bất kì
         R: READ  : ĐỌC, HIỂN THỊ
          for, for - in, for - of...
         U: UPDATE: CẬP NHẬT
          _arr[index]= gtri mới
          _splice(vị trí, số lượng phần tuwr xóa, giá trị muốn thêm vào):
         D: DELETE: XÓA
          _pop():   xóa ptu cuối
          _shift(): xóa ptu đầu
          _splice():xóa vị trí bất kì
        
        CÁC PHƯƠNG THỨC LÀM VIỆC VỚI MẢNG
        1.splice()  : cắt, sao chép ra mảng mới
        2.concat()  : gộp, nối các mảng vào với nhau
        3.reverse() : đảo ngược mảng
        4.split()   : chuyển string -> mảng
        5.join()    : chuyển mảng -> string
        6.indexOf() : trả về vị trí (không có, trả về -1)
        7.includes(): trả về true || false
        8.sort()    : sắp xếp theo bảng mã ASC
    B4: function
        1. DECLARATION FUNCTION
         function name(){
         
         }
        2. EXPRESSION FUNCTION
         const fn = function(){
         }
        3. ARROW FUNCTION
         ()=>{}
          vd:
          const sum= (a,b)=>{
          let c;
          return a+b;
          }
          document.writeln(sum(5,6));
         -THAM SỐ:phần định nghĩa trong hàm (PARAMETER)
         -ĐỐI SỐ : khi gọi hàm truyền giá trị (ARGUEMENT)
         -GỌI HÀM THÌ HÀM MỚI THỰC THI
    B5: CÁC  PHG THỨC LM VC VS MẢNG (METHOD):
        _map, forEach, filter, reducer, find, findIndex, some, every...
        _Nếu dùng for có thể giải quyết hết tất cả bài toán
        _HOF (higher order function) _HÀM  BẬC CAO

*/
