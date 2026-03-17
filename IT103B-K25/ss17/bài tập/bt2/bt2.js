const initialTodos = [
    { id: 1, task: "Mua banh chung", done: false },
    { id: 2, task: "Dọn nhà đón Tết", done: false },
    { id: 3, task: "Goi bánh chưng", done: false },
    { id: 4, task: "Trang trí nha cửa bang hoa mai, hoa dao", done: false },
    { id: 5, task: "Mua phong bao li xi", done: false },
    { id: 6, task: "Chuẩn bị mâm ngũ quả", done: false },
];


let currentTodos = [];

function loadData() {
    const storedData = localStorage.getItem('myTodos');

    if (storedData) {
        currentTodos = JSON.parse(storedData);
    } else {
        currentTodos = [...initialTodos];
        saveData();
    }
}

function saveData() {
    localStorage.setItem('myTodos', JSON.stringify(currentTodos));
}

function renderTodos() {
    const taskListContainer = document.querySelector('.task-list');
    taskListContainer.innerHTML = '';

    currentTodos.forEach(item => {
        const taskItem = document.createElement('div');

        taskItem.className = `task-item ${item.done ? 'completed' : ''}`;

        taskItem.innerHTML = `
            <div class="status-icon">${item.done ? '✓' : ''}</div>
            <div class="task-text">${item.task}</div>
        `;

        taskItem.onclick = () => toggleTask(item.id);

        taskListContainer.appendChild(taskItem);
    });
}

function toggleTask(id) {
    currentTodos = currentTodos.map(item => {
        if (item.id === id) {
            return { ...item, done: !item.done };
        }
        return item;
    });

    renderTodos();
    saveData();
}

window.onload = () => {
    loadData();
    renderTodos();
};