let songs = JSON.parse(localStorage.getItem('songs')) || [];
let editId = null;

const songTable = document.getElementById('songTable');
const titleInput = document.getElementById('title');
const artistInput = document.getElementById('artist');
const submitBtn = document.getElementById('submitBtn');
const formTitle = document.getElementById('formTitle');

function renderSongs(data = songs) {
    songTable.innerHTML = '';
    data.forEach((song) => {
        const row = `
            <tr>
                <td>${song.id}</td>
                <td>${song.title}</td>
                <td>${song.artist}</td>
                <td>
                    <button onclick="editSong(${song.id})">Sửa</button>
                    <button onclick="deleteSong(${song.id})">Xóa</button>
                </td>
            </tr>
        `;
        songTable.innerHTML += row;
    });
}

function handleSubmit() {
    const title = titleInput.value.trim();
    const artist = artistInput.value.trim();

    if (!title || !artist) {
        alert("Vui lòng nhập đầy đủ tên bài hát và ca sĩ!");
        return;
    }

    if (editId === null) {
        const newId = songs.length > 0 ? Math.max(...songs.map(s => s.id)) + 1 : 1;
        const newSong = { id: newId, title, artist };
        songs.push(newSong);
    } else {
        const index = songs.findIndex(s => s.id === editId);
        songs[index].title = title;
        songs[index].artist = artist;

        editId = null;
        submitBtn.innerText = "Thêm";
        formTitle.innerText = "Thêm bài hát";
    }

    saveAndRender();
    resetForm();
}

function editSong(id) {
    const song = songs.find(s => s.id === id);
    if (song) {
        titleInput.value = song.title;
        artistInput.value = song.artist;
        editId = id;

        formTitle.innerText = "Sửa bài hát";
        submitBtn.innerText = "Cập nhật";
        titleInput.select();
    }
}

function deleteSong(id) {
    if (confirm("Bạn có chắc chắn muốn xóa bài hát này không?")) {
        songs = songs.filter(song => song.id !== id);
        saveAndRender();
    }
}

function searchSong() {
    const keyword = document.getElementById('search').value.toLowerCase();
    const filteredSongs = songs.filter(song => 
        song.title.toLowerCase().includes(keyword)
    );
    renderSongs(filteredSongs);
}

function saveAndRender() {
    localStorage.setItem('songs', JSON.stringify(songs));
    renderSongs();
}

function resetForm() {
    titleInput.value = '';
    artistInput.value = '';
}

renderSongs();