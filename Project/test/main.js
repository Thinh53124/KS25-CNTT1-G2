// =================== DATA INIT ===================
const SEED_MOVIES = [
  {
    id: "m1",
    name: "Dune: Hành Tinh Cát",
    genre: "Khoa học viễn tưởng",
    duration: 166,
    releaseDate: "2024-03-01",
    status: "Đang chiếu",
    poster:
      "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=400&q=80",
    desc: "Hành trình của Paul Atreides đến hành tinh Arrakis, nơi duy nhất có gia vị quý giá nhất vũ trụ.",
    price: 95000,
  },
  {
    id: "m2",
    name: "The Batman",
    genre: "Hành động / Siêu anh hùng",
    duration: 176,
    releaseDate: "2024-02-15",
    status: "Đang chiếu",
    poster:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80",
    desc: "Batman điều tra tham nhũng ở Gotham City và bị đe dọa bởi kẻ phản diện Riddler.",
    price: 90000,
  },
  {
    id: "m3",
    name: "Spider-Man: No Way Home",
    genre: "Hành động / Siêu anh hùng",
    duration: 148,
    releaseDate: "2024-01-20",
    status: "Đang chiếu",
    poster:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&q=80",
    desc: "Peter Parker phải đối mặt với hậu quả khi danh tính Spider-Man bị tiết lộ.",
    price: 90000,
  },
  {
    id: "m4",
    name: "The Matrix Resurrections",
    genre: "Khoa học viễn tưởng",
    duration: 148,
    releaseDate: "2024-03-10",
    status: "Đang chiếu",
    poster:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80",
    desc: "Neo trở lại Matrix để khám phá sự thật về bản thân và tình yêu của mình.",
    price: 85000,
  },
  {
    id: "m5",
    name: "Avatar: Dòng Chảy Của Nước",
    genre: "Phiêu lưu / Khoa học viễn tưởng",
    duration: 192,
    releaseDate: "2024-04-01",
    status: "Sắp chiếu",
    poster:
      "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&q=80",
    desc: "Gia đình Sully khám phá vùng biển thần thánh của Pandora.",
    price: 100000,
  },
  {
    id: "m6",
    name: "Black Panther: Wakanda Forever",
    genre: "Hành động / Siêu anh hùng",
    duration: 161,
    releaseDate: "2023-12-01",
    status: "Đã chiếu",
    poster:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80",
    desc: "Wakanda đối mặt với kẻ thù mới sau sự ra đi của T'Challa.",
    price: 85000,
  },
];

const SEED_TICKETS = [
  {
    id: "VE001",
    customer: "Nguyễn Văn A",
    movieId: "m1",
    movieName: "Dune: Hành Tinh Cát",
    showtime: "19:00",
    seat: "A1",
    total: 95000,
    payment: "Chuyển khoản",
    status: "Đã thanh toán",
    createdAt: "2024-03-05",
  },
  {
    id: "VE002",
    customer: "Trần Thị B",
    movieId: "m2",
    movieName: "The Batman",
    showtime: "21:30",
    seat: "C5",
    total: 90000,
    payment: "Ví điện tử",
    status: "Đã thanh toán",
    createdAt: "2024-03-06",
  },
  {
    id: "VE003",
    customer: "Lê Minh C",
    movieId: "m3",
    movieName: "Spider-Man: No Way Home",
    showtime: "14:00",
    seat: "B3",
    total: 90000,
    payment: "Tiền mặt",
    status: "Chờ thanh toán",
    createdAt: "2024-03-07",
  },
  {
    id: "VE004",
    customer: "Phạm Thu D",
    movieId: "m4",
    movieName: "The Matrix Resurrections",
    showtime: "16:30",
    seat: "D7",
    total: 85000,
    payment: "Thẻ tín dụng",
    status: "Đã hủy",
    createdAt: "2024-03-08",
  },
  {
    id: "VE005",
    customer: "Hoàng Nam E",
    movieId: "m1",
    movieName: "Dune: Hành Tinh Cát",
    showtime: "09:00",
    seat: "E2",
    total: 95000,
    payment: "Chuyển khoản",
    status: "Đã thanh toán",
    createdAt: "2024-03-09",
  },
];

