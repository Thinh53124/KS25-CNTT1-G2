let students = [
    { id: "S01", name: "Nguyen Van A", age: 20, gpa: 8.5, status: "active", createdAt: Date.now(), updatedAt: Date.now(), deletedAt: null },
    { id: "S02", name: "Tran Thi B", age: 22, gpa: 3.5, status: "active", createdAt: Date.now(), updatedAt: Date.now(), deletedAt: null },
    { id: "S03", name: "Le Van C", age: 21, gpa: 6.2, status: "active", createdAt: Date.now(), updatedAt: Date.now(), deletedAt: null },
    { id: "S04", name: "Pham Thi D", age: 20, gpa: 0, status: "inactive", createdAt: Date.now(), updatedAt: Date.now(), deletedAt: null },
    { id: "S05", name: "Hoang Van E", age: 22, gpa: 2.8, status: "active", createdAt: Date.now(), updatedAt: Date.now(), deletedAt: null }
];

let choice;
do {
    choice = +prompt(
        `==== STUDENT MANAGER ADVANCED ====
1. Create Student
2. Update Student
3. Soft Delete Student
4. Restore Student
5. View Students
6. Analytics Dashboard
7. Exit`);

    switch (choice) {
        case 1:
            createStudent();
            break;
        case 2:
            updateStudent();
            break;
        case 3:
            softDeleteStudent();
            break;
        case 4:
            restoreStudent();
            break;
        case 5:
            viewStudents();
            break;
        case 6:
            showAnalytics();
            break;
        case 7:
            alert("Kết thức chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
} while (choice !== 7);



function createStudent() {
    const id = prompt("Nhập ID:");
    const name = prompt("Nhập tên sinh viên:");
    const age = parseInt(prompt("Nhập tuổi (16-60):"));
    const gpa = parseFloat(prompt("Nhập GPA (0.0-10.0):"));
    const status = prompt("Trạng thái (active/inactive):");

    // Validate đơn giản
    if (id && name && age >= 16 && age <= 60 && gpa >= 0 && gpa <= 10) {
        const newStudent = {
            id, name, age, gpa, status,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            deletedAt: null
        };
        students.push(newStudent);
        alert("Thêm thành công!");
    } else {
        alert("Dữ liệu không hợp lệ!");
    }
}

function updateStudent() {
    const id = prompt("Nhập ID sinh viên cần sửa:");
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        const name = prompt("Tên mới (để trống nếu không sửa):");
        const age = prompt("Tuổi mới (để trống nếu không sửa):");
        const gpa = prompt("GPA mới (để trống nếu không sửa):");

        if (name) students[index].name = name;
        if (age) students[index].age = parseInt(age);
        if (gpa) students[index].gpa = parseFloat(gpa);

        students[index].updatedAt = Date.now();
        alert("Cập nhật thành công!");
    } else {
        alert("Không tìm thấy sinh viên!");
    }
}

function softDeleteStudent() {
    const id = prompt("Nhập ID sinh viên cần xóa:");
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa không?");
        if (confirmDelete) {
            students[index].status = "inactive";
            students[index].deletedAt = Date.now();
            alert("Đã xóa tạm thời!");
        }
    }
}

function restoreStudent() {
    const id = prompt("Nhập ID sinh viên cần khôi phục:");
    const index = students.findIndex(s => s.id === id && s.status === "inactive");
    if (index !== -1) {
        students[index].status = "active";
        students[index].updatedAt = Date.now();
        students[index].deletedAt = null;
        alert("Khôi phục thành công!");
    }
}

function viewStudents() {
    let result = [...students];

    const keyword = prompt("Nhập tên tìm kiếm (trống để bỏ qua):").toLowerCase();
    if (keyword) result = result.filter(s => s.name.toLowerCase().includes(keyword));

    const filterStatus = prompt("Lọc theo status (active/inactive/trống):");
    if (filterStatus) result = result.filter(s => s.status === filterStatus);

    const sortType = prompt("Sắp xếp GPA (asc/desc):");
    if (sortType === "asc") result.sort((a, b) => a.gpa - b.gpa);
    else if (sortType === "desc") result.sort((a, b) => b.gpa - a.gpa);

    const pageSize = 5;
    const totalPages = Math.ceil(result.length / pageSize);
    const page = parseInt(prompt(`Trang hiện tại (1/${totalPages || 1}):`)) || 1;
    const start = (page - 1) * pageSize;
    const paginatedData = result.slice(start, start + pageSize);

    console.table(paginatedData);
    alert(`Đang hiển thị trang ${page}/${totalPages}. Xem chi tiết ở Console.`);
}

function showAnalytics() {
    const total = students.length;
    const stats = students.reduce((acc, s) => {
        acc[s.status] = (acc[s.status] || 0) + 1;
        acc.totalGpa += s.gpa;
        return acc;
    }, { active: 0, inactive: 0, totalGpa: 0 });

    const avgGpa = total > 0 ? (stats.totalGpa / total).toFixed(2) : 0;

    console.log("--- DASHBOARD ---");
    console.log(`Tổng sinh viên: ${total}`);
    console.log(`Active: ${stats.active} (${((stats.active / total) * 100).toFixed(1)}%)`);
    console.log(`GPA trung bình hệ thống: ${avgGpa}`);

    const top5 = [...students].sort((a, b) => b.gpa - a.gpa).slice(0, 5);
    console.log("Top 5 GPA cao nhất:", top5);
}