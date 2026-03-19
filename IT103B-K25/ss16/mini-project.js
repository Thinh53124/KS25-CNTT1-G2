let employees = [
    { id: 1, fullName: "Nguyễn Văn A", email: "a.nguyen@example.com", dateOfBirth: "1995-01-01", position: "Nhân viên" },
    { id: 2, fullName: "Trần Thị B", email: "b.tran@example.com", dateOfBirth: "1993-03-12", position: "Trưởng nhóm" },
    { id: 3, fullName: "Lê Văn C", email: "c.le@example.com", dateOfBirth: "1990-07-20", position: "Trưởng phòng" },
];

let isEditing = false;
let currentEditId = null;

const employeeForm = document.querySelector("form");
const tableBody = document.querySelector("tbody");
const formTitle = document.querySelector(".header h1");
const submitBtn = document.querySelector(".btn-primary");
const resetBtn = document.querySelector(".btn-secondary");
const totalBadge = document.querySelector(".badge");
const footerTotal = document.querySelector(".footer span");

function init() {
    renderTable();
    updateStats();

    employeeForm.addEventListener("submit", handleFormSubmit);
    resetBtn.addEventListener("click", resetFormState);
}

function renderTable() {
    tableBody.innerHTML = "";

    employees.forEach((emp) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${emp.id}</td>
      <td>${emp.fullName}</td>
      <td>${emp.email}</td>
      <td>${formatDate(emp.dateOfBirth)}</td>
      <td>${emp.position}</td>
      <td class="actions">
        <button class="btn btn-sm btn-edit" onclick="editEmployee(${emp.id})">Sửa</button>
        <button class="btn btn-sm btn-delete" onclick="deleteEmployee(${emp.id})">Xóa</button>
      </td>
    `;
        tableBody.appendChild(row);
    });
}

function handleFormSubmit(e) {
    e.preventDefault();

    const formData = {
        fullName: document.getElementById("fullName").value.trim(),
        email: document.getElementById("email").value.trim(),
        dateOfBirth: document.getElementById("dateOfBirth").value,
        position: document.getElementById("position").value,
    };

    if (!validateForm(formData)) return;

    if (isEditing) {
        const index = employees.findIndex(emp => emp.id === currentEditId);
        employees[index] = { ...employees[index], ...formData };
        alert("Cập nhật thành công!");
    } else {
        const newEmployee = {
            id: employees.length > 0 ? Math.max(...employees.map(e => e.id)) + 1 : 1,
            ...formData
        };
        employees.push(newEmployee);
        alert("Thêm nhân viên thành công!");
    }

    resetFormState();
    renderTable();
    updateStats();
}

window.editEmployee = function (id) {
    const emp = employees.find(e => e.id === id);
    if (!emp) return;

    isEditing = true;
    currentEditId = id;

    document.getElementById("fullName").value = emp.fullName;
    document.getElementById("email").value = emp.email;
    document.getElementById("dateOfBirth").value = emp.dateOfBirth;
    document.getElementById("position").value = emp.position;

    formTitle.innerText = "Chỉnh Sửa Nhân Viên";
    submitBtn.innerText = "Cập Nhật";
    resetBtn.innerText = "Hủy";
    resetBtn.classList.replace("btn-secondary", "btn-danger");

    window.scrollTo({ top: 0, behavior: 'smooth' });
};


window.deleteEmployee = function (id) {
    const emp = employees.find(e => e.id === id);
    if (confirm(`Bạn có chắc chắn muốn xóa nhân viên ${emp.fullName}?`)) {
        employees = employees.filter(e => e.id !== id);

        if (isEditing && currentEditId === id) {
            resetFormState();
        }

        renderTable();
        updateStats();
    }
};

function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.fullName || !data.email || !data.dateOfBirth || !data.position) {
        alert("Vui lòng điền đầy đủ các trường bắt buộc!");
        return false;
    }

    if (!emailRegex.test(data.email)) {
        alert("Email không đúng định dạng!");
        return false;
    }

    return true;
}

function resetFormState() {
    isEditing = false;
    currentEditId = null;
    employeeForm.reset();

    formTitle.innerText = "Quản Lý Nhân Viên";
    submitBtn.innerText = "Thêm Nhân Viên";
    resetBtn.innerText = "Nhập Lại";
    resetBtn.classList.replace("btn-danger", "btn-secondary");
}

function updateStats() {
    const count = employees.length;
    totalBadge.innerText = `${count} nhân viên`;
    footerTotal.innerText = `Tổng số nhân viên: ${count}`;
}

function formatDate(dateStr) {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
}

init();