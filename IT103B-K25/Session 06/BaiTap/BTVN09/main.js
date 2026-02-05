let numberArrray = [];
let choose;
let currentIndex = 0;
let nums;
let line;
do {
    choose = +prompt(`  ================== MENU ===================
1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra giá trị các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
7. Thêm một phần từ vào vị trí chỉ định
8. Thoát
============================================
Lựa chọn của bạn:
`);
    switch (choose) {
        case 1:
            currentIndex = +prompt("Vui long nhập số phần tử cần nhập vào");
            while (currentIndex <= 0 || isNaN(currentIndex)) {
                alert("Só bạn nhập không được âm và phải là số !");
                currentIndex = +prompt("Vui LÒNG NHẬP LẠI số phần tử cần nhập vào");
            }
            for (let i = 0; i < currentIndex; i++) {
                nums = +prompt(`Vui lòng nhập số thứ ${i + 1}`);
                while (isNaN(nums)) {
                    alert("Số bạn nhập không phải là số !! ");
                    nums = +prompt(`Vui lòng nhập số thứ ${i + 1}`);
                }
                numberArrray.push(nums);
            }
            alert("Nhập mảng thành công !");
            break;
        case 2:
            if (numberArrray.length > 0) {
                console.log("Các phần tử bên trong mảng !");
                for (let i = 0; i < numberArrray.length; i++) {
                    console.log(numberArrray[i]);
                }
            } else {
                alert("Bạn phải thêm phần tử trước khi chọn chức năng này !");
            }
            break;
        case 3:
            if (numberArrray.length > 0) {
                let sumOfEvenNumber = 0;
                line = "";
                for (let ele of numberArrray) {
                    if (ele % 2 === 0) {
                        sumOfEvenNumber += ele;
                        line += `${ele} `;
                    }
                }
                console.log(`Các giá trị của phần tử chẵn bao gồm:  ${line.trim() === "" ? "Không có số chẵn" : line}`);
                console.log(`Tổng của các giá trị chẵn là:  ${sumOfEvenNumber}`);
            } else {
                alert("Bạn phải thêm phần tử trước khi chọn chức năng này !");
            }

            break;
        case 4:
            if (numberArrray.length > 0) {
                    let max = numberArrray[0];
                    let min = numberArrray[0];
                    for (let elet of numberArrray) {
                        if (elet > max) {
                            max = elet;
                        }
                        if (elet < min) {
                            min = elet;
                        }
                    }
                    console.log(`Giá trị lớn nhất trong mảng là : ${max}`);
                    console.log(`Giá trị nhỏ nhất trong mảng là : ${min}`);
            } else {
                alert("Bạn phải thêm phần tử trước khi chọn chức năng này !");
            }
            break;
        case 5:
            if (numberArrray.length > 0) {
                console.log(`Các phần tử là số nguyên tố là: `);
                line = "";
                let isPrime;
                let sumOfPrimeNumber = 0;
                for (let nums of numberArrray) {
                    isPrime = true;
                    if (nums <= 1) {
                        isPrime = false;
                    } else {
                        for (let i = 2; i * i <= nums; i++) {
                            if (nums % i === 0) {
                                isPrime = false;
                                break;
                            }
                        }
                    }
                    if (isPrime) {
                        line += `${nums} `;
                        sumOfPrimeNumber += nums;
                    }
                }

                console.log(`${line}`);
                console.log(`Tổng các số nguyên tố trong mảng là`);
                console.log(`${sumOfPrimeNumber}`);
            } else {
                alert("Bạn phải thêm phần tử trước khi chọn chức năng này !");
            }
            break;
        case 6:
            if (numberArrray.length > 0) {
                let numberInput;
                numberInput = +prompt("Vui lòng nhập một số cần thống kê");
                while (isNaN(numberInput)) {
                    alert("Số bạn nhập vào phải là số ! ");
                    numberInput = +prompt("Vui lòng nhập một số cần thống kê");
                }
                let count = 0;
                for (let ele of numberArrray) {
                    if (ele === numberInput) {
                        count++;
                    }
                }
                alert(`Trong mảng có ${count} phần tử bằng ${numberInput}`);
            } else {
                alert("Bạn phải thêm phần tử trước khi chọn chức năng này !");
            }
            break;
        case 7:
            if (numberArrray.length > 0) {
                let theIndexWannaAdd = +prompt(`Vui lòng nhập vị trí của trong mảng từ 0 đến ${numberArrray.length}`);
                while (theIndexWannaAdd > numberArrray.length || theIndexWannaAdd < 0) {
                    alert("Chỉ số bạn chọn không hợp lý !");
                    theIndexWannaAdd = +prompt(`Vui lòng nhập vị trí của trong mảng từ 0 đến ${numberArrray.length}`);
                }
                nums = +prompt("Vui lòng chọn số mà bạn muốn thêm vào");
                while (isNaN(nums)) {
                    alert("Số bạn nhập vào phải là số ! ");
                    nums = +prompt("Vui lòng nhập một số thêm vào mảng");
                }
                numberArrray.splice(theIndexWannaAdd, 0, nums);
                alert("Thêm phần tử thành công !");
            } else {
                alert("Bạn phải thêm phần tử trước khi chọn chức năng này !");
            }

            break;
        case 8:
            alert("Hẹn gặp lại :)");
            break;
        default:
            alert("Vui lòng chỉ chọn từ 1 -> 8");
    }
} while (choose !== 8)