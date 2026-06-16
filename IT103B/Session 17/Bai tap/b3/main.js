let todos = [];
const list = document.getElementById("todoList");
const input = document.getElementById("inputTodo");
const btnAdd = document.getElementById("btnAdd");

function render() {
  list.innerHTML = todos.map(t => `
    <div class="todo-item ${t.done ? "done" : ""}"
         onclick="toggle(${t.id})">
      ${t.task}
    </div>
  `).join("");
}

function toggle(id) {
  todos = todos.map(t =>
    t.id === id ? { ...t, done: !t.done } : t
  );
  save();
  render();
}

function add() {
  let value = input.value.trim();
  if (!value) return;

  todos.push({ id: Date.now(), task: value, done: false });
  input.value = "";
  save();
  render();
}

function save() {
  localStorage.setItem("myTodos", JSON.stringify(todos));
}

btnAdd.onclick = add;
input.addEventListener("keypress", e => {
  if (e.key === "Enter") add();
});

function init() {
  let data = localStorage.getItem("myTodos");
  todos = data ? JSON.parse(data) : [];
  render();
}

init();