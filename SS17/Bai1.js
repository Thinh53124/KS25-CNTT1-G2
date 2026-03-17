// const todos = [
// { id: 1, task: "Mua banh chung", done: false },
// { id: 2, task: "Don nha đon Tet", done: false },
// { id: 3, task: "Goi banh chung", done: false },
// { id: 4, task: "Trang trí nhà cửa", done: false },
// ];
// localStorage.setItem("todos",JSON.stringify(todos))
const todos = JSON.parse(localStorage.getItem("todos"))
function renderlist(){
    tasklist.innerHTML = todos
    .map((todos)=>{
        return `<div class="task">
            <span class="icon">🌸</span>
            <span class="task-name">${todos.task}</span>
            <span class="status">${todos.done ? "đã xong" : "chưa làm"}</span>
        </div>`
    })
};
renderlist();