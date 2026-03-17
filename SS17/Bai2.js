// const todos = [
// { id: 1, task: "Mua banh chung", done: false },
// { id: 2, task: "Don nha đon Tet", done: false },
// { id: 3, task: "Goi banh chung", done: false },
// { id: 4, task: "Trang trí nhà cửa", done: false },
// ];
// localStorage.setItem("todos",JSON.stringify(todos))
const todos = JSON.parse(localStorage.getItem("todos"))
function renderlist() {
    tasklist.innerHTML = todos
        .map((todo,index) => {
            return `<div class="task" onclick = "toggle(${index})">
            <span class="icon">🌸</span>
            <span class="task-name">${todo.task}</span>
            <span class="status">${todo.done ? "đã xong" : "chưa làm"}</span>
        </div>`
        }).join("");
};
renderlist();
function toggle(index) {
    todos[index].done = !todos[index].done;
    localStorage.setItem("todos", JSON.stringify(todos));
    renderlist();
}