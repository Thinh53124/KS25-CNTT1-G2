const taskInput = document.getElementById('taskInput');
const btnAdd = document.getElementById('btnAdd');
const taskList = document.getElementById('taskList');
const statsContainer = document.getElementById('stats');
const btnClearAll = document.getElementById('btnClearAll');

let tasks = JSON.parse(localStorage.getItem('myTodos')) || [];
let editingIndex = null;

const saveToLocal = () => {
    localStorage.setItem('myTodos', JSON.stringify(tasks));
    updateStats();
};

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    statsContainer.innerHTML = `
        <strong>Tổng công việc:</strong> ${total} | 
        <strong>Đã hoàn thành:</strong> ${completed} (${percent}%)
    `;
}

function renderTasks() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = `<div class="empty-msg">Chưa có công việc nào trong danh sách...</div>`;
        return;
    }

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;

        if (editingIndex === index) {
            taskItem.innerHTML = `
                <input type="text" class="edit-input" id="input-edit-${index}" value="${task.text}">
                <div class="action-btns"><span>💾</span></div>
            `;
            setTimeout(() => {
                const el = document.getElementById(`input-edit-${index}`);
                el.focus();
                el.select();
                el.onkeydown = (e) => {
                    if (e.key === 'Enter') saveEdit(index, el.value);
                    if (e.key === 'Escape') { editingIndex = null; renderTasks(); }
                };
                el.onblur = () => saveEdit(index, el.value);
            }, 0);
        } else {
            taskItem.innerHTML = `
                <div class="status-icon ${task.completed ? '' : 'circle'}" onclick="toggleTask(${index})">
                    ${task.completed ? '✔' : ''}
                </div>
                <span class="task-text" onclick="toggleTask(${index})">${task.text}</span>
                <div class="action-btns">
                    <button class="btn-action" onclick="startEdit(${index})">✏️</button>
                    <button class="btn-action" onclick="deleteTask(${index})">🗑️</button>
                </div>
            `;
        }
        taskList.appendChild(taskItem);
    });
}

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;
    tasks.push({ text: text, completed: false });
    taskInput.value = "";
    saveToLocal();
    renderTasks();
}

window.deleteTask = (index) => {
    if (confirm("Xóa công việc này?")) {
        tasks.splice(index, 1);
        saveToLocal();
        renderTasks();
    }
};

btnClearAll.onclick = () => {
    if (tasks.length === 0) return;
    if (confirm("CẢNH BÁO: Bạn có chắc chắn muốn xóa SẠCH toàn bộ danh sách công việc không?")) {
        tasks = [];
        saveToLocal();
        renderTasks();
    }
};

window.toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    saveToLocal();
    renderTasks();
};

window.startEdit = (index) => {
    editingIndex = index;
    renderTasks();
};

const saveEdit = (index, newValue) => {
    const val = newValue.trim();
    if (val !== "") {
        tasks[index].text = val;
        saveToLocal();
    }
    editingIndex = null;
    renderTasks();
};

btnAdd.onclick = addTask;
taskInput.onkeydown = (e) => { if (e.key === 'Enter') addTask(); };

updateStats();
renderTasks();