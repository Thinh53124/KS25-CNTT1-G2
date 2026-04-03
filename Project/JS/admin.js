const KEY = "rikkei_movies";
let movies = JSON.parse(localStorage.getItem(KEY)) || [];
let currentPage = 1;
let perPage = 5;
let currentFilter = "all";
let currentSearch = "";
let editingId = null;
let deleteMovieId = null;

if (movies.length === 0) {
  const currentDate = new Date();

  movies = [
    {
      id: 1,
      name: "Dune: Part Two",
      genre: "Hành động, Khoa học viễn tưởng",
      duration: 166,
      releaseDate: "2024-03-01",
      status: "Đã chiếu",
      price: 90000,
      poster: "../assets/img/duneCard.jpg",
      desc: "Hành trình sử thi tiếp diễn",
    },
    {
      id: 2,
      name: "Kung Fu Panda 4",
      genre: "Hoạt hình, Hành động",
      duration: 94,
      releaseDate: "2024-03-08",
      status: "Đã chiếu",
      price: 75000,
      poster: "../assets/img/pandaCard.jpg",
      desc: "Po trở lại",
    },
    {
      id: 3,
      name: "Godzilla x Kong",
      genre: "Hành động, Phiêu lưu",
      duration: 115,
      releaseDate: "2024-03-29",
      status: "Đã chiếu",
      price: 95000,
      poster: "../assets/img/godzillaCard.jpg",
      desc: "Cuộc chiến của hai quái vật",
    },
    {
      id: 4,
      name: "Mai",
      genre: "Tình cảm, Chính kịch",
      duration: 131,
      releaseDate: "2024-02-10",
      status: "Đã chiếu",
      price: 80000,
      poster: "../assets/img/maiCard.jpg",
      desc: "Tình yêu tuyệt vời",
    },
    {
      id: 5,
      name: "Exhuma",
      genre: "Kinh dị, Tâm lý",
      duration: 134,
      releaseDate: "2024-03-15",
      status: "Đã chiếu",
      price: 85000,
      poster: "../assets/img/exhumaCard.jpg",
      desc: "Bí mật bị chôn dưới lòng đất",
    },
    {
      id: 6,
      name: "Super Mario Thiên Hà",
      genre: "Hoạt hình, Hành động, Phiêu lưu",
      duration: 92,
      releaseDate: "2026-04-01",
      status: "Đang chiếu",
      price: 75000,
      poster: "../assets/img/marioCard.jpg",
      desc: "Mario phiêu lưu trong thiên hà",
    },
    {
      id: 7,
      name: "Thunderbolts",
      genre: "Hành động, Siêu anh hùng",
      duration: 140,
      releaseDate: "2025-05-02",
      status: "Đang chiếu",
      price: 115000,
      poster: "../assets/img/thunderBoltsCard.jpeg",
      desc: "Biệt đội phản anh hùng thực hiện nhiệm vụ nguy hiểm.",
    },
    {
      id: 8,
      name: "Snow White",
      genre: "Gia đình, Giả tưởng",
      duration: 120,
      releaseDate: "2025-03-21",
      status: "Đang chiếu",
      price: 90000,
      poster: "../assets/img/snowWhiteCard.jpg",
      desc: "Phiên bản live-action của nàng Bạch Tuyết.",
    },
    {
      id: 9,
      name: "Minecraft",
      genre: "Phiêu lưu, Gia đình",
      duration: 110,
      releaseDate: "2025-04-04",
      status: "Đang chiếu",
      price: 95000,
      poster: "../assets/img/minecraftCard.webp",
      desc: "Thế giới Minecraft bước lên màn ảnh rộng.",
    },
    {
      id: 10,
      name: "Doraemon: Nobita's Earth Symphony",
      genre: "Hoạt hình, Gia đình",
      duration: 115,
      releaseDate: "2024-05-24",
      status: "Đang chiếu",
      price: 75000,
      poster: "../assets/img/doraemonCard.webp",
      desc: "Doraemon và Nobita trong chuyến phiêu lưu âm nhạc.",
    },
    {
      id: 11,
      name: "Detective Conan: The Million-dollar Pentagram",
      genre: "Hoạt hình, Trinh thám",
      duration: 110,
      releaseDate: "2024-04-12",
      status: "Đang chiếu",
      price: 80000,
      poster: "../assets/img/conanCard.webp",
      desc: "Vụ án mới liên quan đến kho báu bí ẩn.",
    },
    {
      id: 12,
      name: "The First Omen",
      genre: "Kinh dị",
      duration: 119,
      releaseDate: "2024-04-05",
      status: "Đang chiếu",
      price: 85000,
      poster: "../assets/img/omenCard.webp",
      desc: "Nguồn gốc thế lực tà ác được hé lộ.",
    },
    {
      id: 13,
      name: "Civil War",
      genre: "Hành động, Chính kịch",
      duration: 109,
      releaseDate: "2024-04-12",
      status: "Đang chiếu",
      price: 90000,
      poster: "../assets/img/civilWarCard.jpg",
      desc: "Nước Mỹ rơi vào nội chiến trong tương lai.",
    },
    {
      id: 14,
      name: "Abigail",
      genre: "Kinh dị, Giật gân",
      duration: 109,
      releaseDate: "2024-04-19",
      status: "Đang chiếu",
      price: 85000,
      poster: "../assets/img/abigailCard.avif",
      desc: "Con tin hóa ra là thứ đáng sợ hơn.",
    },
    {
      id: 15,
      name: "The Fall Guy",
      genre: "Hành động, Hài",
      duration: 126,
      releaseDate: "2024-05-03",
      status: "Đang chiếu",
      price: 95000,
      poster: "../assets/img/fallGuyCard.jpg",
      desc: "Cascadeur bị cuốn vào âm mưu nguy hiểm.",
    },
    {
      id: 16,
      name: "Michael",
      genre: "Âm nhạc, Tiểu sử",
      duration: 138,
      releaseDate: "2026-04-26",
      status: "Sắp chiếu",
      price: 100000,
      poster: "../assets/img/michaelCard.webp",
      desc: "Cuộc đời của Michael Jackson",
    },
    {
      id: 17,
      name: "Đại Tiệc Trăng Máu 8",
      genre: "Kinh dí, Hài",
      duration: 110,
      releaseDate: "2026-04-30",
      status: "Sắp chiếu",
      price: 85000,
      poster: "../assets/img/tiecTrangMauCard.jpg",
      desc: "Tiệc tối lạnh người",
    },
    {
      id: 18,
      name: "Heo Năm Móng",
      genre: "Kinh dí, Chính kịch, Việt Nam",
      duration: 105,
      releaseDate: "2026-04-30",
      status: "Sắp chiếu",
      price: 80000,
      poster: "../assets/img/heoNamNgonCard.jpg",
      desc: "Bí ẩn trong rừng sâu",
    },
    {
      id: 19,
      name: "Toy Story 5",
      genre: "Hoạt hình, Gia đình, Hành động",
      duration: 95,
      releaseDate: "2026-05-15",
      status: "Sắp chiếu",
      price: 80000,
      poster: "../assets/img/toyStoryCard.webp",
      desc: "Cuộc phiêu lưu tiếp tục của đồ chơi",
    },
    {
      id: 20,
      name: "Moana 2",
      genre: "Hoạt hình, Phiêu lưu, Âm nhạc",
      duration: 114,
      releaseDate: "2026-06-20",
      status: "Sắp chiếu",
      price: 75000,
      poster: "../assets/img/moanaCard.webp",
      desc: "Hành trình trên biển tiếp tục",
    },
    {
      id: 21,
      name: "Frozen 3 - Nữ Hoàng Băng Giá 3",
      genre: "Hoạt hình, Gia đình, Âm nhạc",
      duration: 120,
      releaseDate: "2026-07-10",
      status: "Sắp chiếu",
      price: 80000,
      poster: "../assets/img/frozen.avif",
      desc: "Elsa và Anna trở lại",
    },
    {
      id: 22,
      name: "Avatar 4",
      genre: "Khoa học viễn tưởng, Hành động, Phiêu lưu",
      duration: 185,
      releaseDate: "2026-12-18",
      status: "Sắp chiếu",
      price: 130000,
      poster: "../assets/img/avatarCard.webp",
      desc: "Thế giới Pandora lần thứ tư",
    },
    {
      id: 23,
      name: "Thám Tử Kiên 2: Lời Nguyền Hoàng Kim",
      genre: "Chính kịch, Hành động, Việt Nam",
      duration: 115,
      releaseDate: "2026-05-30",
      status: "Sắp chiếu",
      price: 85000,
      poster: "../assets/img/kienCard.jpg",
      desc: "Phần tiếp của thám tử Kiên",
    },
    {
      id: 24,
      name: "Avengers: Ngày Tận Thế",
      genre: "Siêu anh hùng, Hành động, Khoa học viễn tưởng",
      duration: 180,
      releaseDate: "2026-11-06",
      status: "Sắp chiếu",
      price: 125000,
      poster: "../assets/img/avengerCard.jpg",
      desc: "Cuộc chiến cuối cùng của Avengers",
    },
  ];

  function updateMovieStatus() {
    const today = new Date();

    movies.forEach((movie, index) => {
      if (index > 4) {
        const releaseDate = new Date(movie.releaseDate);
        const endDate = new Date(releaseDate);
        endDate.setDate(endDate.getDate() + 30);

        if (today < releaseDate) {
          movie.status = "Sắp chiếu";
        } else if (today <= endDate) {
          movie.status = "Đang chiếu";
        } else {
          movie.status = "Đã chiếu";
        }
      }
    });
  }

  updateMovieStatus();
  setInterval(updateMovieStatus, 60000);

  saveMovies();
}

