// du lieu ban dau
const initialTodos = [
 { id: 1, task: "Mua banh chung", done: false },
 { id: 2, task: "Don nha don Tet", done: false },
 { id: 3, task: "Goi banh chung", done: false },
 { id: 4, task: "Trang tri nha cua bang hoa mai, hoa dao", done: false },
 { id: 5, task: "Mua phong bao li xi", done: false },
 { id: 6, task: "Chuan bi mam ngu qua", done: false }
];

const todoList = document.getElementById("todo-list");
const input = document.getElementById("new-task");
const addBtn = document.getElementById("add-btn");

// lay du lieu tu localStorage
let todos = localStorage.getItem("myTodos");

if (!todos) {
    localStorage.setItem("myTodos", JSON.stringify(initialTodos));
    todos = initialTodos;
} else {
    todos = JSON.parse(todos);
}

// render
function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach(function(todo) {
        const li = document.createElement("li");

        li.className = todo.done ? "done" : "pending";

        const icon = document.createElement("span");
        icon.className = "icon";
        icon.textContent = todo.done ? "✔" : "○";

        const text = document.createElement("span");
        text.textContent = todo.task;

        li.appendChild(icon);
        li.appendChild(text);

        // click toggle done
        li.addEventListener("click", function() {
            todo.done = !todo.done;
            localStorage.setItem("myTodos", JSON.stringify(todos));
            renderTodos();
        });

        todoList.appendChild(li);
    });
}

// THEM CONG VIEC MOI
addBtn.addEventListener("click", function() {

    const value = input.value.trim();

    // check rong
    if (value === "") {
        alert("Khong duoc de trong!");
        return;
    }

    // tao todo moi
    const newTodo = {
        id: Date.now(),
        task: value,
        done: false
    };

    // them vao mang
    todos.push(newTodo);

    // luu localStorage
    localStorage.setItem("myTodos", JSON.stringify(todos));

    // reset input
    input.value = "";

    // render lai
    renderTodos();
});

// goi lan dau
renderTodos();