/**
 * Toast Notification System
 * K25_CMTT_HN Project
 * - Hiển thị cùng lúc (không queue)
 * - Animations mượt
 * - Tự động biến mất
 */

class ToastManager {
  constructor() {
    this.container = document.getElementById("toast-container");
    this.toasts = [];
    this.toastDuration = 4000; // 4 giây
  }

  show(type, message, title = "") {
    const toastData = {
      type,
      message,
      title: title || this.getDefaultTitle(type),
      id: Date.now() + Math.random(),
    };

    this.toasts.push(toastData);
    this.displayToast(toastData);
  }

  /**
   * Lấy tiêu đề mặc định
   */
  getDefaultTitle(type) {
    const titles = {
      success: "✓ Thành công",
      error: "✕ Lỗi",
      info: "ℹ Thông tin",
      warning: "⚠ Cảnh báo",
    };
    return titles[type] || "Thông báo";
  }

  /**
   * Lấy icon
   */
  getIcon(type) {
    const icons = {
      success: "✓",
      error: "✕",
      info: "ℹ",
      warning: "⚠",
    };
    return icons[type] || "●";
  }

  /**
   * Hiển thị toast (cùng lúc, không queue)
   */
  displayToast(toastData) {
    const { type, message, title, id } = toastData;

    // Tạo element
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.id = `toast-${id}`;
    toast.innerHTML = `
            <span class="toast-icon">${this.getIcon(type)}</span>
            <div class="toast-content">
                <div class="toast-title">${this.escapeHtml(title)}</div>
                <div class="toast-message">${this.escapeHtml(message)}</div>
            </div>
            <button class="toast-close" onclick="toastManager.removeToast('${id}')">×</button>
            <div class="toast-progress"></div>
        `;

    // Thêm vào container
    this.container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.style.opacity = "1";
    });

    // Tự động xóa
    setTimeout(() => {
      this.removeToast(id);
    }, this.toastDuration);
  }

  /**
   * Xóa toast
   */
  removeToast(id) {
    const toast = document.getElementById(`toast-${id}`);
    if (!toast) return;

    toast.classList.add("removing");

    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
      this.toasts = this.toasts.filter((t) => t.id !== id);
    }, 400);
  }

  /**
   * Escape HTML
   */
  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
}

// Khởi tạo
const toastManager = new ToastManager();

/**
 * Hiển thị toast
 */
function showToast(type, message, title = "") {
  toastManager.show(type, message, title);
}

/**
 * Test - Bấm nhanh
 */
function testQueue() {
  const types = ["success", "error", "info", "warning"];
  const messages = {
    success: "Hành động thành công!",
    error: "Có lỗi xảy ra, vui lòng thử lại.",
    info: "Bạn có 1 tin nhắn mới.",
    warning: "Hành động này không thể hoàn tác.",
  };

  // Tạo 8 toast cùng lúc
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const randomType = types[Math.floor(Math.random() * types.length)];
      showToast(randomType, messages[randomType]);
    }, i * 100);
  }
}
