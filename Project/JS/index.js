// ==================== DATA MANAGEMENT ====================
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

// Sample movies data
const moviesData = [
    {
        id: 1,
        title: "Dune",
        genre: "Hành động, Viễn tưởng",
        duration: 155,
        year: 2021,
        rating: 8.5,
        image: "https://tse1.mm.bing.net/th/id/OIP.Ve_LxyMF6YqhIL_XhX1WEAHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "Theo chân Paul Atreides, một cậu bé trẻ được định mệnh..."
    },
    {
        id: 2,
        title: "The Batman",
        genre: "Hành động, Tội phạm",
        duration: 176,
        year: 2022,
        rating: 8.3,
        image: "https://tse3.mm.bing.net/th/id/OIP.YlsRzv5cBk2Gnd-RD-EAtwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "Một thợ săn quay về nhân dân để tìm kiếm sự trả thù."
    },
    {
        id: 3,
        title: "Spider-Man: No Way Home",
        genre: "Hành động, Phiêu lưu",
        duration: 148,
        year: 2021,
        rating: 8.4,
        image: "https://static1.tribute.ca/poster/660x980/spider-man-no-way-home-163783.jpg",
        description: "Peter Parker và Doctor Strange mở ra đa vũ trụ."
    },
    {
        id: 4,
        title: "The Matrix: Resurrections",
        genre: "Hành dộng, Viễn tưởng",
        duration: 148,
        year: 2021,
        rating: 7.1,
        image: "https://image.tmdb.org/t/p/original/aSZiRMu05JqjvjUac8W3Y5TbtgG.jpg",
        description: "Trở lại vào thế giới The Matrix."
    },
];

document.addEventListener("DOMContentLoaded", () => {
    // renderNavActions();
    renderMovies();
});

// function renderNavActions() {
//     const navActions = document.getElementById("navActions");
    
//     if (currentUser) {
//         navActions.innerHTML = `
//             <div class="user-menu">
//                 <span class="user-name">${currentUser.name}</span>
//                 <div class="user-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
//                 <button class="logout-btn" onclick="showLogoutModal()">Đăng xuất</button>
//             </div>
//         `;
//     } else {
//         navActions.innerHTML = `
//             <a href="register.html" class="btn-register">Đăng ký</a>
//         `;
//     }
// }

function renderMovies() {
    const moviesGrid = document.getElementById("moviesGrid");

    moviesGrid.innerHTML = moviesData.map(movie => `
        <div class="movie-card">
            <img src="${movie.image}" class="movie-image"/>

            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-meta">
                    <i class="fa-regular fa-clock"></i> ${movie.duration} phút  •  ${movie.genre}
                </p>

                <button class="btn-book" onclick="bookMovie(${movie.id})">
                    Mua Vé
                </button>
            </div>
        </div>
    `).join("");
}
// ==================== BOOK MOVIE ==================== 
function bookMovie(movieId) {
    if (!currentUser) {
        createToast("warning", "Thông báo", "Vui lòng đăng nhập để đặt vé!");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500);
        return;
    }
    
    const movie = moviesData.find(m => m.id === movieId);
    createToast("success", "Thành công", `Đã thêm "${movie.title}" vào giỏ hàng!`);
}

// ==================== LOGOUT MODAL ==================== 
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
        window.location.href = "index.html";
    }, 1500);
}

// ==================== TOAST NOTIFICATION ==================== 
function createToast(type, title, message) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<b>${title}</b><div>${message}</div>`;
    
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ==================== MODAL CLOSE ON ESCAPE KEY ==================== 
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLogoutModal();
    }
});

// ==================== MODAL CLOSE ON OUTSIDE CLICK ==================== 
document.addEventListener("click", (e) => {
    const modal = document.getElementById("logoutModal");
    if (e.target === modal) {
        closeLogoutModal();
    }
});