// ============ VALIDATION ============
function validateMovie(data) {
  const errors = [];

  if (!data.name || data.name.trim() === "") {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Tên phim</strong> không được để trống",
    );
  }

  if (!data.genre || data.genre.trim() === "") {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Thể loại</strong> không được để trống",
    );
  }

  if (!data.duration || isNaN(data.duration) || data.duration < 1) {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Thời lượng</strong> không được để trống và phải hợp lệ (> 0 phút)",
    );
  }

  if (!data.releaseDate) {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Ngày khởi chiếu</strong> không được để trống",
    );
  } else {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(data.releaseDate)) {
      errors.push(
        "<i class='fas fa-times'></i> <strong>Ngày khởi chiếu</strong> không hợp lệ",
      );
    }
  }

  if (!data.status || data.status === "") {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Trạng thái phim</strong> không được để trống",
    );
  }

  if (!data.price || isNaN(data.price) || data.price < 1) {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Giá vé</strong> không được để trống và phải hợp lệ (> 0 VNĐ)",
    );
  }

  if (!data.poster || data.poster.trim() === "") {
    errors.push(
      "<i class='fas fa-times'></i> <strong>URL ảnh bìa</strong> không được để trống",
    );
  } else {
    const isBase64 = data.poster.startsWith("data:image/");
    const isUrl =
      data.poster.startsWith("http://") ||
      data.poster.startsWith("https://") ||
      data.poster.startsWith("../");

    if (!isBase64 && !isUrl) {
      errors.push(
        "<i class='fas fa-times'></i> <strong>URL ảnh bìa</strong> không hợp lệ (Phải là link hoặc ảnh tải lên)",
      );
    }
  }

  if (!data.desc || data.desc.trim() === "") {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Mô tả phim</strong> không được để trống",
    );
  }

  return errors;
}

