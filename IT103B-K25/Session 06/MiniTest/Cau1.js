let names = "Quý, Nam, Lan, Hùng, Nam"
let students = names.split(",")
let check = students.indexOf("Lan");

students.reverse();
// Phương thức có làm thay đổi mảng gốc

console.log(students);

for (let i = 0; i < students.length; i++) {
    if (check === -1) {
        console.log("Tên Lan tồn tại trong mảng");
    } else {
        console.log("Tên Lan không tồn tại trong mảng");
    }
}

let check1 = students.includes(", Nam", 0)
for (let i = 0; i < students.length; i++) {
    if (check1===true) {
        console.log("Tên Nam ");
        
    } else {
        
    }
}
