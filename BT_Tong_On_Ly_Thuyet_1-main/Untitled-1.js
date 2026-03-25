// ===== DOM =====
const titleInput = document.getElementById("title");
const artistInput = document.getElementById("artist");
const tableBody = document.getElementById("songTable");
const searchInput = document.getElementById("search");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");

// ===== DATA =====
let songs = JSON.parse(localStorage.getItem("songs")) || [];
let editId = null;

// ===== SAVE LOCAL =====
function saveToLocal() {
    localStorage.setItem("songs", JSON.stringify(songs));
}

// ===== RENDER =====
function render(data = songs) {
    tableBody.innerHTML = "";

    data.forEach(song => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${song.id}</td>
            <td>${song.title}</td>
            <td>${song.artist}</td>
            <td>
                <button onclick="editSong(${song.id})">Sửa</button>
                <button onclick="deleteSong(${song.id})">Xóa</button>
            </td>
        `;

        tableBody.appendChild(tr);
    });
}

// ===== THEM / CAP NHAT =====
function handleSubmit() {

    const title = titleInput.value.trim();
    const artist = artistInput.value.trim();

    // VALIDATION
    if (title === "" || artist === "") {
        alert("Khong duoc de trong!");
        return;
    }

    // ===== ADD =====
    if (editId === null) {

        const newSong = {
            id: Date.now(),
            title: title,
            artist: artist
        };

        songs.push(newSong);

    } 
    // ===== UPDATE =====
    else {

        const song = songs.find(s => s.id === editId);

        song.title = title;
        song.artist = artist;

        editId = null;

        formTitle.innerText = "🎵 Thêm bài hát";
        submitBtn.innerText = "Thêm";
    }

    saveToLocal();
    resetForm();
    render();
}

// ===== RESET =====
function resetForm() {
    titleInput.value = "";
    artistInput.value = "";
}

// ===== SUA =====
function editSong(id) {

    const song = songs.find(s => s.id === id);

    titleInput.value = song.title;
    artistInput.value = song.artist;

    editId = id;

    formTitle.innerText = "✏️ Sửa bài hát";
    submitBtn.innerText = "Cập nhật";
}

// ===== XOA =====
function deleteSong(id) {

    const confirmDelete = confirm("Ban co chac muon xoa?");

    if (!confirmDelete) return;

    songs = songs.filter(s => s.id !== id);

    saveToLocal();
    render();
}

// ===== TIM KIEM =====
function searchSong() {

    const keyword = searchInput.value.toLowerCase();

    const filtered = songs.filter(song =>
        song.title.toLowerCase().includes(keyword)
    );

    render(filtered);
}

// ===== LOAD LAN DAU =====
render();