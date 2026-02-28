let students = [
  { id: 1, name: "Nguyen Van An", age: 20, gpa: 8.5, status: "active" },
  { id: 2, name: "Tran Thi Bich", age: 17, gpa: 7.2, status: "active" },
  { id: 3, name: "Le Hoang Cuong", age: 22, gpa: 9.1, status: "inactive" },
  { id: 4, name: "Pham Thi Dung", age: 19, gpa: 6.8, status: "active" },
];

let nextId = 5;

function showMenu() {
  return prompt(
    `===== STUDENT MANAGEMENT SYSTEM =====
1. Create Student
2. Read All Students
3. Filter Scholarship Candidates (GPA > 8.0)
4. Update Student Profile
5. Delete Record
6. Compliance Verification
7. Academic Statistics
8. Data Normalization
0. Exit
======================================
Enter your choice:`,
  );
}

function formatStudent(s) {
  return `ID: ${s.id} | Name: ${s.name} | Age: ${s.age} | GPA: ${s.gpa} | Status: ${s.status}`;
}

function formatList(list, title = "Student List") {
  if (list.length === 0) return `${title}\n(No records found)`;
  const divider = "-".repeat(60);
  const rows = list.map((s) => formatStudent(s)).join("\n");
  return `${title}\n${divider}\n${rows}\n${divider}\nTotal: ${list.length} student(s)`;
}

// Case 1
function createStudent() {
  const name = prompt("Enter student name:");
  if (!name || name.trim() === "") return alert("Name cannot be empty!");

  const age = parseInt(prompt("Enter age:"));
  if (isNaN(age) || age <= 0) return alert("Invalid age!");

  const gpa = parseFloat(prompt("Enter GPA (0.0 - 10.0):"));
  if (isNaN(gpa) || gpa < 0 || gpa > 10) return alert("Invalid GPA!");

  const statusInput = prompt("Enter status (active / inactive):")
    .trim()
    .toLowerCase();
  if (statusInput !== "active" && statusInput !== "inactive")
    return alert('Status must be "active" or "inactive"!');

  const newStudent = {
    id: nextId++,
    name: name.trim(),
    age,
    gpa,
    status: statusInput,
  };

  students.push(newStudent);
  alert(`Student created successfully!\n${formatStudent(newStudent)}`);
}
// Case 2
function readAllStudents() {
  alert(formatList(students, "===== ALL STUDENTS ====="));
}

// Case 3
function filterScholarship() {
  const candidates = students.filter((s) => s.gpa > 8.0);
  alert(
    formatList(candidates, "===== SCHOLARSHIP CANDIDATES (GPA > 8.0) ====="),
  );
}

