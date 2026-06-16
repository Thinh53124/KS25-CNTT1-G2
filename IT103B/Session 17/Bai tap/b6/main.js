let todos = [];
const list = document.getElementById("todoList");
const input = document.getElementById("inputTodo");
const btnAdd = document.getElementById("btnAdd");

function render() {
  list.innerHTML = todos.map(t => `
    <div class="todo-item ${t.done ? "done" : ""}">
      <span onclick="toggle(${t.id})">${t.task}</span>
      <button onclick="removeTodo(${t.id})">🗑️</button>
    </div>
  `).join("");
}

function toggle(id) {
  todos = todos.map(t =>
    t.id === id ? { ...t, done: !t.done } : t
  );
  save(); render();
}

function removeTodo(id) {
  let item = todos.find(t => t.id === id);
  if (confirm(`Xóa "${item.task}"?`)) {
    todos = todos.filter(t => t.id !== id);
    save(); render();
  }
}

function add() {
  let v = input.value.trim();
  if (!v) return;

  todos.push({ id: Date.now(), task: v, done: false });
  input.value = "";
  save(); render();
}

function save() {
  localStorage.setItem("myTodos", JSON.stringify(todos));
}

btnAdd.onclick = add;
input.addEventListener("keypress", e => e.key === "Enter" && add());

function init() {
  let data = localStorage.getItem("myTodos");
  todos = data ? JSON.parse(data) : [];
  render();
}

const stats = document.getElementById("stats");
const btnClear = document.getElementById("btnClear");

function updateStats() {
  let total = todos.length;
  let done = todos.filter(t => t.done).length;
  let percent = total ? ((done/total)*100).toFixed(1) : 0;

  stats.innerText = `Tổng: ${total} | Done: ${done} (${percent}%)`;
}

btnClear.onclick = () => {
  if (confirm("Xóa toàn bộ?")) {
    todos = [];
    save(); render();
  }
};

init();     