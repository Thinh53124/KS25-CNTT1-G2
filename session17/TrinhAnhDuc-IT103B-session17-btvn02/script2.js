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

// lay du lieu tu localStorage
let todos = localStorage.getItem("myTodos");

if (!todos) {
    localStorage.setItem("myTodos", JSON.stringify(initialTodos));
    todos = initialTodos;
} else {
    todos = JSON.parse(todos);
}

// render UI
function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach(function(todo) {

        const li = document.createElement("li");

        // class theo trang thai
        li.className = todo.done ? "done" : "pending";

        // icon
        const icon = document.createElement("span");
        icon.className = "icon";
        icon.textContent = todo.done ? "✔" : "○";

        // text
        const text = document.createElement("span");
        text.textContent = todo.task;

        li.appendChild(icon);
        li.appendChild(text);

        // click de toggle done
        li.addEventListener("click", function() {

            todo.done = !todo.done;

            // luu lai localStorage
            localStorage.setItem("myTodos", JSON.stringify(todos));

            // render lai UI
            renderTodos();
        });

        todoList.appendChild(li);
    });
}

// goi render
renderTodos();