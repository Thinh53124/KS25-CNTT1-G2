let ask;
let resultbook=0;
let lowerask;
let idbook,namebook,numinstorage,statebook;
let lostbook=0;
let outofbook=0;
let alotinstorage = 0;
let normalnumbook = 0;

do {
    ask= prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");
    lowerask = ask.toLowerCase;
    if(ask === "có"){
        idbook = prompt("Mã sách");
        namebook = prompt("Tên sách");
        numinstorage = Number(prompt("Số lượng thực tế đang có trong kho"));
        statebook = Number(prompt("Tình trạng sách(1:bình thường/2:bị mất)"));
        resultbook++;
        if(statebook === 2 ){
            lostbook++;
        }else if(statebook === 1 && numinstorage === 0){
            outofbook++;
        }else if(statebook === 1 && numinstorage >= 10){
            alotinstorage++;
        }else if(statebook === 1 && numinstorage >= 1 && numinstorage <= 9){
            normalnumbook++;            
        }
    }else{
        console.log("tổng sách đã kiểm kê: " + resultbook);
        console.log("Số sách mất: "+ lostbook);
        console.log("Số sách hết hàng: "+ outofbook);
        break;
    }
} while (ask === "có");