function initData() {
  if (!localStorage.getItem("rc_movies"))
    localStorage.setItem("rc_movies", JSON.stringify(SEED_MOVIES));
  if (!localStorage.getItem("rc_tickets"))
    localStorage.setItem("rc_tickets", JSON.stringify(SEED_TICKETS));
  if (!localStorage.getItem("rc_users")) {
    localStorage.setItem(
      "rc_users",
      JSON.stringify([
        {
          id: "u1",
          name: "Admin RikkeiEdu",
          email: "admin@rikkei.edu",
          password: "Admin@123456",
          role: "admin",
        },
      ]),
    );
  }
}

function getMovies() {
  return JSON.parse(localStorage.getItem("rc_movies") || "[]");
}
function saveMovies(d) {
  localStorage.setItem("rc_movies", JSON.stringify(d));
}
function getTickets() {
  return JSON.parse(localStorage.getItem("rc_tickets") || "[]");
}
function saveTickets(d) {
  localStorage.setItem("rc_tickets", JSON.stringify(d));
}
function getUsers() {
  return JSON.parse(localStorage.getItem("rc_users") || "[]");
}
function saveUsers(d) {
  localStorage.setItem("rc_users", JSON.stringify(d));
}
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("rc_current_user") || "null");
}
function setCurrentUser(u) {
  localStorage.setItem("rc_current_user", JSON.stringify(u));
}

// =================== NAVIGATION ===================
function navigate(page) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");
  window.scrollTo(0, 0);

  const user = getCurrentUser();
  if (page === "landing") renderLanding();
  if (page === "admin-movies") {
    if (!user) {
      navigate("login");
      return;
    }
    updateAdminUI();
    renderMovieStats();
    filterMovies();
  }
  if (page === "admin-tickets") {
    if (!user) {
      navigate("login");
      return;
    }
    updateAdminUI();
    renderTicketStats();
    filterTickets();
  }
}

function updateAdminUI() {
  const user = getCurrentUser();
  if (!user) return;
  ["adminName1", "adminName2"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = user.name;
  });
  ["adminAvatar1", "adminAvatar2"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = user.name.charAt(0).toUpperCase();
  });
}

