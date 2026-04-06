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
      genre: "Khoa học viễn tưởng",
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
      genre: "Hoạt hình",
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
      genre: "Hành động",
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
      genre: "Tình cảm",
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
      genre: "Kinh dị",
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
      genre: "Hoạt hình",
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
      genre: "Siêu anh hùng",
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
      genre: "Gia đình",
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
      genre: "Phiêu lưu",
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
      genre: "Hoạt hình",
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
      genre: "Trinh thám",
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
      genre: "Hành động",
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
      genre: "Kinh dị",
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
      genre: "Hành động",
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
      genre: "Tiểu sử",
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
      genre: "Hài",
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
      genre: "Kinh dị",
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
      genre: "Hoạt hình",
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
      genre: "Hoạt hình",
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
      genre: "Hoạt hình",
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
      genre: "Khoa học viễn tưởng",
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
      genre: "Chính kịch",
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
      genre: "Siêu anh hùng",
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

function validateMovie(data, excludeId = null) {
  const errors = [];

  if (!data.name || data.name.trim() === "") {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Tên phim</strong> không được để trống",
    );
  } else if (isMovieNameExists(data.name, excludeId)) {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Tên phim</strong> đã tồn tại trong hệ thống",
    );
  }

  if (!data.genre || data.genre === "") {
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

function getMaxMovieId() {
  if (movies.length === 0) return 0;
  return Math.max(...movies.map((m) => m.id));
}

function isMovieNameExists(name, excludeId = null) {
  return movies.some((m) => {
    if (excludeId !== null && m.id === excludeId) return false;
    return m.name.toLowerCase() === name.toLowerCase();
  });
}

//  VALIDATION
function validateMovie(data, excludeId = null) {
  const errors = [];

  if (!data.name || data.name.trim() === "") {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Tên phim</strong> không được để trống",
    );
  } else if (isMovieNameExists(data.name, excludeId)) {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Tên phim</strong> đã tồn tại trong hệ thống",
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

//  ADD MOVIE
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
    genre: document.getElementById("addGenre").value,
    duration: document.getElementById("addDuration").value,
    releaseDate: document.getElementById("addDate").value,
    status: document.getElementById("addStatus").value,
    price: document.getElementById("addPrice").value,
    poster: document.getElementById("addPoster").value.trim(),
    desc: document.getElementById("addDesc").value.trim(),
  };

  const errors = validateMovie(formData, null);
  if (errors.length > 0) {
    showValidationModal(errors);
    return;
  }

  const movie = {
    id: getMaxMovieId() + 1,
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

//  EDIT MOVIE
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
    genre: document.getElementById("editGenre").value,
    duration: document.getElementById("editDuration").value,
    releaseDate: document.getElementById("editDate").value,
    status: document.getElementById("editStatus").value,
    price: document.getElementById("editPrice").value,
    poster: document.getElementById("editPoster").value.trim(),
    desc: document.getElementById("editDesc").value.trim(),
  };

  const errors = validateMovie(formData, editingId);
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
//  DELETE MOVIE
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

//  EVENT LISTENERS
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

// ============ TICKET MANAGEMENT ============
const TICKET_KEY = "rikkei_tickets";
const CUSTOMER_KEY = "rikkei_customers";
const SHOWTIME_KEY = "rikkei_showtimes";

let tickets = JSON.parse(localStorage.getItem(TICKET_KEY)) || [];
let customers = JSON.parse(localStorage.getItem(CUSTOMER_KEY)) || [];
let showtimes = JSON.parse(localStorage.getItem(SHOWTIME_KEY)) || [];

let ticketPage = 1;
let ticketPerPage = 5;
let ticketFilter = "all";
let ticketSearch = "";
let editingTicketId = null;
let deleteTicketId = null;

// ============ INITIALIZE SAMPLE DATA ============
function initializeTicketData() {
  // Khách hàng mẫu
  if (customers.length === 0) {
    customers = [
      { id: 1, name: "Nguyễn Văn A", phone: "0987xxx.xxx" },
      { id: 2, name: "Trần Thị B", phone: "0912xxx.xxx" },
      { id: 3, name: "Lê Văn C", phone: "0908xxx.xxx" },
      { id: 4, name: "Phạm Minh D", phone: "0933xxx.xxx" },
      { id: 5, name: "Hoàng Yến E", phone: "0977xxx.xxx" },
    ];
    localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customers));
  }

  // Suất chiếu mẫu
  if (showtimes.length === 0) {
    showtimes = [
      {
        id: 1,
        movieId: 1,
        movieName: "Dune: Part Two",
        time: "10:00",
        date: "2026-04-10",
        price: 90000,
        seats: generateSeats(100),
      },
      {
        id: 2,
        movieId: 4,
        movieName: "Mai",
        time: "13:30",
        date: "2026-04-10",
        price: 80000,
        seats: generateSeats(80),
      },
      {
        id: 3,
        movieId: 2,
        movieName: "Kung Fu Panda 4",
        time: "19:00",
        date: "2026-04-10",
        price: 75000,
        seats: generateSeats(120),
      },
      {
        id: 4,
        movieId: 5,
        movieName: "Exhuma: Quái Mộ",
        time: "21:45",
        date: "2026-04-14",
        price: 90000,
        seats: generateSeats(100),
      },
      {
        id: 5,
        movieId: 3,
        movieName: "Godzilla x Kong",
        time: "09:15",
        date: "2026-04-16",
        price: 95000,
        seats: generateSeats(150),
      },
    ];
    localStorage.setItem(SHOWTIME_KEY, JSON.stringify(showtimes));
  }

  // Vé mẫu
  if (tickets.length === 0) {
    tickets = [
      {
        id: 1,
        code: "VE-1001",
        customerId: 1,
        customerName: "Nguyễn Văn A",
        customerPhone: "0987xxx.xxx",
        movieId: 1,
        movieName: "Dune: Part Two",
        showtimeId: 1,
        showtime: "10:00 - 15/10/2023",
        seats: ["F12", "F13"],
        totalPrice: 180000,
        paymentMethod: "Tiền mặt",
        status: "Đã thanh toán",
        notes: "",
      },
      {
        id: 2,
        code: "VE-1002",
        customerId: 2,
        customerName: "Trần Thị B",
        customerPhone: "0912xxx.xxx",
        movieId: 4,
        movieName: "Mai",
        showtimeId: 2,
        showtime: "13:30 - 15/10/2023",
        seats: ["G5"],
        totalPrice: 90000,
        paymentMethod: "Thẻ",
        status: "Chờ xử lý",
        notes: "",
      },
      {
        id: 3,
        code: "VE-1003",
        customerId: 3,
        customerName: "Lê Văn C",
        customerPhone: "0908xxx.xxx",
        movieId: 2,
        movieName: "Kung Fu Panda 4",
        showtimeId: 3,
        showtime: "19:00 - 15/10/2023",
        seats: ["H10", "H11", "H12"],
        totalPrice: 270000,
        paymentMethod: "Chuyển khoản",
        status: "Đã thanh toán",
        notes: "",
      },
      {
        id: 4,
        code: "VE-1004",
        customerId: 4,
        customerName: "Phạm Minh D",
        customerPhone: "0933xxx.xxx",
        movieId: 5,
        movieName: "Exhuma: Quái Mộ",
        showtimeId: 4,
        showtime: "21:45 - 14/10/2023",
        seats: ["E8"],
        totalPrice: 90000,
        paymentMethod: "Tiền mặt",
        status: "Đã hủy",
        notes: "Khách hủy vé",
      },
      {
        id: 5,
        code: "VE-1005",
        customerId: 5,
        customerName: "Hoàng Yến E",
        customerPhone: "0977xxx.xxx",
        movieId: 3,
        movieName: "Godzilla x Kong",
        showtimeId: 5,
        showtime: "09:15 - 16/10/2023",
        seats: ["D4", "D5"],
        totalPrice: 180000,
        paymentMethod: "Tiền mặt",
        status: "Chờ xử lý",
        notes: "",
      },
    ];
    localStorage.setItem(TICKET_KEY, JSON.stringify(tickets));
  }
}

