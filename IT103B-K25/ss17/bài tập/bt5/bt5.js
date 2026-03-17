const taskInput = document.getElementById('taskInput');
const btnAdd = document.getElementById('btnAdd');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('myTodos')) || [];
let editingIndex = null;
const saveToLocal = () => {
    localStorage.setItem('myTodos', JSON.stringify(tasks));
};

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;

        if (editingIndex === index) {
            taskItem.innerHTML = `
                <input type="text" class="edit-input" id="input-edit-${index}" value="${task.text}">
                <div class="action-btns">
                    <span>💾</span>
                </div>
            `;

            setTimeout(() => {
                const el = document.getElementById(`input-edit-${index}`);
                el.focus();
                el.select();

                el.onkeydown = (e) => {
                    if (e.key === 'Enter') saveEdit(index, el.value);
                    if (e.key === 'Escape') cancelEdit();
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
    if (confirm("Bạn có chắc muốn xóa công việc này?")) {
        tasks.splice(index, 1);
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

const cancelEdit = () => {
    editingIndex = null;
    renderTasks();
};


btnAdd.onclick = addTask;
taskInput.onkeydown = (e) => { if (e.key === 'Enter') addTask(); };

renderTasks();