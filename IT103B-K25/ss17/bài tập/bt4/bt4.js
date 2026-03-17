let tasks = JSON.parse(localStorage.getItem('tetTasks')) || [
    { text: "Mua bánh chưng", completed: true },
    { text: "Dọn nhà đón Tết", completed: true },
    { text: "Gói bánh chưng", completed: false },
    { text: "Trang trí nhà cửa", completed: false }
];

const todos = JSON.parse(localStorage.getItem("todos"))
function renderlist() {
    tasklist.innerHTML = todos
        .map((todo,index) => {
            return `<div class="task" onclick = "toggle(${index})">
            <span class="icon">🌸</span>
            <span id="task-name">${todo.task}</span>
            <span id="status">${todo.done ? "đã xong" : "chưa làm"}</span>
            <button class="delete-btn" onclick = "deletetask()">🗑</button>
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
deletetask()