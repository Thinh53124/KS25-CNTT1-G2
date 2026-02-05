let arrayNumber = [];
let choose;
let haveElement = false;

do {
    choose = +prompt(`================== MENU =================== 

1. Nhập số phần tử cần nhập và giá trị các phần tử 

2. In ra giá trị các phần tử đang quản lý 

3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần

4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng 

5. In ra các số nguyên tố trong mảng và tính tổng 

6. Nhập một số và đếm số lần xuất hiện trong mảng 

7. Thêm một phần tử vào vị trí chỉ định 

8. Xóa một phần tử theo giá trị 

9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần 

0. Thoát 

============================================

Lựa chọn của bạn: `);
    switch (choose) {
        case 1:
            let sizeOfArray;
            let numsInsideArray;
            while (true) {
                sizeOfArray = +prompt("Vui lòng chọn số phần tử muốn nhập vào mảng");
                if (isNaN(sizeOfArray) || sizeOfArray <= 0) {
                    alert("Số phần tử bạn chọn không hợp lý !");
                    continue;
                }
                break;
            }
            for (let i = 0; i < sizeOfArray; i++) {
                while (true) {
                    numsInsideArray = +prompt(`Vui lòng nhập phần tử thứ ${i + 1}`);
                    if (isNaN(numsInsideArray)) {
                        alert("Số bạn nhập không phải là số !!!");
                        continue;
                    }
                    break;
                }
                arrayNumber.push(numsInsideArray);
            }
            alert("Thêm phần tử thành công !");
            haveElement = true;
            break;
        case 2:
            if (haveElement) {
                console.log("Các phần tử bên trong mảng !");
                for (let i = 0; i < arrayNumber.length; i++) {
                    console.log(`${arrayNumber[i]}`);
                }
            } else {
                alert("Bạn phải thêm phần tử trước khi chọn chức năng này !");
            }
            break;
        case 3:
            let evenElement = "";
            let sumOfEvenNumber = 0;
            let evenArray = [];
            if (haveElement) {
                for (let ele of arrayNumber) {
                    if (ele % 2 === 0) {
                        evenElement += `${ele} `;
                        sumOfEvenNumber += ele;
                        evenArray.push(ele);
                    }
                }
                for (let i = 0; i < evenArray.length - 1; i++) {
                    for (let j = 0; j < evenArray.length - i - 1; j++) {
                        if (evenArray[j] < evenArray[j + 1]) {
                            let temp = evenArray[j];
                            evenArray[j] = evenArray[j + 1];
                            evenArray[j + 1] = temp;
                        }
                    }
                }
                console.log(`Các phần tử chẵn: ${evenElement}`);
                console.log(`Tổng các phần tử chẵn: ${sumOfEvenNumber}`);
                console.log(`Mảng số chẵn sau khi sắp xếp giảm dần:`);
                for (let ele of evenArray) {
                    console.log(ele);
                }
            } else {
                alert("Bạn phải thêm phần tử trước khi chọn chức năng này !");
            }
            break;
        case 4:
            if (haveElement) {
                let max = arrayNumber[0];
                let min = arrayNumber[0];
                for (let ele of arrayNumber) {
                    if (ele > max) {
                        max = ele;
                    }
                    if (ele < min) {
                        min = ele;
                    }
                }
                console.log(`Vậy giá trị lớn nhất trong mảng là :${max} với vị trí ${arrayNumber.indexOf(max)}`);
                console.log(`Vậy giá trị nhỏ nhất trong mảng là :${min} với vị trí ${arrayNumber.indexOf(min)}`);
            } else {
                alert("Bạn phải thêm phần tử trước khi chọn chức năng này !");
            }
            break;
        case 5:
            if (haveElement) {
                let isPrime;
                let linePrime = "";
                let sumAllPrime = 0;
                for (let ele of arrayNumber) {
                    isPrime = true;
                    if (ele < 2) {
                        isPrime = false;
                    } else {
                        for (let i = 2; i * i <= ele; i++) {
                            if (ele % i === 0) {
                                isPrime = false;
                                break;
                            }
                        }
                    }
                    if (isPrime) {
                        linePrime += `${ele} `;
                        sumAllPrime += ele;
                    }
                }
                console.log(`Vậy các số nguyên tố trong mảng là : ${linePrime}`);
                console.log(`Tổng các số nguyên tố trong mảng là : ${sumAllPrime}`);
            } else {
                alert("Bạn phải thêm phần tử trước khi chọn chức năng này !");
            }
            break;
        case 6:
            if (haveElement) {
                let numberCount = 0;
                let numberToCount;
                while (true) {
                    numberToCount = +prompt("Vui lòng nhập số muốn được đếm sự xuất hiện !");
                    if (isNaN(numberToCount)) {
                        alert("Số bạn nhập không phải là số !!!");
                        continue;
                    }
                    break;
                }
                for (let ele of arrayNumber) {
                    if (ele === numberToCount) {
                        numberCount++;
                    }
                }
                console.log(`Vậy số lần xuất hiện của số ${numberToCount} là: ${numberCount}`);
            } else {
                alert("Bạn phải thêm phần tử trước khi chọn chức năng này !");
            }
            break;
        case 7:
            if (haveElement) {
                let addIndex;
                let numberToAdd;
                while (true) {
                    addIndex = +prompt(`Vui lòng chọn chỉ số muốn thêm vào mảng từ 1 đến ${arrayNumber.length + 1}`);
                    if (addIndex < 1 || addIndex > arrayNumber + 1) {
                        alert("Chỉ số bạn chọn không chính xác !");
                        continue;
                    }
                    break;
                }
                addIndex--;
                while (true) {
                    numberToAdd = +prompt("Vui lòng nhập giá trị muốn thêm vào mảng !");
                    if (isNaN(numberToAdd)) {
                        alert("Số bạn nhập phải là kiểu số !!");
                        continue;
                    }
                    break;
                }
                arrayNumber.splice(addIndex, 0, numberToAdd);
                alert("Đã thêm thành công !");
            } else {
                alert("Bạn phải thêm phần tử trước khi chọn chức năng này !");
            }
            break;
        case 8:
            if (haveElement) {
                let deletIdx;
                while (true) {
                    deletIdx = +prompt(`Vui lòng chọn số mà bạn muốn xóa `);
                    if (isNaN(deletIdx)) {
                        alert("Số bạn nhập phải là kiểu dữ liệu !!");
                        continue;
                    }
                    break;
                }
                if (arrayNumber.includes(deletIdx)) {
                    arrayNumber.splice(arrayNumber.indexOf(deletIdx), 1);
                    alert("Xóa phần tử thành công !");
                } else {
                    alert("Phần tử bạn muốn xóa không có trong mảng !");
                }

            } else {
                alert("Bạn phải thêm phần tử trước khi chọn chức năng này !");
            }
            break;
        case 9:
            if (haveElement) {
                while (true) {
                    choose = +prompt(`Vui lòng chọn 1 trong 2 sắp xếp dưới đây !
                    1. Sắp xếp tăng dần
                    2. Sắp xếp giảm dần`);
                    if (isNaN(choose)) {
                        alert(`Lựa chọn nhập của bạn phải là kiểu số !!`);
                        continue;
                    }
                    break;
                }
                switch (choose) {
                    case 1:
                        // selection sort
                        for (let i = 0; i < arrayNumber.length - 1; i++) {
                            let maxIdx = i;
                            for (let j = i + 1; j < arrayNumber.length; j++) {
                                if (arrayNumber[j] < arrayNumber[maxIdx]) {
                                    maxIdx = j;
                                }
                            }
                            let temp = arrayNumber[i];
                            arrayNumber[i] = arrayNumber[maxIdx];
                            arrayNumber[maxIdx] = temp;
                        }
                        console.log(`Mảng sau khi sắp xếp tăng dần :`);
                        for(let ele of arrayNumber){
                            console.log(ele);
                        }
                        break;
                    case 2:
                        // insection sort
                        for(let i = 1 ; i < arrayNumber.length; i++){
                            let j = i - 1;
                            let key = arrayNumber[i];
                            while(j >= 0 && arrayNumber[j] < key){
                                arrayNumber[j+1] = arrayNumber[j];
                                j--;
                            }
                            arrayNumber[j + 1] = key;
                        }
                        console.log(`Mảng sau khi sắp xếp giảm dần :`);
                        for(let ele of arrayNumber){
                            console.log(ele);
                        }
                        break;
                    default:
                        alert("Số bạn chọn không phù hợp !");
                }
            } else {
                alert("Bạn phải thêm phần tử trước khi chọn chức năng này !");
            }
            break;
        case 0:
            alert("Cảm ơn vì đã sử dụng chương trình !");
            break;
        default:
            alert("Số bạn chọn không thuộc từ 0 -> 9");
    }
} while (choose !== 0);