// =================== TOAST ===================
function toast(msg, type = "success") {
  const c = document.getElementById("toastContainer");
  const t = document.createElement("div");
  t.className = `toast toast-${type}`;
  const icons = { success: "✓", error: "✕", info: "ℹ" };
  t.innerHTML = `<span>${icons[type] || "✓"}</span><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(() => {
    t.style.opacity = "0";
    t.style.transform = "translateX(100%)";
    t.style.transition = "all .3s";
    setTimeout(() => t.remove(), 300);
  }, 3500);
}

// =================== MODAL ===================
function openModal(id) {
  document.getElementById(id).classList.add("active");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

// =================== VALIDATION ===================
function validateField(val, errId, condition, msg) {
  const err = document.getElementById(errId);
  if (condition) {
    err.textContent = msg || err.textContent;
    err.classList.add("show");
    return false;
  }
  err.classList.remove("show");
  return true;
}

// =================== AUTH ===================
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const pass = document.getElementById("loginPassword").value;
  let ok = true;

  if (!email) {
    document.getElementById("loginEmail").classList.add("error");
    document.getElementById("loginEmailErr").textContent =
      "Email không được để trống";
    document.getElementById("loginEmailErr").classList.add("show");
    ok = false;
  } else {
    document.getElementById("loginEmail").classList.remove("error");
    document.getElementById("loginEmailErr").classList.remove("show");
  }
  if (!pass) {
    document.getElementById("loginPassword").classList.add("error");
    document.getElementById("loginPasswordErr").textContent =
      "Mật khẩu không được để trống";
    document.getElementById("loginPasswordErr").classList.add("show");
    ok = false;
  } else {
    document.getElementById("loginPassword").classList.remove("error");
    document.getElementById("loginPasswordErr").classList.remove("show");
  }

  if (!ok) return;

  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === pass);
  const globalErr = document.getElementById("loginGlobalErr");
  if (!user) {
    globalErr.textContent = "Email hoặc mật khẩu không đúng!";
    globalErr.classList.add("show");
    return;
  }
  globalErr.classList.remove("show");
  setCurrentUser(user);
  toast("Đăng nhập thành công! Chào mừng " + user.name);
  setTimeout(
    () => navigate(user.role === "admin" ? "admin-movies" : "landing"),
    500,
  );
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const pass = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;
  const agree = document.getElementById("regAgree").checked;
  let ok = true;
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passReg = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  if (!name) {
    document.getElementById("regNameErr").classList.add("show");
    document.getElementById("regName").classList.add("error");
    ok = false;
  } else {
    document.getElementById("regNameErr").classList.remove("show");
    document.getElementById("regName").classList.remove("error");
  }
  if (!email || !emailReg.test(email)) {
    document.getElementById("regEmailErr").classList.add("show");
    document.getElementById("regEmail").classList.add("error");
    ok = false;
  } else {
    document.getElementById("regEmailErr").classList.remove("show");
    document.getElementById("regEmail").classList.remove("error");
  }
  if (!passReg.test(pass)) {
    document.getElementById("regPasswordErr").classList.add("show");
    document.getElementById("regPassword").classList.add("error");
    ok = false;
  } else {
    document.getElementById("regPasswordErr").classList.remove("show");
    document.getElementById("regPassword").classList.remove("error");
  }
  if (pass !== confirm || !confirm) {
    document.getElementById("regConfirmErr").classList.add("show");
    document.getElementById("regConfirm").classList.add("error");
    ok = false;
  } else {
    document.getElementById("regConfirmErr").classList.remove("show");
    document.getElementById("regConfirm").classList.remove("error");
  }
  if (!agree) {
    document.getElementById("regAgreeErr").classList.add("show");
    ok = false;
  } else {
    document.getElementById("regAgreeErr").classList.remove("show");
  }

  if (!ok) return;

  const users = getUsers();
  if (users.find((u) => u.email === email)) {
    toast("Email này đã được đăng ký!", "error");
    return;
  }
  const newUser = {
    id: "u" + Date.now(),
    name,
    email,
    password: pass,
    role: "user",
  };
  users.push(newUser);
  saveUsers(users);
  toast("Đăng ký thành công! Vui lòng đăng nhập.");
  setTimeout(() => navigate("login"), 1000);
}

// =================== LOGOUT ===================
function showLogoutModal() {
  openModal("logoutModal");
}
function handleLogout() {
  setCurrentUser(null);
  closeModal("logoutModal");
  toast("Đã đăng xuất thành công", "info");
  setTimeout(() => navigate("login"), 500);
}

// =================== LANDING ===================
function renderLanding() {
  const user = getCurrentUser();
  const navRight = document.getElementById("navRight");
  if (user) {
    navRight.innerHTML = `<span style="font-size:13px;color:var(--text-muted);margin-right:6px">Xin chào, <b style="color:var(--text)">${user.name}</b></span>
      ${user.role === "admin" ? `<a href="#" onclick="navigate('admin-movies')" class="btn btn-ghost btn-sm">Admin</a>` : ""}
      <button onclick="showLogoutModal()" class="btn btn-outline btn-sm">Đăng xuất</button>`;
  } else {
    navRight.innerHTML = `<button onclick="navigate('login')" class="btn btn-outline btn-sm">Đăng nhập</button>
      <button onclick="navigate('register')" class="btn btn-red btn-sm">Đăng ký</button>`;
  }

  const movies = getMovies();
  const featured = movies.find((m) => m.status === "Đang chiếu") || movies[0];
  if (featured) {
    document.getElementById("heroBg").style.backgroundImage =
      `url('${featured.poster}')`;
    document.getElementById("heroContent").innerHTML = `
      <div class="hero-badge">🔥 Đang Chiếu</div>
      <div class="hero-title">${featured.name}</div>
      <div class="hero-meta">
        <div class="hero-meta-item">🎬 ${featured.genre}</div>
        <div class="hero-meta-item">⏱ ${featured.duration} phút</div>
        <div class="hero-meta-item">📅 ${formatDate(featured.releaseDate)}</div>
      </div>
      <div class="hero-desc">${featured.desc}</div>
      <div class="hero-actions">
        <button class="btn btn-red" onclick="navigate('login')" style="font-size:16px;padding:13px 28px">🎟 Đặt Vé Ngay</button>
        <button class="btn btn-ghost" style="font-size:16px;padding:13px 28px">▶ Xem Trailer</button>
      </div>`;
  }

  const showing = movies.filter((m) => m.status === "Đang chiếu").slice(0, 4);
  const grid = document.getElementById("landingMovies");
  if (showing.length === 0) {
    grid.innerHTML =
      '<div class="empty-state"><div class="empty-icon">🎭</div><p>Chưa có phim đang chiếu</p></div>';
    return;
  }
  grid.innerHTML = showing
    .map(
      (m) => `
    <div class="movie-card">
      <div class="movie-poster">
        <img src="${m.poster}" alt="${m.name}" onerror="this.src='https://via.placeholder.com/300x450/111/e50914?text=No+Image'">
        <div class="movie-poster-overlay">
          <button class="btn btn-red btn-sm w-full" onclick="navigate('login')" style="justify-content:center">🎟 Mua Vé</button>
        </div>
      </div>
      <div class="movie-info">
        <div class="movie-title">${m.name}</div>
        <div class="movie-meta">
          <div class="movie-meta-item">🎭 ${m.genre}</div>
          <div class="movie-meta-item">⏱ ${m.duration}p</div>
        </div>
      </div>
    </div>`,
    )
    .join("");

  // Navbar scroll
  window.addEventListener("scroll", () => {
    const nb = document.getElementById("mainNavbar");
    if (nb) nb.classList.toggle("scrolled", window.scrollY > 50);
  });
}

function handleMemberForm() {
  const name = document.getElementById("memberName").value.trim();
  const email = document.getElementById("memberEmail").value.trim();
  if (!name || !email) {
    toast("Vui lòng điền đầy đủ thông tin!", "error");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    toast("Email không đúng định dạng!", "error");
    return;
  }
  document.getElementById("memberName").value = "";
  document.getElementById("memberEmail").value = "";
  toast("Đăng ký thành viên thành công! Kiểm tra email của bạn.");
}

// =================== MOVIES ADMIN ===================
let movieFilter = "all",
  movieSearchTerm = "",
  currentMoviePage = 1,
  movieEditId = null;
const MOVIES_PER_PAGE = 5;

function renderMovieStats() {
  const movies = getMovies();
  const showing = movies.filter((m) => m.status === "Đang chiếu").length;
  const upcoming = movies.filter((m) => m.status === "Sắp chiếu").length;
  document.getElementById("movieStats").innerHTML = `
    <div class="stat-card"><div class="stat-icon red">🎬</div><div><div class="stat-value">${movies.length}</div><div class="stat-label">Tổng số phim</div></div></div>
    <div class="stat-card"><div class="stat-icon green">▶</div><div><div class="stat-value">${showing}</div><div class="stat-label">Đang chiếu</div></div></div>
    <div class="stat-card"><div class="stat-icon gold">📅</div><div><div class="stat-value">${upcoming}</div><div class="stat-label">Sắp chiếu</div></div></div>`;
}

function setMovieFilter(f, btn) {
  movieFilter = f;
  document
    .querySelectorAll("#page-admin-movies .filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  currentMoviePage = 1;
  filterMovies();
}

function filterMovies() {
  movieSearchTerm =
    document.getElementById("movieSearch")?.value.trim().toLowerCase() || "";
  let movies = getMovies();
  if (movieFilter !== "all")
    movies = movies.filter((m) => m.status === movieFilter);
  if (movieSearchTerm)
    movies = movies.filter((m) =>
      m.name.toLowerCase().includes(movieSearchTerm),
    );
  renderMoviesTable(movies);
}

function renderMoviesTable(movies) {
  const total = movies.length;
  const totalPages = Math.ceil(total / MOVIES_PER_PAGE) || 1;
  if (currentMoviePage > totalPages) currentMoviePage = 1;
  const start = (currentMoviePage - 1) * MOVIES_PER_PAGE;
  const page = movies.slice(start, start + MOVIES_PER_PAGE);

  const tbody = document.getElementById("moviesTableBody");
  if (!tbody) return;
  if (movies.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state"><div class="empty-icon">🎭</div><p>Không tìm thấy phim nào</p></div></td></tr>`;
  } else {
    tbody.innerHTML = page
      .map(
        (m, i) => `
      <tr>
        <td style="color:var(--text-muted)">${start + i + 1}</td>
        <td><img class="movie-row-poster" src="${m.poster}" alt="" onerror="this.src='https://via.placeholder.com/44x60/111/e50914?text=?'"></td>
        <td><div style="font-weight:600;max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${m.name}</div></td>
        <td style="color:var(--text-muted);font-size:13px">${m.genre}</td>
        <td style="color:var(--text-muted)">${m.duration} phút</td>
        <td style="color:var(--text-muted)">${formatDate(m.releaseDate)}</td>
        <td>${statusBadge(m.status)}</td>
        <td><div class="action-btns">
          <button class="action-edit" onclick="openEditMovie('${m.id}')">Sửa</button>
          <button class="action-delete" onclick="openDeleteMovie('${m.id}','${escHtml(m.name)}')">Xóa</button>
        </div></td>
      </tr>`,
      )
      .join("");
  }

  // Pagination
  const pag = document.getElementById("moviesPagination");
  if (!pag) return;
  pag.innerHTML = `<div class="page-info">Hiển thị ${Math.min(start + 1, total)}-${Math.min(start + MOVIES_PER_PAGE, total)} / ${total} phim</div>
    <div class="page-btns">
      <button class="page-btn" onclick="goMoviePage(${currentMoviePage - 1})" ${currentMoviePage === 1 ? "disabled" : ""}>‹</button>
      ${Array.from({ length: totalPages }, (_, i) => `<button class="page-btn${currentMoviePage === i + 1 ? " active" : ""}" onclick="goMoviePage(${i + 1})">${i + 1}</button>`).join("")}
      <button class="page-btn" onclick="goMoviePage(${currentMoviePage + 1})" ${currentMoviePage === totalPages ? "disabled" : ""}>›</button>
    </div>`;
}

