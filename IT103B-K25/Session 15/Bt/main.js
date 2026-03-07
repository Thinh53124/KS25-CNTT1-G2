let toDoList = [];
// render lại danh sách !
let sizeId = 0;
rendetTask();
// chức năng 1: thêm công việc mới 
document.getElementById("addBtn").addEventListener("click", (e) => {
    e.preventDefault();
    let key = document.getElementById("taskInput").value;
    if (key.trim() === "") {
        alert("Vui lòng nhập tên công việc!");
        document.getElementById("taskInput").focus();
        return;
    }
    toDoList.push({
        id: ++sizeId,
        name: key,
        completed: false,
    });
    document.getElementById("totalCount").textContent = toDoList.length;
    rendetTask();
    input = document.getElementById("taskInput");
    input.value = "";
    input.focus();
});
document.getElementById("taskInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        document.getElementById("addBtn").click();
    }
})
// chức năng 2: Hiển thị danh sách công việc
function rendetTask() {
    let taksList = document.getElementById("taskList");
    if (toDoList.length === 0) {
        taksList.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📋</div>
          <div class="empty-state-text">
            Chưa có công việc nào. Hãy thêm công việc mới!
          </div>
        </div>`;
        return;
    }
    let html = "";
    toDoList.forEach((task) => {
        html += `
        <div class="task-item ${task.completed ? "completed" : ""}"  data-id="${task.id}">
          <input type="checkbox" class="task-checkbox"  ${task.completed ? "checked" : ""} /><span class="task-text ${task.completed ? "completed" : ""}"
            >${task.name}</span>
          <div class="task-actions">
            <button class="btn-edit" onclick = "editInput(${task.id})">✏️ Sửa</button
            ><button class="btn-delete">🗑️ Xóa</button>
          </div>
        </div>`;
    });
    
    let complete = toDoList.filter(c => c.completed).length;
    let total = toDoList.length;
    document.getElementById("completedCount").textContent = complete;
    document.getElementById("totalCount").textContent = toDoList.length;
    const badge = document.getElementById("allDoneBadge");
    if (total > 0 && complete === total) {
        badge.classList.remove("hidden");
    }else{
        badge.classList.add("hidden");
    }
    taksList.innerHTML = html;
}
// chức năng 3: Đánh dấu hoàn thành
document.getElementById("taskList").addEventListener("change", (e) => {
    if (e.target.classList.contains("task-checkbox")) {
        let idx = Number(e.target.closest(".task-item").dataset.id);
        let task = toDoList.find(t => t.id === idx);
        task.completed = e.target.checked;
        rendetTask();
    }
});
// chức năng 4: Sửa công việc 

document.getElementById("taskList").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-edit")) {
        let taskItem = e.target.closest(".task-item");
        let idx = +taskItem.dataset.id;
        let task = toDoList.find(t => t.id === idx);
        taskItem.classList.add("editing");
        taskItem.innerHTML = `
        <input type="checkbox" 
                   class="task-checkbox"
                   ${task.completed ? "checked" : ""} />

            <input type="text" 
                   class="task-edit-input" 
                   value="${task.name}" />

            <div class="task-actions">
                <button class="btn-save">💾 Lưu</button>
                <button class="btn-cancel">❌ Hủy</button>
            </div>
            `;
    }
    if (e.target.classList.contains("btn-save")) {
        let taskItem = e.target.closest(".task-item");
        let idx = +taskItem.dataset.id;
        let task = toDoList.find(t => t.id === idx);

        let newName = taskItem.querySelector(".task-edit-input").value;

        if (newName.trim() === "") {
            alert("Tên công việc không để trống");
            return;
        }
        task.name = newName;
        rendetTask();
    }
    if (e.target.classList.contains("btn-cancel")) {
        rendetTask();
    }
});
document.getElementById("taskList").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.classList.contains("task-edit-input")) {
        let taskItem = e.target.closest(".task-item");
        let idx = +taskItem.dataset.id;
        let task = toDoList.find(t => t.id === idx);

        let newName = e.target.value;
        if (newName.trim() === "") {
            alert("tên  không được để trống !");
            return;
        }
        task.name = newName;
        rendetTask();
    }
});
// chức năng 5: xóa công việc
document.getElementById("taskList").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
        let idx = +e.target.closest(".task-item").dataset.id;
        let task = toDoList.findIndex(c => c.id === idx);
        let comfim = window.confirm(`Bạn có chắc chắn muốn xóa công việc ?`);
        if (comfim) {
            toDoList.splice(task, 1);
            rendetTask();
        } else {
            rendetTask();
        }
    }
});
