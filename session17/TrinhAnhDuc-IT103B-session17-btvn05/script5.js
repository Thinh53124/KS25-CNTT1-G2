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

// load
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

        // LEFT
        const left = document.createElement("div");
        left.className = "todo-left";

        const icon = document.createElement("span");
        icon.textContent = todo.done ? "✔" : "○";

        // TEXT
        const text = document.createElement("span");
        text.textContent = todo.task;

        left.appendChild(icon);
        left.appendChild(text);

        // ACTIONS
        const actions = document.createElement("div");
        actions.className = "actions";

        // EDIT BUTTON
        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "✏️";

        // DELETE BUTTON
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "🗑️";

        // ===== EDIT LOGIC =====
        editBtn.addEventListener("click", function(e) {
            e.stopPropagation();

            // tao input
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = todo.task;
            editInput.className = "edit-input";

            // thay text bang input
            left.replaceChild(editInput, text);

            editInput.focus();
            editInput.select();

            // SAVE (Enter)
            editInput.addEventListener("keydown", function(e) {

                if (e.key === "Enter") {
                    const newValue = editInput.value.trim();

                    if (newValue === "") {
                        alert("Ten khong duoc de trong!");
                        return;
                    }

                    todo.task = newValue;

                    localStorage.setItem("myTodos", JSON.stringify(todos));
                    renderTodos();
                }

                // CANCEL (Esc)
                if (e.key === "Escape") {
                    renderTodos();
                }
            });
        });

        // ===== DELETE =====
        deleteBtn.addEventListener("click", function(e) {
            e.stopPropagation();

            const confirmDelete = confirm("Ban co chac muon xoa?");

            if (!confirmDelete) return;

            todos = todos.filter(t => t.id !== todo.id);

            localStorage.setItem("myTodos", JSON.stringify(todos));
            renderTodos();
        });

        // ===== TOGGLE DONE =====
        li.addEventListener("click", function() {
            todo.done = !todo.done;

            localStorage.setItem("myTodos", JSON.stringify(todos));
            renderTodos();
        });

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(left);
        li.appendChild(actions);

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

// ENTER THEM
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

// render lan dau
renderTodos();