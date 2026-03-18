const defaultTodos = [
  { id: 1, task: "Mua bánh chưng", done: false },
  { id: 2, task: "Dọn nhà đón Tết", done: false },
  { id: 3, task: "Gói bánh chưng", done: false },
  { id: 4, task: "Trang trí nhà cửa", done: false },
];

let todos = JSON.parse(localStorage.getItem("myTodos")) || defaultTodos;

const list = document.getElementById("todo-list");
const input = document.getElementById("task-input");
const stats = document.getElementById("stats");

function save() {
  localStorage.setItem("myTodos", JSON.stringify(todos));
}

function updateStats() {
  let total = todos.length;
  let done = todos.filter((t) => t.done).length;
  let percent = total ? Math.round((done / total) * 100) : 0;

  stats.innerText = `Tổng công việc: ${total} | Đã hoàn thành: ${done} (${percent}%)`;
}

function render() {
  if (todos.length === 0) {
    list.innerHTML = "Chưa có công việc nào...";
    updateStats();
    return;
  }

  let html = "";

  todos.forEach((t) => {
    html += `
        <div class="todo-item ${t.done ? "done" : ""}" data-id="${t.id}">

        <div class="circle"></div>

        <div class="text">${t.task}</div>

        <div class="actions">
        <button class="edit">✏️</button>
        <button class="delete">🗑️</button>
        </div>

        </div>
`;
  });

  list.innerHTML = html;

  updateStats();
}

function addTask() {
  let value = input.value.trim();

  if (!value) {
    return;
  }

  let newTask = {
    id: Date.now(),
    task: value,
    done: false,
  };

  todos.push(newTask);

  input.value = "";

  save();
  render();
}

document.getElementById("add-btn").onclick = addTask;

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

list.addEventListener("click", (e) => {
  let item = e.target.closest(".todo-item");

  if (!item) return;

  let id = Number(item.dataset.id);

  let todo = todos.find((t) => t.id === id);

  if (e.target.classList.contains("delete")) {
    if (confirm("Bạn có chắc muốn xóa công việc này?")) {
      todos = todos.filter((t) => t.id !== id);
      save();
      render();
    }

    return;
  }

  if (e.target.classList.contains("edit")) {
    let text = item.querySelector(".text");

    let old = todo.task;

    let inputEdit = document.createElement("input");

    inputEdit.value = old;

    text.replaceWith(inputEdit);

    inputEdit.focus();
    inputEdit.select();

    inputEdit.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        let val = inputEdit.value.trim();

        if (val) {
          todo.task = val;
          save();
        }

        render();
      }

      if (ev.key === "Escape") render();
    });

    return;
  }

  todo.done = !todo.done;

  save();
  render();
});

document.getElementById("clear-all").onclick = () => {
  if (confirm("Bạn có chắc muốn xóa toàn bộ danh sách?")) {
    todos = [];

    save();

    render();
  }
};

render();
