let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

const KEY = "rikkei_movies";
let moviesData = JSON.parse(localStorage.getItem(KEY)) || [];

document.addEventListener("DOMContentLoaded", () => {
  renderNavActions();
  renderMovies();
});

function renderNavActions() {
  const navActions = document.getElementById("navActions");

  if (currentUser) {
    navActions.innerHTML = `
            <div class="user-menu">
                <span class="user-name">${currentUser.name}</span>
                <button class="logout-btn" onclick="showLogoutModal()">
                    Đăng xuất
                </button>
            </div>
        `;
  } else {
    navActions.innerHTML = `
            <a href="login.html" class="btn-login">
                Đăng nhập / Đăng ký
            </a>
        `;
  }
}

function renderMovies() {
  const moviesGrid = document.getElementById("moviesGrid");
  if (!moviesGrid) return;

  const showingMovies = moviesData.filter((m) => m.status === "Đang chiếu");

  if (showingMovies.length === 0) {
    moviesGrid.innerHTML =
      "<p style='color: white; text-align: center; grid-column: 1/-1;'>Hiện không có phim nào đang chiếu.</p>";
    return;
  }

  moviesGrid.innerHTML = showingMovies
    .map(
      (movie) => `
        <div class="movie-card">
            <img src="${movie.poster}" class="movie-image" onerror="this.src='https://via.placeholder.com/300x450?text=No+Image'"/>
            <div class="movie-info">
                <h3 class="movie-title">${movie.name}</h3>
                <p class="movie-meta">
                    <i class="fa-regular fa-clock"></i> ${movie.duration} phút  •  ${movie.genre}
                </p>
                <button class="btn-book" onclick="bookMovie(${movie.id})">
                    Mua Vé - ${movie.price.toLocaleString("vi-VN")}đ
                </button>
            </div>
        </div>
    `,
    )
    .join("");
}

function bookMovie(movieId) {
  if (!currentUser) {
    createToast("warning", "Thông báo", "Vui lòng đăng nhập để đặt vé!");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
    return;
  }

  const movie = moviesData.find((m) => m.id === movieId);
  if (movie) {
    createToast(
      "success",
      "Thành công",
      `Đã thêm "${movie.name}" vào giỏ hàng!`,
    );
  }
}

const trailerUrl = "https://www.youtube.com/watch?v=n9xhJrPXop4";

function handleTrailerClick(url) {
  if (!url) {
    createToast("error", "Lỗi", "Chưa có trailer!");
    return;
  }

  const videoId = getYouTubeId(url);

  if (!videoId) {
    window.open(url, "_blank");
    return;
  }

  document.getElementById("trailerFrame").src =
    `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  document.getElementById("trailerModal").classList.add("active");
}

function closeTrailerModal() {
  document.getElementById("trailerFrame").src = "";
  document.getElementById("trailerModal").classList.remove("active");
}

function getYouTubeId(url) {
  const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

function showLogoutModal() {
  document.getElementById("logoutModal").classList.add("active");
}

function closeLogoutModal() {
  document.getElementById("logoutModal").classList.remove("active");
}

function confirmLogout() {
  localStorage.removeItem("currentUser");

  createToast("success", "Thành công", "Đã đăng xuất!");

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}

function createToast(type, title, message) {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  toast.innerHTML = `
    <div class="content">
      <div class="title">${title}</div>
      <div class="message">${message}</div>
    </div>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLogoutModal();
  }
});

document.addEventListener("click", (e) => {
  const modal = document.getElementById("logoutModal");
  if (e.target === modal) {
    closeLogoutModal();
  }
});
document.addEventListener("DOMContentLoaded", () => {
  renderNavActions();
  renderMovies();

  const trailerUrl = "https://www.youtube.com/watch?v=n9xhJrPXop4";

  const btn = document.getElementById("btnTrailer");
  if (btn) {
    btn.addEventListener("click", () => {
      handleTrailerClick(trailerUrl);
    });
  }
});
document.addEventListener("click", (e) => {
  const trailerModal = document.getElementById("trailerModal");

  if (e.target === trailerModal) {
    closeTrailerModal();
  }
});