function generateSeats(count) {
  const seats = [];
  const rows = Math.ceil(count / 20);
  for (let i = 0; i < rows; i++) {
    const row = String.fromCharCode(65 + i);
    for (let j = 1; j <= 20 && seats.length < count; j++) {
      seats.push({ id: `${row}${j}`, booked: false });
    }
  }
  return seats;
}

// ============ TICKET STATISTICS ============
function updateTicketStats() {
  const total = tickets.length;
  const revenue = tickets
    .filter((t) => t.status === "Đã thanh toán")
    .reduce((sum, t) => sum + t.totalPrice, 0);
  const pending = tickets.filter((t) => t.status === "Chờ xử lý").length;

  document.getElementById("totalTickets").textContent = total;
  document.getElementById("totalRevenue").textContent =
    (revenue / 1000000).toFixed(2) + "tr";
  document.getElementById("pendingTickets").textContent = pending;
}

// ============ TICKET VALIDATION ============
function validateTicket(data, excludeId = null) {
  const errors = [];

  if (!data.customerId || data.customerId === "") {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Khách hàng</strong> không được để trống",
    );
  }

  if (!data.movieId || data.movieId === "") {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Phim</strong> không được để trống",
    );
  }

  if (!data.showtimeId || data.showtimeId === "") {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Suất chiếu</strong> không được để trống",
    );
  } else {
    const showtime = showtimes.find((st) => st.id == data.showtimeId);
    if (!showtime) {
      errors.push(
        "<i class='fas fa-times'></i> <strong>Suất chiếu</strong> không hợp lệ",
      );
    }
  }

  if (!data.seats || data.seats.length === 0) {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Ghế</strong> không được để trống",
    );
  } else {
    // Kiểm tra ghế trùng lặp trong suất chiếu
    const conflictTickets = tickets.filter(
      (t) => t.showtimeId == data.showtimeId && t.status !== "Đã hủy",
    );
    if (excludeId !== null) {
      conflictTickets = conflictTickets.filter((t) => t.id !== excludeId);
    }

    const bookedSeats = conflictTickets.flatMap((t) => t.seats);
    const conflictSeats = data.seats.filter((seat) =>
      bookedSeats.includes(seat),
    );

    if (conflictSeats.length > 0) {
      errors.push(
        `<i class='fas fa-times'></i> <strong>Ghế ${conflictSeats.join(", ")}</strong> đã được đặt cho suất chiếu này`,
      );
    }
  }

  if (!data.paymentMethod || data.paymentMethod === "") {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Phương thức thanh toán</strong> không được để trống",
    );
  }

  if (!data.totalPrice || isNaN(data.totalPrice) || data.totalPrice < 1) {
    errors.push(
      "<i class='fas fa-times'></i> <strong>Tổng tiền</strong> phải lớn hơn 0",
    );
  }

  return errors;
}

