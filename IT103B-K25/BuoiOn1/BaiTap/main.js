const STORAGE_KEY = "songs";

let songs = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let idCounter = songs.length ? Math.max(...songs.map(s => s.id)) + 1 : 1;
let editingId = null;

const form = document.getElementById("songForm");
const songName = document.getElementById("songName");
const singer = document.getElementById("singer");
const table = document.getElementById("songTable");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const searchInput = document.getElementById("searchInput");

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(songs));
}

function render(list = songs) {
    table.innerHTML = "";

    list.forEach(song => {
        table.innerHTML += `
            <tr>
                <td>${song.id}</td>
                <td>${song.name}</td>
                <td>${song.singer}</td>
                <td>
                    <button onclick="editSong(${song.id})">Sửa</button>
                    <button onclick="deleteSong(${song.id})">Xóa</button>
                </td>
            </tr>
        `;
    });
}

function resetForm() {
    songName.value = "";
    singer.value = "";
    editingId = null;
    formTitle.innerText = "Thêm bài hát";
    submitBtn.innerText = "Thêm";
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = songName.value.trim();
    let singerValue = singer.value.trim();

    if (!name || !singerValue) {
        alert("Không được để trống!");
        return;
    }

    if (editingId) {
        let song = songs.find(s => s.id === editingId);
        song.name = name;
        song.singer = singerValue;
    } else {
        songs.push({
            id: idCounter++,
            name: name,
            singer: singerValue
        });
    }

    saveData();
    render();
    resetForm();
});

function editSong(id) {
    let song = songs.find(s => s.id === id);

    songName.value = song.name;
    singer.value = song.singer;

    editingId = id;
    formTitle.innerText = "Sửa bài hát";
    submitBtn.innerText = "Cập nhật";
}

function deleteSong(id) {
    if (confirm("Bạn có chắc muốn xóa?")) {
        songs = songs.filter(s => s.id !== id);
        saveData();
        render();
    }
}

searchInput.addEventListener("input", function() {
    let keyword = this.value.toLowerCase();

    let filtered = songs.filter(song =>
        song.name.toLowerCase().includes(keyword)
    );

    render(filtered);
});

render();