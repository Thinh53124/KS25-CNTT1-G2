let ask;
let asklower;
let user,bookid,namebook,daytowait,prioritize;
let allrequest =0;
let requesthasrefuse = 0;
let requestcomplete = 0;
let requesttowait = 0;
do {
    ask = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");
    asklower = ask.toLowerCase();
    allrequest++;
    if( asklower === "có"){
        user = prompt("Tên bạn đọc:");
        bookid = prompt("Mã sách muốn đặt trước");
        namebook = prompt("Tên sách");
        daytowait = Number(prompt("Số ngày dự kiến chờ"));
        prioritize = Number(prompt("Ưu tiên\n 1 = Sinh viên bình thường\n 2 = Giảng viên/Nghiên cứu sinh \n 3 = Nhân viên thư viện / Đặc cách"));
        if(daytowait > 45){
            requesthasrefuse++;
        }else if(prioritize === 3){
            requestcomplete++;
        }else if(prioritize === 2 && daytowait <= 30){
            requestcomplete++;
        }else if(prioritize === 1 && daytowait <= 21){
            requestcomplete++;
        }else {
            requesttowait++;
        }
    }else {
        console.log("Tổng số yêu cầu đã xử lý: "+allrequest);
        console.log("Số yêu cầu được đặt trước thành công: "+requestcomplete);
        console.log("Số yêu cầu bị từ chối: "+requesthasrefuse);
        console.log("Số yêu cầu chờ xét duyệt: "+requesttowait);
        break;
    }
} while (ask === "có");