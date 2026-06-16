let songs = JSON.parse(localStorage.getItem("songs")) || [];
let editIndex = -1;

function render(data = songs) {
    let tbody = document.getElementById("songTable");
    let html = "";

    for (let i = 0; i < data.length; i++) {
        html += `
        <tr>
            <td>${data[i].id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].artist}</td>
            <td>
                <button onclick="editSong(${i})">Sửa</button>
                <button onclick="deleteSong(${i})">Xóa</button>
            </td>
        </tr>
        `;
    }

    tbody.innerHTML = html;
}

function handleSubmit() {
    let title = document.getElementById("title").value.trim();
    let artist = document.getElementById("artist").value.trim();

    if (!title || !artist) {
        alert("Không được để trống");
        return;
    }

    if (editIndex === -1) {
        let newSong = {
            id: songs.length ? songs[songs.length - 1].id + 1 : 1,
            title,
            artist
        };
        songs.push(newSong);
    } else {
        songs[editIndex].title = title;
        songs[editIndex].artist = artist;
        editIndex = -1;
        document.getElementById("formTitle").innerText = "🎵 Thêm bài hát";
        document.getElementById("submitBtn").innerText = "Thêm";
    }

    localStorage.setItem("songs", JSON.stringify(songs));
    resetForm();
    render();
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
}

function editSong(index) {
    let song = songs[index];

    document.getElementById("title").value = song.title;
    document.getElementById("artist").value = song.artist;

    document.getElementById("formTitle").innerText = "✏️ Sửa bài hát";
    document.getElementById("submitBtn").innerText = "Cập nhật";

    editIndex = index;
}

function deleteSong(index) {
    if (!confirm("Bạn có chắc muốn xóa?")) return;

    songs.splice(index, 1);
    localStorage.setItem("songs", JSON.stringify(songs));
    render();
}

function searchSong() {
    let keyword = document.getElementById("search").value.toLowerCase();

    let result = songs.filter(song =>
        song.title.toLowerCase().includes(keyword)
    );

    render(result);
}

render();