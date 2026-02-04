var studentList = "Quý, Nam, Lan, Hùng, Nam";
let students = studentList;

let question = prompt("Có muốn đảo ngược không?").trim();
if (question == "có") {
  for (let i = 0; i < students; i++) {
    students.reverse(studentList);
    document.writeln(studentList);
  }
} else {
  document.writeln(students);
}
