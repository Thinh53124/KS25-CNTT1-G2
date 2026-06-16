const todos = [
  { id: 1, task: "Mua bánh chưng", done: false },
  { id: 2, task: "Dọn nhà đón Tết", done: false },
  { id: 3, task: "Gói bánh chưng", done: false },
  { id: 4, task: "Trang trí nhà cửa", done: false },
];

const list = document.getElementById("todoList");

function render(arr) {
  let html = "";
  arr.forEach(item => {
    html += `<div class="todo-item">${item.task}</div>`;
  });
  list.innerHTML = html;
}

function init() {
  render(todos);

  if (!localStorage.getItem("myTodos")) {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }
}

init();