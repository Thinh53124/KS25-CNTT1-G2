let watchList = [
  {
    id: "M001",
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    year: 2010,
    rating: 8.8,
  },
  {
    id: "M002",
    title: "Parasite",
    director: "Bong Joon-ho",
    genre: "Drama",
    year: 2019,
    rating: 9.2,
  },
  {
    id: "M003",
    title: "The Godfather",
    director: "Francis Ford Coppola",
    genre: "Drama",
    year: 1972,
    rating: 9.5,
  },
  {
    id: "M004",
    title: "Avengers: Endgame",
    director: "Anthony Russo",
    genre: "Action",
    year: 2019,
    rating: 8.4,
  },
  {
    id: "M005",
    title: "The Conjuring",
    director: "James Wan",
    genre: "Horror",
    year: 2013,
    rating: 7.8,
  },
];

const validGenres = [
  "Action",
  "Drama",
  "Sci-Fi",
  "Comedy",
  "Horror",
  "Thriller",
];

let choice;

do {
  choice = +prompt(`Quản lý danh sách phim yêu thích
1. Thêm phim
2. Xóa phim
3. Hiển thị danh sách
4. Cập nhật rating / genre
5. Tìm phim (title hoặc director)
6. Lọc phim theo thể loại
7. Tính điểm trung bình
8. Sắp xếp theo năm phát hành
9. Phân tích cổ điển vs hiện đại
0. Thoát`);

  switch (choice) {
    case 1:
      addMovie(watchList);
      break;
    case 2:
      deleteMovie(watchList);
      break;
    case 3:
      showMovie(watchList);
      break;
    case 4:
      updateMovie(watchList);
      break;
    case 5:
      searchMovie(watchList);
      break;
    case 6:
      filterByGenre(watchList);
      break;
    case 7:
      averageRating(watchList);
      break;
    case 8:
      sortByYear(watchList);
      break;
    case 9:
      oldOrNew(watchList);
      break;
    case 0:
      console.log("Thoát chương trình!");
      break;
    default:
      alert("Lựa chọn không hợp lệ!");
  }
} while (choice !== 0);

function addMovie(list) {
  let id = prompt("Nhập ID phim:");
  if (!id || id.trim() === "") return console.log("ID không được rỗng");

  if (list.some((m) => m.id === id))
    return console.log("ID đã tồn tại, vui lòng chọn ID khác.");

  let title = prompt("Nhập tên phim:");
  let director = prompt("Nhập đạo diễn:");

  if (
    list.some(
      (m) =>
        m.title.toLowerCase() === title.toLowerCase() &&
        m.director.toLowerCase() === director.toLowerCase(),
    )
  )
    return console.log("Phim này đã có trong watchlist.");

  let genre = prompt("Nhập thể loại:");
  if (!validGenres.includes(genre))
    return console.log(
      "Thể loại không hợp lệ. Phải là một trong các giá trị: 'Action', 'Drama', 'Sci-Fi', 'Comedy', 'Horror', 'Thriller'.",
    );

  let year = +prompt("Nhập năm phát hành:");
  let currentYear = new Date().getFullYear();
  if (!Number.isInteger(year) || year < 1900 || year > currentYear + 5)
    return console.log(
      "Năm phát hành phải là số nguyên từ 1900 đến " + (currentYear + 5) + ".",
    );

  let rating = +prompt("Nhập rating (1.0 - 10.0):");
  if (isNaN(rating) || rating < 1 || rating > 10)
    return console.log("Điểm rating phải là số từ 1.0 đến 10.0.");

  list.push({ id, title, director, genre, year, rating });
  console.log(`Đã thêm phim: ${title} (${year}) vào watchlist!`);
}

function deleteMovie(list) {
  let title = prompt("Nhập title phim cần xóa:");
  let index = list.findIndex(
    (m) => m.title.toLowerCase() === title.toLowerCase(),
  );

  if (index === -1)
    return console.log(`Phim ${title} không có trong watchlist.`);

  if (confirm("Bạn có chắc chắn muốn xóa không?")) {
    list.splice(index, 1);
    console.log(`Đã xóa phim ${title} thành công!`);
  } else {
    console.log("Đã hủy thao tác xóa.");
  }
}

function showMovie(list) {
  console.table(list);
}

function updateMovie(list) {
  let title = prompt("Nhập title phim cần cập nhật:");
  let movie = list.find((m) => m.title.toLowerCase() === title.toLowerCase());

  if (!movie) return console.log(`Phim ${title} không có trong watchlist!`);

  let newRating = prompt("Nhập rating mới (bỏ trống nếu không đổi):");
  let newGenre = prompt("Nhập genre mới (bỏ trống nếu không đổi):");

  if (newRating) {
    let rating = +newRating;
    if (isNaN(rating) || rating < 1 || rating > 10)
      return console.log("Điểm rating phải là số từ 1.0 đến 10.0.");
    movie.rating = rating;
  }

  if (newGenre) {
    if (!validGenres.includes(newGenre))
      return console.log("Thể loại không hợp lệ...");
    movie.genre = newGenre;
  }

  console.log(`Đã cập nhật phim: ${movie.title} (${movie.year})`);
}

function searchMovie(list) {
  let type = +prompt("1. Tìm theo title\n2. Tìm theo director");
  let keyword = prompt("Nhập từ khóa:");

  if (type === 1) {
    let movie = list.find(
      (m) => m.title.toLowerCase() === keyword.toLowerCase(),
    );
    if (!movie) console.log(`Không tìm thấy phim nào có tiêu đề ${keyword}.`);
    else
      console.log(
        `Phim tìm thấy: ${movie.title} - Đạo diễn: ${movie.director}, Thể loại: ${movie.genre}, Năm: ${movie.year}, Rating: ${movie.rating}/10`,
      );
  } else if (type === 2) {
    let result = list.filter(
      (m) => m.director.toLowerCase() === keyword.toLowerCase(),
    );
    if (result.length === 0)
      console.log(`Không có phim nào của đạo diễn ${keyword}.`);
    else console.table(result);
  }
}

function filterByGenre(list) {
  let genre = prompt("Nhập genre:");
  if (!validGenres.includes(genre))
    return console.log("Thể loại không hợp lệ!");

  let result = list.filter((m) => m.genre === genre);
  if (result.length === 0)
    console.log(`Hiện tại watchlist chưa có phim thể loại ${genre}.`);
  else console.table(result);
}

function averageRating() {}

function sortByYear() {}

function oldOrNew() {}
