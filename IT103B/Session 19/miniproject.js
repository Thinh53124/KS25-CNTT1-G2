const btn = document.querySelector("#iconBtn");
const menu = document.querySelector("#themeSelect");
const items = menu.querySelectorAll("div"); // lấy tất cả các item (mỗi div là 1 lựa chọn)

let theme; // biến lưu theme hiện tại

const applyTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark"); // bật dark mode bằng cách thêm class vào <html>
  } else if (theme === "light") {
    document.documentElement.classList.remove("dark");  // xóa class dark đê
  } else {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;  // kiểm tra hệ điều hành đang dùng dark ko

    if (isDark) {    // tương tự nếu nó là dark thì thêm class dark, ko thì xóa
      document.documentElement.classList.add("dark"); 
    } else {
      document.documentElement.classList.remove("dark"); 
    }
  }

  //Đổi icon theo theme
  if (theme === "dark") {
    btn.textContent = "🌙"; 
  } else if (theme === "light") {
    btn.textContent = "☀️"; 
  } else {
    btn.textContent = "🤖"; 
  }
};


// Khi trang load
theme = localStorage.getItem("theme");  // lấy theme đã lưu (có thể null nếu chưa từng lưu)

if (!theme) theme = "auto";  // nếu chưa có → mặc định auto
// áp dụng theme ngay khi vào trang
applyTheme(theme);  


// Xử lí việc click nút icon sẽ mở/đóng menu
btn.addEventListener("click", () => {
  menu.classList.toggle("show"); // toggle giúp bật/tắt menu
});


// Khi chọn 1 item trong menu
// Duyệt qua từng item
items.forEach((item) => {
  item.addEventListener("click", () => {
    const newTheme = item.getAttribute("value");  // lấy giá trị theme từ attribute value
    // áp dụng theme mới
    applyTheme(newTheme);

    localStorage.setItem("theme", newTheme);  // lưu lại để lần sau vẫn giữ theme này

    menu.classList.remove("show");  // đóng menu
  });
});


// Xử lí việc click vị trí bên ngoài thì sẽ đóng menu
document.addEventListener("click", (e) => {
  // nếu click không nằm trong dropdown
  if (!e.target.closest(".dropdown")) {
    menu.style.display = "none";
  }
});