const createToast = (type) => {
  const container = document.getElementById("toast-container");

  let title = "";
  let msg = "";

  if (type === "success") {
    title = "✓ Thành công";
    msg = "Hành động của bạn đã được lưu.";
  } else if (type === "error") {
    title = "✕ Lỗi";
    msg = "Có gì đó không đúng, vui lòng thử lại.";
  } else if (type === "info") {
    title = "ℹ Thông tin";
    msg = "Thông tin: Bạn có một tin nhắn mới.";
  } else if (type === "warning") {
    title = "⚠ Cảnh báo";
    msg = "Hành động này không thể hoàn tác.";
  }

  const toast = document.createElement("div");
  toast.className = "toast " + type;

  const html = `
    <span class="toast-icon"></span>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${msg}</div>
    </div>
    <button class="toast-close">&times;</button>
    <div class="toast-progress"></div>
  `;

  toast.innerHTML = html;

  container.appendChild(toast);

  const autoClose = setTimeout(() => {
    removeToast(toast);
  }, 4000);

  const closeBtn = toast.querySelector(".toast-close");
  closeBtn.onclick = () => {
    clearTimeout(autoClose);
    removeToast(toast);
  };
};

const removeToast = (toastElement) => {
  if (toastElement.classList.contains("removing")) {
  }

  toastElement.classList.add("removing");

  toastElement.addEventListener("animationend", (event) => {
    if (event.animationName === "slideOut") {
      toastElement.remove();
    }
  });
};

const showToast = (type, message = "", title = "") => {
  createToast(type);
};

const testQueue = () => {
  const types = ["success", "error", "info", "warning"];

  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const randomType = types[Math.floor(Math.random() * types.length)];
      createToast(randomType);
    }, i * 100);
  }
};
