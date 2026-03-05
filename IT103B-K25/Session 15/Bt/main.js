/*  
PHÂN TÍCH
QUẢN LÝ CÔNG VIỆC
CÓ DANH SÁCH TẤT CẢ CÁC CÔNG VIỆC CẦN CÁI GÌ ĐỂ QUẢN LÝ DANH SÁCH CÔNG VIỆC == > MẢNG
TỪNG CÔNG VIỆC == > DÙNG OBJECT LƯU THÔNG 1 CÔNG VIỆC CỤ THỂ (ID, NAME, STATUS)


THÊM CÔNG VIỆC
B1: TẠO SỰ KIỆN KHI NGƯỜI DÙNG BẤM NÚT THÊM CÔNG VIỆC
B2: LẤY THÔNG TIN NGƯỜI DÙNG NHẬP TRONG Ô INPUT
B3: TẠO ĐỐI TƯỢNG CÔNG VIỆC
B4: TẠO MẢNG CHỨA DANH SÁCH TẤT CẢ CÔNG VIỆC RỒI PUSH CÔNG VIỆC MỚI VÀO
B5: TẠO HÀM ĐỂ RENDER DANH SÁCH CÔNG VIỆC


************
XÓA CÔNG VIỆC
B1: LẤY THÔNG TIN CÔNG VIỆC CẦN XÓA
B2: TẠO XÁC NHẬN XEM NGƯỜI DÙNG CÓ CHẮC CHẮN MUỐN XÓA HAY KHÔNG?
*/
// Hàm thêm công việc mới
let tasks = [];

function addTask() {
  //Lấy element
  let elementInput = document.getElementById("task-name");
  if (elementInput.value.trim() === "") {
    alert("Không để trống nhé cưng!");
    return;
  }
  let task = {
    id: Math.floor(Math.random() * 90293 + Date.now()),
    taskName: elementInput.value,
    status: false,
  };
  tasks.push(task);
  renderTask();
  elementInput.value = "";
  elementInput.focus();
}

// Hàm hiển thị danh sách công việc
function renderTask() {
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

  // Lấy elementUl
  document.getElementById("list").innerHTML = str;
}

// Tạo hàm đi xóa công việc

function deleteTask(id_task) {
  let confirmDelete = confirm("Cưng có chắc không cưng?");
  if (confirmDelete) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == id_task) {
        tasks.splice(i, 1);
        renderTask();
      }
    }
  } else {
    alert("OK không xóa nhé cưng");
  }
}

//Tạo hàm khi người dùng nhấn vào input checkbox
function selectInput(index) {
  tasks[index].status = !tasks[index].status;
  renderTask()
}


