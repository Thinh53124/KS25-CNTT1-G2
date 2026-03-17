const todos = [
    { id: 1, task: "Mua banh chung", done: false },
    { id: 2, task: "Dọn nhà đón Tết", done: false },
    { id: 3, task: "Goi bánh chung", done: false },
    { id: 4, task: "Trang trí nhà cửa", done: false },
];


const taskListContainer = document.querySelector('.task-list');
const footerText = document.querySelector('.footer');

function renderTodos(data) {
    taskListContainer.innerHTML = '';

    data.forEach(item => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        
        taskItem.innerHTML = `
            <div class="task-content">
                <span class="icon">🌸</span>
                <span class="text">${item.task}</span>
            </div>
            <span class="status">${item.done ? 'Đã xong' : 'Chưa làm'}</span>
        `;
        
        taskListContainer.appendChild(taskItem);
    });
}

function initApp() {
    renderTodos(todos);

    if (!localStorage.getItem('myTodos')) {
        localStorage.setItem('myTodos', JSON.stringify(todos));
        
        footerText.innerText = "Đã lưu vào localStorage lần đầu tiên • Refresh trang để kiểm tra";
        console.log("Dữ liệu đã được khởi tạo vào localStorage.");
    } else {
        const storedData = JSON.parse(localStorage.getItem('myTodos'));
        footerText.innerText = `Dữ liệu đã tồn tại trong localStorage (${storedData.length} mục)`;
        console.log("Dữ liệu lấy từ localStorage:", storedData);
    }
}

window.onload = initApp;