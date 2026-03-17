
let todos = [];
const list = document.getElementById("todoList");

function render() {
  let html = "";
  todos.forEach(item => {
    html += `
      <div class="todo-item ${item.done ? "done" : ""}"
           onclick="toggle(${item.id})">
        ${item.task}
      </div>
    `;
  });
  list.innerHTML = html;
}

function toggle(id) {
  todos = todos.map(t =>
    t.id === id ? { ...t, done: !t.done } : t
  );
  localStorage.setItem("myTodos", JSON.stringify(todos));
  render();
}

function init() {
  let data = localStorage.getItem("myTodos");

  if (data) {
    todos = JSON.parse(data);
  } else {
    todos = [
      { id: 1, task: "Mua bánh chưng", done: false },
      { id: 2, task: "Dọn nhà đón Tết", done: false },
    ];
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }

  render();
}

init();