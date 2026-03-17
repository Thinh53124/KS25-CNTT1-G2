// ===== DU LIEU BAN DAU =====
const initialTodos = [
 { id: 1, task: "Mua banh chung", done: false },
 { id: 2, task: "Don nha don Tet", done: false },
 { id: 3, task: "Goi banh chung", done: false },
 { id: 4, task: "Trang tri nha cua", done: false }
];

// ===== DOM =====
const todoList = document.getElementById("todo-list");
const input = document.getElementById("new-task");
const addBtn = document.getElementById("add-btn");
const stats = document.getElementById("stats");
const clearBtn = document.getElementById("clear-all");

// ===== LOAD DATA =====
let todos = localStorage.getItem("myTodos");

if (!todos) {
    localStorage.setItem("myTodos", JSON.stringify(initialTodos));
    todos = initialTodos;
} else {
    todos = JSON.parse(todos);
}

// ===== STATS =====
function updateStats() {
    const total = todos.length;
    const doneCount = todos.filter(t => t.done).length;
    const percent = total === 0 ? 0 : Math.round((doneCount / total) * 100);

    stats.textContent = `Tong cong viec: ${total} | Da hoan thanh: ${doneCount} (${percent}%)`;
}

// ===== RENDER =====
function renderTodos() {
    todoList.innerHTML = "";

    if (todos.length === 0) {
        todoList.innerHTML = "<p>Chua co cong viec nao...</p>";
        updateStats();
        return;
    }

    todos.forEach(function(todo) {

        const li = document.createElement("li");
        li.className = todo.done ? "done" : "pending";

        // LEFT
        const left = document.createElement("div");
        left.className = "todo-left";

        const icon = document.createElement("span");
        icon.textContent = todo.done ? "✔" : "○";

        const text = document.createElement("span");
        text.textContent = todo.task;

        left.appendChild(icon);
        left.appendChild(text);

        // ACTIONS
        const actions = document.createElement("div");
        actions.className = "actions";

        // EDIT
        const editBtn = document.createElement("button");
        editBtn.textContent = "✏️";

        editBtn.addEventListener("click", function(e) {
            e.stopPropagation();

            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = todo.task;
            editInput.className = "edit-input";

            left.replaceChild(editInput, text);

            editInput.focus();
            editInput.select();

            editInput.addEventListener("keydown", function(e) {

                if (e.key === "Enter") {
                    const newValue = editInput.value.trim();

                    if (newValue === "") {
                        alert("Khong duoc de trong!");
                        return;
                    }

                    todo.task = newValue;

                    localStorage.setItem("myTodos", JSON.stringify(todos));
                    renderTodos();
                }

                if (e.key === "Escape") {
                    renderTodos();
                }
            });
        });

        // DELETE
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";

        deleteBtn.addEventListener("click", function(e) {
            e.stopPropagation();

            const confirmDelete = confirm("Ban co chac muon xoa cong viec nay?");

            if (!confirmDelete) return;

            todos = todos.filter(t => t.id !== todo.id);

            localStorage.setItem("myTodos", JSON.stringify(todos));
            renderTodos();
        });

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        // TOGGLE DONE
        li.addEventListener("click", function() {
            todo.done = !todo.done;

            localStorage.setItem("myTodos", JSON.stringify(todos));
            renderTodos();
        });

        li.appendChild(left);
        li.appendChild(actions);

        todoList.appendChild(li);
    });

    updateStats();
}

// ===== THEM =====
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

// ENTER DE THEM
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

// ===== XOA TOAN BO =====
clearBtn.addEventListener("click", function() {

    const confirmDelete = confirm("Ban co chac muon xoa TOAN BO cong viec?");

    if (!confirmDelete) return;

    todos = [];

    localStorage.setItem("myTodos", JSON.stringify(todos));

    renderTodos();
});

// ===== CHAY LAN DAU =====
renderTodos();