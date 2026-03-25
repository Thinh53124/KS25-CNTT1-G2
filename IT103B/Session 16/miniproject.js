// Dữ liệu nhân viên (lưu trên RAM)
let employees = [];
let currentId = 1;
let editingId = null;

// Lấy element
const form = document.getElementById("employee-form");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const dobInput = document.getElementById("dateOfBirth");
const positionInput = document.getElementById("position");

const errorFullName = document.getElementById("error-fullName");
const errorEmail = document.getElementById("error-email");
const errorDob = document.getElementById("error-dateOfBirth");
const errorPosition = document.getElementById("error-position");

const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");
const cancelEditBtn = document.getElementById("cancel-edit-btn");

const tbody = document.getElementById("employee-tbody");
const employeeCount = document.getElementById("employee-count");
const footerCount = document.getElementById("footer-count");

// Helper: format dd/mm/yyyy
function formatDateToDDMMYYYY(isoString) {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

// Helper: validate email
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Reset lỗi
function clearErrors() {
  errorFullName.textContent = "";
  errorEmail.textContent = "";
  errorDob.textContent = "";
  errorPosition.textContent = "";
}

// Reset form về trạng thái thêm mới
function resetForm() {
  form.reset();
  clearErrors();
  editingId = null;
  formTitle.textContent = "Thêm Nhân Viên Mới";
  submitBtn.textContent = "Thêm Nhân Viên";
  cancelEditBtn.classList.add("hidden");
}

// Validate form, trả về object dữ liệu nếu OK, ngược lại trả về null
function validateForm() {
  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const dob = dobInput.value;
  const position = positionInput.value.trim();

  let isValid = true;
  clearErrors();

  if (!fullName) {
    errorFullName.textContent = "Họ và tên không được để trống";
    isValid = false;
  }

  if (!email) {
    errorEmail.textContent = "Email không được để trống";
    isValid = false;
  } else if (!isValidEmail(email)) {
    errorEmail.textContent = "Email không hợp lệ";
    isValid = false;
  }

  if (!dob) {
    errorDob.textContent = "Ngày sinh không được để trống";
    isValid = false;
  }

  if (!position) {
    errorPosition.textContent = "Chức vụ không được để trống";
    isValid = false;
  }

  if (!isValid) return null;

  return { fullName, email, dob, position };
}

// Render danh sách nhân viên
function renderTable() {
  tbody.innerHTML = "";
  employees.forEach((emp) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${emp.id}</td>
      <td>${emp.fullName}</td>
      <td>${emp.email}</td>
      <td>${formatDateToDDMMYYYY(emp.dob)}</td>
      <td>${emp.position}</td>
      <td>
        <div class="actions">
          <button class="btn btn-sm btn-edit" data-id="${emp.id}">Sửa</button>
          <button class="btn btn-sm btn-delete" data-id="${emp.id}">Xóa</button>
        </div>
      </td>
    `;

    tbody.appendChild(tr);
  });

  updateStatistics();
}

// Cập nhật thống kê
function updateStatistics() {
  const count = employees.length;
  employeeCount.textContent = `${count} nhân viên`;
  footerCount.textContent = `Tổng số nhân viên: ${count}`;
}

// Xử lý submit form (thêm / cập nhật)
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = validateForm();
  if (!data) return;

  if (editingId === null) {
    // Thêm mới
    const newEmployee = {
      id: currentId++,
      fullName: data.fullName,
      email: data.email,
      dob: data.dob,
      position: data.position,
    };
    employees.push(newEmployee);
  } else {
    // Cập nhật
    employees = employees.map((emp) =>
      emp.id === editingId
        ? {
            ...emp,
            fullName: data.fullName,
            email: data.email,
            dob: data.dob,
            position: data.position,
          }
        : emp
    );
  }

  renderTable();
  resetForm();
});

// Click nút Sửa / Xóa trong bảng (event delegation)
tbody.addEventListener("click", function (e) {
  const target = e.target;
  const id = Number(target.getAttribute("data-id"));
  if (!id) return;

  if (target.classList.contains("btn-edit")) {
    handleEdit(id);
  } else if (target.classList.contains("btn-delete")) {
    handleDelete(id);
  }
});

// Xử lý Sửa
function handleEdit(id) {
  const emp = employees.find((item) => item.id === id);
  if (!emp) return;

  editingId = id;

  fullNameInput.value = emp.fullName;
  emailInput.value = emp.email;
  dobInput.value = emp.dob;
  positionInput.value = emp.position;

  formTitle.textContent = "Chỉnh Sửa Nhân Viên";
  submitBtn.textContent = "Cập Nhật";
  cancelEditBtn.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Xử lý Xóa
function handleDelete(id) {
  const emp = employees.find((item) => item.id === id);
  if (!emp) return;

  const confirmDelete = window.confirm(
    `Bạn có chắc chắn muốn xóa nhân viên "${emp.fullName}" không?`
  );
  if (!confirmDelete) return;

  employees = employees.filter((item) => item.id !== id);

  // Nếu đang sửa nhân viên bị xóa => reset form
  if (editingId === id) {
    resetForm();
  }

  renderTable();
}

// Xử lý Hủy chỉnh sửa
cancelEditBtn.addEventListener("click", function () {
  resetForm();
});

