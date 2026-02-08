function sayHello (){
    console.log("xin chào");
}
sayHello(1)

function login() {
    
}

function checkEmail(param1) {
    let input = prompt("Nhập email")
    if(input.includes("@")){
        return true
    }else{
        return false
    }

}
if ((checkEmail())){
    console.log("hợp lệ");
}else{
    console.log("Không hợp lệ");
    
}
// const sum = function(){

// }

// const addToCart = ()=>{

// }

// let score1 = [5,4,6,3]
// let score2 = [6,8,9,7]

// function totalScore(param1, param2){
//     let sum  = 0
//     for (let i = 0; i < param1.length; i++) {
//         sum+=param1[i]        
//     }

//     console.log(`Tổng: ${sum}`);
    
// }

// totalScore(score1)

// let students = ["hoa", "thu", "lan", "ngọc"]
// let result=[]
// function renderStudent(arr){
//     for (let i = 0; i < arr.length; i++) {
//         document.writeln(`${students[i]} <br>`)
//     }
// }

// renderStudent(students)

// let studentsName = prompt("Mời nhập từ khóa tìm kiếm")
// console.log(studentsName);
// for (let i = 0; i < students.length; i++) {
//     if(students[i].includes(studentsName)){
//         result.push(students[i])
//     }
// }
// document.writeln("****** <br>")
// console.log(result);
// renderStudent(result)