function showValidationModal(errors) {
  const errorsList = document.getElementById("validationErrors");
  errorsList.innerHTML = errors.map((error) => `<li>${error}</li>`).join("");
  document.getElementById("validationModal").style.display = "flex";
}

function closeValidationModal() {
  document.getElementById("validationModal").style.display = "none";
}

// ============ CRUD OPERATIONS ============
function saveMovies() {
  localStorage.setItem(KEY, JSON.stringify(movies));
  updateFilterCounts();
}

function updateFilterCounts() {
  const all = movies.length;
  const showing = movies.filter((m) => m.status === "Đang chiếu").length;
  const coming = movies.filter((m) => m.status === "Sắp chiếu").length;
  const ended = movies.filter((m) => m.status === "Đã chiếu").length;

  document.getElementById("countAll").textContent = all;
  document.getElementById("countShowing").textContent = showing;
  document.getElementById("countComing").textContent = coming;
  document.getElementById("countEnded").textContent = ended;
}

function getFilteredMovies() {
  let filtered = movies;
  if (currentFilter !== "all") {
    filtered = filtered.filter((m) => m.status === currentFilter);
  }
  if (currentSearch) {
    filtered = filtered.filter((m) =>
      m.name.toLowerCase().includes(currentSearch.toLowerCase()),
    );
  }
  return filtered;
}

