/*
PHÂN TÍCH
QUẢN LÝ CÔNG VIỆC
CÓ LIST TASKS ==> CẦN CÁI GÌ ĐỂ QUẢN LÝ LIST TASKS? ==> MẢNG
TỪNG CÔNG VIỆC ==> OBJECT LƯU THÔNG TIN 1 CÔNG VIỆC CỤ THỂ (ID, NAME, STATUS)

1. THÊM CÔNG VIỆC
+B1: tạo sự kiện khi người dùng nhấn vào nút thêm
+B2: lấy giá trị thông tin người dùng nhập trong ô input
+B3: tạo đối tượng công việc
+B4: tạo mảng chứa danh sách tất cả công việc rồi push() vào
+B5: tạo hàm render danh sách công việc
---------------------
2. XÓA CÔNG VIỆC
    +b1: lấy thông tin công việc cần xóa
    +b2: tạo confirm xem người dùng có chắc muốn xóa hay không?
    +b3: xóa khỏi dánh sách công việc
    +b4: gọi lại hàm render để hiển thị lại dánh sách công việc


*/

let tasks = [];

function addTask() {
  //    lấy element
  let elementInput = document.getElementById("task_name");
  //    tạo đối tượng
  if (elementInput.value.trim()== ``) {
    alert("KHÔNG ĐƯỢC ĐỂ TRỐNG TÊN CÔNG VIỆC!!!");
    return;
  }
  let task = {
    id: Math.floor(Math.random() * 999999) + Date.now(),
    taskName: elementInput.value,
    status: false,
  };
  tasks.push(task);
// gọi hàm render để hiển thị danh sách công việc
  renderTasks();
  elementInput.value = "";
}
  //    tạo hàm hiển thị dánh sách công việc

function renderTasks() {
  let str = "";
  for (let i = 0; i < tasks.length; i++) {
    str += `
    <li>
      <input type="checkbox" ${tasks[i].status ? "checked" : ""} onclick="selectInput(${i})">
      <span style="${tasks[i].status ? "text-decoration: line-through" : ""}">
        ${tasks[i].taskName}
      </span>
      <button>Sửa</button>
      <button onclick="deleteTask(${tasks[i].id})">Xóa</button>
    </li>
  `;
  }
//   lấy elementUl
document.getElementById("list").innerHTML= str;
}

// tạo hàm delete
function deleteTask(id_task) {
    let confirm_delete = confirm("Bạn có chắc muốn xóa công việc hay không?");
    if (confirm_delete) {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id==id_task) {
                tasks.splice(i,1);
                renderTasks();
                alert("Đang xóa công việc...");
            }
        }
    }else{
        alert("Đã hủy việc xóa công việc")
    }
}

// tạo hàm khi người dùng nhấn vào input type = "checkbox"
function selectInput(index) {
    console.log("index",index);
    tasks[index].status = !tasks[index].status;
    console.log("tasks", tasks);
    renderTasks();
}