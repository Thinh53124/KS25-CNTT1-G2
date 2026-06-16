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
Enter your choice:`
  );
}


let choice;

do {
  choice = Number(showMenu());

  switch (choice) {
    case 1:
      createStudent();
      break;
    case 2:
      readAllStudents();
      break;
    case 3:
      filterScholarship();
      break;
    case 4:
      updateStudent();
      break;
    case 5:
      deleteStudent();
      break;
    case 6:
      complianceVerification();
      break;
    case 7:
      academicStatistics();
      break;
    case 8:
      dataNormalization();
      break;
    case 0:
      alert("Exiting program...");
      break;
    default:
      alert("Invalid choice!");
  }

} while (choice !== 0);

function createStudent() {
  let name = prompt("Enter name:");
  let age = Number(prompt("Enter age:"));
  let gpa = Number(prompt("Enter GPA:"));
  let status = prompt('Enter status ("active" or "inactive"):');

  let newStudent = {
    id: nextId++,
    name,
    age,
    gpa,
    status
  };

  students.push(newStudent);
  alert("Student created successfully!");
}

function readAllStudents() {
  if (students.length === 0) {
    alert("No students found.");
    return;
  }

  let result = "ID | Name | Age | GPA | Status\n";
  result += "-------------------------------------\n";

  students.forEach(s => {
    result += `${s.id} | ${s.name} | ${s.age} | ${s.gpa} | ${s.status}\n`;
  });

  console.log(result);
  alert("Check console for student list.");
}

function filterScholarship() {
  let filtered = students.filter(s => s.gpa > 8.0);

  if (filtered.length === 0) {
    alert("No scholarship candidates.");
    return;
  }

  console.log("=== Scholarship Candidates ===");
  console.log(filtered);
  alert("Check console.");
}

function updateStudent() {
  let id = Number(prompt("Enter ID to update:"));
  let student = students.find(s => s.id === id);

  if (!student) {
    alert("Student not found.");
    return;
  }

  student.name = prompt("Enter new name:");
  student.gpa = Number(prompt("Enter new GPA:"));

  alert("Student updated successfully!");
}

function deleteStudent() {
  let id = Number(prompt("Enter ID to delete:"));
  let index = students.findIndex(s => s.id === id);

  if (index === -1) {
    alert("Student not found.");
    return;
  }

  students.splice(index, 1);
  alert("Student deleted successfully!");
}

function complianceVerification() {
  let hasMinor = students.some(s => s.age < 18);
  let allActive = students.every(s => s.status === "active");

  console.log("Has student under 18:", hasMinor);
  console.log("All students active:", allActive);

  alert("Check console for compliance results.");
}

function academicStatistics() {
  if (students.length === 0) {
    alert("No students available.");
    return;
  }

  let totalGPA = students.reduce((sum, s) => sum + s.gpa, 0);
  let avg = totalGPA / students.length;

  console.log("Average GPA:", avg.toFixed(2));
  alert("Check console for average GPA.");
}

function dataNormalization() {
  let normalized = students.map(s => ({
    ...s,
    name: s.name.toUpperCase()
  }));

  console.log("=== Normalized Data ===");
  console.log(normalized);
  alert("Check console.");
}
