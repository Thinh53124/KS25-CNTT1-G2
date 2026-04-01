// ==================== DATA MANAGEMENT ====================
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
let users = JSON.parse(localStorage.getItem("users")) || [];
let movies = JSON.parse(localStorage.getItem("movies")) || [
    {
        id: 1,
        title: "Dune: Hành Trình Cát",
        genre: "Khoa học viễn tưởng",
        duration: 166,
        year: 2021,
        rating: 8.5,
        image: "https://via.placeholder.com/200x280?text=Dune",
        description: "Theo chân Paul Atreides, một cậu bé trẻ được định mệnh...",
        status: "active"
    },
    {
        id: 2,
        title: "The Batman",
        genre: "Hành động",
        duration: 176,
        year: 2022,
        rating: 8.3,
        image: "https://via.placeholder.com/200x280?text=Batman",
        description: "Một thợ săn quay về nhân dân để tìm kiếm sự trả thù.",
        status: "active"
    }
];

let currentEditingMovieId = null;
let currentDeletingId = null;
let currentDeletingType = null;
let currentTab = "dashboard";
let moviesPage = 1;
let usersPage = 1;
const itemsPerPage = 5;

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
    // Kiểm tra user đã đăng nhập và là admin
    if (!currentUser || currentUser.role !== "ADMIN") {
        window.location.href = "login.html";
        return;
    }

    // Set user name
    document.getElementById("userName").textContent = currentUser.name;

    // Initialize data
    localStorage.setItem("movies", JSON.stringify(movies));
    
    // Render dashboard
    renderDashboard();
    renderMoviesTable();
    renderUsersTable();

    // Event listeners
    document.getElementById("searchMovies").addEventListener("input", () => {
        moviesPage = 1;
        renderMoviesTable();
    });

    document.getElementById("searchUsers").addEventListener("input", () => {
        usersPage = 1;
        renderUsersTable();
    });
});

// ==================== TAB SWITCHING ====================
function switchTab(e, tabName) {
    e.preventDefault();
    currentTab = tabName;
    
    // Hide all tabs
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active");
    });

    // Show selected tab
    const tabElement = document.getElementById(tabName + "Tab");
    if (tabElement) {
        tabElement.classList.add("active");
    }

    // Update page title
    const titles = {
        dashboard: "Dashboard",
        movies: "Quản Lý Phim",
        users: "Quản Lý Người Dùng"
    };
    document.getElementById("pageTitle").textContent = titles[tabName];

    // Update active nav
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });
    e.target.closest(".nav-item").classList.add("active");
}

// ==================== DASHBOARD ====================
function renderDashboard() {
    const stats = {
        totalMovies: movies.length,
        totalUsers: users.filter(u => u.role === "USER").length,
        totalBookings: 0, // Placeholder
        totalRevenue: 0   // Placeholder
    };

    document.getElementById("totalMovies").textContent = stats.totalMovies;
    document.getElementById("totalUsers").textContent = stats.totalUsers;
    document.getElementById("totalBookings").textContent = stats.totalBookings;
    document.getElementById("totalRevenue").textContent = (stats.totalRevenue).toLocaleString("vi-VN") + " VNĐ";
}

// ==================== MOVIES MANAGEMENT ====================
function renderMoviesTable() {
    const searchTerm = document.getElementById("searchMovies").value.toLowerCase();
    const filteredMovies = movies.filter(m => 
        m.title.toLowerCase().includes(searchTerm) ||
        m.genre.toLowerCase().includes(searchTerm)
    );

    const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
    const startIndex = (moviesPage - 1) * itemsPerPage;
    const paginatedMovies = filteredMovies.slice(startIndex, startIndex + itemsPerPage);

    const tableBody = document.getElementById("moviesTableBody");
    tableBody.innerHTML = paginatedMovies.map(movie => `
        <tr>
            <td><img src="${movie.image}" alt="${movie.title}" class="movie-thumb"></td>
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>${movie.duration} phút</td>
            <td>${movie.year}</td>
            <td>${movie.rating}/10</td>
            <td>
                <span class="status-badge ${movie.status}">
                    ${getStatusText(movie.status)}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="editMovie(${movie.id})">
                        <i class="fas fa-edit"></i> Sửa
                    </button>
                    <button class="btn-delete" onclick="deleteMovie(${movie.id})">
                        <i class="fas fa-trash"></i> Xóa
                    </button>
                </div>
            </td>
        </tr>
    `).join("");

    renderPagination("moviesPagination", moviesPage, totalPages, (page) => {
        moviesPage = page;
        renderMoviesTable();
    });
}

function getStatusText(status) {
    const statusMap = {
        active: "Đang chiếu",
        upcoming: "Sắp chiếu",
        inactive: "Ngừng chiếu"
    };
    return statusMap[status] || status;
}

function showAddMovieForm() {
    currentEditingMovieId = null;
    document.getElementById("movieModalTitle").textContent = "Thêm Phim Mới";
    document.getElementById("movieForm").reset();
    document.getElementById("movieModal").classList.add("active");
}

function editMovie(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;

    currentEditingMovieId = movieId;
    document.getElementById("movieModalTitle").textContent = "Chỉnh Sửa Phim";
    
    document.getElementById("movieName").value = movie.title;
    document.getElementById("movieGenre").value = movie.genre;
    document.getElementById("movieDuration").value = movie.duration;
    document.getElementById("movieYear").value = movie.year;
    document.getElementById("movieRating").value = movie.rating;
    document.getElementById("movieDescription").value = movie.description;
    document.getElementById("movieImage").value = movie.image;
    document.getElementById("movieStatus").value = movie.status;

    document.getElementById("movieModal").classList.add("active");
}

