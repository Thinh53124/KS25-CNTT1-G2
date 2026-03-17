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
            <span id="task-name">${todo.task}</span>
            <span id="status">${todo.done ? "đã xong" : "chưa làm"}</span>
            <button class="delete-btn" onclick = "deletetask(${index})">🗑</button>
            <button class="edit-btn" onclick="edittask(${index})">✏️</button>
        </div>`
        }).join("");
};
renderlist();
function toggle(index) {
    todos[index].done = !todos[index].done;
    localStorage.setItem("todos", JSON.stringify(todos));
    renderlist();
}
function addlist(){
    let newtask = document.getElementById("taskInput")
    let newresult ={
        id : todos.lenght+1,
        task:newtask.value,
        done:false,
    };
    todos.push(newresult)
    newtask.value = "";
    renderlist();
}
addlist();
function deletetask(index){
    todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(todos));
    renderlist();
}
deletetask();
function edittask(index){
    let edit = prompt(` Nhập tên cần sửa`);
    todos[index].task = edit;
    renderlist();
}
edittask(index);