function renderTable() {
  const filtered = getFilteredMovies();
  const container = document.getElementById("tableContainer");

  if (filtered.length === 0) {
    container.innerHTML =
      '<div style="text-align: center; padding: 40px; color: #999;"><i class="fas fa-inbox" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>Không tìm thấy phim nào</div>';
    document.getElementById("itemStart").textContent = "0";
    document.getElementById("itemEnd").textContent = "0";
    document.getElementById("totalItems").textContent = "0";
    renderPagination(filtered);
    return;
  }

  let html = `
    <div class="table-head">
      <span>ẢNH BÌA</span>
      <span>TÊN PHIM</span>
      <span>THỂ LOẠI</span>
      <span>THỜI LƯỢNG</span>
      <span>NGÀY KHỞI CHIẾU</span>
      <span>TRẠNG THÁI</span>
      <span>THAO TÁC</span>
    </div>
  `;

  let start = (currentPage - 1) * perPage;
  let data = filtered.slice(start, start + perPage);

  data.forEach((m) => {
    const genreTags = m.genre
      .split(",")
      .map((g) => `<div class="tag">${g.trim()}</div>`)
      .join("");

    html += `
      <div class="table-row">
        <img src="${m.poster}" alt="${m.name}" onerror="this.src='https://via.placeholder.com/60x75?text=${m.name.substring(0, 3)}'">
        <div class="movie-info">
          <div class="movie-title">${m.name}</div>
          <div class="movie-subtitle">${m.desc.substring(0, 50)}...</div>
        </div>
        <div class="genre-tags">${genreTags}</div>
        <div class="movie-durations">${m.duration} phút</div>
        <div class="release-date">${formatDate(m.releaseDate)}</div>
        <div class="status ${getStatusClass(m.status)}">${m.status}</div>
        <div class="actions-icon">
          <button onclick="openEditModal(${m.id})" title="Sửa"><i class="fa-solid fa-pen"></i></button>
          <button onclick="showDeleteModal(${m.id})" title="Xóa"><i class="fa-regular fa-circle-xmark"></i></button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  document.getElementById("itemStart").textContent = start + 1;
  document.getElementById("itemEnd").textContent = Math.min(
    start + perPage,
    filtered.length,
  );
  document.getElementById("totalItems").textContent = filtered.length;

  renderPagination(filtered);
}

function renderPagination(filtered) {
  const total = Math.ceil(filtered.length / perPage);
  const controls = document.getElementById("paginationControls");
  controls.innerHTML = "";

  if (total <= 1) return;

  const prev = document.createElement("button");
  prev.className = "pagination-btn pagination-prev";
  prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
  prev.disabled = currentPage === 1;
  prev.onclick = function () {
    if (currentPage > 1) {
      currentPage--;
      renderTable();
      window.scrollTo(0, 0);
    }
  };
  controls.appendChild(prev);

  if (currentPage > 3) {
    const first = document.createElement("button");
    first.className = "pagination-btn";
    first.textContent = "1";
    first.onclick = function () {
      currentPage = 1;
      renderTable();
      window.scrollTo(0, 0);
    };
    controls.appendChild(first);

    if (currentPage > 4) {
      const dots = document.createElement("span");
      dots.className = "dots";
      dots.textContent = "...";
      controls.appendChild(dots);
    }
  }

  const start = Math.max(1, currentPage - 1);
  const end = Math.min(total, currentPage + 1);

  for (let i = start; i <= end; i++) {
    const btn = document.createElement("button");
    btn.className = "pagination-btn";
    if (i === currentPage) btn.classList.add("active");
    btn.textContent = i;
    btn.onclick = function () {
      currentPage = i;
      renderTable();
      window.scrollTo(0, 0);
    };
    controls.appendChild(btn);
  }

  if (currentPage < total - 2) {
    if (currentPage < total - 3) {
      const dots = document.createElement("span");
      dots.className = "dots";
      dots.textContent = "...";
      controls.appendChild(dots);
    }

    const last = document.createElement("button");
    last.className = "pagination-btn";
    last.textContent = total;
    last.onclick = function () {
      currentPage = total;
      renderTable();
      window.scrollTo(0, 0);
    };
    controls.appendChild(last);
  }

  const next = document.createElement("button");
  next.className = "pagination-btn pagination-next";
  next.innerHTML = '<i class="fas fa-chevron-right"></i>';
  next.disabled = currentPage === total;
  next.onclick = function () {
    if (currentPage < total) {
      currentPage++;
      renderTable();
      window.scrollTo(0, 0);
    }
  };
  controls.appendChild(next);
}

function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}

function getStatusClass(status) {
  if (status === "Đang chiếu") return "showing";
  if (status === "Sắp chiếu") return "coming";
  if (status === "Đã chiếu") return "ended";
  return "";
}

function searchMovies(query) {
  currentSearch = query;
  currentPage = 1;
  renderTable();
}

function filterMovies(status, btn) {
  currentFilter = status;
  currentPage = 1;
  renderTable();

  document.querySelectorAll(".filter button").forEach((b) => {
    b.classList.remove("active");
  });
  btn.classList.add("active");
}

// ============ ADD MOVIE ============
function openAddModal() {
  clearAddForm();
  document.getElementById("addModal").style.display = "flex";
}

function closeAddModal() {
  document.getElementById("addModal").style.display = "none";
  clearAddForm();
}

function clearAddForm() {
  document.getElementById("addName").value = "";
  document.getElementById("addGenre").value = "";
  document.getElementById("addDuration").value = "";
  document.getElementById("addDate").value = "";
  document.getElementById("addStatus").value = "";
  document.getElementById("addPrice").value = "";
  document.getElementById("addPoster").value = "";
  document.getElementById("addDesc").value = "";
}

function addMovie() {
  const formData = {
    name: document.getElementById("addName").value.trim(),
    genre: document.getElementById("addGenre").value.trim(),
    duration: document.getElementById("addDuration").value,
    releaseDate: document.getElementById("addDate").value,
    status: document.getElementById("addStatus").value,
    price: document.getElementById("addPrice").value,
    poster: document.getElementById("addPoster").value.trim(),
    desc: document.getElementById("addDesc").value.trim(),
  };

  const errors = validateMovie(formData);
  if (errors.length > 0) {
    showValidationModal(errors);
    return;
  }

  const movie = {
    id: Date.now(),
    ...formData,
    duration: parseInt(formData.duration),
    price: parseInt(formData.price),
  };

  movies.push(movie);
  saveMovies();
  closeAddModal();
  currentPage = 1;
  currentFilter = "all";
  currentSearch = "";
  renderTable();
  showAlert("Thêm phim thành công!", "success");
}

// ============ EDIT MOVIE ============
function openEditModal(id) {
  const movie = movies.find((m) => m.id === id);
  if (!movie) return;

  editingId = id;
  document.getElementById("editName").value = movie.name;
  document.getElementById("editGenre").value = movie.genre;
  document.getElementById("editDuration").value = movie.duration;
  document.getElementById("editDate").value = movie.releaseDate;
  document.getElementById("editStatus").value = movie.status;
  document.getElementById("editPrice").value = movie.price;
  document.getElementById("editPoster").value = movie.poster;
  document.getElementById("editDesc").value = movie.desc;

  document.getElementById("editModal").style.display = "flex";
}

function closeEditModal() {
  document.getElementById("editModal").style.display = "none";
  editingId = null;
}

function updateMovie() {
  const movie = movies.find((m) => m.id === editingId);
  if (!movie) return;

  const formData = {
    name: document.getElementById("editName").value.trim(),
    genre: document.getElementById("editGenre").value.trim(),
    duration: document.getElementById("editDuration").value,
    releaseDate: document.getElementById("editDate").value,
    status: document.getElementById("editStatus").value,
    price: document.getElementById("editPrice").value,
    poster: document.getElementById("editPoster").value.trim(),
    desc: document.getElementById("editDesc").value.trim(),
  };

  const errors = validateMovie(formData);
  if (errors.length > 0) {
    showValidationModal(errors);
    return;
  }

  movie.name = formData.name;
  movie.genre = formData.genre;
  movie.duration = parseInt(formData.duration);
  movie.releaseDate = formData.releaseDate;
  movie.status = formData.status;
  movie.price = parseInt(formData.price);
  movie.poster = formData.poster;
  movie.desc = formData.desc;

  saveMovies();
  closeEditModal();
  renderTable();
  showAlert("Cập nhật phim thành công!", "success");
}

// ============ DELETE MOVIE ============
function showDeleteModal(id) {
  const movie = movies.find((m) => m.id === id);
  if (!movie) return;

  deleteMovieId = id;
  document.getElementById("deleteMovieName").textContent = movie.name;
  document.getElementById("deleteModal").style.display = "flex";
}

function closeDeleteModal() {
  document.getElementById("deleteModal").style.display = "none";
  deleteMovieId = null;
}

function confirmDeleteMovie() {
  if (deleteMovieId === null) return;

  movies = movies.filter((m) => m.id !== deleteMovieId);
  saveMovies();
  closeDeleteModal();
  renderTable();
  showAlert("Xóa phim thành công!", "success");
  deleteMovieId = null;
}

// ============ UI FUNCTIONS ============
function switchTab(index) {
  document.querySelectorAll(".tab").forEach((tab, i) => {
    tab.classList.toggle("tab-select", i === index);
  });

  document.getElementById("movieTab").style.display =
    index === 0 ? "block" : "none";
  document.getElementById("ticketTab").style.display =
    index === 1 ? "block" : "none";
}
function showLogoutModal() {
  document.getElementById("logoutModal").style.display = "flex";
}

function hideLogoutModal() {
  document.getElementById("logoutModal").style.display = "none";
}

function logout() {
  showAlert("Đăng xuất thành công!", "success");
  setTimeout(function () {
    window.location.href = "login.html";
  }, 1500);
}

function showAlert(message, type = "success") {
  const container = document.getElementById("toast-container");

  let icon = "";

  if (type === "success") {
    icon = '<i class="fa-regular fa-circle-check"></i>';
  } else if (type === "error") {
    icon = '<i class="fa-solid fa-xmark"></i>';
  } else if (type === "warning") {
    icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div style="display:flex; align-items:center; gap:10px;">
      ${icon}
      <span>${message}</span>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-20px)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============ EVENT LISTENERS ============
document.getElementById("addModal").addEventListener("click", function (e) {
  if (e.target === document.getElementById("addModal")) closeAddModal();
});

document.getElementById("editModal").addEventListener("click", function (e) {
  if (e.target === document.getElementById("editModal")) closeEditModal();
});

document.getElementById("deleteModal").addEventListener("click", function (e) {
  if (e.target === document.getElementById("deleteModal")) closeDeleteModal();
});

document.getElementById("logoutModal").addEventListener("click", function (e) {
  if (e.target === document.getElementById("logoutModal")) hideLogoutModal();
});

document
  .getElementById("validationModal")
  .addEventListener("click", function (e) {
    if (e.target === document.getElementById("validationModal"))
      closeValidationModal();
  });

// ============ INITIALIZE ============
document.addEventListener("DOMContentLoaded", () => {
  updateFilterCounts();
  renderTable();
});

document.getElementById("uploadImage").addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    document.getElementById("addPoster").value = event.target.result;
  };
  reader.readAsDataURL(file);
});
document
  .getElementById("uploadEditImage")
  .addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      document.getElementById("editPoster").value = event.target.result;
      showAlert("Đã tải ảnh lên thành công!", "success");
    };
    reader.readAsDataURL(file);
  });
