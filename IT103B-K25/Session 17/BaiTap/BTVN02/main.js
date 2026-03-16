const initialTodos = [
  { id: 1, task: "Mua bánh chưng", done: false },
  { id: 2, task: "Dọn nhà đón Tết", done: false },
  { id: 3, task: "Gói bánh chưng", done: false },
  { id: 4, task: "Trang trí nhà cửa bằng hoa mai, hoa đào", done: false },
  { id: 5, task: "Mua phong bao lì xì", done: false },
  { id: 6, task: "Chuẩn bị mâm ngũ quả", done: false },
];

if (!localStorage.getItem("myTodos")) {
  localStorage.setItem("myTodos", JSON.stringify(initialTodos));
}

let todos = JSON.parse(localStorage.getItem("myTodos"));

let todoList = document.getElementById("todo-list");

function renderTodos() {
  let line = "";

  todos.forEach((t) => {
    line += `
<div class="todo-item ${t.done ? "done" : ""}" data-id="${t.id}">
<div class="circle"></div>
<div class="text">${t.task}</div>
</div>
`;
  });

  todoList.innerHTML = line;
}

todoList.addEventListener("click", (e) => {
  let item = e.target.closest(".todo-item");

  if (!item) return;

  let id = +item.dataset.id;

  let todo = todos.find((t) => t.id === id);

  todo.done = !todo.done;

  localStorage.setItem("myTodos", JSON.stringify(todos));

  renderTodos();
});

renderTodos();
