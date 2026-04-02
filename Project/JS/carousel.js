// Carousel & Countdown Management
let currentCarouselIndex = 0;
let hotMovies = [];
let countdownIntervals = [];

// Lấy phim hot (sắp chiếu)
function getHotMovies() {
  if (typeof movies === "undefined" || movies.length === 0) return [];

  return movies
    .filter((m) => m.status === "Sắp chiếu" || m.status === "Đang chiếu")
    .sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate))
    .slice(0, 5);
}

// Render carousel
function renderHotMoviesCarousel() {
  hotMovies = getHotMovies();

  if (hotMovies.length === 0) {
    const section = document.querySelector(".hot-movies-section");
    if (section) section.style.display = "none";
    return;
  }

  const carouselTrack = document.getElementById("carouselTrack");
  const carouselDots = document.getElementById("carouselDots");

  carouselTrack.innerHTML = hotMovies
    .map((movie, index) => {
      const daysUntilRelease = Math.ceil(
        (new Date(movie.releaseDate) - new Date()) / (1000 * 60 * 60 * 24),
      );

      return `
        <div class="carousel-slide" data-index="${index}">
          <img src="${movie.poster || "https://via.placeholder.com/250x320?text=" + movie.name}" 
               class="carousel-image" 
               alt="${movie.name}"
               onerror="this.src='https://via.placeholder.com/250x320?text=${movie.name.replace(/ /g, "+")}'"/>
          <div class="carousel-content">
            <h3>${movie.name}</h3>
            <div class="carousel-meta">
              <span class="carousel-meta-item">
                <i class="fas fa-calendar"></i>
                ${new Date(movie.releaseDate).toLocaleDateString("vi-VN")}
              </span>
              <span class="carousel-meta-item">
                <i class="fas fa-clock"></i>
                ${movie.duration} phút
              </span>
              <span class="carousel-meta-badge">${movie.status}</span>
            </div>
            <p>${movie.desc}</p>
            <p style="color: #9ca3af; font-size: 14px;">
              Thể loại: ${movie.genre}
            </p>
            
            ${
              daysUntilRelease > 0
                ? `
              <div class="carousel-countdown">
                <p style="color: #9ca3af; margin-bottom: 12px; font-size: 13px;">Khởi chiếu trong:</p>
                <div class="countdown-timer" data-target-date="${movie.releaseDate}" data-movie-id="${movie.id}">
                  <!-- Timer sẽ được cập nhật bởi JS -->
                </div>
              </div>
            `
                : ""
            }
            
            <button class="btn-primary" onclick="bookMovie(${movie.id})">
              🎟 Đặt Vé Ngay
            </button>
          </div>
        </div>
      `;
    })
    .join("");

  carouselDots.innerHTML = hotMovies
    .map(
      (_, index) => `
      <button class="carousel-dot ${index === 0 ? "active" : ""}" 
              onclick="goToSlide(${index})">
      </button>
    `,
    )
    .join("");

  updateCarouselButtons();
}

// Render countdown section
function renderCountdownSection() {
  if (typeof movies === "undefined" || movies.length === 0) return;

  const upcomingMovies = movies
    .filter((m) => m.status === "Sắp chiếu")
    .sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate))
    .slice(0, 4);

  const countdownSection = document.getElementById("countdownSection");

  if (upcomingMovies.length === 0) {
    countdownSection.style.display = "none";
    return;
  }

  countdownSection.style.display = "block";
  const countdownGrid = document.getElementById("countdownGrid");

  countdownGrid.innerHTML = upcomingMovies
    .map(
      (movie) => `
      <div class="countdown-item">
        <div class="countdown-item-title">${movie.name}</div>
        <div class="countdown-item-date">
          Công chiếu: ${new Date(movie.releaseDate).toLocaleDateString("vi-VN")}
        </div>
        <div class="countdown-item-time" data-target-date="${movie.releaseDate}" data-movie-id="${movie.id}">
          <!-- Timer sẽ được cập nhật bởi JS -->
        </div>
        <button class="countdown-item-btn" onclick="bookMovie(${movie.id})">
          Đặt Vé
        </button>
      </div>
    `,
    )
    .join("");
}

// Format countdown
function formatCountdown(days, hours, minutes, seconds) {
  return `
    <div class="countdown-unit">
      <span class="countdown-unit-value">${String(days).padStart(2, "0")}</span>
      <span class="countdown-unit-label">Ngày</span>
    </div>
    <div class="countdown-unit">
      <span class="countdown-unit-value">${String(hours).padStart(2, "0")}</span>
      <span class="countdown-unit-label">Giờ</span>
    </div>
    <div class="countdown-unit">
      <span class="countdown-unit-value">${String(minutes).padStart(2, "0")}</span>
      <span class="countdown-unit-label">Phút</span>
    </div>
    <div class="countdown-unit">
      <span class="countdown-unit-value">${String(seconds).padStart(2, "0")}</span>
      <span class="countdown-unit-label">Giây</span>
    </div>
  `;
}

// Update all countdowns
function updateAllCountdowns() {
  const countdownElements = document.querySelectorAll("[data-target-date]");

  countdownElements.forEach((el) => {
    const targetDate = new Date(el.getAttribute("data-target-date"));
    const now = new Date();
    const diff = targetDate - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      el.innerHTML = formatCountdown(days, hours, minutes, seconds);
    }
  });
}

// Start countdown timers
function startCountdownTimers() {
  // Xóa intervals cũ
  countdownIntervals.forEach((interval) => clearInterval(interval));
  countdownIntervals = [];

  // Cập nhật ngay lập tức
  updateAllCountdowns();

  // Cập nhật mỗi giây
  const interval = setInterval(updateAllCountdowns, 1000);
  countdownIntervals.push(interval);
}

// Carousel functions
function nextSlide() {
  if (currentCarouselIndex < hotMovies.length - 1) {
    currentCarouselIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentCarouselIndex > 0) {
    currentCarouselIndex--;
    updateCarousel();
  }
}

function goToSlide(index) {
  currentCarouselIndex = index;
  updateCarousel();
}

function updateCarousel() {
  const track = document.getElementById("carouselTrack");
  const offset = -currentCarouselIndex * 100;
  track.style.transform = `translateX(${offset}%)`;

  document.querySelectorAll(".carousel-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentCarouselIndex);
  });

  updateCarouselButtons();
}

function updateCarouselButtons() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (prevBtn && nextBtn) {
    prevBtn.disabled = currentCarouselIndex === 0;
    nextBtn.disabled = currentCarouselIndex === hotMovies.length - 1;
  }
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  // Chờ một chút để movies được load từ index.js
  setTimeout(() => {
    renderHotMoviesCarousel();
    renderCountdownSection();
    startCountdownTimers();
  }, 100);
});
