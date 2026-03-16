const initialTodos = [
  { id: 1, task: "Mua bánh chưng", done: false },
  { id: 2, task: "Dọn nhà đón tết", done: false },
  { id: 3, task: "Gói bánh chưng", done: false },
  { id: 4, task: "Trang trí nhà cửa bàng hoa mai, hoa đào", done: false },
  { id: 5, task: "Mua phong bao lì xì", done: false },
  { id: 6, task: "Chuẩn bị mâm ngũ quả", done: false },
];

let listItem = document.querySelector(".toDoList");

if (!localStorage.getItem("initialTodos")) {
  localStorage.setItem("initialTodos", JSON.stringify(initialTodos));
}

let todos = JSON.parse(localStorage.getItem("initialTodos")) || initialTodos;

function renderAllTask() {
  let line = "";

  todos.forEach((c) => {
    line += `
<div class="contener ${c.done ? "Checked" : ""}">
    <div class="badage">
        <input type="checkbox" ${c.done ? "checked" : ""} class="have" data-id="${c.id}">
        <h3>${c.task}</h3>
    </div>

    <div class="btn-decor">
        <button class="btn btn--edit ${c.done ? "btn--checked" : ""}" data-id="${c.id}">✏️</button>
        <button class="btn btn--delete ${c.done ? "btn--checked" : ""}" data-id="${c.id}">🗑️</button>
    </div>
</div>
`;
  });

  listItem.innerHTML = line;

  document.querySelectorAll(".have").forEach((cb) => {
    cb.addEventListener("change", (e) => {
      let id = +e.target.dataset.id;

      let task = todos.find((t) => t.id === id);

      task.done = e.target.checked;

      localStorage.setItem("initialTodos", JSON.stringify(todos));

      renderAllTask();
    });
  });
}

renderAllTask();

document.querySelector(".btn--add").addEventListener("click", (e) => {
  e.preventDefault();

  let inputItem = document.getElementById("input--task");

  if (inputItem.value.trim() === "") {
    alert("Công việc không được để trống !");
  } else {
    const newTask = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      task: inputItem.value,
      done: false,
    };

    todos.push(newTask);

    localStorage.setItem("initialTodos", JSON.stringify(todos));

    inputItem.value = "";

    renderAllTask();
  }
});