// ============ TICKET CRUD ============
function saveTickets() {
  localStorage.setItem(TICKET_KEY, JSON.stringify(tickets));
  updateTicketStats();
}

function getMaxTicketId() {
  if (tickets.length === 0) return 1000;
  return Math.max(...tickets.map((t) => t.id));
}

function generateTicketCode() {
  const lastCode =
    tickets.length > 0 ? tickets[tickets.length - 1].code : "VE-1000";
  const lastNum = parseInt(lastCode.split("-")[1]);
  return `VE-${lastNum + 1}`;
}

function getFilteredTickets() {
  let filtered = tickets;
  if (ticketFilter !== "all") {
    filtered = filtered.filter((t) => t.status === ticketFilter);
  }
  if (ticketSearch) {
    filtered = filtered.filter(
      (t) =>
        t.code.toLowerCase().includes(ticketSearch.toLowerCase()) ||
        t.customerName.toLowerCase().includes(ticketSearch.toLowerCase()),
    );
  }
  return filtered;
}

function renderTicketTable() {
  const filtered = getFilteredTickets();
  const container = document.getElementById("ticketTableContainer");

  if (filtered.length === 0) {
    container.innerHTML =
      '<div style="text-align: center; padding: 40px; color: #999;"><i class="fas fa-inbox" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>Không tìm thấy vé nào</div>';
    document.getElementById("ticketItemStart").textContent = "0";
    document.getElementById("ticketItemEnd").textContent = "0";
    document.getElementById("ticketTotalItems").textContent = "0";
    renderTicketPagination(filtered);
    return;
  }

  let html = `
    <div class="table-head">
      <span>MÃ VÉ</span>
      <span>KHÁCH HÀNG</span>
      <span>PHIM</span>
      <span>SUẤT CHIẾU</span>
      <span>GHẾ</span>
      <span>TỔNG TIỀN</span>
      <span>TRẠNG THÁI</span>
      <span>THAO TÁC</span>
    </div>
  `;

  let start = (ticketPage - 1) * ticketPerPage;
  let data = filtered.slice(start, start + ticketPerPage);

  data.forEach((t) => {
    html += `
      <div class="table-row">
        <div class="ticket-code">${t.code}</div>
        <div class="customer-info">
          <div>${t.customerName}</div>
          <div style="font-size: 12px; color: #999;">${t.customerPhone}</div>
        </div>
        <div>${t.movieName}</div>
        <div class="showtime">${t.showtime}</div>
        <div class="seats">${t.seats.join(", ")}</div>
        <div class="price">${t.totalPrice.toLocaleString()}đ</div>
        <div class="status ${getTicketStatusClass(t.status)}">${t.status}</div>
        <div class="actions-icon">
          <button onclick="openEditTicketModal(${t.id})" title="Sửa"><i class="fa-solid fa-pen"></i></button>
          <button onclick="showDeleteTicketModal(${t.id})" title="Xóa"><i class="fa-regular fa-circle-xmark"></i></button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  document.getElementById("ticketItemStart").textContent = start + 1;
  document.getElementById("ticketItemEnd").textContent = Math.min(
    start + ticketPerPage,
    filtered.length,
  );
  document.getElementById("ticketTotalItems").textContent = filtered.length;

  renderTicketPagination(filtered);
}

function renderTicketPagination(filtered) {
  const total = Math.ceil(filtered.length / ticketPerPage);
  const controls = document.getElementById("ticketPaginationControls");
  controls.innerHTML = "";

  if (total <= 1) return;

  const prev = document.createElement("button");
  prev.className = "pagination-btn pagination-prev";
  prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
  prev.disabled = ticketPage === 1;
  prev.onclick = () => {
    if (ticketPage > 1) {
      ticketPage--;
      renderTicketTable();
      window.scrollTo(0, 0);
    }
  };
  controls.appendChild(prev);

  if (ticketPage > 3) {
    const first = document.createElement("button");
    first.className = "pagination-btn";
    first.textContent = "1";
    first.onclick = () => {
      ticketPage = 1;
      renderTicketTable();
      window.scrollTo(0, 0);
    };
    controls.appendChild(first);

    if (ticketPage > 4) {
      const dots = document.createElement("span");
      dots.className = "dots";
      dots.textContent = "...";
      controls.appendChild(dots);
    }
  }

  const start = Math.max(1, ticketPage - 1);
  const end = Math.min(total, ticketPage + 1);

  for (let i = start; i <= end; i++) {
    const btn = document.createElement("button");
    btn.className = "pagination-btn";
    if (i === ticketPage) btn.classList.add("active");
    btn.textContent = i;
    btn.onclick = () => {
      ticketPage = i;
      renderTicketTable();
      window.scrollTo(0, 0);
    };
    controls.appendChild(btn);
  }

  if (ticketPage < total - 2) {
    if (ticketPage < total - 3) {
      const dots = document.createElement("span");
      dots.className = "dots";
      dots.textContent = "...";
      controls.appendChild(dots);
    }

    const last = document.createElement("button");
    last.className = "pagination-btn";
    last.textContent = total;
    last.onclick = () => {
      ticketPage = total;
      renderTicketTable();
      window.scrollTo(0, 0);
    };
    controls.appendChild(last);
  }

  const next = document.createElement("button");
  next.className = "pagination-btn pagination-next";
  next.innerHTML = '<i class="fas fa-chevron-right"></i>';
  next.disabled = ticketPage === total;
  next.onclick = () => {
    if (ticketPage < total) {
      ticketPage++;
      renderTicketTable();
      window.scrollTo(0, 0);
    }
  };
  controls.appendChild(next);
}

function getTicketStatusClass(status) {
  if (status === "Đã thanh toán") return "paid";
  if (status === "Chờ xử lý") return "pending";
  if (status === "Đã hủy") return "cancelled";
  return "";
}

function searchTickets(query) {
  ticketSearch = query;
  ticketPage = 1;
  renderTicketTable();
}

function filterTickets(status, btn) {
  ticketFilter = status;
  ticketPage = 1;
  renderTicketTable();

  document.querySelectorAll(".ticket-filter button").forEach((b) => {
    b.classList.remove("active");
  });
  btn.classList.add("active");
}

// ============ ADD TICKET ============
function openAddTicketModal() {
  clearAddTicketForm();
  populateTicketDropdowns();
  document.getElementById("addTicketModal").style.display = "flex";
}

function closeAddTicketModal() {
  document.getElementById("addTicketModal").style.display = "none";
  clearAddTicketForm();
}

function clearAddTicketForm() {
  document.getElementById("addTicketCustomer").value = "";
  document.getElementById("addTicketMovie").value = "";
  document.getElementById("addTicketShowtime").value = "";
  document.getElementById("addTicketSeats").value = "";
  document.getElementById("addTicketPayment").value = "";
  document.getElementById("addTicketPrice").value = "";
  document.getElementById("addTicketNotes").value = "";
}

function populateTicketDropdowns(excludeShowtimeId = null) {
  // Khách hàng
  const customerSelect = document.getElementById("addTicketCustomer");
  customerSelect.innerHTML = '<option value="">-- Chọn khách hàng --</option>';
  customers.forEach((c) => {
    customerSelect.innerHTML += `<option value="${c.id}">${c.name} (${c.phone})</option>`;
  });

  // Phim đang chiếu
  const movieSelect = document.getElementById("addTicketMovie");
  movieSelect.innerHTML = '<option value="">-- Chọn phim --</option>';
  movies
    .filter((m) => m.status === "Đang chiếu")
    .forEach((m) => {
      movieSelect.innerHTML += `<option value="${m.id}">${m.name}</option>`;
    });

  // Suất chiếu
  updateShowtimeOptions(excludeShowtimeId);
}

function updateShowtimeOptions(excludeShowtimeId = null) {
  const movieId = document.getElementById("addTicketMovie").value;
  const showtimeSelect = document.getElementById("addTicketShowtime");
  showtimeSelect.innerHTML = '<option value="">-- Chọn suất chiếu --</option>';

  if (!movieId) return;

  showtimes
    .filter(
      (st) =>
        st.movieId == movieId &&
        (!excludeShowtimeId || st.id !== excludeShowtimeId),
    )
    .forEach((st) => {
      showtimeSelect.innerHTML += `<option value="${st.id}">${st.time} - ${formatDate(st.date)}</option>`;
    });
}

function calculateTicketPrice() {
  const showtimeId = document.getElementById("addTicketShowtime").value;
  if (!showtimeId) {
    document.getElementById("addTicketPrice").value = "";
    return;
  }

  const showtime = showtimes.find((st) => st.id == showtimeId);
  const seats = document
    .getElementById("addTicketSeats")
    .value.split(",")
    .filter((s) => s.trim());
  const totalPrice = showtime.price * seats.length;

  document.getElementById("addTicketPrice").value = totalPrice.toLocaleString();
}

function addTicket() {
  const formData = {
    customerId: document.getElementById("addTicketCustomer").value,
    movieId: document.getElementById("addTicketMovie").value,
    showtimeId: document.getElementById("addTicketShowtime").value,
    seats: document
      .getElementById("addTicketSeats")
      .value.split(",")
      .map((s) => s.trim())
      .filter((s) => s),
    paymentMethod: document.getElementById("addTicketPayment").value,
    totalPrice: parseInt(
      document.getElementById("addTicketPrice").value.replace(/\D/g, ""),
    ),
    notes: document.getElementById("addTicketNotes").value.trim(),
  };

  const errors = validateTicket(formData, null);
  if (errors.length > 0) {
    showValidationModal(errors);
    return;
  }

  const customer = customers.find((c) => c.id == formData.customerId);
  const showtime = showtimes.find((st) => st.id == formData.showtimeId);
  const movie = movies.find((m) => m.id == formData.movieId);

  const ticket = {
    id: getMaxTicketId() + 1,
    code: generateTicketCode(),
    customerId: formData.customerId,
    customerName: customer.name,
    customerPhone: customer.phone,
    movieId: formData.movieId,
    movieName: movie.name,
    showtimeId: formData.showtimeId,
    showtime: `${showtime.time} - ${formatDate(showtime.date)}`,
    seats: formData.seats,
    totalPrice: formData.totalPrice,
    paymentMethod: formData.paymentMethod,
    status: "Chờ xử lý",
    notes: formData.notes,
  };

  tickets.push(ticket);
  saveTickets();
  closeAddTicketModal();
  ticketPage = 1;
  ticketFilter = "all";
  ticketSearch = "";
  renderTicketTable();
  showAlert("Thêm vé thành công!", "success");
}

// ============ EDIT TICKET ============
function openEditTicketModal(id) {
  const ticket = tickets.find((t) => t.id === id);
  if (!ticket) return;

  editingTicketId = id;
  document.getElementById("editTicketCustomer").value = ticket.customerId;
  document.getElementById("editTicketMovie").value = ticket.movieId;
  document.getElementById("editTicketSeats").value = ticket.seats.join(", ");
  document.getElementById("editTicketPayment").value = ticket.paymentMethod;
  document.getElementById("editTicketPrice").value =
    ticket.totalPrice.toLocaleString() + "đ";
  document.getElementById("editTicketNotes").value = ticket.notes;
  document.getElementById("editTicketStatus").value = ticket.status;

  populateTicketDropdowns(ticket.showtimeId);
  document.getElementById("editTicketShowtime").value = ticket.showtimeId;

  // Disable phim/suất nếu đã thanh toán
  const isPaid = ticket.status === "Đã thanh toán";
  document.getElementById("editTicketMovie").disabled = isPaid;
  document.getElementById("editTicketShowtime").disabled = isPaid;

  if (isPaid) {
    document.querySelector(".edit-ticket-warning").classList.remove("hidden");
  }

  document.getElementById("editTicketModal").style.display = "flex";
}

function closeEditTicketModal() {
  document.getElementById("editTicketModal").style.display = "none";
  editingTicketId = null;
}

function updateTicket() {
  const ticket = tickets.find((t) => t.id === editingTicketId);
  if (!ticket) return;

  const formData = {
    customerId: document.getElementById("editTicketCustomer").value,
    movieId: document.getElementById("editTicketMovie").value,
    showtimeId: document.getElementById("editTicketShowtime").value,
    seats: document
      .getElementById("editTicketSeats")
      .value.split(",")
      .map((s) => s.trim())
      .filter((s) => s),
    paymentMethod: document.getElementById("editTicketPayment").value,
    totalPrice: parseInt(
      document.getElementById("editTicketPrice").value.replace(/\D/g, ""),
    ),
    status: document.getElementById("editTicketStatus").value,
    notes: document.getElementById("editTicketNotes").value.trim(),
  };

  const errors = validateTicket(formData, editingTicketId);
  if (errors.length > 0) {
    showValidationModal(errors);
    return;
  }

  const customer = customers.find((c) => c.id == formData.customerId);
  const showtime = showtimes.find((st) => st.id == formData.showtimeId);

  ticket.customerName = customer.name;
  ticket.customerPhone = customer.phone;
  ticket.showtimeId = formData.showtimeId;
  ticket.showtime = `${showtime.time} - ${formatDate(showtime.date)}`;
  ticket.seats = formData.seats;
  ticket.totalPrice = formData.totalPrice;
  ticket.paymentMethod = formData.paymentMethod;
  ticket.status = formData.status;
  ticket.notes = formData.notes;

  saveTickets();
  closeEditTicketModal();
  renderTicketTable();
  showAlert("Cập nhật vé thành công!", "success");
}

// ============ DELETE TICKET ============
function showDeleteTicketModal(id) {
  const ticket = tickets.find((t) => t.id === id);
  if (!ticket) return;

  deleteTicketId = id;
  document.getElementById("deleteTicketCode").textContent = ticket.code;
  document.getElementById("deleteTicketModal").style.display = "flex";
}

function closeDeleteTicketModal() {
  document.getElementById("deleteTicketModal").style.display = "none";
  deleteTicketId = null;
}

function confirmDeleteTicket() {
  if (deleteTicketId === null) return;

  const ticket = tickets.find((t) => t.id === deleteTicketId);
  if (ticket.status === "Đã thanh toán") {
    showAlert(
      "Không thể xóa vé đã thanh toán. Hãy cập nhật trạng thái thành 'Đã hủy'!",
      "warning",
    );
    closeDeleteTicketModal();
    return;
  }

  tickets = tickets.filter((t) => t.id !== deleteTicketId);
  saveTickets();
  closeDeleteTicketModal();
  renderTicketTable();
  showAlert("Xóa vé thành công!", "success");
  deleteTicketId = null;
}

// ============ EVENT LISTENERS ============
document
  .getElementById("addTicketModal")
  .addEventListener("click", function (e) {
    if (e.target === document.getElementById("addTicketModal"))
      closeAddTicketModal();
  });

document
  .getElementById("editTicketModal")
  .addEventListener("click", function (e) {
    if (e.target === document.getElementById("editTicketModal"))
      closeEditTicketModal();
  });

document
  .getElementById("deleteTicketModal")
  .addEventListener("click", function (e) {
    if (e.target === document.getElementById("deleteTicketModal"))
      closeDeleteTicketModal();
  });

document
  .getElementById("addTicketMovie")
  .addEventListener("change", function () {
    updateShowtimeOptions();
    calculateTicketPrice();
  });

document
  .getElementById("addTicketShowtime")
  .addEventListener("change", function () {
    calculateTicketPrice();
  });

document
  .getElementById("addTicketSeats")
  .addEventListener("input", function () {
    calculateTicketPrice();
  });

// ============ INITIALIZE ============
document.addEventListener("DOMContentLoaded", () => {
  initializeTicketData();
  updateTicketStats();
  renderTicketTable();
});

// ============ INITIALIZE ON PAGE LOAD ============
document.addEventListener("DOMContentLoaded", () => {
  initializeTicketData();
  updateTicketStats();
  renderTicketTable();
  updateFilterCounts();
  renderTable();
});
