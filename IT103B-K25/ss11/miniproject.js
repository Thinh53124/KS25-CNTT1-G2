let studentList = [
    { id: 1, name: 'Nguyen Van An', age: 20, gpa: 8.5, status: 'active' },
    { id: 2, name: 'Tran Thi Bich', age: 17, gpa: 7.2, status: 'active' },
    { id: 3, name: 'Le Hoang Cuong', age: 22, gpa: 9.1, status: 'inactive' },
    { id: 4, name: 'Pham Thi Dung', age: 19, gpa: 6.8, status: 'active' },
];

let newId = 5;

let choose;
do {
    choose = +prompt(`=========STUDENT MANAGEMENT SYSTEM=========
1. Create Student
2. Read All Students
3. Filter Scholarship Candidates(GPA > 8.0)
4. Update Student Profile
5. Delete Record
6. Compliance Verification
7. Academic Statistics
8. Data Normalization
0. Exit`);
    switch (choose) {
        case 0:
            alert(`Kết thúc chương trình`);
            break;
        case 1:
            createStudent();
            break;
        case 2:
            readAllStudent();
            break;
        case 3:
            filterScholarship();
            break;
        case 4:
            updateProfile();
            break;
        case 5:
            deleteRecord();
            break;
        case 6:
            complianceVerify();
            break;
        case 7:
            academicStats();
            break;
        case 8:
            dataNormalization();
            break;
        default:
            alert(`Vui lòng nhập lại từ 1 - 8`)
            break;
    }
} while (choose != 0);


function createStudent() {
    let name = prompt("Nhập tên sinh viên");
    let age = +prompt("Nhập số tuổi");
    let gpa = +prompt("Nhập điểm GPA");
    let status = prompt("Nhập trạng thái (active / inactive)");

    let newStudent = {
        id: newId++,
        name: name, 
        age: age,
        gpa: gpa,
        status: status
    };

    studentList.push(newStudent);
    alert(`Khởi tạo thành công sinh viên: ${name}`);
}



function readAllStudent() {
    console.clear();
    console.log("===== All Students =====");
    if (studentList.length === 0) {
        console.log("Danh sách trống.");
    } else {
        studentList.forEach(s => {
            console.log(`ID: ${s.id} | Name: ${s.name.padEnd(20)} | Age: ${s.age} | GPA: ${s.gpa} | Status: ${s.status}`);
        });
    }
    console.log("Total students: " + studentList.length);
}


function filterScholarship() {
    let result = studentList.filter(score => score.gpa > 8.0);
    console.log(result);
}


function updateProfile() {
    let idUpdate = +prompt("Enter ID to update:");
    let student = studentList.find(s => s.id === idUpdate);

    if (!student) {
        alert(`Không tìm thấy ID sinh viên`);
        return;
    }

    student.name = prompt("Nhập tên mới");
    student.gpa = +prompt("Nhập GPA mới");

    alert(`Cập nhập thông tin sinh viên thành công`);
}

function deleteRecord() {
    let idDelete = +prompt("Enter ID to delete:");
    let index = studentList.findIndex(s => s.id === idDelete);

    if (index === -1) {
        alert("Không tìm thấy học sinh");
        return;
    }

    studentList.splice(index, 1);
    alert(`Xóa sinh viên thành công`);
}


function complianceVerify() {
    let minorCheck = studentList.some(s => s.age < 18);
    let checkActive = studentList.every(s => s.status === "active");

    console.log("Có học sinh dưới 18:", minorCheck);
    console.log("Tất cả trạng thái của học sinh active:", checkActive);
}


function academicStats() {
    if (studentList.length === 0) return alert("Danh sách trống!");

    let totalGPA = studentList.reduce((sum, s) => sum + s.gpa, 0);
    let avg = totalGPA / studentList.length;

    console.log("GPA Trung bình:", avg.toFixed(2));
    alert("GPA trung bình của cả lớp: " + avg.toFixed(2));
}

function dataNormalization() {
    studentList = studentList.map(s => ({
        ...s,
        name: s.name.toUpperCase()
    }));

    console.log("=== Data đã được viết hoa tên ===");
    readAllStudent();
}