// Case 4
let updateID = (arr) => {
  let wantUpdate = +prompt("Vui lòng nhập ID muốn cập nhập !");
  const result = arr.find((value) => value.id === wantUpdate);
  if (result) {
    alert(
      `Found\n ID: ${result.id} | Name: ${result.name} | Age: ${result.age} | GPA: ${result.gpa} | Status: ${result.status} \n Leave blank to keep current value`,
    );
    const newName = prompt(`New name (current: ${result.name}): `);
    const newGPA = parseFloat(prompt(`New GPA (current: ${result.gpa}): `));

    if (newName.trim() !== "") result.name = newName.trim();

    if (newGPA >= 0 && !isNaN(newGPA) && newGPA <= 10) {
      result.gpa = newGPA;
    } else {
      alert("Invalid GPA value. GPA not updated.");
    }
  } else {
    alert("No student found with ID: " + wantUpdate);
  }
  if (result) {
    const newName = prompt(`New name (current: ${result.name}):`);
    const newGPA = parseFloat(prompt(`New GPA (current: ${result.gpa}):`));

    if (newName.trim() !== "") {
      result.name = newName.trim();
    }

    if (!isNaN(newGPA) && newGPA >= 0 && newGPA <= 10) {
      result.gpa = newGPA;
    }

    alert(`Student updated successfully!
ID: ${result.id} | Name: ${result.name} | Age: ${result.age} | GPA: ${result.gpa} | Status: ${result.status}`);
  } else {
    alert("No student found with ID: " + wantUpdate);
  }
};
// Case 5
let deleteStudent = (arr) => {
  let deleteId = +prompt("Vui lòng nhập ID của sinh viên cần phải xóa: ");
  let deleteIndex = arr.findIndex((c) => c.id === deleteId);
  if (deleteIndex !== -1) {
    arr.splice(deleteIndex, 1);
    alert("Xóa sinh viên thành công !");
  } else {
    alert("Không tìm thấy sinh viên có ID: " + deleteId);
  }
};
// Case 6
function complianceVerification() {
  const hasMinor = students.some((s) => s.age < 18);
  const allActive = students.every((s) => s.status === "active");

  let result = "===== COMPLIANCE VERIFICATION =====\n";
  result += `\nHas at least one student under 18: ${hasMinor ? "YES" : "NO"}`;

  if (hasMinor) {
    const minors = students.filter((s) => s.age < 18);
    result += "\n   Minors found:";
    minors.forEach((s) => {
      result += `\n   → ${s.name} (Age: ${s.age})`;
    });
  }

  result += `\n\nAll students have "active" status: ${allActive ? "YES" : "NO"}`;

  if (!allActive) {
    const inactive = students.filter((s) => s.status !== "active");
    result += "\n   Inactive students:";
    inactive.forEach((s) => {
      result += `\n   → ${s.name} (Status: ${s.status})`;
    });
  }

  alert(result);
}
// Case 7
function academicStatistics() {
  if (students.length === 0) return alert("No students in the list!");

  const totalGpa = students.reduce((acc, s) => acc + s.gpa, 0);
  const avgGpa = totalGpa / students.length;

  const highest = students.reduce(
    (max, s) => (s.gpa > max.gpa ? s : max),
    students[0],
  );
  const lowest = students.reduce(
    (min, s) => (s.gpa < min.gpa ? s : min),
    students[0],
  );

  let result = "===== ACADEMIC STATISTICS =====\n";
  result += `\nTotal students   : ${students.length}`;
  result += `\nTotal GPA sum    : ${totalGpa.toFixed(2)}`;
  result += `\nAverage GPA      : ${avgGpa.toFixed(2)}`;
  result += `\n\nHighest GPA: ${highest.name} (${highest.gpa})`;
  result += `\nLowest GPA : ${lowest.name} (${lowest.gpa})`;

  alert(result);
}

// Case 8
let dataNormalization = (arr) => {
  line = "=====  NORMALIZED DATA (UPPERCASE NAMES) ===== \n";
  line += "---------------------------------------------- \n";
  arr.forEach((c) => {
    line += `ID: ${c.id} | Name: ${c.name.toUpperCase()} | Age: ${c.age} | GPA: ${c.gpa} | Status: ${c.status} \n`;
  });
  line += "---------------------------------------------- \n";
  line += `Total: ${arr.length} student(s) \n`;
  alert(line);
};

let displayMenu = () => {
  let choose;
  do {
    choose = +prompt(`===== STUDENT MANAGEMENT SYSTEM =====
1. Create Student
2. Read All Students
3. Filter Scholarship Candidates (GPA > 8.0)
4. Update Student Profile
5. Delete Record
6. Compliance Verification
7. Academic Statistics
8. Data Normalization
0. Exit
======================================
Enter your choice:`);
    switch (choose) {
      case 1:
        createStudent(students);
        break;
      case 2:
        readAllStudents(students);
        break;
      case 3:
        filterScholarship(students);
        break;
      case 4:
        updateID(students);
        break;
      case 5:
        deleteStudent(students);
        break;
      case 6:
        complianceVerification(students);
        break;
      case 7:
        academicStatistics(students);
        break;
      case 8:
        dataNormalization(students);
        break;
      case 0:
        alert("Goodbye! Thank you for using Student Management System.");
        break;
      default:
        alert("Invalid choice! Please enter a number from 0 to 8.");
    }
  } while (choose !== 0);
};
displayMenu();
