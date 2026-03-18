const form = document.getElementById("contact-form");
const nameInput = document.getElementById("contact-name");
const phoneInput = document.getElementById("contact-phone");
const emailInput = document.getElementById("contact-email");
const tbody = document.getElementById("contact-tbody");

let contacts = [];

const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[A-Za-zÀ-ỹ\s]+$/;

function loadInitialData() {
    const rows = tbody.querySelectorAll("tr");

    rows.forEach(row => {
        const tds = row.querySelectorAll("td");
        contacts.push({
            name: tds[1].innerText,
            phone: tds[2].innerText,
            email: tds[3].innerText
        });
    });
}
loadInitialData();

function render() {
    tbody.innerHTML = "";

    contacts.forEach((c, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${c.name}</td>
            <td>${c.phone}</td>
            <td>${c.email}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="editContact(${index})">Sửa</button>
                    <button class="btn-delete" onclick="deleteContact(${index})">Xóa</button>
                </div>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function validate(name, phone, email) {
    if (!name) {
        alert("Họ tên không được để trống!");
        return false;
    }
    if (name.length < 2) {
        alert("Họ tên phải có ít nhất 2 ký tự!");
        return false;
    }
    if (!nameRegex.test(name)) {
        alert("Họ tên không được chứa số hoặc ký tự đặc biệt!");
        return false;
    }

    // PHONE
    if (!phone) {
        alert("Số điện thoại không được để trống!");
        return false;
    }
    if (!phoneRegex.test(phone)) {
        alert("Số điện thoại không hợp lệ!");
        return false;
    }

    if (!email) {
        alert("Email không được để trống!");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Email không hợp lệ!");
        return false;
    }

    const isExist = contacts.some(c => c.email === email);
    if (isExist) {
        alert("Email đã tồn tại trong danh bạ!");
        return false;
    }

    return true;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

    if (!validate(name, phone, email)) return;

    contacts.push({ name, phone, email });

    render();

    form.reset();

    alert("Thêm liên hệ thành công!");
});

function deleteContact(index) {
    if (!confirm("Bạn có chắc muốn xóa?")) return;

    contacts.splice(index, 1);
    render();
}

function editContact(index) {
    const contact = contacts[index];

    const newName = prompt("Nhập tên mới:", contact.name);
    if (newName === null) return;

    const newPhone = prompt("Nhập SĐT mới:", contact.phone);
    if (newPhone === null) return;

    const newEmail = prompt("Nhập Email mới:", contact.email);
    if (newEmail === null) return;

    const isExist = contacts.some((c, i) => c.email === newEmail && i !== index);
    if (isExist) {
        alert("Email đã tồn tại!");
        return;
    }

    if (!validate(newName, newPhone, newEmail)) return;

    contacts[index] = {
        name: newName,
        phone: newPhone,
        email: newEmail
    };

    render();
}

render();