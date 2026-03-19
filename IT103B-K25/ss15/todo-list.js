/* 
PHÂN TÍCH
QUẢN LÝ CÔNG VIỆC
CÓ DANH SÁCH TẤT CẢ CÁC CÔNG VIỆC _ CẦN CÁI GÌ ĐỂ QUẢN LÝ DANH SÁCH CÔNG VIỆC ==> MẢNG
TỪNG CÔNG VIỆC ==> DÙNG OBJET LƯU THÔNG 1 CÔNG VIỆC CỤ THỂ (ID, NAME, STATUS)


THÊM CÔNG VIỆC
+B1: tạo sự kiện khi người dùng nhấn vào nút thêm
+B2: lấy giá trị thông tin người dùng nhập trong ô input
+B3: tạo đối tượng công việc 
+B4: tạo mảng chứa danh sách tất cả công việc rồi push công việc mới vào
+B5: tạo hàm để render danh sách công việc

***********
XÓA CÔNG VIỆC
B1: lấy thông tin công việc cần xóa
B2: tạo xác nhận xem người dùng có chắc chắn muốn xóa hay không?
B3: xóa khỏi danh sách công việc
b4: gọi lại hàm render để hiển thị lại danh sách công việc
*/
let flag = -1;
let tasks = [];
// hàm thêm công việc mới
function addTask() {
  // lấy element
  let elementInput = document.getElementById("task_name");
  //   console.log("kết quả", elementInput.value);
  if (elementInput.value.trim() == "") {
    alert("tên công việc không được để trống");
    return;
  }
  let task = {
    id: Math.floor(Math.random() * 999999) + Date.now(),
    taskName: elementInput.value,
    status: false,
  };
  //   console.log("task",task);

  if (flag == -1) {
    // người dùng đang muốn thêm công việc
    tasks.push(task);

    // gọi hàm render để hiển thị danh sách công việc
    renderTasks();
    elementInput.value = "";
  } else {
    console.log("sửa");
    let newTaskName = document.getElementById("task_name").value;
    tasks[flag] = { ...tasks[flag], taskName: newTaskName };
    renderTasks();
    flag = -1;
     document.getElementById("btn").innerHTML = "thêm công việc";

  }
}

// tạo hàm hiển thị danh sách công việc
function renderTasks() {
  let str = "";
  for (let i = 0; i < tasks.length; i++) {
    let checked = "";
    if (tasks[i].status) {
      checked = "checked";
    } else {
      checked = "";
    }
    str += `<li>
        <input type="checkbox" ${checked} onclick="selectInput(${i})" />
            <span class="${tasks[i].status ? "active" : ""}">${tasks[i].taskName}</span>
          <button onclick="editTask(${i})">sửa</button>
        <button onclick="deleteTask(${tasks[i].id})">xóa</button>
      </li>`;
  }

  // lấy elementUl
  document.getElementById("list").innerHTML = str;
}
// tạo hàm đi xóa công việc
function deleteTask(id_task) {
  console.log("xóa công việc", id_task);
  let confirm_delete = confirm(
    "bạn có chắc chắn muốn xóa công việc hay không?",
  );
  if (confirm_delete) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == id_task) {
        tasks.splice(i, 1);
        renderTasks();
      }
    }
  }
}

function selectInput(index) {
  console.log("index", index);
  tasks[index].status = !tasks[index].status;
  console.log("tasks", tasks);
  renderTasks();
}
function editTask(index) {
  console.log("index", index);
  document.getElementById("task_name").value = tasks[index].taskName;
  document.getElementById("btn").innerHTML = "sửa công việc";
  flag = index;
}