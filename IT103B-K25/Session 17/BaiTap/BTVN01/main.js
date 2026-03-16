const todos = [
  { id: 1, task: "Mua bánh chưng", done: false },
  { id: 2, task: "Dọn nhà đón Tết", done: false },
  { id: 3, task: "Gói bánh chưng", done: false },
  { id: 4, task: "Trang trí nhà cửa", done: false },
];

let todoList = document.getElementById("todo-list");

if (!localStorage.getItem("myTodos")) {
  localStorage.setItem("myTodos", JSON.stringify(todos));
}

let data = JSON.parse(localStorage.getItem("myTodos"));

function renderTodos() {
  let line = "";

  data.forEach((t) => {
    line += `
<div class="todo-item">

<div class="todo-left">
<span>🌸</span>
<p>${t.task}</p>
</div>

<span class="status">
${t.done ? "Đã làm" : "Chưa làm"}
</span>

</div>
`;
  });

  todoList.innerHTML = line;
}

renderTodos();
