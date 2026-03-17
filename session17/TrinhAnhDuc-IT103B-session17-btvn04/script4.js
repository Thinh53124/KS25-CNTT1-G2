// du lieu ban dau
const initialTodos = [
 { id: 1, task: "Mua banh chung", done: false },
 { id: 2, task: "Don nha don Tet", done: false },
 { id: 3, task: "Goi banh chung", done: false },
 { id: 4, task: "Trang tri nha cua", done: false }
];

const todoList = document.getElementById("todo-list");
const input = document.getElementById("new-task");
const addBtn = document.getElementById("add-btn");

// load data
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

        // LEFT (icon + text)
        const left = document.createElement("div");
        left.className = "todo-left";

        const icon = document.createElement("span");
        icon.textContent = todo.done ? "✔" : "○";

        const text = document.createElement("span");
        text.textContent = todo.task;

        left.appendChild(icon);
        left.appendChild(text);

        // RIGHT (delete button)
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "🗑️";

        // CLICK XÓA
        deleteBtn.addEventListener("click", function(event) {
            event.stopPropagation(); // tránh trigger toggle

            const confirmDelete = confirm("Ban co chac muon xoa cong viec nay?");

            if (!confirmDelete) return;

            // xoa khoi mang
            todos = todos.filter(t => t.id !== todo.id);

            // luu localStorage
            localStorage.setItem("myTodos", JSON.stringify(todos));

            // render lai
            renderTodos();
        });

        // CLICK TOGGLE DONE
        li.addEventListener("click", function() {
            todo.done = !todo.done;

            localStorage.setItem("myTodos", JSON.stringify(todos));
            renderTodos();
        });

        li.appendChild(left);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });
}

// THEM
addBtn.addEventListener("click", function() {

    const value = input.value.trim();

    if (value === "") {
        alert("Khong duoc de trong!");
        return;
    }

    const newTodo = {
        id: Date.now(),
        task: value,
        done: false
    };

    todos.push(newTodo);

    localStorage.setItem("myTodos", JSON.stringify(todos));

    input.value = "";
    renderTodos();
});

// ENTER de them
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

// render lan dau
renderTodos();