function saveMovie(e) {
    e.preventDefault();

    const movieData = {
        title: document.getElementById("movieName").value,
        genre: document.getElementById("movieGenre").value,
        duration: parseInt(document.getElementById("movieDuration").value),
        year: parseInt(document.getElementById("movieYear").value),
        rating: parseFloat(document.getElementById("movieRating").value),
        description: document.getElementById("movieDescription").value,
        image: document.getElementById("movieImage").value,
        status: document.getElementById("movieStatus").value
    };

    if (currentEditingMovieId) {
        // Edit existing movie
        const movieIndex = movies.findIndex(m => m.id === currentEditingMovieId);
        if (movieIndex !== -1) {
            movies[movieIndex] = { ...movies[movieIndex], ...movieData };
            createToast("success", "Thành công", "Cập nhật phim thành công!");
        }
    } else {
        // Add new movie
        const newMovie = {
            id: Math.max(...movies.map(m => m.id), 0) + 1,
            ...movieData
        };
        movies.push(newMovie);
        createToast("success", "Thành công", "Thêm phim thành công!");
    }

    localStorage.setItem("movies", JSON.stringify(movies));
    closeMovieModal();
    renderDashboard();
    renderMoviesTable();
}

function closeMovieModal() {
    document.getElementById("movieModal").classList.remove("active");
    currentEditingMovieId = null;
}

function deleteMovie(movieId) {
    currentDeletingId = movieId;
    currentDeletingType = "movie";
    document.getElementById("deleteMessage").textContent = "Bạn có chắc chắn muốn xóa phim này?";
    document.getElementById("deleteModal").classList.add("active");
}

function closeDeleteModal() {
    document.getElementById("deleteModal").classList.remove("active");
}

function confirmDelete() {
    if (currentDeletingType === "movie") {
        movies = movies.filter(m => m.id !== currentDeletingId);
        localStorage.setItem("movies", JSON.stringify(movies));
        createToast("success", "Thành công", "Xóa phim thành công!");
        renderDashboard();
        renderMoviesTable();
    } else if (currentDeletingType === "user") {
        users = users.filter(u => u.id !== currentDeletingId);
        localStorage.setItem("users", JSON.stringify(users));
        createToast("success", "Thành công", "Xóa người dùng thành công!");
        renderDashboard();
        renderUsersTable();
    }
    closeDeleteModal();
}

function renderUsersTable() {
    const searchTerm = document.getElementById("searchUsers").value.toLowerCase();
    const filteredUsers = users.filter(u => 
        u.name.toLowerCase().includes(searchTerm) ||
        u.email.toLowerCase().includes(searchTerm)
    );

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const startIndex = (usersPage - 1) * itemsPerPage;
    const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

    const tableBody = document.getElementById("usersTableBody");
    tableBody.innerHTML = paginatedUsers.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td><span class="status-badge ${user.role === 'ADMIN' ? 'active' : 'inactive'}">${user.role}</span></td>
            <td>
                ${new Date(user.id).toLocaleDateString("vi-VN") || "N/A"}
            </td>
            <td>
                ${user.role === "USER" ? `<button class="btn-delete" onclick="deleteUser(${user.id})">
                    <i class="fas fa-trash"></i> Xóa
                </button>` : ""}
            </td>
        </tr>
    `).join("");

    renderPagination("usersPagination", usersPage, totalPages, (page) => {
        usersPage = page;
        renderUsersTable();
    });
}

function deleteUser(userId) {
    currentDeletingId = userId;
    currentDeletingType = "user";
    document.getElementById("deleteMessage").textContent = "Bạn có chắc chắn muốn xóa người dùng này?";
    document.getElementById("deleteModal").classList.add("active");
}

function renderPagination(elementId, currentPage, totalPages, callback) {
    const pagination = document.getElementById(elementId);
    let html = '';

    // Previous button
    if (currentPage > 1) {
        html += `<button onclick="callback(${currentPage - 1})">← Trước</button>`;
    } else {
        html += `<button disabled>← Trước</button>`;
    }

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            html += `<button class="active">${i}</button>`;
        } else {
            html += `<button onclick="callback(${i})">${i}</button>`;
        }
    }

    // Next button
    if (currentPage < totalPages) {
        html += `<button onclick="callback(${currentPage + 1})">Tiếp →</button>`;
    } else {
        html += `<button disabled>Tiếp →</button>`;
    }

    pagination.innerHTML = html;
    window.callback = callback;
}

// ==================== PROFILE MENU ====================
function toggleProfileMenu() {
    const menu = document.getElementById("profileMenu");
    menu.classList.toggle("active");
}

function showProfileInfo() {
    createToast("info", "Thông tin", `Đăng nhập với tài khoản: ${currentUser.email}`);
    toggleProfileMenu();
}

// ==================== LOGOUT ====================
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
        closeMovieModal();
        closeDeleteModal();
        closeLogoutModal();
        toggleProfileMenu();
    }
});

// ==================== MODAL CLOSE ON OUTSIDE CLICK ====================
document.addEventListener("click", (e) => {
    if (e.target.id === "movieModal") {
        closeMovieModal();
    }
    if (e.target.id === "deleteModal") {
        closeDeleteModal();
    }
    if (e.target.id === "logoutModal") {
        closeLogoutModal();
    }
});