function goMoviePage(p) {
  currentMoviePage = p;
  filterMovies();
}

function statusBadge(s) {
  const map = {
    "Đang chiếu": "green",
    "Sắp chiếu": "yellow",
    "Đã chiếu": "gray",
    "Đã hủy": "red",
    "Đã thanh toán": "green",
    "Chờ thanh toán": "yellow",
  };
  return `<span class="badge badge-${map[s] || "gray"}">${s}</span>`;
}

// Add Movie
function openAddMovie() {
  movieEditId = null;
  document.getElementById("movieModalTitle").textContent = "Thêm Phim Mới";
  document.getElementById("movieModalSubmitBtn").textContent = "Thêm phim";
  clearMovieForm();
  openModal("movieModal");
}

function openEditMovie(id) {
  const m = getMovies().find((m) => m.id === id);
  if (!m) return;
  movieEditId = id;
  document.getElementById("movieModalTitle").textContent = "Cập Nhật Phim";
  document.getElementById("movieModalSubmitBtn").textContent = "Lưu thay đổi";
  document.getElementById("mName").value = m.name;
  document.getElementById("mGenre").value = m.genre;
  document.getElementById("mDuration").value = m.duration;
  document.getElementById("mReleaseDate").value = m.releaseDate;
  document.getElementById("mStatus").value = m.status;
  document.getElementById("mPrice").value = m.price || 85000;
  document.getElementById("mPoster").value = m.poster;
  document.getElementById("mDesc").value = m.desc;
  clearMovieFormErrors();
  openModal("movieModal");
}

