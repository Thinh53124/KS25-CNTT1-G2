let tasks = [];

function renderTasks() {
    let taskList = document.getElementById("taskList");
    let str = "";

    if (tasks.length === 0) {
        str = `
        <div class="empty-state">
            <div class="empty-state-icon">📝</div>
            <div class="empty-state-text">Chưa có công việc nào</div>
        </div>`;
    } else {
        for (let i = 0; i < tasks.length; i++) {
            str += `
            <div class="task-item ${tasks[i].status ? "completed" : ""}">
                <input type="checkbox" class="task-checkbox" 
                ${tasks[i].status ? "checked" : ""} 
                onchange="toggleTask(${i})">

                <span class="task-text ${tasks[i].status ? "completed" : ""}">
                    ${tasks[i].name}
                </span>

                <div class="task-actions">
                    <button class="btn-edit" onclick="editTask(${i})">Sửa</button>
                    <button class="btn-delete" onclick="deleteTask(${i})">Xóa</button>
                </div>
            </div>
            `;
        }
    }

    taskList.innerHTML = str;
    updateFooter();
}

function addTask() {
    let input = document.getElementById("taskInput");
    let value = input.value.trim();

    if (value === "") {
        alert("Không được để trống công việc");
        return;
    }

    tasks.push({
        name: value,
        status: false
    });

    input.value = "";
    input.focus();

    renderTasks();
}

document.getElementById("taskInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function toggleTask(index) {
    tasks[index].status = !tasks[index].status;
    renderTasks();
}

function deleteTask(index) {
    let confirmDelete = confirm("Bạn có chắc muốn xóa công việc này?");
    if (confirmDelete) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

function editTask(index) {
    let taskList = document.getElementById("taskList");
    let str = "";

    for (let i = 0; i < tasks.length; i++) {
        if (i === index) {
            str += `
            <div class="task-item editing">
                <input type="checkbox" class="task-checkbox" 
                ${tasks[i].status ? "checked" : ""} disabled>

                <input type="text" class="task-edit-input" 
                id="editInput" value="${tasks[i].name}">

                <button class="btn-save" onclick="saveTask(${i})">Lưu</button>
                <button class="btn-cancel" onclick="renderTasks()">Hủy</button>
            </div>
            `;
        } else {
            str += `
            <div class="task-item ${tasks[i].status ? "completed" : ""}">
                <input type="checkbox" class="task-checkbox" 
                ${tasks[i].status ? "checked" : ""} 
                onchange="toggleTask(${i})">

                <span class="task-text ${tasks[i].status ? "completed" : ""}">
                    ${tasks[i].name}
                </span>

                <div class="task-actions">
                    <button class="btn-edit" onclick="editTask(${i})">Sửa</button>
                    <button class="btn-delete" onclick="deleteTask(${i})">Xóa</button>
                </div>
            </div>
            `;
        }
    }

    taskList.innerHTML = str;

    let editInput = document.getElementById("editInput");

    editInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            saveTask(index);
        }
        if (e.key === "Escape") {
            renderTasks();
        }
    });
}

function saveTask(index) {
    let value = document.getElementById("editInput").value.trim();

    if (value === "") {
        alert("Không được để trống công việc");
        return;
    }

    tasks[index].name = value;
    renderTasks();
}

function updateFooter() {
    let counter = document.getElementById("taskCounter");
    let badge = document.getElementById("completionBadge");

    let total = tasks.length;
    let completed = tasks.filter(task => task.status).length;

    counter.innerHTML = `${completed} / ${total}`;

    if (total > 0 && completed === total) {
        badge.innerHTML = `
        <div class="completion-badge">
            <span class="check-icon">✔</span>
            Hoàn thành tất cả
        </div>
        `;
    } else {
        badge.innerHTML = "";
    }
}

renderTasks();