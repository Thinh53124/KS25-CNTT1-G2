let students = [
  { id: "S01", name: "Nguyen Van A", age: 19, gpa: 8.9, status: "active" },
  { id: "S02", name: "Tran Thi B", age: 18, gpa: 7.5, status: "active" },
  { id: "S03", name: "Le Van C", age: 21, gpa: 6.2, status: "active" },
  { id: "S04", name: "Pham Thi D", age: 20, gpa: 0, status: "inactive" },
  { id: "S05", name: "Hoang Van E", age: 22, gpa: 2.8, status: "active" },
];

const createStudent = () => {
  let id = prompt("Nhập ID:");
  let name = prompt("Nhập tên:");
  let age = Number(prompt("Nhập tuổi:"));
  let gpa = Number(prompt("Nhập GPA:"));
  let status = prompt("Nhập status (active/inactive):");

  students.push({ id, name, age, gpa, status });
  alert("Thêm thành công");
};

const updateStudent = () => {
  let id = prompt("Nhập ID cần sửa:");
  let student = students.find((st) => st.id === id);

  if (!student) return alert("Không tìm thấy");

  student.name = prompt("Tên mới:");
  student.age = Number(prompt("Tuổi mới:"));
  student.gpa = Number(prompt("GPA mới:"));
  student.status = prompt("Status mới:");

  alert("Cập nhật thành công");
};

const deleteStudent = () => {
  let id = prompt("Nhập ID cần xóa:");
  students = students.filter((st) => st.id !== id);
  alert("Đã xóa");
};

const viewStudents = () => console.table(students);

const searchByName = () => {
  let keyword = prompt("Nhập tên cần tìm:").toLowerCase();

  let result = students.filter((st) => st.name.toLowerCase().includes(keyword));

  console.table(result);
};

const sortByGpa = () => {
  let order = prompt("asc hoặc desc:");

  let sorted = [...students].sort((a, b) =>
    order === "asc" ? a.gpa - b.gpa : b.gpa - a.gpa,
  );

  console.table(sorted);
};

const analytics = () => {
  let total = students.length;

  let avgGpa = students.reduce((sum, st) => sum + st.gpa, 0) / total;

  let activeCount = students.filter((st) => st.status === "active").length;

  let topStudent = [...students].sort((a, b) => b.gpa - a.gpa)[0];

  console.log("Tổng sinh viên:", total);
  console.log("GPA trung bình:", avgGpa.toFixed(2));
  console.log("Số active:", activeCount);
  console.log("Top GPA:", topStudent);
};

const main = () => {
  let choice;

  do {
    choice = +prompt(`
1. Thêm
2. Sửa
3. Xóa
4. Xem tất cả
5. Tìm theo tên
6. Sắp xếp GPA
7. Thống kê
0. Thoát
`);

    switch (choice) {
      case 1:
        createStudent();
        break;
      case 2:
        updateStudent();
        break;
      case 3:
        deleteStudent();
        break;
      case 4:
        viewStudents();
        break;
      case 5:
        searchByName();
        break;
      case 6:
        sortByGpa();
        break;
      case 7:
        analytics();
        break;
      case 0:
        alert("Tạm biệt");
        break;
      default:
        alert("Sai lựa chọn");
    }
  } while (choice !== 0);
};

main();