function clearMovieForm() {
  ["mName", "mGenre", "mDuration", "mReleaseDate", "mPoster", "mDesc"].forEach(
    (id) => (document.getElementById(id).value = ""),
  );
  document.getElementById("mStatus").value = "";
  document.getElementById("mPrice").value = "85000";
  clearMovieFormErrors();
}

function clearMovieFormErrors() {
  [
    "mNameErr",
    "mGenreErr",
    "mDurationErr",
    "mReleaseDateErr",
    "mStatusErr",
    "mPosterErr",
    "mDescErr",
  ].forEach((id) => document.getElementById(id).classList.remove("show"));
  [
    "mName",
    "mGenre",
    "mDuration",
    "mReleaseDate",
    "mStatus",
    "mPoster",
    "mDesc",
  ].forEach((id) => document.getElementById(id).classList.remove("error"));
}

function handleMovieSubmit() {
  const name = document.getElementById("mName").value.trim();
  const genre = document.getElementById("mGenre").value.trim();
  const duration = parseInt(document.getElementById("mDuration").value);
  const releaseDate = document.getElementById("mReleaseDate").value;
  const status = document.getElementById("mStatus").value;
  const poster = document.getElementById("mPoster").value.trim();
  const desc = document.getElementById("mDesc").value.trim();
  const price = parseInt(document.getElementById("mPrice").value) || 85000;

  let ok = true;
  const v = (val, errId, cond, msg) => {
    const e = document.getElementById(errId);
    if (cond) {
      e.classList.add("show");
      ok = false;
    } else {
      e.classList.remove("show");
    }
  };
  v(name, "mNameErr", !name);
  v(genre, "mGenreErr", !genre);
  v(duration, "mDurationErr", !duration || duration < 1);
  v(releaseDate, "mReleaseDateErr", !releaseDate);
  v(status, "mStatusErr", !status);
  v(
    poster,
    "mPosterErr",
    !poster || (!poster.startsWith("http") && !poster.startsWith("/")),
  );
  v(desc, "mDescErr", !desc);
  if (!ok) return;

  const movies = getMovies();
  if (movieEditId) {
    const idx = movies.findIndex((m) => m.id === movieEditId);
    if (idx > -1)
      movies[idx] = {
        ...movies[idx],
        name,
        genre,
        duration,
        releaseDate,
        status,
        poster,
        desc,
        price,
      };
    saveMovies(movies);
    toast("Cập nhật phim thành công!");
  } else {
    const newMovie = {
      id: "m" + Date.now(),
      name,
      genre,
      duration,
      releaseDate,
      status,
      poster,
      desc,
      price,
    };
    movies.push(newMovie);
    saveMovies(movies);
    toast("Thêm phim mới thành công!");
  }
  closeModal("movieModal");
  renderMovieStats();
  filterMovies();
}

