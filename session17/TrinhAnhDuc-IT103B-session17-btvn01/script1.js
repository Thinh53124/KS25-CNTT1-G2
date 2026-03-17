// du lieu ban dau
const todos = [
 { id: 1, task: "Mua banh chung", done: false },
 { id: 2, task: "Don nha don Tet", done: false },
 { id: 3, task: "Goi banh chung", done: false },
 { id: 4, task: "Trang tri nha cua", done: false }
];

const todoList = document.getElementById("todo-list");

// lay du lieu tu localStorage
let storedTodos = localStorage.getItem("myTodos");

if (!storedTodos) {
    // lan dau -> luu du lieu
    localStorage.setItem("myTodos", JSON.stringify(todos));
    storedTodos = todos;
} else {
    // da co du lieu
    storedTodos = JSON.parse(storedTodos);
}

// hien thi danh sach
function renderTodos(data) {
    todoList.innerHTML = "";

    data.forEach(function(todo) {
        const li = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.textContent = todo.task;

        const status = document.createElement("span");
        status.classList.add("status");
        status.textContent = todo.done ? "Da xong" : "Chua lam";

        li.appendChild(taskText);
        li.appendChild(status);

        todoList.appendChild(li);
    });
}

// goi ham render
renderTodos(storedTodos);