const form = document.getElementById("contact-form");
const nameInput = document.getElementById("contact-name");
const phoneInput = document.getElementById("contact-phone");
const emailInput = document.getElementById("contact-email");
const tbody = document.getElementById("contact-tbody");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

let phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;

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
  if (!name || name.trim() === '') {
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

  if (!phone || phone.trim() === '') {
    alert("Số điện thoại không được để trống!");
    return false;
  }
  if (!phoneRegex.test(phone.trim())) {
    alert("Số điện thoại không hợp lệ!");
    return false;
  }

  if (!email || email.trim() === '') {
    alert("Email không được để trống!");
    return false;
  }
  if (!emailRegex.test(email.trim())) {
    alert("Email không hợp lệ!");
    return false;
  }

  const isExist = contacts.some((c) => c.email === email);
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

  localStorage.setItem("contacts", JSON.stringify(contacts));

  render();
  form.reset();

  alert("Thêm liên hệ thành công!");
});

function editContact(){}
function deleteContact(index) {
    if (!confirm("Bạn có chắc muốn xóa?")) return;

    contacts.splice(index, 1);
    render();
}
render()