let deleteMovieId = null;
function openDeleteMovie(id, name) {
  deleteMovieId = id;
  document.getElementById("deleteMovieName").textContent = name;
  openModal("deleteMovieModal");
}
function confirmDeleteMovie() {
  if (!deleteMovieId) return;
  const movies = getMovies().filter((m) => m.id !== deleteMovieId);
  saveMovies(movies);
  closeModal("deleteMovieModal");
  toast("Đã xóa phim thành công!");
  renderMovieStats();
  filterMovies();
}

// =================== TICKETS ADMIN ===================
let ticketFilter = "all",
  ticketSearchTerm = "",
  currentTicketPage = 1,
  ticketEditId = null;
const TICKETS_PER_PAGE = 5;

function renderTicketStats() {
  const tickets = getTickets();
  const paid = tickets.filter((t) => t.status === "Đã thanh toán");
  const revenue = paid.reduce((s, t) => s + t.total, 0);
  const pending = tickets.filter((t) => t.status === "Chờ thanh toán").length;
  document.getElementById("ticketStats").innerHTML = `
    <div class="stat-card"><div class="stat-icon red">🎫</div><div><div class="stat-value">${tickets.length}</div><div class="stat-label">Tổng vé</div></div></div>
    <div class="stat-card"><div class="stat-icon green">💰</div><div><div class="stat-value">${formatMoney(revenue)}</div><div class="stat-label">Doanh thu</div></div></div>
    <div class="stat-card"><div class="stat-icon gold">⏳</div><div><div class="stat-value">${pending}</div><div class="stat-label">Chờ thanh toán</div></div></div>`;
}

function setTicketFilter(f, btn) {
  ticketFilter = f;
  document
    .querySelectorAll("#page-admin-tickets .filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  currentTicketPage = 1;
  filterTickets();
}

function filterTickets() {
  ticketSearchTerm =
    document.getElementById("ticketSearch")?.value.trim().toLowerCase() || "";
  let tickets = getTickets();
  if (ticketFilter !== "all")
    tickets = tickets.filter((t) => t.status === ticketFilter);
  if (ticketSearchTerm)
    tickets = tickets.filter(
      (t) =>
        t.id.toLowerCase().includes(ticketSearchTerm) ||
        t.customer.toLowerCase().includes(ticketSearchTerm),
    );
  renderTicketsTable(tickets);
}

function renderTicketsTable(tickets) {
  const total = tickets.length;
  const totalPages = Math.ceil(total / TICKETS_PER_PAGE) || 1;
  if (currentTicketPage > totalPages) currentTicketPage = 1;
  const start = (currentTicketPage - 1) * TICKETS_PER_PAGE;
  const page = tickets.slice(start, start + TICKETS_PER_PAGE);

  const tbody = document.getElementById("ticketsTableBody");
  if (!tbody) return;
  if (tickets.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9"><div class="empty-state"><div class="empty-icon">🎫</div><p>Không tìm thấy vé nào</p></div></td></tr>`;
  } else {
    tbody.innerHTML = page
      .map(
        (t) => `
      <tr>
        <td><span style="font-family:'Bebas Neue';color:var(--red);font-size:15px">${t.id}</span></td>
        <td style="font-weight:600">${t.customer}</td>
        <td style="font-size:13px;color:var(--text-muted);max-width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t.movieName}</td>
        <td style="color:var(--text-muted)">${t.showtime}</td>
        <td><span style="background:var(--bg3);padding:3px 8px;border-radius:4px;font-size:13px;font-weight:600">${t.seat}</span></td>
        <td style="color:var(--gold);font-weight:600">${formatMoney(t.total)}</td>
        <td style="font-size:13px;color:var(--text-muted)">${t.payment}</td>
        <td>${statusBadge(t.status)}</td>
        <td><div class="action-btns">
          <button class="action-edit" onclick="openEditTicket('${t.id}')">Sửa</button>
          ${t.status !== "Đã hủy" ? `<button class="action-delete" onclick="openCancelTicket('${t.id}')">Hủy</button>` : '<span style="font-size:12px;color:var(--text-dim)">Đã hủy</span>'}
        </div></td>
      </tr>`,
      )
      .join("");
  }

  const pag = document.getElementById("ticketsPagination");
  if (!pag) return;
  pag.innerHTML = `<div class="page-info">Hiển thị ${Math.min(start + 1, total)}-${Math.min(start + TICKETS_PER_PAGE, total)} / ${total} vé</div>
    <div class="page-btns">
      <button class="page-btn" onclick="goTicketPage(${currentTicketPage - 1})" ${currentTicketPage === 1 ? "disabled" : ""}>‹</button>
      ${Array.from({ length: totalPages }, (_, i) => `<button class="page-btn${currentTicketPage === i + 1 ? " active" : ""}" onclick="goTicketPage(${i + 1})">${i + 1}</button>`).join("")}
      <button class="page-btn" onclick="goTicketPage(${currentTicketPage + 1})" ${currentTicketPage === totalPages ? "disabled" : ""}>›</button>
    </div>`;
}

function goTicketPage(p) {
  currentTicketPage = p;
  filterTickets();
}

function openAddTicket() {
  ticketEditId = null;
  document.getElementById("ticketModalTitle").textContent = "Thêm Vé Mới";
  document.getElementById("ticketModalSubmitBtn").textContent = "Thêm vé";
  clearTicketForm();
  populateMovieSelect();
  openModal("ticketModal");
}

function openEditTicket(id) {
  const t = getTickets().find((t) => t.id === id);
  if (!t) return;
  ticketEditId = id;
  document.getElementById("ticketModalTitle").textContent = "Cập Nhật Vé";
  document.getElementById("ticketModalSubmitBtn").textContent = "Lưu thay đổi";
  clearTicketForm();
  populateMovieSelect();
  document.getElementById("tCustomer").value = t.customer;
  document.getElementById("tMovie").value = t.movieId;
  document.getElementById("tShowtime").value = t.showtime;
  document.getElementById("tSeat").value = t.seat;
  document.getElementById("tPayment").value = t.payment;
  document.getElementById("tStatus").value = t.status;
  document.getElementById("tTotal").value = formatMoney(t.total);
  openModal("ticketModal");
}

function clearTicketForm() {
  ["tCustomer", "tSeat"].forEach(
    (id) => (document.getElementById(id).value = ""),
  );
  ["tMovie", "tShowtime", "tPayment"].forEach(
    (id) => (document.getElementById(id).value = ""),
  );
  document.getElementById("tStatus").value = "Chờ thanh toán";
  document.getElementById("tTotal").value = "";
  [
    "tCustomerErr",
    "tMovieErr",
    "tShowtimeErr",
    "tSeatErr",
    "tPaymentErr",
  ].forEach((id) => document.getElementById(id).classList.remove("show"));
}

function populateMovieSelect() {
  const movies = getMovies().filter((m) => m.status === "Đang chiếu");
  const sel = document.getElementById("tMovie");
  sel.innerHTML =
    '<option value="">-- Chọn phim đang chiếu --</option>' +
    movies
      .map(
        (m) =>
          `<option value="${m.id}" data-price="${m.price || 85000}">${m.name}</option>`,
      )
      .join("");
}

function updateShowtimes() {
  const sel = document.getElementById("tMovie");
  const opt = sel.options[sel.selectedIndex];
  const price = opt ? opt.dataset.price : 0;
  if (price)
    document.getElementById("tTotal").value = formatMoney(parseInt(price));
  else document.getElementById("tTotal").value = "";
}

function handleTicketSubmit() {
  const customer = document.getElementById("tCustomer").value.trim();
  const movieId = document.getElementById("tMovie").value;
  const showtime = document.getElementById("tShowtime").value;
  const seat = document.getElementById("tSeat").value.trim();
  const payment = document.getElementById("tPayment").value;
  const status = document.getElementById("tStatus").value;

  let ok = true;
  const v = (errId, cond) => {
    const e = document.getElementById(errId);
    if (cond) {
      e.classList.add("show");
      ok = false;
    } else {
      e.classList.remove("show");
    }
  };
  v("tCustomerErr", !customer);
  v("tMovieErr", !movieId);
  v("tShowtimeErr", !showtime);
  v("tSeatErr", !seat);
  v("tPaymentErr", !payment);
  if (!ok) return;

  const movies = getMovies();
  const movie = movies.find((m) => m.id === movieId);
  const total = movie?.price || 85000;

  const tickets = getTickets();
  if (ticketEditId) {
    const idx = tickets.findIndex((t) => t.id === ticketEditId);
    if (idx > -1)
      tickets[idx] = {
        ...tickets[idx],
        customer,
        movieId,
        movieName: movie?.name || "",
        showtime,
        seat,
        payment,
        status,
        total,
      };
    saveTickets(tickets);
    toast("Cập nhật vé thành công!");
  } else {
    const seatTaken = tickets.find(
      (t) =>
        t.movieId === movieId &&
        t.showtime === showtime &&
        t.seat === seat &&
        t.status !== "Đã hủy",
    );
    if (seatTaken) {
      toast("Ghế này đã được đặt cho suất chiếu này!", "error");
      return;
    }
    const newTicket = {
      id: "VE" + String(tickets.length + 1).padStart(3, "0"),
      customer,
      movieId,
      movieName: movie?.name || "",
      showtime,
      seat,
      payment,
      status,
      total,
      createdAt: new Date().toISOString().split("T")[0],
    };
    tickets.push(newTicket);
    saveTickets(tickets);
    toast("Thêm vé mới thành công!");
  }
  closeModal("ticketModal");
  renderTicketStats();
  filterTickets();
}

let cancelTicketId = null;
function openCancelTicket(id) {
  cancelTicketId = id;
  document.getElementById("cancelTicketId").textContent = id;
  openModal("cancelTicketModal");
}
function confirmCancelTicket() {
  if (!cancelTicketId) return;
  const tickets = getTickets();
  const idx = tickets.findIndex((t) => t.id === cancelTicketId);
  if (idx > -1) tickets[idx].status = "Đã hủy";
  saveTickets(tickets);
  closeModal("cancelTicketModal");
  toast("Đã hủy vé thành công!", "info");
  renderTicketStats();
  filterTickets();
}

// =================== UTILS ===================
function formatDate(d) {
  if (!d) return "—";
  const dt = new Date(d);
  return dt.toLocaleDateString("vi-VN");
}
function formatMoney(n) {
  return n ? n.toLocaleString("vi-VN") + "đ" : "—";
}
function escHtml(s) {
  const d = document.createElement("div");
  d.appendChild(document.createTextNode(s));
  return d.innerHTML;
}

// Click outside modal to close
document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("active");
  });
});

// Init
initData();
renderLanding();
navigate("login");
